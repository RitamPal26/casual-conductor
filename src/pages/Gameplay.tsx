
import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Gameplay = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Gameplay - Mobile Game";
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-blue-50 dark:from-gray-800 dark:to-gray-900 dark:text-gray-100 transition-colors duration-300 animate-fade">
      <div className="absolute top-4 left-4 animate-fade" style={{ animationDelay: '100ms' }}>
        <button 
          onClick={() => navigate('/')}
          className="flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-700 rounded-full shadow-md hover-scale"
          aria-label="Go back"
        >
          <ArrowLeft size={20} className="text-gray-700 dark:text-gray-300" />
        </button>
      </div>
      
      <div className="text-center p-8 animate-fade" style={{ animationDelay: '200ms' }}>
        <h1 className="text-3xl font-bold mb-4 text-game-secondary dark:text-blue-300">Game in Progress</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">This is where the gameplay would be implemented.</p>
        
        <div className="w-48 h-48 mx-auto bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-inner hover-scale">
          <span className="text-gray-500 dark:text-gray-400 text-sm">Game Canvas</span>
        </div>
      </div>
    </div>
  );
};

export default Gameplay;
