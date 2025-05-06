"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { io } from 'socket.io-client';
import { useSocket } from '@/context/Socket.context';

const COLORS = ['red', 'blue', 'green', 'yellow'];
const WILDS = ['wild', 'wild_draw4'];

export default function UnoGame() {
  const [gameId, setGameId] = useState('');
  const [playerId, setPlayerId] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [gameState, setGameState] = useState(null);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [winner, setWinner] = useState(null);
  const [gameRound, setGameRound] = useState(1);
  
  const cardRefs = useRef([]);
  const { socket } = useSocket();

  // Initialize socket connection
  useEffect(() => {
    const newSocket =socket;
    // Set up event listeners
    if(!newSocket){
      return;
    }
    newSocket.on('gameStateUpdate', (state) => {
      setGameState(state);
    });

    newSocket.on('playerJoined', (player) => {
      console.log(`${player.name} joined the game`);
    });

    newSocket.on('playerLeft', (player) => {
      console.log(`${player.name} left the game`);
    });

    newSocket.on('cardPlayed', ({ playerId, card }) => {
      console.log(`Player ${playerId} played ${card.value}`);
    });

    newSocket.on('cardDrawn', ({ playerId }) => {
      console.log(`Player ${playerId} drew a card`);
    });

    newSocket.on('colorChanged', ({ color }) => {
      console.log(`Color changed to ${color}`);
    });

    newSocket.on('playerWon', ({ playerId, playerName, score }) => {
      console.log(`${playerName} won with ${score} points!`);
      setWinner({ playerId, playerName, score });
    });

    newSocket.on('error', (error) => {
      console.error('Socket error:', error);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const joinGame = () => {
    if (!socket || !playerName || !gameId) return;
    
    socket.emit('joinGame', { gameId, playerName }, (response) => {
      console.log(response,"socket respomse")
      if (response.success) {
        setPlayerId(socket.id);
        setGameState(response.gameState);
      } else {
        console.error(response.error);
      }
    });
  };

  const startGame = () => {
    if (!socket || !gameId) return;
    
    socket.emit('startGame', { gameId }, (response) => {
      if (!response.success) {
        console.error(response.error);
      }
    });
  };

  const playCard = (cardIndex) => {
    if (!socket || !gameId || !gameState) return;
    socket.emit('playCard', { gameId, cardIndex }, (response) => {
      if (response.success && response.requiresColorChoice) {
        setShowColorPicker(true);
      } else if (!response.success) {
        console.error(response.error);
      }
    });
  };

  const drawCard = () => {
    if (!socket || !gameId) return;
    
    socket.emit('drawCard', { gameId }, (response) => {
      if (!response.success) {
        console.error(response.error);
      }
    });
  };

  const selectColor = (color) => {
    if (!socket || !gameId) return;
    
    socket.emit('setColor', { gameId, color }, (response) => {
      if (response.success) {
        setShowColorPicker(false);
        setSelectedColor(color);
      } else {
        console.error(response.error);
      }
    });
  };

  const startNewRound = () => {
    setGameRound(gameRound + 1);
    setWinner(null);
    // The server will handle the actual game reset
  };

  const leaveGame = () => {
    if (!socket || !gameId) return;
    
    socket.emit('leaveGame', { gameId });
    setGameState(null);
    setGameId('');
    setPlayerName('');
  };

  const getCardStyle = (card) => {
    if (!card) return '';
    
    let bgColor;
    switch (card.color) {
      case 'red': bgColor = 'bg-red-500'; break;
      case 'blue': bgColor = 'bg-blue-500'; break;
      case 'green': bgColor = 'bg-green-500'; break;
      case 'yellow': bgColor = 'bg-yellow-400'; break;
      case 'black': bgColor = 'bg-gray-900'; break;
      default: bgColor = 'bg-white';
    }
    
    return `w-20 h-28 md:w-24 md:h-36 rounded-lg shadow-lg flex flex-col justify-between items-center p-2 ${bgColor} ${
      card.color === 'black' ? 'text-white' : 'text-black'
    } cursor-pointer transition-transform hover:scale-105 relative overflow-hidden`;
  };

  const getCardSymbol = (value) => {
    switch (value) {
      case 'skip': return '⊘';
      case 'reverse': return '⇄';
      case 'draw2': return '+2';
      case 'wild': return 'W';
      case 'wild_draw4': return '+4';
      default: return value;
    }
  };

  const getCurrentPlayer = () => {
    if (!gameState || !playerId) return null;
    return gameState.players.find(p => p.id === playerId);
  };

  const isMyTurn = () => {
    if (!gameState || !playerId) return false;
    return gameState.currentPlayer === gameState.players.findIndex(p => p.id === playerId);
  };

  return (
    <div className="min-h-screen bg-[#0D1423] text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
          Premium UNO Game
        </h1>
        
        {!gameState ? (
          <div className="max-w-md mx-auto bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-2xl">
            <h2 className="text-2xl font-semibold mb-6 text-center">Game Setup</h2>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Your Name</label>
              <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white"
                placeholder="Enter your name"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Game ID</label>
              <input
                type="text"
                value={gameId}
                onChange={(e) => setGameId(e.target.value)}
                className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white"
                placeholder="Enter game ID"
              />
            </div>
            
            <button
              onClick={joinGame}
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-full text-xl transition-all transform hover:scale-105"
            >
              Join Game
            </button>
          </div>
        ) : (
          <>
            {/* Game Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="bg-gray-800 bg-opacity-50 px-4 py-2 rounded-lg">
                <span className="text-yellow-400 font-bold">Game ID:</span> {gameId}
              </div>
              <div className="bg-gray-800 bg-opacity-50 px-4 py-2 rounded-lg">
                <span className="text-yellow-400 font-bold">Round:</span> {gameRound}
              </div>
              <button
                onClick={leaveGame}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
              >
                Leave Game
              </button>
            </div>
            
            {/* Winner Banner */}
            <AnimatePresence>
              {winner && (
                <motion.div 
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  className="text-center mb-6 bg-gradient-to-r from-yellow-600 to-red-600 p-4 rounded-xl shadow-lg"
                >
                  <h2 className="text-3xl font-bold">
                    {winner.playerName} wins this round! 🎉
                  </h2>
                  <p className="text-xl mt-2">Score: +{winner.score} points</p>
                  {gameState?.status === 'finished' && (
                    <button
                      onClick={startNewRound}
                      className="mt-4 bg-white text-gray-900 font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      Next Round
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Game Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Discard Pile */}
              <div className="lg:col-span-1">
                <div className="bg-gray-800 bg-opacity-50 p-4 rounded-xl h-full">
                  <h2 className="text-xl font-semibold mb-4 flex items-center justify-between">
                    <span>Discard Pile</span>
                    <span className="text-sm font-normal bg-gray-700 px-2 py-1 rounded">
                      {gameState?.discardPile?.length || 0} cards
                    </span>
                  </h2>
                  
                  <AnimatePresence mode="wait">
                    {gameState?.discardPile?.length > 0 && (
                      <motion.div
                        key={gameState.discardPile.length}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="flex justify-center"
                      >
                        <div className={getCardStyle(gameState.lastPlayedCard)}>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-3xl md:text-4xl font-bold">
                              {getCardSymbol(gameState.lastPlayedCard?.value)}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="mt-4 bg-gray-700 bg-opacity-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Current Color:</span>
                      <div className={`w-6 h-6 rounded-full ${
                        gameState?.currentColor === 'red' ? 'bg-red-500' :
                        gameState?.currentColor === 'blue' ? 'bg-blue-500' :
                        gameState?.currentColor === 'green' ? 'bg-green-500' :
                        gameState?.currentColor === 'yellow' ? 'bg-yellow-400' : 'bg-gray-500'
                      }`}></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Direction:</span>
                      <span className="text-xl">{gameState?.direction > 0 ? '⤻ Clockwise' : '⤺ Counter'}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Middle Column - Deck and Game Info */}
              <div className="lg:col-span-1">
                <div className="bg-gray-800 bg-opacity-50 p-4 rounded-xl h-full flex flex-col">
                  <h2 className="text-xl font-semibold mb-4">Deck</h2>
                  
                  <div className="flex-1 flex flex-col items-center justify-center">
                    {gameState?.status === 'playing' && isMyTurn() ? (
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-24 h-36 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 shadow-lg flex items-center justify-center cursor-pointer relative overflow-hidden"
                        onClick={drawCard}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">UNO</span>
                        </div>
                        <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                          {gameState?.deckCount || 0}
                        </div>
                      </motion.div>
                    ) : (
                      <div className="w-24 h-36 rounded-lg bg-gray-900 shadow-lg flex items-center justify-center">
                        <span className="text-gray-500 text-2xl font-bold">UNO</span>
                      </div>
                    )}
                    
                    <p className="mt-4 text-center">
                      {gameState?.status === 'playing' && isMyTurn() 
                        ? "Click to draw a card" 
                        : "Waiting for your turn"}
                    </p>
                  </div>
                  
                  {/* Scores */}
                  <div className="mt-6">
                    <h3 className="font-semibold mb-2 flex items-center justify-between">
                      <span>Scores</span>
                      <span className="text-sm font-normal">Round {gameRound}</span>
                    </h3>
                    <div className="space-y-2">
                      {gameState?.players?.map((player, index) => (
                        <div key={player.id} className="flex items-center justify-between bg-gray-700 bg-opacity-50 px-3 py-2 rounded">
                          <div className="flex items-center">
                            <img 
                              src={player.avatar} 
                              alt={player.name} 
                              className="w-8 h-8 rounded-full mr-2"
                            />
                            <span className={gameState.currentPlayer === index ? 'font-bold text-yellow-400' : ''}>
                              {player.name}
                            </span>
                          </div>
                          <span className="font-bold">{player.score || 0}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Players */}
              <div className="lg:col-span-1">
                <div className="bg-gray-800 bg-opacity-50 p-4 rounded-xl">
                  <h2 className="text-xl font-semibold mb-4">Players</h2>
                  
                  <div className="space-y-4">
                    {gameState?.players?.map((player, index) => (
                      <div 
                        key={player.id} 
                        className={`p-4 rounded-lg transition-all ${
                          gameState.currentPlayer === index ? 
                            'bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg' : 
                            'bg-gray-700 bg-opacity-30'
                        }`}
                        ref={el => cardRefs.current[index] = el}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <img 
                              src={player.avatar} 
                              alt={player.name} 
                              className={`w-10 h-10 rounded-full mr-3 border-2 ${
                                gameState.currentPlayer === index ? 'border-yellow-400' : 'border-gray-500'
                              }`}
                            />
                            <div>
                              <h3 className={`font-semibold ${
                                gameState.currentPlayer === index ? 'text-yellow-400' : ''
                              }`}>
                                {player.name}
                                {gameState.currentPlayer === index && (
                                  <span className="ml-2 text-sm bg-yellow-500 text-black px-2 py-0.5 rounded-full">
                                    {player.id === playerId ? 'Your turn' : 'Their turn'}
                                  </span>
                                )}
                              </h3>
                              <p className="text-sm text-gray-300">
                                {player.hand?.length || 0} card{player.hand?.length !== 1 ? 's' : ''}
                              </p>
                            </div>
                          </div>
                          {winner?.playerId === player.id && (
                            <span className="text-2xl">🎉</span>
                          )}
                        </div>
                        
                        {/* Show cards only for the current player */}
                        {player.id === playerId && player.hand && (
                          <div className="flex flex-wrap gap-2">
                            {player.hand.map((card, cardIndex) => (
                              <motion.div
                                key={cardIndex}
                                whileHover={{ y: -10 }}
                                className={getCardStyle(card)}
                                onClick={() => isMyTurn() && playCard(cardIndex)}
                              >
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="text-xl md:text-2xl font-bold">
                                    {getCardSymbol(card.value)}
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        
        {/* Color Picker Modal */}
        {showColorPicker && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-xl max-w-sm w-full">
              <h3 className="text-xl font-bold mb-4">Choose a Color</h3>
              <div className="grid grid-cols-2 gap-4">
                {COLORS.map(color => (
                  <button
                    key={color}
                    onClick={() => selectColor(color)}
                    className={`p-4 rounded-lg flex items-center justify-center ${
                      color === 'red' ? 'bg-red-500' :
                      color === 'blue' ? 'bg-blue-500' :
                      color === 'green' ? 'bg-green-500' :
                      'bg-yellow-400'
                    } hover:opacity-90 transition-opacity`}
                  >
                    <span className="capitalize font-medium">{color}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Start Game Button (for game creator) */}
      {gameState?.status === 'waiting' && gameState?.creator === playerId && (
        <div className="fixed bottom-4 left-0 right-0 flex justify-center">
          <button
            onClick={startGame}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-xl shadow-lg"
          >
            Start Game
          </button>
        </div>
      )}
      
      {/* Custom animations */}
      <style jsx global>{`
        @keyframes drawCard {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-draw {
          animation: drawCard 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}