import { Tag, TrendingUp, Wallet, X } from 'lucide-react';
import React, { useMemo } from 'react';
import { formatMoney, formatNumber } from '../lib/utils';
import type { Politician, Product } from '../types';

type LaborMetric = { days: number; value: string; unit: string };
type RiceMetric = { days: number; value: string; unit: string; subtext?: string };

const MIN_WAGE_PER_DAY = 695; // NCR daily minimum wage (approx)
const RICE_PRICE_PER_KG = 54;
const KG_PER_DAY = 2; // 2kg/day per family
const RICE_COST_PER_DAY = RICE_PRICE_PER_KG * KG_PER_DAY; // ₱108/day

function computeLaborMetric(total: number): LaborMetric {
  const days = Math.floor(total / MIN_WAGE_PER_DAY);
  if (days <= 0) return { days: 0, value: '0', unit: 'Days' };

  if (days < 30) {
    return { days, value: days.toLocaleString(), unit: days === 1 ? 'Day' : 'Days' };
  }

  if (days < 365) {
    const months = parseFloat((days / 30).toFixed(1));
    return { days, value: months.toLocaleString(), unit: 'Months' };
  }

  const years = parseFloat((days / 365).toFixed(1));
  return { days, value: years.toLocaleString(), unit: 'Years' };
}

function computeRiceMetric(total: number): RiceMetric {
  const days = Math.floor(total / RICE_COST_PER_DAY);
  if (days <= 0) return { days: 0, value: '0', unit: 'Days of Rice', subtext: '' };

  if (days < 30) {
    return {
      days,
      value: days.toLocaleString(),
      unit: days === 1 ? 'Day of Rice' : 'Days of Rice',
      subtext: 'Could provide 2kg of rice daily for a family for this duration.'
    };
  }

  if (days < 365) {
    const months = parseFloat((days / 30).toFixed(1));
    return {
      days,
      value: months.toLocaleString(),
      unit: 'Months of Rice',
      subtext: 'Could provide 2kg of rice daily for a family for this duration.'
    };
  }

  const familiesForYear = Math.floor(days / 365);
  return {
    days,
    value: familiesForYear.toLocaleString(),
    unit: familiesForYear === 1 ? 'Family Fed' : 'Families Fed',
    subtext: 'Could provide daily rice (2kg) for this many families for an entire year.'
  };
}

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
  const { theme } = politician;

  const { labor, rice, hasImpact } = useMemo(() => {
    if (totalSpent <= 0) {
      return {
        labor: { days: 0, value: '0', unit: 'Days' },
        rice: { days: 0, value: '0', unit: 'Days of Rice', subtext: '' },
        hasImpact: false
      };
    }

    const labor = computeLaborMetric(totalSpent);
    const rice = computeRiceMetric(totalSpent);
    return { labor, rice, hasImpact: rice.days >= 1 };
  }, [totalSpent]);

  // Keep the early return below hooks so rules-of-hooks remain satisfied
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-60 bg-white md:bg-slate-900/95 overflow-hidden backdrop-blur-sm animate-in fade-in duration-200 flex items-center justify-center p-0 md:p-4">
      <div className="w-full h-full md:h-auto md:max-h-[85vh] md:max-w-lg bg-white md:rounded-xl shadow-2xl relative flex flex-col overflow-hidden">
        
        
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

        
        <div className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar bg-gray-50">
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

            <div className="flex justify-between items-center py-4 border-t border-dashed border-gray-200 mt-4 bg-white sticky bottom-0">
              <span className="font-bold text-base text-gray-600">Total Spent</span>
              <span className={`font-black text-xl ${theme.text}`}>{formatMoney(totalSpent)}</span>
            </div>
          </div>

          
          {hasImpact ? (
            <div className={`${theme.lightBg} ${theme.border} border rounded-xl p-5 space-y-4 animate-in slide-in-from-bottom-2 duration-500`}>
              <h3 className={`text-xs font-black uppercase ${theme.text} tracking-wider flex items-center gap-2`}>
                <TrendingUp size={16} /> Societal Impact Report
              </h3>
              
              {labor.days > 0 && (
                <div className="flex gap-4 items-start">
                  <div className="bg-white p-2.5 rounded-lg shadow-sm text-2xl border border-gray-100">👷</div>
                  <div>
                    <div className="font-bold text-gray-800 text-sm">
                      {labor.value} {labor.unit} of Labor
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed mt-1">
                      Equivalent to a minimum wage earner's full salary (₱695/day) for this duration.
                    </p>
                  </div>
                </div>
              )}

              {rice.days > 0 && (
                  <div className="flex gap-4 items-start">
                  <div className="bg-white p-2.5 rounded-lg shadow-sm text-2xl border border-gray-100">🍚</div>
                  <div>
                    <div className="font-bold text-gray-800 text-sm">{rice.value} {rice.unit}</div>
                    <p className="text-xs text-gray-600 leading-relaxed mt-1">
                      {rice.subtext}
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
