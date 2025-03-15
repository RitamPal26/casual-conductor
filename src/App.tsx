
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import Gameplay from "./pages/Gameplay";
import Leaderboard from "./pages/Leaderboard";
import Tutorial from "./pages/Tutorial";
import Rules from "./pages/Rules";
import Marketplace from "./pages/Marketplace";
import Profile from "./pages/Profile";
import GameHistory from "./pages/GameHistory";
import Rewards from "./pages/Rewards";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gameplay" element={<Gameplay />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/game-history" element={<GameHistory />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
