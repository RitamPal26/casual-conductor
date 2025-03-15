
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '../ThemeProvider';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Sun size={16} className={cn("text-amber-500", theme === 'dark' && "text-gray-400")} />
      <Switch 
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-blue-600"
      />
      <Moon size={16} className={cn("text-gray-400", theme === 'dark' && "text-blue-400")} />
    </div>
  );
}
