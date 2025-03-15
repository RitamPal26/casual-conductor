
import React from 'react';
import { Trophy, Book, ShoppingBag, User, BookOpen, BookText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

function NavButton({ icon, label, onClick, variant = 'primary' }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "game-button w-full flex items-center justify-start gap-3 py-3 transition-all duration-300 hover:translate-x-1",
        variant === 'primary' ? 'bg-white text-game-secondary' : 'bg-gray-50 text-gray-500'
      )}
    >
      <span className={cn(
        "flex items-center justify-center w-8 h-8 rounded-full",
        variant === 'primary' ? 'bg-blue-50 text-game-primary' : 'bg-gray-100 text-gray-400'
      )}>
        {icon}
      </span>
      <span className="font-medium">{label}</span>
    </button>
  );
}

export function NavigationButtons() {
  const navigate = useNavigate();
  
  return (
    <div className="w-full space-y-3 px-4">
      <NavButton 
        icon={<Trophy size={18} />} 
        label="Leaderboard" 
        onClick={() => navigate('/leaderboard')} 
      />
      
      <div className="relative pl-4 border-l-2 border-game-border py-2 space-y-2">
        <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-game-primary" />
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Rules & Help</span>
        <NavButton 
          icon={<BookOpen size={18} />} 
          label="Interactive Tutorial" 
          onClick={() => navigate('/tutorial')} 
          variant="secondary" 
        />
        <NavButton 
          icon={<BookText size={18} />} 
          label="Game Rules" 
          onClick={() => navigate('/rules')} 
          variant="secondary" 
        />
      </div>
      
      <NavButton 
        icon={<ShoppingBag size={18} />} 
        label="Marketplace" 
        onClick={() => navigate('/marketplace')} 
      />
      
      <NavButton 
        icon={<User size={18} />} 
        label="User Profile" 
        onClick={() => navigate('/profile')} 
      />
    </div>
  );
}
