"use client";
import { useState } from "react";
import JoinDetail from "@/components/the-08-paradox/JoinDetail";
export default function The08Paradox() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  const [activeTab, setActiveTab] = useState("join"); // 'join' or 'create'

  const handleJoinRoom = () => {
    // Join room logic
    setGameStarted(true);
  };

  const handleCreateRoom = () => {
    // Create room logic
    setGameStarted(true);
  };

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

  if (!gameStarted) {
    return (
      <JoinDetail
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleJoinRoom={handleJoinRoom}
        handleCreateRoom={handleCreateRoom}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8 max-sm:px-1">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-400 flex items-center">
            <span className="text-red-500 mr-2">♦️</span>
            The 0.8 Paradox
            <span className="text-red-500 ml-2">♦️</span>
          </h1>
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
          
          </div>

          {/* Right Panel - Player Status */}
          <div className="lg:col-span-1 bg-gray-800/80 border border-blue-500/30 rounded-lg p-6">
          <h1 className="font-bold  text-2xl">Time left : <span className="text-red-500">59</span> seconds</h1>
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
