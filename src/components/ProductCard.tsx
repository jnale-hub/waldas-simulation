import React from 'react';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import type { Product, Theme } from '../types';
import { formatNumber } from '../lib/utils';

interface ProductCardProps {
  product: Product;
  theme: Theme;
  qty: number;
  onAdd: (id: string, amount: number) => void;
  onSetQty: (id: string, amount: string) => void;
}

const CATEGORY_STYLES: Record<string, string> = {
  'Pagkain':     'border-orange-500 text-orange-500 bg-orange-50',
  'Commodity':   'border-green-500 text-green-500 bg-green-50',
  'Serbisyo':    'border-blue-500 text-blue-500 bg-blue-50',
  'Real Estate': 'border-indigo-500 text-indigo-500 bg-indigo-50',
  'Luho':        'border-purple-500 text-purple-500 bg-purple-50',
  'Politika':    'border-red-500 text-red-500 bg-red-50',
};

export const ProductCard = React.memo<ProductCardProps>(({ 
  product, 
  theme, 
  qty, 
  onAdd, 
  onSetQty 
}) => {
  
  const categoryStyle = CATEGORY_STYLES[product.category] || `${theme.border} ${theme.text}`;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow relative group">
      {/* Sale Tag */}
      <div className={`absolute top-0 right-0  ${theme.text} ${theme.lightBg} text-[10px] font-bold px-2 py-0.5 rounded-bl-lg z-10 shadow-sm`}>
        {product.category === 'Luho' ? 'MALL' : 'PREFERRED'}
      </div>

      <div className="flex p-3 sm:p-4 gap-3 sm:gap-4">
        {/* Image Area */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gray-50 rounded-md shrink-0 overflow-hidden relative border border-gray-100">
          {product.image.startsWith('http') ? (
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl sm:text-5xl bg-gray-50 group-hover:scale-105 transition-transform duration-300">
              {product.image}
            </div>
          )}
          {product.discount > 0 && (
            <div className="absolute top-0 left-0 bg-yellow-400 text-red-600 text-[9px] font-bold px-1 rounded-br">
              -{product.discount}%
            </div>
          )}
        </div>
        
        {/* Info Area */}
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            <h3 className="font-medium text-gray-900 leading-tight text-sm sm:text-base line-clamp-2 mb-1">
              {product.name}
            </h3>
            
            <div className="flex flex-wrap gap-1 mb-1">
              <span className={`text-[9px] px-1 py-0.5 border rounded text-xs ${categoryStyle}`}>
                {product.category}
              </span>
              <span className="text-[9px] px-1 py-0.5 bg-gray-100 text-gray-500 rounded">
                Free Shipping
              </span>
            </div>
            
            <p className="text-[12px] text-gray-500 italic">"{product.editorial}"</p>
          </div>
          
          <div className="mt-2">
            <div className="flex items-baseline gap-1 flex-wrap">
              <span className={`text-xs font-bold ${theme.text}`}>₱</span>
              <span className={`text-lg sm:text-xl font-bold ${theme.text}`}>{formatNumber(product.price)}</span>
              {qty > 0 && (
                  <span className="text-xs text-gray-400 ml-1">x {formatNumber(qty)}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white p-2 sm:p-3 flex items-center justify-end gap-2 border-t border-dashed border-gray-200 min-h-[50px]">
        {qty > 0 ? (
          <div className="flex items-center w-full justify-between sm:justify-end gap-3">
            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
              <button 
                onClick={() => onAdd(product.id, -1)}
                className="w-8 h-8 flex items-center justify-center bg-white text-gray-600 hover:bg-gray-50 active:bg-gray-100"
              >
                <Minus size={14} />
              </button>
              <input 
                type="number" 
                value={qty}
                onChange={(e) => onSetQty(product.id, e.target.value)}
                className="w-10 text-center bg-white font-medium text-gray-800 outline-none text-sm border-x border-gray-300 h-8"
              />
                <button 
                onClick={() => onAdd(product.id, 1)}
                className="w-8 h-8 flex items-center justify-center bg-white text-gray-600 hover:bg-gray-50 active:bg-gray-100"
              >
                <Plus size={14} />
              </button>
            </div>
              <button 
                onClick={() => onAdd(product.id, 100)}
                className={`px-2 py-1 text-[10px] font-bold ${theme.text} ${theme.lightBg} ${theme.border} border rounded hover:brightness-95 touch-manipulation`}
              >
                +100
              </button>
          </div>
        ) : (
          <button 
            onClick={() => onAdd(product.id, 1)}
            className={`flex items-center gap-1 px-3 py-1.5 ${theme.button} ${theme.buttonHover} text-white text-xs font-bold rounded shadow-sm active:scale-95 transition-colors`}
          >
            <ShoppingCart size={14} /> <span className="uppercase">Add to Cart</span>
          </button>
        )}
      </div>
    </div>
  );
});
