
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck, Trophy, Gem, CreditCard } from "lucide-react";
import { cn } from '@/lib/utils';

interface HeaderProps {
  username: string;
  rank: string;
  gems: number;
  coins: number;
  avatarUrl?: string;
}

export function Header({ username, rank, gems, coins, avatarUrl }: HeaderProps) {
  return (
    <div className="w-full px-4 pt-6 pb-2 flex items-center justify-between glass rounded-b-2xl z-10">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 border-2 border-white shadow-md">
          <AvatarImage src={avatarUrl} alt={username} />
          <AvatarFallback className="bg-game-primary text-white">
            {username.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        
        <div>
          <div className="flex items-center gap-1">
            <span className="font-semibold text-sm">{username}</span>
            <BadgeCheck size={16} className="text-game-primary" />
          </div>
          <div className="flex items-center gap-1">
            <Trophy size={14} className="text-amber-500" />
            <span className="text-xs text-gray-600">{rank}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 bg-white/80 rounded-full px-3 py-1 shadow-sm border border-gray-100">
          <Gem size={16} className="text-game-accent" />
          <span className="text-sm font-medium">{gems.toLocaleString()}</span>
        </div>
        
        <div className="flex items-center gap-1 bg-white/80 rounded-full px-3 py-1 shadow-sm border border-gray-100">
          <CreditCard size={16} className="text-amber-500" />
          <span className="text-sm font-medium">{coins.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
