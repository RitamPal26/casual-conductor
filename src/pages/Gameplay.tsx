
import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Gameplay = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Gameplay - Mobile Game";
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-blue-50">
      <div className="absolute top-4 left-4">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>
      </div>
      
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold mb-4 text-game-secondary">Game in Progress</h1>
        <p className="text-gray-600 mb-8">This is where the gameplay would be implemented.</p>
        
        <div className="w-48 h-48 mx-auto bg-gray-200 rounded-xl flex items-center justify-center shadow-inner">
          <span className="text-gray-500 text-sm">Game Canvas</span>
        </div>
      </div>
    </div>
  );
};

export default Gameplay;
