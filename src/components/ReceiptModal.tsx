import React from 'react';
import { Tag, TrendingUp, X, Wallet } from 'lucide-react';
import type { Politician, Product } from '../types';
import { formatMoney, formatNumber } from '../lib/utils';

interface ReceiptModalProps {
  show: boolean;
  onClose: () => void;
  cart: Record<string, number>;
  products: Product[];
  politician: Politician;
  totalSpent: number;
  orderId: string;
}

export const ReceiptModal: React.FC<ReceiptModalProps> = ({
  show,
  onClose,
  cart,
  products,
  politician,
  totalSpent,
  orderId
}) => {
  if (!show) return null;

  const { theme } = politician;
  
  // Calculate impact metrics
  // Using 695 (NCR Daily Minimum Wage)
  const minWageDays = Math.floor(totalSpent / 695); 
  const minWageYears = minWageDays / 365;
  
  // Rice: 54/kg * 2kg/day * 365 days = ~39,420 per family per year
  const riceFamilies = Math.floor(totalSpent / (54 * 365 * 2)); 

  // Only show report if the impact is significant (e.g., more than 1 month of labor)
  const hasImpact = minWageDays > 30 || riceFamilies >= 1;

  return (
    <div className="fixed inset-0 z-60 bg-white md:bg-slate-900/95 overflow-hidden backdrop-blur-sm animate-in fade-in duration-200 flex items-center justify-center p-0 md:p-4">
      {/* Added md:max-h-[85vh] to prevent overflowing on large screens */}
      <div className="w-full h-full md:h-auto md:max-h-[85vh] md:max-w-lg bg-white md:rounded-xl shadow-2xl relative flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className={`bg-linear-to-r ${theme.gradient} text-white p-5 relative overflow-hidden shrink-0 transition-colors duration-500`}>
          <div className="absolute -right-4 -top-4 text-9xl opacity-10 rotate-12 select-none">🧾</div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/20 hover:bg-black/30 rounded-full p-2 touch-manipulation z-10 transition-colors"
          >
            <X size={20} />
          </button>
          
          <h2 className="text-xl font-bold tracking-tight mb-1 flex items-center gap-2">
            <Tag size={20} /> Payment Successful
          </h2>
          <p className="text-white/80 text-xs font-mono">Order ID: {orderId}</p>
          
          <div className="mt-5 flex items-center gap-3">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/50 shadow-md bg-white/20 flex items-center justify-center text-3xl">
                {politician.image.startsWith('http') ? (
                  <img src={politician.image} alt={politician.name} className="w-full h-full object-cover object-top" />
                ) : (
                  <span>{politician.image}</span>
                )}
            </div>
            <div>
              <div className="text-[10px] text-white/80 uppercase font-bold tracking-wider">Paid by</div>
              <div className="font-bold text-lg leading-none">{politician.name}</div>
            </div>
          </div>
        </div>

        {/* Body - content scrolls inside this container */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar bg-gray-50">
          
          {/* Receipt Items */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
            <div className="text-[10px] font-bold text-gray-400 mb-3 uppercase tracking-wider border-b border-gray-100 pb-2">Purchase Summary</div>
            <div className="space-y-4">
              {Object.entries(cart).map(([id, qty]) => {
                const item = products.find(p => p.id === id);
                if (qty === 0 || !item) return null;
                return (
                  <div key={id} className="flex justify-between items-start text-sm group">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg shrink-0 flex items-center justify-center text-lg overflow-hidden border border-gray-200">
                            {item.image.startsWith('http') ? (
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            ) : (
                              <span>{item.image}</span>
                            )}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold text-gray-800 line-clamp-1">{item.name}</span>
                          <span className="text-gray-400 text-xs">Qty: {formatNumber(qty)}</span>
                        </div>
                    </div>
                    <span className="font-bold text-gray-700 mt-1">{formatMoney(item.price * qty)}</span>
                  </div>
                );
              })}
            </div>
            
            {/* Total */}
            <div className="flex justify-between items-center py-4 border-t border-dashed border-gray-200 mt-4 bg-white sticky bottom-0">
              <span className="font-bold text-base text-gray-600">Total Spent</span>
              <span className={`font-black text-xl ${theme.text}`}>{formatMoney(totalSpent)}</span>
            </div>
          </div>

          {/* Conditional Impact Report */}
          {hasImpact ? (
            <div className={`${theme.lightBg} ${theme.border} border rounded-xl p-5 space-y-4 animate-in slide-in-from-bottom-2 duration-500`}>
              <h3 className={`text-xs font-black uppercase ${theme.text} tracking-wider flex items-center gap-2`}>
                <TrendingUp size={16} /> Societal Impact Report
              </h3>
              
              {minWageYears > 0.08 && (
                <div className="flex gap-4 items-start">
                  <div className="bg-white p-2.5 rounded-lg shadow-sm text-2xl border border-gray-100">👷</div>
                  <div>
                    <div className="font-bold text-gray-800 text-sm">
                      {parseFloat(minWageYears.toFixed(1)).toLocaleString()} Years of Labor
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed mt-1">
                      Equivalent to a minimum wage earner's full salary (₱695/day) for this duration.
                    </p>
                  </div>
                </div>
              )}

              {riceFamilies > 0 && (
                  <div className="flex gap-4 items-start">
                  <div className="bg-white p-2.5 rounded-lg shadow-sm text-2xl border border-gray-100">🍚</div>
                  <div>
                    <div className="font-bold text-gray-800 text-sm">{formatNumber(riceFamilies)} Families Fed</div>
                    <p className="text-xs text-gray-600 leading-relaxed mt-1">
                      Could provide rice (2kg/day) for this many families for an entire year.
                    </p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
              <Wallet className="w-8 h-8 mx-auto text-gray-300 mb-2" />
              <h3 className="text-sm font-bold text-gray-600 uppercase">Barya lang 'to!</h3>
              <p className="text-xs text-gray-400 mt-1 max-w-[250px] mx-auto">
                That didn't even dent their wallet. Go back and buy something expensive!
              </p>
            </div>
          )}
          
          <div className="h-4"></div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-gray-100 md:rounded-b-xl shrink-0 z-20">
          <button 
            onClick={onClose}
            className={`w-full ${theme.button} ${theme.buttonHover} text-white font-bold py-3.5 rounded-xl shadow-lg shadow-gray-200 transition-all active:scale-[0.98] touch-manipulation uppercase text-sm tracking-wide flex items-center justify-center gap-2`}
          >
           Keep Spending
          </button>
        </div>
      </div>
    </div>
  );
};
