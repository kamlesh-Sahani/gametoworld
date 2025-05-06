"use client";
import { useEffect, useState, useCallback } from "react";
import JoinDetail from "@/components/the-08-paradox/JoinDetail";
import { useSearchParams } from "next/navigation";
import { useSocket } from "@/context/Socket.context";
import toast from "react-hot-toast";
import Confetti from "react-confetti";
import confetti from "canvas-confetti";
import { useWindowSize } from "@/hooks/useWindowSize";

interface PlayerType {
  playerId: string;
  playerName: string;
  number: number | null;
  score: number;
  isEliminated: boolean;
  isHost?: boolean;
  owner?:boolean;

}

export default function The08Paradox() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [playerData, setPlayerData] = useState<PlayerType[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<PlayerType | null>(null);
  const [gameStatus, setGameStatus] = useState<
    "waiting" | "playing" | "finished"
  >("waiting");
  const [countdown, setCountdown] = useState(0);
  const [round, setRound] = useState(0);
  const [maxRounds, setMaxRounds] = useState(5);
  const [gameResult, setGameResult] = useState<any>(null);
  const [playerName, setPlayerName] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  
  const { width, height } = useWindowSize();

  const searchParams = useSearchParams();
  const { socket } = useSocket();
  const gameId = searchParams.get("id");
  const isHost = currentPlayer?.isHost;

  const fireConfetti = useCallback(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"],
    });
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  }, []);

  const handleProfileResponse = (response: any) => {
    if (response.error) {
      if (!response.success && socket) {
        const name = "UNKNOWN";
        setPlayerName(name);
        socket.emit(
          "joinGame",
          {
            gameId,
            playerName: name,
          },
          (joinResponse: any) => {
            if (joinResponse.error) {
              toast.error(joinResponse.error);
              setGameStarted(false);
            } else {
              setGameStarted(true);
            }
          }
        );
      } else {
        toast.error(response.error);
        setGameStarted(false);
      }
    } else {
      setGameStarted(true);
      setPlayerName(response.player?.playerName || "");
    }
  };

  const startGame = () => {
    if (socket && gameId) {
      socket.emit(
        "startGame",
        { gameId, playerId: socket.id },
        (response: any) => {
          if (response.error) {
            toast.error(response.error);
          }
        }
      );
    }
  };

  const submitNumber = () => {
    if (selectedNumber && socket && gameId) {
      socket.emit("submitNumber", {
        gameId,
        number: selectedNumber,
      });
    }
  };

  useEffect(() => {
    if (!socket) {
      setGameStarted(false);
      return;
    }

    if (gameId) {
      socket.emit(
        "profile",
        {
          gameId,
          playerId: socket.id,
        },
        handleProfileResponse
      );
    }
    socket.on("updatePlayers", (players: PlayerType[]) => {
      console.log(players,"playeers")
      setPlayerData(players);
      const current = players.find((p) => p.playerId === socket.id);
      if (current) setCurrentPlayer(current);
    });

    socket.on("gameStarted", () => {
      setGameStatus("playing");
      toast.success("Game started!");
    });

    socket.on("countdownUpdate", (time: number) => {
      setCountdown(time);
    });

    socket.on("roundResult", (result: any) => {
      setGameResult(result);
      setGameStatus("finished");
      fireConfetti();
    });

    socket.on("newRound", ({ round: newRound, players: updatedPlayers }) => {
      setRound(newRound);
      setPlayerData(updatedPlayers);
      setGameStatus("playing");
      setSelectedNumber(null);
      toast(`Round ${newRound} started!`, { icon: "🎮" });
    });

    socket.on("gameOver", (result: any) => {
      setGameResult(result);
      setGameStatus("finished");
      toast.success(
        result.winners ? `${result.winners.playerName} wins!` : "Game over!"
      );
      fireConfetti();
    });

    socket.on("playerSubmitted", ({ playerId }: { playerId: string }) => {
      setPlayerData((prev) =>
        prev.map((p) =>
          p.playerId === playerId ? { ...p, hasSubmitted: true } : p
        )
      );
    });
    return () => {
      socket.off("updatePlayers");
      socket.off("gameStarted");
      socket.off("countdownUpdate");
      socket.off("roundResult");
      socket.off("newRound");
      socket.off("gameOver");
      socket.off("playerSubmitted");
    };
  }, [socket, gameId, fireConfetti]);

  console.log(currentPlayer,isHost,gameStatus,"test")
  if (!gameId || !gameStarted) {
    return (
      <JoinDetail
        setGameStarted={setGameStarted}
        setMaxRounds={setMaxRounds}
        maxRounds={maxRounds}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 relative">
      {/* Confetti Celebration */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.2}
        />
      )}

      <div className="max-w-6xl mx-auto">
        {/* Game Header */}
        <div className="text-center mb-8 relative">
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-red-600 rotate-45 opacity-20"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-red-600 rotate-45 opacity-20"></div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-2 tracking-wider">
            0.8 PARADOX
          </h1>
          <div className="flex justify-center items-center gap-4">
            <p className="text-gray-400 text-sm font-mono">
              ROUND {round} OF {maxRounds}
            </p>
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                gameStatus === "waiting"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : gameStatus === "playing"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-purple-500/20 text-purple-400"
              }`}
            >
              {gameStatus.toUpperCase()}
            </span>
          </div>
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mt-4 opacity-50"></div>
        </div>

        {/* Game Status Bar */}
        <div className="mb-6 p-3 bg-gray-800 rounded-lg flex justify-between items-center">
          <div>
            <span className="text-xs text-gray-400">Game ID: </span>
            <span className="font-mono">{gameId}</span>
          </div>
          <div>
            <span className="text-xs text-gray-400">Players: </span>
            <span>{playerData.length}</span>
          </div>
          <div>
            <span className="text-xs text-gray-400">Your Name: </span>
            <span>{playerName}</span>
          </div>
          {currentPlayer?.isHost && gameStatus === "waiting" && (
            <button
              onClick={startGame}
              disabled={playerData.length < 2}
              className={`px-4 py-2 rounded-lg font-bold ${
                playerData.length < 2
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {playerData.length < 2 ? "Need more players" : "Start Game"}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Game Board */}
          <div className="lg:col-span-2 bg-gray-800/90 border border-red-600/30 rounded-xl p-6 shadow-lg shadow-red-900/10">
            <h2 className="text-xl font-bold mb-4 text-red-400 font-mono tracking-wider border-b border-gray-700 pb-2">
              {gameStatus === "finished"
                ? "ROUND RESULTS"
                : "SELECT YOUR NUMBER"}
            </h2>

            {/* Countdown Timer */}
            <div className="mb-6 p-3 bg-gray-900 rounded-lg text-center">
              <p className="text-xs text-gray-400 font-mono mb-1">
                {gameStatus === "waiting"
                  ? "WAITING TO START"
                  : gameStatus === "finished"
                  ? "ROUND COMPLETE"
                  : "TIME REMAINING"}
              </p>
              <div className="text-3xl font-bold text-red-500">
                {gameStatus === "finished" ? "✓" : countdown}
              </div>
            </div>

            {gameStatus === "waiting" ? (
              currentPlayer && !currentPlayer.isHost ? (
                <div className="mt-8 text-center">
                  <button
                    onClick={startGame}
                    disabled={playerData.length < 2}
                    className={`relative overflow-hidden px-8 py-3 rounded-lg font-bold text-white transition-all duration-300 shadow-lg cursor-pointer ${
                      playerData.length < 2
                        ? "bg-gray-700 cursor-not-allowed"
                        : "bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 transform hover:scale-105"
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Wait to start
                      </>
                    </span>
                    {/* Animated background elements */}
                    <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
                    <span className="absolute -top-1 -left-1 w-3 h-3 bg-red-400 rounded-full animate-ping"></span>
                    <span
                      className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-ping"
                      style={{ animationDelay: "0.3s" }}
                    ></span>
                  </button>
                </div>
              ) : (
                <div className="mt-8 text-center">
                  <button
                    onClick={startGame}
                    disabled={playerData.length < 2}
                    className={`relative overflow-hidden px-8 py-3 rounded-lg font-bold text-white transition-all duration-300 shadow-lg cursor-pointer ${
                      playerData.length < 2
                        ? "bg-gray-700 cursor-not-allowed"
                        : "bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 transform hover:scale-105"
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {playerData.length < 2 ? (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Need {2 - playerData.length} more players
                        </>
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          START GAME
                        </>
                      )}
                    </span>
                    {/* Animated background elements */}
                    <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
                    <span className="absolute -top-1 -left-1 w-3 h-3 bg-red-400 rounded-full animate-ping"></span>
                    <span
                      className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-ping"
                      style={{ animationDelay: "0.3s" }}
                    ></span>
                  </button>
                  {playerData.length < 2 && (
                    <p className="text-xs text-gray-400 mt-2">
                      Waiting for {2 - playerData.length} more player
                      {playerData.length === 0 ? "s" : ""} to join...
                    </p>
                  )}
                </div>
              )
            ) : (
              <>
                {/* Number Grid */}
                <div className="grid grid-cols-10 gap-2">
                  {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
                    <button
                      key={num}
                      onClick={() => setSelectedNumber(num)}
                      disabled={gameStatus !== "playing"}
                      className={`py-1 px-0 rounded text-xs font-mono transition-all ${
                        selectedNumber === num
                          ? "bg-red-600 text-white scale-105 shadow-md shadow-red-900/50"
                          : gameStatus === "playing"
                          ? "bg-gray-700 hover:bg-red-900/50"
                          : "bg-gray-800 cursor-not-allowed"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>

                <button
                  onClick={submitNumber}
                  disabled={!selectedNumber || gameStatus !== "playing"}
                  className={`w-full mt-6 py-3 rounded-lg font-bold text-white transition-all ${
                    !selectedNumber || gameStatus !== "playing"
                      ? "bg-gray-700 cursor-not-allowed"
                      : "bg-red-600 hover:bg-red-700 shadow-lg shadow-red-900/30"
                  }`}
                >
                  {gameStatus === "playing"
                    ? "SUBMIT SELECTION"
                    : "WAITING FOR NEXT ROUND"}
                </button>
              </>
            )}
          </div>

          {/* Right Column - Player Details */}
          <div className="lg:col-span-1 space-y-6">
            {/* Player Status */}
            <div className="bg-gray-800/90 border border-red-600/30 rounded-xl p-6 shadow-lg shadow-red-900/10">
              <h2 className="text-xl font-bold mb-4 text-red-400 font-mono tracking-wider border-b border-gray-700 pb-2">
                PLAYER STATUS
              </h2>

              <div className="space-y-3">
                {playerData &&
                  playerData?.map((player) => (
                    <div
                      key={player.playerId}
                      className={`p-3 rounded-lg flex justify-between items-center border ${
                        player.isEliminated
                          ? "border-gray-700 bg-gray-900/50 text-gray-500"
                          : player?.playerId === currentPlayer?.playerId
                          ? "border-red-500/50 bg-red-900/20"
                          : "border-gray-700 bg-gray-700/30"
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="font-medium">{player.playerName}</span>
                        {player.playerId === currentPlayer?.playerId && (
                          <span className="text-xs text-red-400 ml-2">
                            (YOU)
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <div
                          className={`font-bold ${
                            player.isEliminated ? "text-gray-500" : "text-white"
                          }`}
                        >
                          {player.score} pts
                        </div>
                        {player.number !== null && (
                          <div className="text-xs text-gray-400">
                            Chose: {player.number}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Last Round Results */}
            <div className="bg-gray-800/90 border border-red-600/30 rounded-xl p-6 shadow-lg shadow-red-900/10">
              <h2 className="text-xl font-bold mb-4 text-red-400 font-mono tracking-wider border-b border-gray-700 pb-2">
                LAST ROUND
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Average:</span>
                  <span className="font-bold">
                    {gameResult?.average?.toFixed(1)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Target (×0.8):</span>
                  <span className="font-bold text-red-400">
                    {gameResult?.target?.toFixed(1)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Winner:</span>
                  <span className="font-bold text-green-400">
                    {gameResult?.winner?.playerName}
                  </span>
                </div>

                <div className="mt-4 p-3 bg-gray-900/50 rounded-lg">
                  <h3 className="text-sm font-bold text-red-400 mb-2">
                    POINT CHANGES
                  </h3>
                  {gameResult &&
                    gameResult?.players.map((player: PlayerType) => (
                      <div
                        key={player?.playerId}
                        className="flex justify-between text-sm py-1 border-b border-gray-800 last:border-0"
                      >
                        <span
                          className={player.isEliminated ? "text-gray-500" : ""}
                        >
                          {player?.playerName}
                        </span>
                        <span
                          className={
                            player?.playerId === gameResult?.winner?.playerId
                              ? "text-green-400"
                              : player.isEliminated
                              ? "text-gray-500"
                              : "text-red-400"
                          }
                        >
                          {player?.playerId === gameResult?.winner?.playerId
                            ? "+3"
                            : "-3"}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Game Rules Footer */}
        <div className="mt-8 p-4 bg-gray-900/50 rounded-lg border border-gray-700 text-xs text-gray-300 font-mono">
          <h3 className="font-bold text-red-400 mb-2">GAME RULES REMINDER</h3>
          <ul className="space-y-1">
            <li>• SELECT A NUMBER BETWEEN 1-100</li>
            <li>• SYSTEM CALCULATES AVERAGE × 0.8</li>
            <li>• CLOSEST NUMBER BELOW TARGET WINS (+3 POINTS)</li>
            <li>• OTHERS LOSE (-3 POINTS) AND ARE ELIMINATED</li>
            <li>
              • LAST PLAYER STANDING OR HIGHEST SCORE AFTER {maxRounds} ROUNDS
              WINS
            </li>
          </ul>
        </div>
      </div>

      {/* Winner Celebration Modal */}
      {gameStatus === "finished" && gameResult?.winner && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-6 rounded-xl shadow-2xl transform animate-bounce text-center max-w-md mx-4">
            <h2 className="text-3xl font-bold mb-2">🎉 WINNER 🎉</h2>
            <p className="text-2xl">{gameResult.winner.playerName}</p>
            <p className="text-lg mt-2">Score: {gameResult.winner.score}</p>
            <p className="text-sm mt-1">
              Round {round} of {maxRounds}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
