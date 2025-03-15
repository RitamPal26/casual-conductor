import React, { useEffect } from 'react';
import { ArrowLeft, Settings, Trophy, Users, History, Gift, CreditCard, LogOut, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const Profile = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Profile - Mobile Game";
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="relative">
        <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-600"></div>
        
        <button 
          onClick={() => navigate('/')}
          className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>
        
        <button 
          className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
          aria-label="Settings"
        >
          <Settings size={20} />
        </button>
        
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <Avatar className="h-24 w-24 border-4 border-white shadow-md">
            <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="AlexGamer" />
            <AvatarFallback className="bg-game-primary text-white text-2xl">
              AG
            </AvatarFallback>
          </Avatar>
          
          <div className="mt-2 text-center">
            <h1 className="text-xl font-bold">AlexGamer</h1>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Trophy size={14} className="text-amber-500" />
              <span>Diamond Elite</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-20 px-4">
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold">254</div>
              <div className="text-xs text-gray-500">Games</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold">68%</div>
              <div className="text-xs text-gray-500">Win Rate</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold">9,300</div>
              <div className="text-xs text-gray-500">Points</div>
            </div>
          </div>
          
          <div className="mb-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">Level 42</span>
              <span className="text-xs text-gray-500">1,200 / 1,500 XP</span>
            </div>
            <Progress value={80} className="h-2" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          <ProfileLink 
            icon={<Users size={20} className="text-blue-500" />}
            title="Friends & Community"
            subtitle="Connect with other players"
            onClick={() => {}}
          />
          
          <ProfileLink 
            icon={<History size={20} className="text-green-500" />}
            title="Game History"
            subtitle="View your past matches"
            onClick={() => navigate('/game-history')}
          />
          
          <ProfileLink 
            icon={<Gift size={20} className="text-purple-500" />}
            title="Rewards"
            subtitle="Claim your daily bonuses"
            onClick={() => navigate('/rewards')}
          />
          
          <ProfileLink 
            icon={<CreditCard size={20} className="text-amber-500" />}
            title="Payment Methods"
            subtitle="Manage your payment options"
            onClick={() => navigate('/payments')}
          />
          
          <ProfileLink 
            icon={<LogOut size={20} className="text-red-500" />}
            title="Sign Out"
            subtitle="Log out of your account"
            onClick={() => {
              navigate('/');
            }}
            variant="danger"
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
}

function ProfileLink({ icon, title, subtitle, onClick, variant = 'default' }: ProfileLinkProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:bg-gray-50 transition-colors text-left"
    >
      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
        {icon}
      </div>
      
      <div className="flex-1">
        <h3 className={cn(
          "font-medium",
          variant === 'danger' ? "text-red-600" : "text-gray-800"
        )}>
          {title}
        </h3>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
      
      <ChevronRight size={20} className="text-gray-400" />
    </button>
  );
}

export default Profile;
