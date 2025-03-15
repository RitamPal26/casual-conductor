
import React, { useEffect } from 'react';
import { ArrowLeft, Trophy, Medal, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const leaderboardData = [
  { id: 1, username: "GameMaster99", points: 12450, rank: "Grandmaster", avatarUrl: "https://i.pravatar.cc/150?img=1" },
  { id: 2, username: "PixelWarrior", points: 11200, rank: "Grandmaster", avatarUrl: "https://i.pravatar.cc/150?img=2" },
  { id: 3, username: "NinjaGamer", points: 10800, rank: "Grandmaster", avatarUrl: "https://i.pravatar.cc/150?img=3" },
  { id: 4, username: "AlexGamer", points: 9300, rank: "Diamond Elite", avatarUrl: "https://i.pravatar.cc/150?img=4" },
  { id: 5, username: "ProPlayer23", points: 8800, rank: "Diamond", avatarUrl: "https://i.pravatar.cc/150?img=5" },
  { id: 6, username: "GamerQueen", points: 8450, rank: "Diamond", avatarUrl: "https://i.pravatar.cc/150?img=6" },
  { id: 7, username: "EliteStriker", points: 7900, rank: "Platinum", avatarUrl: "https://i.pravatar.cc/150?img=7" },
  { id: 8, username: "ShadowHunter", points: 7600, rank: "Platinum", avatarUrl: "https://i.pravatar.cc/150?img=8" },
  { id: 9, username: "VictoryRoyale", points: 7300, rank: "Platinum", avatarUrl: "https://i.pravatar.cc/150?img=9" },
  { id: 10, username: "MasterTactician", points: 6800, rank: "Gold", avatarUrl: "https://i.pravatar.cc/150?img=10" },
];

const Leaderboard = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Leaderboard - Mobile Game";
  }, []);
  
  const getLeaderIcon = (position: number) => {
    switch(position) {
      case 1:
        return <Trophy className="text-yellow-500" size={20} />;
      case 2:
        return <Medal className="text-gray-400" size={20} />;
      case 3:
        return <Medal className="text-amber-600" size={20} />;
      default:
        return <span className="text-sm font-bold text-gray-500 dark:text-gray-400">{position}</span>;
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 dark:text-gray-100 transition-colors duration-300 animate-fade">
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-sm">
        <div className="flex items-center px-4 py-4 animate-fade">
          <button 
            onClick={() => navigate('/')}
            className="mr-4 hover-scale"
            aria-label="Go back"
          >
            <ArrowLeft size={24} className="text-gray-700 dark:text-gray-300" />
          </button>
          <h1 className="text-xl font-bold">Leaderboard</h1>
        </div>
      </div>
      
      <div className="p-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-900 rounded-xl p-6 text-white mb-4 animate-fade" style={{ animationDelay: '100ms' }}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Season Ranking</h2>
            <Trophy size={24} />
          </div>
          <p className="text-sm text-blue-100 mb-2">Top players this season</p>
          <div className="flex items-center gap-2">
            <Award size={16} className="text-yellow-300" />
            <span className="text-sm">Season ends in 12 days</span>
          </div>
        </div>
        
        <div className="space-y-1">
          {leaderboardData.map((player, index) => (
            <div 
              key={player.id}
              className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm border border-gray-100 dark:border-gray-700 hover-scale animate-fade"
              style={{ animationDelay: `${(index + 1) * 50}ms` }}
            >
              <div className="flex items-center justify-center w-8 h-8 mr-3">
                {getLeaderIcon(index + 1)}
              </div>
              
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={player.avatarUrl} alt={player.username} />
                <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                  {player.username.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="font-medium">{player.username}</span>
                  {index < 3 && (
                    <span className="ml-2 inline-block px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded-full">
                      Top {index + 1}
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{player.rank}</div>
              </div>
              
              <div className="text-right">
                <div className="font-bold text-gray-700 dark:text-gray-300">{player.points.toLocaleString()}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">points</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
