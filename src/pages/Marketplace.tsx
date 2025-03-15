
import React, { useEffect, useState } from 'react';
import { ArrowLeft, Search, Filter, ChevronRight, Star, Heart, ShoppingCart, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

const categories = ["All", "Weapons", "Armor", "Characters", "Emotes", "Bundles"];

const marketItems = [
  {
    id: 1,
    name: "Legendary Sword",
    price: 1200,
    category: "Weapons",
    rarity: "Legendary",
    image: "sword.png",
    trending: true,
    discount: 15
  },
  {
    id: 2,
    name: "Elite Guard Armor",
    price: 950,
    category: "Armor",
    rarity: "Epic",
    image: "armor.png",
    trending: false,
    discount: 0
  },
  {
    id: 3,
    name: "Shadow Assassin",
    price: 2000,
    category: "Characters",
    rarity: "Legendary",
    image: "character.png",
    trending: true,
    discount: 0
  },
  {
    id: 4,
    name: "Victory Dance",
    price: 500,
    category: "Emotes",
    rarity: "Rare",
    image: "emote.png",
    trending: false,
    discount: 20
  },
  {
    id: 5,
    name: "Winter Bundle",
    price: 3500,
    category: "Bundles",
    rarity: "Exclusive",
    image: "bundle.png",
    trending: true,
    discount: 30
  },
  {
    id: 6,
    name: "Mystic Staff",
    price: 1050,
    category: "Weapons",
    rarity: "Epic",
    image: "staff.png",
    trending: false,
    discount: 0
  }
];

const Marketplace = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    document.title = "Marketplace - Mobile Game";
  }, []);
  
  const filteredItems = marketItems.filter(item => 
    (activeCategory === "All" || item.category === activeCategory) &&
    (item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const getRarityColor = (rarity: string) => {
    switch(rarity) {
      case "Common": return "bg-gray-200 text-gray-700";
      case "Uncommon": return "bg-green-100 text-green-700";
      case "Rare": return "bg-blue-100 text-blue-700";
      case "Epic": return "bg-purple-100 text-purple-700";
      case "Legendary": return "bg-amber-100 text-amber-700";
      case "Exclusive": return "bg-red-100 text-red-700";
      default: return "bg-gray-200 text-gray-700";
    }
  };
  
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
          <h1 className="text-xl font-bold">Marketplace</h1>
        </div>
        
        <div className="px-4 pb-3">
          <div className="relative mb-3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search items..."
              className="bg-gray-100 w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <Filter size={18} className="text-gray-400" />
            </button>
          </div>
          
          <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-hide">
            {categories.map(category => (
              <button
                key={category}
                className={cn(
                  "px-4 py-1.5 rounded-full whitespace-nowrap text-sm font-medium transition-all",
                  activeCategory === category 
                    ? "bg-game-primary text-white shadow-sm" 
                    : "bg-white text-gray-600 border border-gray-200"
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Featured Items</h2>
          <button className="text-sm text-game-primary font-medium flex items-center">
            View All
            <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="h-32 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Item Image</span>
                </div>
                
                {item.trending && (
                  <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full flex items-center">
                    <TrendingUp size={12} className="mr-1" />
                    Trending
                  </div>
                )}
                
                {item.discount > 0 && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    -{item.discount}%
                  </div>
                )}
                
                <button className="absolute bottom-2 right-2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors">
                  <Heart size={16} />
                </button>
              </div>
              
              <div className="p-3">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium text-sm line-clamp-1">{item.name}</h3>
                  <div className="flex items-center text-amber-500">
                    <Star size={12} fill="currentColor" />
                    <span className="text-xs font-medium ml-0.5">4.8</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-2">
                  <span className={cn("text-xs px-1.5 py-0.5 rounded-full", getRarityColor(item.rarity))}>
                    {item.rarity}
                  </span>
                  <span className="text-xs text-gray-500">{item.category}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    {item.discount > 0 ? (
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-gray-400 line-through">{item.price}</span>
                        <span className="font-bold text-sm">{Math.round(item.price * (1 - item.discount / 100))}</span>
                      </div>
                    ) : (
                      <span className="font-bold text-sm">{item.price}</span>
                    )}
                  </div>
                  
                  <button className="w-8 h-8 bg-game-primary rounded-full flex items-center justify-center text-white shadow-sm hover:bg-game-accent transition-colors">
                    <ShoppingCart size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
