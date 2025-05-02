"use client";
import { useState } from "react";
import Head from "next/head";
export default function The08Paradox() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  const mockPlayers = [
    { id: 1, name: "You", points: 1000, isPlayer: true },
    { id: 2, name: "Chishiya", points: 950, strategy: "Nash" },
    { id: 3, name: "Kuzuryū", points: 900, strategy: "Dealer" },
    { id: 4, name: "Player 4", points: 850, strategy: "Random" },
  ];

  const mockResults = [
    {
      round: 1,
      target: 42.5,
      yourNumber: 35,
      outcome: "lost",
      pointsChange: -100,
    },
    {
      round: 2,
      target: 28.8,
      yourNumber: 25,
      outcome: "won",
      pointsChange: +150,
    },
  ];

  if(!gameStarted){
    return  <div className="flex items-center justify-center">
    <div className=" rounded-xl p-8 max-w-2xl w-full mx-4">


      <div className="flex justify-center mb-1">
        <div className="text-5xl">♦️</div>
      </div>

      <h2 className="text-3xl font-bold mb-1 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        The 0.8 Paradox
      </h2>
      <p className="text-center text-gray-300 mb-1">
        King of Diamonds Game
      </p>
      <div className="mb-6">
        <label
          htmlFor="playerName"
          className="block text-sm font-medium mb-2"
        >
          Enter Your Name
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            id="playerName"
            placeholder="e.g. Arisu"
            className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={() => setGameStarted(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all flex items-center"
          >
            <span>Join Game</span>
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>

      <div className="bg-gray-700/50 rounded-lg p-4 mb-6 border-l-4 border-blue-500 overflow-y-auto">
        <h3 className="font-bold text-lg mb-3 text-blue-400">
          Rules of the Game:
        </h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <span className="font-medium">Player Count:</span> 4-10
            players
          </li>
          <li>
            <span className="font-medium">Number Selection:</span> Each
            player secretly chooses a number between 0 and 100 (decimals
            allowed)
          </li>
          <li>
            <span className="font-medium">Target Calculation:</span>{" "}
            System calculates the average of all numbers × 0.8
          </li>
          <li>
            <span className="font-medium">Winning Condition:</span>{" "}
            Player(s) closest to the target number win
          </li>
          <li>
            <span className="font-medium">Points System:</span>
            <ul className="list-disc pl-5 mt-1">
              <li>Winners gain points from losers</li>
              <li>Lose 100 points for incorrect guesses</li>
              <li>Eliminated at 0 points</li>
            </ul>
          </li>
          <li>
            <span className="font-medium">Game Duration:</span> 5 rounds
            or until only one player remains
          </li>
          <li>
            <span className="font-medium">Special Rule:</span> If
            multiple players choose the same winning number, points are
            split
          </li>
        </ol>
      </div>

   

      <div className="text-center text-sm text-gray-400">
        <p>
          Based on the King of Diamonds game from Alice in Borderland
        </p>
        <p className="mt-1">Survive all rounds to win the game</p>
      </div>
    </div>
  </div>
  }

  return (
    <div className="min-h-screen">
      <Head>
        <title>The 0.8 Paradox | Alice in Borderland</title>
      </Head>

      <main className="container mx-auto px-4 py-8 max-sm:px-1">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-400 flex items-center">
            <span className="text-red-500 mr-2">♦️</span>
            The 0.8 Paradox
            <span className="text-red-500 ml-2">♦️</span>
          </h1>
        </div>

        <div className="flex flex-wrap gap-4 mb-8 justify-center items-center">
          <div className="bg-gray-800/80 border border-blue-500/30 rounded-lg p-4 text-center min-w-[300px]">
            <h3 className="text-lg font-semibold mb-2">Time Remaining</h3>
            <div className="text-4xl font-bold text-yellow-400">00:30</div>
          </div>
          <div className="bg-gray-800/80 border border-blue-500/30 rounded-lg p-4 text-center min-w-[300px]">
            <h3 className="text-lg font-semibold mb-2">Current Target</h3>
            <div className="text-4xl font-bold text-green-400">42.5</div>
          </div>
          <div className="bg-gray-800/80 border border-blue-500/30 rounded-lg p-4 text-center min-w-[300px]">
            <h3 className="text-lg font-semibold mb-2">Your Points</h3>
            <div className="text-4xl font-bold text-purple-400">1,000</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Number Grid */}
          <div className="lg:col-span-2 bg-gray-800/80 border border-blue-500/30 rounded-lg p-6 max-sm:p-1">
            <h2 className="text-xl font-bold mb-4 text-blue-400">
              Select Your Number (0-100)
            </h2>
            <div className="grid grid-cols-10 gap-2">
              {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => setSelectedNumber(num)}
                  className={`py-2 px-1 rounded text-sm font-medium transition-all cursor-pointer ${
                    selectedNumber === num
                      ? "bg-blue-600 text-white scale-105"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
            <div className="mt-4 flex justify-between">
              <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 w-full cursor-pointer">
                Submit
              </button>
            </div>
          </div>

          {/* Right Panel - Player Status */}
          <div className="lg:col-span-1 bg-gray-800/80 border border-blue-500/30 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-blue-400">Players</h2>
            <div className="space-y-3">
              {mockPlayers.map((player) => (
                <div
                  key={player.id}
                  className={`p-3 rounded-lg flex justify-between items-center ${
                    player.isPlayer ? "bg-blue-900/30" : "bg-gray-700/50"
                  }`}
                >
                  <div>
                    <span className="font-medium">{player.name}</span>
                    {player.strategy && (
                      <span className="text-xs text-gray-400 ml-2">
                        ({player.strategy})
                      </span>
                    )}
                  </div>
                  <span className="font-bold">{player.points}</span>
                </div>
              ))}
            </div>

            {/* Previous Rounds */}
            <h3 className="text-lg font-bold mt-6 mb-3 text-blue-400">
              Previous Rounds
            </h3>
            <div className="space-y-2">
              {mockResults.map((result, idx) => (
                <div key={idx} className="bg-gray-700/30 p-2 rounded text-sm">
                  <div className="flex justify-between">
                    <span>Round {result.round}</span>
                    <span
                      className={`font-bold ${
                        result.outcome === "won"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {result.outcome === "won" ? "+" : "-"}
                      {Math.abs(result.pointsChange)}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Target: {result.target}, Yours: {result.yourNumber}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
 
      </main>
    </div>
  );
}
