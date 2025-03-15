
import React, { useState } from 'react';
import { Play, Shield, Trophy, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

type GameMode = 'ranked' | 'unranked' | 'casual';

interface PlaySectionProps {
  onPlay: (mode: GameMode) => void;
}

export function PlaySection({ onPlay }: PlaySectionProps) {
  const [selectedMode, setSelectedMode] = useState<GameMode>('casual');
  const navigate = useNavigate();
  
  const handlePlayClick = () => {
    onPlay(selectedMode);
    navigate('/gameplay');
  };
  
  return (
    <div className="w-full">
      <div className="mb-6 flex flex-col items-center justify-center">
        <button 
          onClick={handlePlayClick}
          className="w-40 h-40 rounded-full bg-gradient-to-br from-game-teal to-game-soft-teal flex items-center justify-center mb-6 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 animate-bounce-subtle overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          <Play size={60} fill="white" className="text-white ml-4" />
        </button>
        
        <div className="w-full px-6 flex items-center justify-between gap-3 py-2 mb-2">
          <GameModeButton 
            mode="ranked" 
            icon={<Trophy size={20} />} 
            label="Ranked" 
            isSelected={selectedMode === 'ranked'} 
            onClick={() => setSelectedMode('ranked')} 
          />
          
          <GameModeButton 
            mode="unranked" 
            icon={<Shield size={20} />} 
            label="Unranked" 
            isSelected={selectedMode === 'unranked'} 
            onClick={() => setSelectedMode('unranked')} 
          />
          
          <GameModeButton 
            mode="casual" 
            icon={<Zap size={20} />} 
            label="Casual" 
            isSelected={selectedMode === 'casual'} 
            onClick={() => setSelectedMode('casual')} 
          />
        </div>
      </div>
    </div>
  );
}

interface GameModeButtonProps {
  mode: GameMode;
  icon: React.ReactNode;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

function GameModeButton({ mode, icon, label, isSelected, onClick }: GameModeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-200 relative",
        isSelected 
          ? "text-white" 
          : "text-white/60 hover:text-white/80"
      )}
    >
      {isSelected && (
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl animate-scale-in" />
      )}
      <span className="z-10 transition-transform hover:scale-110">{icon}</span>
      <span className="text-xs font-medium z-10">{label}</span>
      {isSelected && (
        <div className="absolute bottom-0 w-1/2 h-0.5 bg-game-teal rounded-full animate-scale-in" />
      )}
    </button>
  );
}
