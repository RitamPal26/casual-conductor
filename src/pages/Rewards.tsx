
import React, { useEffect } from 'react';
import { ArrowLeft, Gift, Award, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Rewards = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Rewards - Mobile Game";
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
        <h1 className="text-2xl font-bold text-center mt-4">Rewards</h1>
      </div>
      
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-4">Daily Bonuses</h2>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-lg">
              <Gift className="mr-2 text-purple-500" size={20} /> 
              Daily Login Reward
            </CardTitle>
            <CardDescription>Claim your reward for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Gift size={24} className="text-purple-500" />
                </div>
                <div className="ml-3">
                  <p className="font-medium">500 Coins</p>
                  <p className="text-xs text-gray-500">+ 1 Loot Box</p>
                </div>
              </div>
              <Button>Claim</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div>
        <h2 className="text-lg font-medium mb-4">Upcoming Rewards</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Award className="mr-2 text-amber-500" size={20} /> 
                Weekly Challenge
              </CardTitle>
              <CardDescription>Win 10 matches this week</CardDescription>
            </CardHeader>
            <CardFooter className="pt-2">
              <div className="w-full flex items-center justify-between">
                <span className="text-sm">Progress: 3/10</span>
                <span className="flex items-center text-sm text-gray-500">
                  <Clock size={14} className="mr-1" /> 4 days left
                </span>
              </div>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Award className="mr-2 text-blue-500" size={20} /> 
                Achievement Reward
              </CardTitle>
              <CardDescription>Reach Level 50</CardDescription>
            </CardHeader>
            <CardFooter className="pt-2">
              <div className="w-full flex items-center justify-between">
                <span className="text-sm">Progress: Level 42</span>
                <span className="flex items-center text-sm text-gray-500">
                  <Clock size={14} className="mr-1" /> Ongoing
                </span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
