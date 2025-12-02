import { useState, useMemo, useCallback } from 'react';
import { POLITICIANS, PRODUCTS } from './data/constants';
import type { Politician } from './types';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { CartSummary } from './components/CartSummary';
import { ReceiptModal } from './components/ReceiptModal';
import { PoliticianMenu } from './components/PoliticianMenu';

export default function App() {
  const [selectedPolitician, setSelectedPolitician] = useState<Politician>(POLITICIANS[0]);
  const [cart, setCart] = useState<Record<string, number>>({});
  const [showReceipt, setShowReceipt] = useState<boolean>(false);
  const [showPoliticianMenu, setShowPoliticianMenu] = useState<boolean>(false);
  const [animateBalance, setAnimateBalance] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>("");

  // Calculate totals
  const totalSpent = useMemo(() => {
    return Object.entries(cart).reduce((total, [id, qty]) => {
      const product = PRODUCTS.find(p => p.id === id);
      return total + ((product?.price || 0) * qty);
    }, 0);
  }, [cart]);

  const balance = selectedPolitician.netWorth - totalSpent;

  // Handlers (Memoized to prevent unnecessary prop updates)
  const addToCart = useCallback((productId: string, qty: number = 1) => {
    setCart(prev => {
      const current = prev[productId] || 0;
      if (current + qty < 0) return prev;
      return { ...prev, [productId]: current + qty };
    });
    setAnimateBalance(true);
    setTimeout(() => setAnimateBalance(false), 200);
  }, []);

  const setQuantity = useCallback((productId: string, qtyValue: string) => {
    const safeQty = Math.max(0, parseInt(qtyValue) || 0);
    setCart(prev => ({ ...prev, [productId]: safeQty }));
  }, []);

  const clearCart = useCallback(() => setCart({}), []);

  const handleCheckout = useCallback(() => {
    setOrderId(Math.random().toString(36).substr(2, 9).toUpperCase());
    setShowReceipt(true);
  }, []);

  const handleSelectPolitician = useCallback((pol: Politician) => {
    setSelectedPolitician(pol);
    clearCart();
    setShowPoliticianMenu(false);
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 pb-32 transition-colors duration-500">
      
      <Header 
        politician={selectedPolitician}
        balance={balance}
        totalSpent={totalSpent}
        animateBalance={animateBalance}
        onOpenMenu={() => setShowPoliticianMenu(true)}
      />

      <main className="max-w-4xl mx-auto px-3 py-4 md:px-4 md:py-6">
        {/* Intro Banner */}
        <div className={`bg-linear-to-r ${selectedPolitician.theme.gradient} p-3 md:p-4 rounded-xl shadow-md mb-4 md:mb-6 border-l-4 border-yellow-400 flex items-start gap-3 text-white relative overflow-hidden transition-all duration-500`}>
          <div className="absolute right-0 top-0 opacity-10 text-9xl transform translate-x-10 -translate-y-10 rotate-12">🎫</div>
          <div className="text-2xl pt-1">📢</div>
          <div className="text-xs md:text-sm text-white/90 relative z-10">
            <strong className="text-yellow-300 block mb-1 text-base">Daily Discovery: Wealth Edition</strong> 
            Gamitin ang yaman ni <strong>{selectedPolitician.name}</strong>. Ang misyon mo: ubusin ang kanyang declared Net Worth (SALN).
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {PRODUCTS.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
              theme={selectedPolitician.theme}
              qty={cart[product.id] || 0}
              onAdd={addToCart}
              onSetQty={setQuantity}
            />
          ))}
        </div>
      </main>

      <CartSummary 
        totalSpent={totalSpent}
        totalItems={Object.values(cart).reduce((a, b) => a + b, 0)}
        theme={selectedPolitician.theme}
        onClear={clearCart}
        onCheckout={handleCheckout}
      />

      <ReceiptModal 
        show={showReceipt}
        onClose={() => setShowReceipt(false)}
        cart={cart}
        products={PRODUCTS}
        politician={selectedPolitician}
        totalSpent={totalSpent}
        orderId={orderId}
      />

      <PoliticianMenu 
        show={showPoliticianMenu}
        onClose={() => setShowPoliticianMenu(false)}
        politicians={POLITICIANS}
        selectedId={selectedPolitician.id}
        onSelect={handleSelectPolitician}
      />

      {/* Global Style for PB-Safe (bottom padding for iPhones) */}
      <style>{`
        .pb-safe { padding-bottom: env(safe-area-inset-bottom, 20px); }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 3px; }
      `}</style>
    </div>
  );
}
