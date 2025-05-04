"use client";
import React, { useState } from "react";
import { useSocket } from "@/context/Socket.context";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface JoinDetailProps {
  setActiveTab: (tab: "join" | "create") => void;
  activeTab: "join" | "create";
}

const JoinDetail: React.FC<JoinDetailProps> = ({ setActiveTab, activeTab }) => {
  const [playerName, setPlayerName] = useState("");
  const [roomCode, setRoomCode] = useState<string>("");
  const [rounds, setRounds] = useState<number>(5);
  const [loading, setLoading] = useState<boolean>(false);
  const { socket } = useSocket();
  const router = useRouter();
  const handleJoinRoom = async () => {
    if (!playerName || !roomCode) return;
    if (!socket) {
      toast.error("Connection error. Please refresh the page.");
      return;
    }
    setLoading(true);
    try {
      socket.auth = { playerName };
      socket.connect();
      socket.emit(
        "joinGame",
        {
          gameId: roomCode,
          playerName,
        },
        (response: { error?: string; gameId?: string }) => {
          if (response.error) {
            toast.error(response.error || "something went wrong");
            setLoading(false);
            socket.disconnect();
          } else {
            router.push(`/game/${response.gameId}`);
          }
        }
      );

      socket.on("gameError", (error: string) => {
        toast.error(error || "something went wrong");
        setLoading(false);
      });
    } catch (err: any) {
      toast.error(err.message || "faild to join");
      setLoading(false);
    }
  };
  const handleCreateRoom = async () => {
    if (!playerName) return;
    if (!socket) {
      toast.error("Connection error. Please refresh the page.");
      return;
    }
    setLoading(true);
    try {
      socket.auth = { playerName };
      socket.connect();

      socket.emit(
        "createGame",~
        {
          rounds,
          playerName,
        },
        (response: { error?: string; gameId?: string }) => {
          if (response.error) {
            console.log(response);
            setLoading(false);
            socket.disconnect();
          } else {
            router.push(`/game/${response.gameId}`);
          }
        }
      );
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-gray-800/90 backdrop-blur-md rounded-xl p-8 w-full max-w-md border border-red-600/50 shadow-lg shadow-red-900/20">
        {/* Game Title with Diamond Theme */}
        <div className="text-center mb-8 relative">
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-red-600 rotate-45 opacity-20"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-red-600 rotate-45 opacity-20"></div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-2 tracking-wider">
            0.8 PARADOX
          </h1>
          <p className="text-gray-400 text-sm font-mono">KING OF DIAMONDS</p>
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mt-4 opacity-50"></div>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-gray-700 rounded-lg p-1">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                activeTab === "join"
                  ? "bg-red-600 text-white shadow-md shadow-red-900/50"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveTab("join")}
            >
              JOIN GAME
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "create"
                  ? "bg-red-600 text-white shadow-md shadow-red-900/50"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveTab("create")}
            >
              CREATE GAME
            </button>
          </div>
        </div>

        {/* Player Name Input */}
        <div className="mb-6">
          <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">
            PLAYER IDENTIFICATION
          </label>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="ENTER YOUR NAME"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500 font-mono text-sm tracking-wide"
          />
        </div>

        {activeTab === "join" ? (
          /* Join Game Section */
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">
                GAME CODE
              </label>
              <input
                type="text"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                placeholder="ENTER GAME CODE"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500 font-mono text-sm tracking-wide"
              />
            </div>
            <button
              onClick={handleJoinRoom}
              disabled={!playerName || !roomCode}
              className={`w-full py-3 rounded-lg font-bold text-white transition-all flex items-center justify-center ${
                !playerName || !roomCode
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700 shadow-lg shadow-red-900/30"
              }`}
            >
              ENTER GAME ARENA
            </button>
          </div>
        ) : (
          /* Create Game Section */
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">
                GAME PARAMETERS
              </label>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1 font-mono">
                    ROUNDS
                  </label>
                  <select
                    value={rounds}
                    onChange={(e) => setRounds(Number(e.target.value))}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm font-mono"
                  >
                    {[3, 5, 7].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <button
              onClick={handleCreateRoom}
              disabled={!playerName}
              className={`w-full py-3 rounded-lg font-bold text-white transition-all flex items-center justify-center ${
                !playerName
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700 shadow-lg shadow-red-900/30"
              }`}
            >
              INITIATE GAME
            </button>
          </div>
        )}

        {/* Game Rules - Alice in Borderland Style */}
        <div className="mt-8 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
          <h3 className="font-bold text-red-400 mb-3 text-sm font-mono tracking-wider border-b border-gray-700 pb-2">
            GAME RULES
          </h3>
          <ul className="text-xs text-gray-300 space-y-2 font-mono">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">◉</span>
              EACH PLAYER SELECTS A NUMBER BETWEEN 0-100
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">◉</span>
              SYSTEM CALCULATES THE AVERAGE × 0.8
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">◉</span>
              CLOSEST NUMBER BELOW THE TARGET WINS
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">◉</span>
              LOSERS ARE ELIMINATED (-3 POINTS)
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">◉</span>
              WINNER GAINS +3 POINTS PER ROUND
            </li>
          </ul>
        </div>

        {/* Footer with Warning */}
        <div className="text-center text-xs text-gray-600 mt-6 font-mono animate-pulse">
          WARNING: FAILURE TO COMPLY RESULTS IN ELIMINATION
        </div>
      </div>
    </div>
  );
};

export default JoinDetail;
