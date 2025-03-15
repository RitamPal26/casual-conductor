
import React, { useEffect } from 'react';
import { ArrowLeft, Settings, Trophy, Users, History, Gift, CreditCard, LogOut, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { ThemeToggle } from '@/components/game/ThemeToggle';

const Profile = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Profile - Mobile Game";
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 dark:text-gray-100 transition-colors duration-300 animate-fade">
      <div className="relative">
        <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-900"></div>
        
        <button 
          onClick={() => navigate('/')}
          className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover-scale"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>
        
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <ThemeToggle className="bg-white/20 backdrop-blur-sm rounded-full p-2 text-white" />
          <button 
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover-scale"
            aria-label="Settings"
          >
            <Settings size={20} />
          </button>
        </div>
        
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center animate-fade">
          <Avatar className="h-24 w-24 border-4 border-white dark:border-gray-700 shadow-md hover-scale">
            <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="AlexGamer" />
            <AvatarFallback className="bg-game-primary dark:bg-blue-700 text-white text-2xl">
              AG
            </AvatarFallback>
          </Avatar>
          
          <div className="mt-2 text-center">
            <h1 className="text-xl font-bold">AlexGamer</h1>
            <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
              <Trophy size={14} className="text-amber-500 dark:text-amber-400" />
              <span>Diamond Elite</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-20 px-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-4 animate-fade" style={{ animationDelay: '200ms' }}>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold">254</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Games</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold">68%</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Win Rate</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold">9,300</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Points</div>
            </div>
          </div>
          
          <div className="mb-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">Level 42</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">1,200 / 1,500 XP</span>
            </div>
            <Progress value={80} className="h-2" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          <ProfileLink 
            icon={<Users size={20} className="text-blue-500 dark:text-blue-400" />}
            title="Friends & Community"
            subtitle="Connect with other players"
            onClick={() => {}}
            delay={300}
          />
          
          <ProfileLink 
            icon={<History size={20} className="text-green-500 dark:text-green-400" />}
            title="Game History"
            subtitle="View your past matches"
            onClick={() => navigate('/game-history')}
            delay={400}
          />
          
          <ProfileLink 
            icon={<Gift size={20} className="text-purple-500 dark:text-purple-400" />}
            title="Rewards"
            subtitle="Claim your daily bonuses"
            onClick={() => navigate('/rewards')}
            delay={500}
          />
          
          <ProfileLink 
            icon={<CreditCard size={20} className="text-amber-500 dark:text-amber-400" />}
            title="Payment Methods"
            subtitle="Manage your payment options"
            onClick={() => navigate('/payments')}
            delay={600}
          />
          
          <ProfileLink 
            icon={<LogOut size={20} className="text-red-500 dark:text-red-400" />}
            title="Sign Out"
            subtitle="Log out of your account"
            onClick={() => {
              navigate('/');
            }}
            variant="danger"
            delay={700}
          />
        </div>
      </div>
    </div>
  );
};

interface ProfileLinkProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onClick: () => void;
  variant?: 'default' | 'danger';
  delay?: number;
}

function ProfileLink({ icon, title, subtitle, onClick, variant = 'default', delay = 0 }: ProfileLinkProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left hover-scale animate-fade"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
        {icon}
      </div>
      
      <div className="flex-1">
        <h3 className={cn(
          "font-medium",
          variant === 'danger' ? "text-red-600 dark:text-red-400" : "text-gray-800 dark:text-gray-100"
        )}>
          {title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">{subtitle}</p>
      </div>
      
      <ChevronRight size={20} className="text-gray-400 dark:text-gray-500" />
    </button>
  );
}

export default Profile;
