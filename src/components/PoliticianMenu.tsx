import { Search, Users, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { formatNumber } from "../lib/utils";
import type { Politician } from "../types";

interface PoliticianMenuProps {
  show: boolean;
  onClose: () => void;
  politicians: Politician[];
  selectedId: string;
  onSelect: (pol: Politician) => void;
}

// Politician selection modal
export const PoliticianMenu: React.FC<PoliticianMenuProps> = ({
  show,
  onClose,
  politicians,
  selectedId,
  onSelect,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (show && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [show]);

  if (!show) return null;

  const filtered = politicians.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="fixed inset-0 z-60 bg-white md:bg-slate-900/40 overflow-hidden animate-in fade-in duration-200 flex items-center justify-center p-0 md:p-4">
      <div
        className="w-full h-full md:h-auto md:max-h-[85vh] md:max-w-2xl bg-white md:rounded-xl shadow-2xl relative flex flex-col overflow-hidden transform transition-all animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-linear-to-l from-slate-800 to-slate-700 text-white p-5 md:p-6 relative overflow-hidden shrink-0 transition-colors duration-500">
          <div className="absolute -right-4 -top-4 text-9xl opacity-5 rotate-12 select-none pointer-events-none">
            🏛️
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 touch-manipulation z-20 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>

          <div className="relative z-10 mb-5">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-1 flex items-center gap-2">
              <Users size={22} /> Select Your Politician
            </h2>
            <p className="text-white/60 text-xs md:text-sm font-medium">
              Choose whose net worth you want to spend today.
            </p>
          </div>

          <div className="relative group z-10">
            <Search
              className="absolute left-3 top-3.5 text-gray-400 transition-colors"
              size={18}
            />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search politician..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-gray-400 focus:bg-white/20 focus:border-white/30 transition-all outline-none backdrop-blur-md"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50 custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filtered.map((pol) => (
              <button
                key={pol.id}
                onClick={() => onSelect(pol)}
                className={`relative flex items-center gap-4 p-4 rounded-xl transition-all border text-left group overflow-hidden ${
                  selectedId === pol.id
                    ? `bg-white border-${pol.theme.ring.replace(
                        "ring-",
                        "",
                      )} ring-1 ${pol.theme.ring} shadow-lg scale-[1.02]`
                    : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md hover:-translate-y-1"
                }`}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-gray-100 shrink-0 bg-gray-200 shadow-sm group-hover:scale-105 transition-transform relative">
                  <img
                    src={pol.image}
                    alt={pol.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="font-bold text-gray-900 truncate text-base md:text-lg leading-tight">
                    {pol.name}
                  </div>
                  <div className="text-[11px] md:text-xs text-gray-500 uppercase tracking-wide truncate mb-1.5 mt-0.5">
                    {pol.title}
                  </div>
                  <div
                    className={`inline-flex items-center px-2 py-0.5 rounded text-xs md:text-sm font-bold ${pol.theme.lightBg} ${pol.theme.text}`}
                  >
                    {pol.netWorth >= 1000000000
                      ? `₱${formatNumber(pol.netWorth / 1000000000)}B+`
                      : `₱${formatNumber(pol.netWorth / 1000000)}M+`}
                  </div>
                </div>

                {selectedId === pol.id && (
                  <div
                    className={`absolute right-3 top-3 w-3 h-3 rounded-full ${pol.theme.button} ring-2 ring-white`}
                  ></div>
                )}
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-400 flex flex-col items-center">
              <Search size={48} className="opacity-20 mb-4" />
              <p>No politicians found.</p>
            </div>
          )}
        </div>

        <div className="p-3 bg-white border-t border-gray-100 md:rounded-b-xl shrink-0 z-20 text-[10px] text-center text-gray-400 uppercase tracking-wider font-semibold">
          Net worth figures based on latest available SALN data.
        </div>
      </div>
    </div>
  );
};
