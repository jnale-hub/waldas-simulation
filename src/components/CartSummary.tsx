import React from 'react';
import { Trash2 } from 'lucide-react';
import type { Theme } from '../types';
import { formatMoney } from '../lib/utils';

interface CartSummaryProps {
  totalSpent: number;
  totalItems: number;
  theme: Theme;
  onClear: () => void;
  onCheckout: () => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  totalSpent,
  totalItems,
  theme,
  onClear,
  onCheckout
}) => {
  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 z-40 pb-safe ${totalSpent > 0 ? 'translate-y-0' : 'translate-y-0'}`}>
      <div className="max-w-4xl mx-auto px-4 py-2 md:py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <input type="checkbox" checked readOnly className={`rounded ${theme.text} focus:ring-0`} />
            <span className="text-xs text-gray-500 ml-2">All</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] md:text-xs text-gray-500 font-medium text-right sm:text-left">Total Payment</span>
            <span className={`text-lg md:text-xl font-bold ${theme.text}`}>{formatMoney(totalSpent)}</span>
          </div>
        </div>
        
        <div className="flex gap-2 items-center">
          {totalSpent > 0 && (
            <button 
              onClick={onClear}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Clear Cart"
            >
              <Trash2 size={18} />
            </button>
          )}
          <button 
            onClick={onCheckout}
            className={`flex items-center gap-2 px-6 py-3 font-bold text-white text-sm uppercase tracking-wide transition-all ${totalSpent > 0 ? `bg-linear-to-r ${theme.gradient} shadow-md hover:brightness-105` : 'bg-gray-300 cursor-not-allowed'}`}
            disabled={totalSpent === 0}
          >
            Check Out ({totalItems})
          </button>
        </div>
      </div>
    </div>
  );
};
