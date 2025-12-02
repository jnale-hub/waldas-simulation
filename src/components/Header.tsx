import React from 'react';
import { ChevronDown, RefreshCcw } from 'lucide-react';
import type { Politician } from '../types';
import { formatMoney } from '../lib/utils';

interface HeaderProps {
  politician: Politician;
  balance: number;
  totalSpent: number;
  animateBalance: boolean;
  onOpenMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  politician, 
  balance, 
  totalSpent, 
  animateBalance, 
  onOpenMenu 
}) => {
  const { theme, netWorth } = politician;
  const progressPercentage = Math.max(0, (balance / netWorth) * 100);

  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-xl overflow-hidden font-sans">
      {/* Progress Bar Background Layer */}
      <div 
        className={`absolute top-0 left-0 h-full bg-linear-to-r ${theme.gradient} transition-all duration-500 ease-out opacity-90`}
        style={{ width: `${progressPercentage}%` }}
      />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-2">
        {/* Top Row: Branding & Mini Controls */}
        <div className="flex justify-between items-start mb-1 opacity-90">
          <h1 className="text-lg font-bold tracking-tight text-white flex items-center gap-2 drop-shadow-md">
            <span className="text-xl filter drop-shadow">💰</span> 
            <span className="italic">Waldas<span className="text-yellow-300">Mall</span></span>
          </h1>
          
          <button 
            onClick={onOpenMenu}
            className="flex items-center gap-1 text-[10px] uppercase font-bold text-white/80 hover:text-white bg-black/20 px-2 py-1 rounded-full transition-colors backdrop-blur-sm"
          >
            <RefreshCcw size={10} /> Change Profile
          </button>
        </div>

        {/* Hero Section: Avatar + Balance Combined (The "HUD") */}
        <button 
          onClick={onOpenMenu}
          className="w-full flex items-center gap-4 py-2 group text-left transition-transform active:scale-[0.99]"
        >
           {/* Big Avatar - The Focus */}
           <div className="relative shrink-0">
             <div className="w-16 h-16 rounded-full border-2 border-white/30 shadow-2xl overflow-hidden bg-gray-800 relative z-10 group-hover:border-white/50 transition-colors">
                <img 
                  src={politician.image} 
                  alt={politician.name} 
                  className="w-full h-full object-cover object-top" 
                />
             </div>
             {/* Online/Active Indicator */}
             <div className={`absolute bottom-1 right-1 w-4 h-4 rounded-full ${theme.button} border-2 border-gray-900 z-20 shadow-sm`}></div>
           </div>

           {/* Balance & Info */}
           <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white/90 leading-none shadow-sm">{politician.name}</span>
                <ChevronDown size={12} className="text-white/60 group-hover:translate-y-0.5 transition-transform" />
              </div>
              
              {/* Big Money Display */}
              <div className={`text-4xl sm:text-5xl font-black tracking-tighter leading-none drop-shadow-lg filter my-0.5 ${animateBalance ? 'scale-105 text-yellow-300' : 'text-white'} transition-all duration-150`}>
                {formatMoney(balance)}
              </div>

              {/* Subtext / Spent Indicator */}
              {totalSpent > 0 ? (
                <div className="text-[10px] font-mono text-red-200 bg-black/40 self-start px-1.5 py-0.5 rounded mt-1 backdrop-blur-md border border-white/10">
                  -{formatMoney(totalSpent)} spent
                </div>
              ) : (
                <div className="text-[10px] text-white/60 font-medium tracking-wide uppercase mt-1">
                  Total Net Worth
                </div>
              )}
           </div>
        </button>
      </div>
    </header>
  );
};
