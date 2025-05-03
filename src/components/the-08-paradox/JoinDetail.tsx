"use client";
import React,{useState} from 'react'
const JoinDetail = ({setActiveTab,activeTab,handleJoinRoom,handleCreateRoom}:any) => {
    const [playerName, setPlayerName] = useState('');
    const [roomCode, setRoomCode] = useState('');
    const [maxPlayers, setMaxPlayers] = useState(4);
    const [rounds, setRounds] = useState(5);
    
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 max-w-2xl w-full mx-4 border border-gray-700 shadow-lg">
      {/* Game Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
          The 0.8 Paradox
        </h1>
        <p className="text-gray-400">King of Diamonds Challenge</p>
      </div>
  
      {/* Join/Create Room Tabs */}
      <div className="flex border-b border-gray-700 mb-6">
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'join' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
          onClick={() => setActiveTab('join')}
        >
          Join Room
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'create' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400'}`}
          onClick={() => setActiveTab('create')}
        >
          Create Room
        </button>
      </div>
  
      {/* Player Name Input */}
      <div className="mb-6">
        <label htmlFor="playerName" className="block text-sm font-medium text-gray-300 mb-2">
          Your Player Name
        </label>
        <input
          type="text"
          id="playerName"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Enter your name"
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
        />
      </div>
  
      {activeTab === 'join' ? (
        /* Join Room Section */
        <div className="space-y-4">
          <div>
            <label htmlFor="roomCode" className="block text-sm font-medium text-gray-300 mb-2">
              Room Code
            </label>
            <input
              type="text"
              id="roomCode"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              placeholder="Enter room code"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
            />
          </div>
          <button
            onClick={handleJoinRoom}
            disabled={!playerName || !roomCode}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-6 py-3 rounded-lg font-bold text-white transition-all flex items-center justify-center disabled:opacity-50"
          >
            Join Room
          </button>
        </div>
      ) : (
        /* Create Room Section */
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Game Settings
            </label>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="maxPlayers" className="block text-xs text-gray-400 mb-1">
                  Max Players
                </label>
                <select
                  id="maxPlayers"
                  value={maxPlayers}
                  onChange={(e) => setMaxPlayers(parseInt(e.target.value))}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                >
                  {[4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="rounds" className="block text-xs text-gray-400 mb-1">
                  Rounds
                </label>
                <select
                  id="rounds"
                  value={rounds}
                  onChange={(e) => setRounds(parseInt(e.target.value))}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                >
                  {[3, 5, 7, 10].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <button
            onClick={handleCreateRoom}
            disabled={!playerName}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 px-6 py-3 rounded-lg font-bold text-white transition-all flex items-center justify-center disabled:opacity-50"
          >
            Create Room
          </button>
        </div>
      )}
  
      {/* Quick Rules */}
      <div className="mt-8 p-4 bg-gray-700/30 rounded-lg border-l-4 border-blue-500">
        <h3 className="font-bold text-blue-400 mb-2">Quick Rules</h3>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>• Guess a number between 0-100</li>
          <li>• Closest to (average × 0.8) wins</li>
          <li>• 5 rounds or last player standing</li>
        </ul>
      </div>
  
      {/* Footer Note */}
      <div className="text-center text-xs text-gray-500 mt-8">
        Based on Alice in Borderland's King of Diamonds game
      </div>
    </div>
  </div>
  )
}

export default JoinDetail