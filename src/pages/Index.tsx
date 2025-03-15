
import React, { useState } from 'react';
import { Header } from '@/components/game/Header';
import { SalesBanner } from '@/components/game/SalesBanner';
import { PlaySection } from '@/components/game/PlaySection';
import { NavigationButtons } from '@/components/game/NavigationButtons';
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const [showBanner, setShowBanner] = useState(true);
  
  const handlePlay = (mode: 'ranked' | 'unranked' | 'casual') => {
    toast({
      title: "Starting game",
      description: `Loading ${mode} game mode...`,
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {showBanner && (
        <SalesBanner 
          title="Summer Special Offer!"
          subtitle="Get 50% off on all premium items this week only!"
          ctaText="Shop Now"
          discount="50% OFF"
          onDismiss={() => setShowBanner(false)}
          onCTA={() => window.location.href = '/marketplace'}
        />
      )}
      
      <Header 
        username="AlexGamer"
        rank="Diamond Elite"
        gems={1250}
        coins={8500}
        avatarUrl="https://i.pravatar.cc/150?img=3"
      />
      
      <main className="flex-1 flex flex-col items-center justify-start gap-8 p-4 mt-4">
        <PlaySection onPlay={handlePlay} />
        
        <NavigationButtons />
      </main>
    </div>
  );
};

export default Index;
