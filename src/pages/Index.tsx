
import React, { useState, useEffect } from 'react';
import { Header } from '@/components/game/Header';
import { SalesBanner } from '@/components/game/SalesBanner';
import { PlaySection } from '@/components/game/PlaySection';
import { NavigationButtons } from '@/components/game/NavigationButtons';
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
    document.title = "Home - Mobile Game";
  }, []);
  
  const handlePlay = (mode: 'ranked' | 'unranked' | 'casual') => {
    toast({
      title: "Starting game",
      description: `Loading ${mode} game mode...`,
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-game-deep-blue to-game-dark transition-colors duration-500 dark:from-dark-background dark:to-gray-900 animate-theme-transition">
      <div className={`transition-all duration-500 ease-out transform ${isLoaded ? 'opacity-100' : 'opacity-0 -translate-y-8'}`}>
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
      </div>
      
      <div className={`transition-all duration-500 delay-100 ease-out transform ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Header 
          username="AlexGamer"
          rank="Diamond Elite"
          gems={1250}
          coins={8500}
          avatarUrl="https://i.pravatar.cc/150?img=3"
        />
      </div>
      
      <main className="flex-1 flex flex-col items-center justify-start gap-8 p-4 mt-4">
        <div className={`w-full transition-all duration-500 delay-200 ease-out transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <PlaySection onPlay={handlePlay} />
        </div>
        
        <div className={`w-full transition-all duration-500 delay-300 ease-out transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <NavigationButtons />
        </div>
      </main>
    </div>
  );
};

export default Index;
