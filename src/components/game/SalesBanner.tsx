
import React, { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SalesBannerProps {
  title: string;
  subtitle: string;
  ctaText: string;
  discount: string;
  backgroundImage?: string;
  onDismiss?: () => void;
  onCTA?: () => void;
}

export function SalesBanner({ 
  title, 
  subtitle, 
  ctaText, 
  discount, 
  backgroundImage = 'linear-gradient(to right, #0f172a, #0d9488)',
  onDismiss,
  onCTA
}: SalesBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) onDismiss();
  };

  if (!isVisible) return null;

  const darkModeBackground = 'linear-gradient(to right, #1F2937, #0d9488)';

  return (
    <div 
      className={cn(
        "relative w-full p-4 overflow-hidden transition-all duration-500 ease-out transform animate-fade",
        isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}
      style={{ background: 'var(--banner-bg, backgroundImage)' }}
    >
      <style jsx>{`
        :root {
          --banner-bg: ${backgroundImage};
        }
        .dark {
          --banner-bg: ${darkModeBackground};
        }
      `}</style>
      
      <button 
        onClick={handleDismiss}
        className="absolute top-2 right-2 text-white/80 hover:text-white transition-colors hover-scale"
        aria-label="Dismiss banner"
      >
        <X size={16} />
      </button>
      
      <div className="flex flex-col items-start text-white animate-fade">
        <div className="flex items-center gap-2 mb-1">
          <span className="inline-block px-2 py-0.5 bg-white/20 rounded-full text-xs font-medium backdrop-blur-sm">
            {discount}
          </span>
          <h3 className="text-sm font-bold">{title}</h3>
        </div>
        
        <p className="text-xs text-white/90 mb-2">{subtitle}</p>
        
        <button 
          onClick={onCTA}
          className="flex items-center gap-1 text-xs font-medium bg-white/20 hover:bg-white/30 transition-colors px-3 py-1.5 rounded-full backdrop-blur-sm hover-scale"
        >
          {ctaText}
          <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}
