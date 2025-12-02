import React, { useState, useEffect, useRef } from "react";
import { Users, X, Search } from "lucide-react";
import type { Politician } from "../types";
import { formatNumber } from "../lib/utils";

interface PoliticianMenuProps {
  show: boolean;
  onClose: () => void;
  politicians: Politician[];
  selectedId: string;
  onSelect: (pol: Politician) => void;
}

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
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-2xl h-[85vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col transform transition-all animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 border-b border-gray-100 shrink-0 bg-white z-10 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-black text-2xl text-gray-800 flex items-center gap-2">
                <Users className="text-gray-900" /> Select Your Politician
              </h3>
              <p className="text-sm text-gray-500">
                Choose whose wealth you want to squander.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors active:scale-95"
              aria-label="Close menu"
            >
              <X size={24} className="text-gray-500" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative group">
            <Search
              className="absolute left-3 top-3 text-gray-400 group-focus-within:text-blue-500 transition-colors"
              size={18}
            />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search politician..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Grid List */}
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
                        ""
                      )} ring-2 ${pol.theme.ring} shadow-lg scale-[1.02]`
                    : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md hover:-translate-y-1"
                }`}
              >
                {/* Theme Gradient Accent Strip */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b ${pol.theme.gradient}`}
                ></div>

                {/* Avatar Image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-gray-100 shrink-0 bg-gray-200 shadow-sm group-hover:scale-105 transition-transform relative">
                  <img
                    src={pol.image}
                    alt={pol.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                {/* Text Info */}
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-gray-900 truncate text-lg leading-tight">
                    {pol.name}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide truncate mb-1">
                    {pol.title}
                  </div>
                  <div
                    className={`inline-flex items-center px-2 py-0.5 rounded text-sm font-bold ${pol.theme.lightBg} ${pol.theme.text}`}
                  >
                    {pol.netWorth >= 1000000000
                      ? `₱${formatNumber(pol.netWorth / 1000000000)}B+`
                      : `₱${formatNumber(pol.netWorth / 1000000)}M+`}
                  </div>
                </div>

                {/* Selected Indicator Dot */}
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

        {/* Footer Note */}
        <div className="p-3 bg-white border-t border-gray-100 text-[10px] text-center text-gray-400">
          Net worth figures based on latest available SALN data.
        </div>
      </div>
    </div>
  );
};
