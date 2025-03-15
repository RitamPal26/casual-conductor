
import React from 'react';
import { Trophy, Book, ShoppingBag, User, BookOpen, BookText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  delay?: number;
}

function NavButton({ icon, label, onClick, variant = 'primary', delay = 0 }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "game-button w-full flex items-center justify-start gap-3 py-3.5 px-5 rounded-xl transition-all duration-300",
        "hover:scale-[1.02] active:scale-[0.98] hover:shadow-md",
        variant === 'primary' 
          ? 'bg-white/90 backdrop-blur-sm text-game-deep-blue shadow-sm border border-white/10' 
          : 'bg-white/40 backdrop-blur-sm text-game-deep-blue/80 border border-white/10'
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className={cn(
        "flex items-center justify-center w-9 h-9 rounded-full",
        variant === 'primary' 
          ? 'bg-gradient-to-br from-game-teal to-game-soft-teal text-white' 
          : 'bg-white/70 text-game-teal'
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
    <div className="w-full space-y-3 px-1">
      <NavButton 
        icon={<Trophy size={18} />} 
        label="Leaderboard" 
        onClick={() => navigate('/leaderboard')} 
        delay={100}
      />
      
      <div className="relative pl-4 border-l-2 border-white/20 py-2 space-y-2">
        <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-game-teal" />
        <span className="text-xs font-medium text-white/70 uppercase tracking-wider">Rules & Help</span>
        <NavButton 
          icon={<BookOpen size={18} />} 
          label="Interactive Tutorial" 
          onClick={() => navigate('/tutorial')} 
          variant="secondary" 
          delay={200}
        />
        <NavButton 
          icon={<BookText size={18} />} 
          label="Game Rules" 
          onClick={() => navigate('/rules')} 
          variant="secondary" 
          delay={300}
        />
      </div>
      
      <NavButton 
        icon={<ShoppingBag size={18} />} 
        label="Marketplace" 
        onClick={() => navigate('/marketplace')} 
        delay={400}
      />
      
      <NavButton 
        icon={<User size={18} />} 
        label="User Profile" 
        onClick={() => navigate('/profile')} 
        delay={500}
      />
    </div>
  );
}
