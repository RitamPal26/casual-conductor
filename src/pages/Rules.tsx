
import React, { useEffect } from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Rules = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Game Rules - Mobile Game";
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="flex items-center px-4 py-4">
          <button 
            onClick={() => navigate('/')}
            className="mr-4"
            aria-label="Go back"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold">Game Rules</h1>
        </div>
      </div>
      
      <div className="p-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Official Game Rules</h2>
            <p className="text-sm text-gray-500">Last updated: June 2023</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="basics">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                Game Basics
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2">
                <p className="text-gray-700 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl eget nisl.
                </p>
                <p className="text-gray-700 mb-2">
                  Nullam euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li className="mb-1">Players start with 100 health points</li>
                  <li className="mb-1">Each match lasts 5 minutes maximum</li>
                  <li className="mb-1">Score points by eliminating opponents and completing objectives</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="modes">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                Game Modes
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2">
                <h4 className="font-medium mb-2">Ranked Mode</h4>
                <p className="text-gray-700 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc.
                </p>
                
                <h4 className="font-medium mb-2">Unranked Mode</h4>
                <p className="text-gray-700 mb-3">
                  Nullam euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl eget nisl.
                </p>
                
                <h4 className="font-medium mb-2">Casual Mode</h4>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="items">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                Items & Power-ups
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2">
                <p className="text-gray-700 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. The following items can be found throughout the game:
                </p>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-50 p-2 rounded">
                    <h5 className="font-medium text-sm">Health Pack</h5>
                    <p className="text-xs text-gray-600">Restores 25 HP</p>
                  </div>
                  
                  <div className="bg-gray-50 p-2 rounded">
                    <h5 className="font-medium text-sm">Shield Potion</h5>
                    <p className="text-xs text-gray-600">Adds 50 Shield</p>
                  </div>
                  
                  <div className="bg-gray-50 p-2 rounded">
                    <h5 className="font-medium text-sm">Speed Boost</h5>
                    <p className="text-xs text-gray-600">+30% Speed (30s)</p>
                  </div>
                  
                  <div className="bg-gray-50 p-2 rounded">
                    <h5 className="font-medium text-sm">Damage Boost</h5>
                    <p className="text-xs text-gray-600">+25% Damage (20s)</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="scoring">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                Scoring & Ranking
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2">
                <p className="text-gray-700 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc.
                </p>
                
                <h4 className="font-medium mb-1">Point System</h4>
                <ul className="list-disc pl-5 text-gray-700 mb-3">
                  <li className="mb-1">Player elimination: 100 points</li>
                  <li className="mb-1">Objective capture: 50 points</li>
                  <li className="mb-1">Win bonus: 200 points</li>
                </ul>
                
                <h4 className="font-medium mb-1">Rank Tiers</h4>
                <p className="text-gray-700">
                  Bronze → Silver → Gold → Platinum → Diamond → Grandmaster
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="conduct">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                Code of Conduct
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2">
                <p className="text-gray-700 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc.
                </p>
                
                <p className="text-gray-700">
                  Nullam euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Rules;
