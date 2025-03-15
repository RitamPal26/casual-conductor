
import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GameHistory = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Game History - Mobile Game";
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="relative mb-6">
        <button 
          onClick={() => navigate('/profile')}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm"
          aria-label="Go back"
        >
          <ArrowLeft size={20} className="text-blue-500" />
        </button>
        <h1 className="text-2xl font-bold text-center mt-4">Game History</h1>
      </div>
      
      <div className="space-y-4">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Game #{1000 + index}</span>
              <span className={`text-sm ${index % 2 === 0 ? 'text-green-500' : 'text-red-500'}`}>
                {index % 2 === 0 ? 'Victory' : 'Defeat'}
              </span>
            </div>
            <div className="text-sm text-gray-500">
              <p>Date: {new Date(Date.now() - index * 86400000).toLocaleDateString()}</p>
              <p>Mode: {index % 3 === 0 ? 'Ranked' : index % 3 === 1 ? 'Unranked' : 'Casual'}</p>
              <p>Score: {Math.floor(Math.random() * 100)} - {Math.floor(Math.random() * 100)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameHistory;
