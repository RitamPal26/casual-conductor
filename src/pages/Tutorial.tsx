
import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const tutorialSteps = [
  {
    title: "Welcome to the Game",
    description: "Learn the basics of gameplay in this interactive tutorial",
    image: "step1.png"
  },
  {
    title: "Game Controls",
    description: "Swipe, tap and drag to control your character and navigate the game world",
    image: "step2.png"
  },
  {
    title: "Collecting Resources",
    description: "Gather gems and coins throughout levels to upgrade your character",
    image: "step3.png"
  },
  {
    title: "Battling Opponents",
    description: "Learn special moves and combos to defeat enemies and bosses",
    image: "step4.png"
  },
  {
    title: "You're Ready!",
    description: "Now you have all the skills needed to start your adventure",
    image: "step5.png"
  }
];

const Tutorial = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  
  useEffect(() => {
    document.title = "Tutorial - Mobile Game";
  }, []);
  
  const goToPrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const goToNextStep = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/');
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-4">
          <button 
            onClick={() => navigate('/')}
            aria-label="Go back"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold">Interactive Tutorial</h1>
          <div className="w-6"></div> {/* Spacer for centering */}
        </div>
      </div>
      
      <div className="p-4">
        <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden mb-4">
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Tutorial Step {currentStep + 1} Illustration</span>
          </div>
          
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{tutorialSteps[currentStep].title}</h2>
            <p className="text-gray-600">{tutorialSteps[currentStep].description}</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <button
            onClick={goToPrevStep}
            disabled={currentStep === 0}
            className="flex items-center justify-center px-4 py-2 rounded-lg bg-white shadow-sm disabled:opacity-50"
          >
            <ArrowLeft size={20} className="mr-1" />
            Previous
          </button>
          
          <div className="flex gap-1">
            {tutorialSteps.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentStep ? 'bg-game-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={goToNextStep}
            className="flex items-center justify-center px-4 py-2 rounded-lg bg-game-primary text-white shadow-sm"
          >
            {currentStep === tutorialSteps.length - 1 ? (
              <>
                Finish
                <Check size={20} className="ml-1" />
              </>
            ) : (
              <>
                Next
                <ArrowRight size={20} className="ml-1" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
