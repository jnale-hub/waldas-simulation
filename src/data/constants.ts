import type { Politician, Product } from '../types';

export const POLITICIANS: Politician[] = [
  // ===========================
  // PRESIDENT & VICE PRESIDENT
  // ===========================
  {
    id: 'marcos',
    name: 'Ferdinand Marcos Jr.',
    title: 'President of the Philippines',
    netWorth: 389357000,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_R._Marcos_Jr_(cropped_portrait).jpg',
    theme: {
      gradient: 'from-red-700 to-red-800',
      button: 'bg-red-700',
      buttonHover: 'hover:bg-red-700',
      text: 'text-red-600',
      lightBg: 'bg-red-50',
      border: 'border-red-200',
      ring: 'ring-red-500'
    }
  },
  {
    id: 'sara',
    name: 'Sara Duterte',
    title: 'Vice President of the Philippines',
    netWorth: 88512370.22, // P88.5M SALN
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/VPSDPortrait.jpg',
    theme: {
      gradient: 'from-green-600 to-green-800',
      button: 'bg-green-600',
      buttonHover: 'hover:bg-green-700',
      text: 'text-green-600',
      lightBg: 'bg-green-50',
      border: 'border-green-200',
      ring: 'ring-green-500'
    }
  },

  // ===========================
  // SENATORS (Richest → Poorest)
  // ===========================

  {
    id: 'raffy-tulfo',
    name: 'Raffy Tulfo',
    title: 'Senator',
    netWorth: 1050000000, // P1.05B
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Raffy_Tulfo_(19th_Congress).jpg',
    theme: {
      gradient: 'from-blue-600 to-blue-800',
      button: 'bg-blue-600',
      buttonHover: 'hover:bg-blue-700',
      text: 'text-blue-600',
      lightBg: 'bg-blue-50',
      border: 'border-blue-200',
      ring: 'ring-blue-500'
    }
  },
  {
    id: 'erwin-tulfo',
    name: 'Erwin Tulfo',
    title: 'Senator',
    netWorth: 497000000, // P497M
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rep._Erwin_Tulfo_(19th_Congress).jpg',
    theme: {
      gradient: 'from-blue-500 to-blue-700',
      button: 'bg-blue-500',
      buttonHover: 'hover:bg-blue-600',
      text: 'text-blue-600',
      lightBg: 'bg-blue-50',
      border: 'border-blue-200',
      ring: 'ring-blue-400'
    }
  },
  {
    id: 'zubiri',
    name: 'Juan Miguel Zubiri',
    title: 'Senator',
    netWorth: 431700000,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Senator_Juan_Miguel_Zubiri_(2022)_(cropped).jpg',
    theme: {
      gradient: 'from-amber-600 to-amber-800',
      button: 'bg-amber-600',
      buttonHover: 'hover:bg-amber-700',
      text: 'text-amber-600',
      lightBg: 'bg-amber-50',
      border: 'border-amber-200',
      ring: 'ring-amber-500'
    }
  },
  {
    id: 'lacson',
    name: 'Panfilo Lacson',
    title: 'Senate President',
    netWorth: 244900000,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Senator_Panfilo_Lacson_(Commission_on_Appointments_portrait).png',
    theme: {
      gradient: 'from-slate-600 to-slate-800',
      button: 'bg-slate-600',
      buttonHover: 'hover:bg-slate-700',
      text: 'text-slate-600',
      lightBg: 'bg-slate-50',
      border: 'border-slate-200',
      ring: 'ring-slate-500'
    }
  },
  {
    id: 'padilla',
    name: 'Robin Padilla',
    title: 'Senator',
    netWorth: 244000000,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Senator_Robin_Padilla_(2023)_(cropped).jpg',
    theme: {
      gradient: 'from-yellow-600 to-yellow-800',
      button: 'bg-yellow-600',
      buttonHover: 'hover:bg-yellow-700',
      text: 'text-yellow-600',
      lightBg: 'bg-yellow-50',
      border: 'border-yellow-200',
      ring: 'ring-yellow-500'
    }
  },
  {
    id: 'lapid',
    name: 'Lito Lapid',
    title: 'Senator',
    netWorth: 202000000,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lito_Lapid_Proclaimed_as_the_Senator-elect_of_the_Philippines.jpg',
    theme: {
      gradient: 'from-amber-700 to-amber-900',
      button: 'bg-amber-700',
      buttonHover: 'hover:bg-amber-800',
      text: 'text-amber-700',
      lightBg: 'bg-amber-50',
      border: 'border-amber-200',
      ring: 'ring-amber-700'
    }
  },
  {
    id: 'sotto',
    name: 'Vicente Sotto III',
    title: 'Senator',
    netWorth: 188800000,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tito_Sotto_III_(cropped).jpg',
    theme: {
      gradient: 'from-purple-600 to-purple-800',
      button: 'bg-purple-600',
      buttonHover: 'hover:bg-purple-700',
      text: 'text-purple-600',
      lightBg: 'bg-purple-50',
      border: 'border-purple-200',
      ring: 'ring-purple-500'
    }
  },
  {
    id: 'ejercito',
    name: 'JV Ejercito',
    title: 'Senator',
    netWorth: 137000000,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Joseph_Victor_Ejercito.jpg',
    theme: {
      gradient: 'from-red-500 to-red-700',
      button: 'bg-red-500',
      buttonHover: 'hover:bg-red-600',
      text: 'text-red-600',
      lightBg: 'bg-red-50',
      border: 'border-red-200',
      ring: 'ring-red-400'
    }
  },
  {
    id: 'pia-cayetano',
    name: 'Pia Cayetano',
    title: 'Senator',
    netWorth: 128300000,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cayetano-pia19th.jpg',
    theme: {
      gradient: 'from-pink-500 to-pink-700',
      button: 'bg-pink-500',
      buttonHover: 'hover:bg-pink-600',
      text: 'text-pink-600',
      lightBg: 'bg-pink-50',
      border: 'border-pink-200',
      ring: 'ring-pink-400'
    }
  },
  {
    id: 'gatchalian',
    name: 'Win Gatchalian',
    title: 'Senator',
    netWorth: 89500000,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Senator_Win_Gatchalian_in_2025.png',
    theme: {
      gradient: 'from-emerald-500 to-emerald-700',
      button: 'bg-emerald-500',
      buttonHover: 'hover:bg-emerald-600',
      text: 'text-emerald-600',
      lightBg: 'bg-emerald-50',
      border: 'border-emerald-200',
      ring: 'ring-emerald-400'
    }
  },
  {
    id: 'bam-aquino',
    name: 'Bam Aquino',
    title: 'Senator',
    netWorth: 86500000,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Paolo_Benigno_%22Bam%22_Aquino_IV,_Senate_portrait_2025.png',
    theme: {
      gradient: 'from-orange-500 to-orange-700',
      button: 'bg-orange-500',
      buttonHover: 'hover:bg-orange-600',
      text: 'text-orange-600',
      lightBg: 'bg-orange-50',
      border: 'border-orange-200',
      ring: 'ring-orange-400'
    }
  },
  {
    id: 'legarda',
    name: 'Loren Legarda',
    title: 'Senator',
    netWorth: 79200000,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Legarda_19th.jpg',
    theme: {
      gradient: 'from-lime-600 to-lime-800',
      button: 'bg-lime-600',
      buttonHover: 'hover:bg-lime-700',
      text: 'text-lime-600',
      lightBg: 'bg-lime-50',
      border: 'border-lime-200',
      ring: 'ring-lime-500'
    }
  },
  {
    id: 'villanueva',
    name: 'Joel Villanueva',
    title: 'Senator',
    netWorth: 49500000,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Joel_Villanueva,_official_portait.jpg',
    theme: {
      gradient: 'from-yellow-500 to-yellow-700',
      button: 'bg-yellow-500',
      buttonHover: 'hover:bg-yellow-600',
      text: 'text-yellow-600',
      lightBg: 'bg-yellow-50',
      border: 'border-yellow-200',
      ring: 'ring-yellow-400'
    }
  },
  {
    id: 'pangilinan',
    name: 'Francis Pangilinan',
    title: 'Senator',
    netWorth: 26700000,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Francis_%22Kiko%22_Pangilinan,_Senate_portrait_2025.png',
    theme: {
      gradient: 'from-green-500 to-green-700',
      button: 'bg-green-500',
      buttonHover: 'hover:bg-green-600',
      text: 'text-green-600',
      lightBg: 'bg-green-50',
      border: 'border-green-200',
      ring: 'ring-green-400'
    }
  },
  {
    id: 'hontiveros',
    name: 'Risa Hontiveros',
    title: 'Senator',
    netWorth: 18990000,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Senator_Risa_Hontiveros_(2025)_(cropped).jpg',
    theme: {
      gradient: 'from-rose-500 to-rose-700',
      button: 'bg-rose-500',
      buttonHover: 'hover:bg-rose-600',
      text: 'text-rose-600',
      lightBg: 'bg-rose-50',
      border: 'border-rose-200',
      ring: 'ring-rose-400'
    }
  },
  {
    id: 'escudero',
    name: 'Francis Escudero',
    title: 'Senator',
    netWorth: 18840000,
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Francis_%22Chiz%22_G._Escudero,_Senate_portrait_2025.png',
    theme: {
      gradient: 'from-neutral-600 to-neutral-800',
      button: 'bg-neutral-600',
      buttonHover: 'hover:bg-neutral-700',
      text: 'text-neutral-600',
      lightBg: 'bg-neutral-50',
      border: 'border-neutral-200',
      ring: 'ring-neutral-500'
    }
  }
];

export const PRODUCTS: Product[] = [
  // ==========================
  // FOOD & DRINKS (Pang-masa)
  // ==========================
  {
    id: 'sardines',
    name: 'Canned Sardines',
    price: 24,
    category: 'Pagkain',
    image: 'https://cosmocashcarry.com/wp-content/uploads/2023/09/Mega-Sardines-Chilli-Red-155g.jpg',
    desc: 'Ang pambansang ulam pag gipit.',
    editorial: 'Mayaman sa calcium, at inflation.',
    discount: 15
  },
  {
    id: 'pancit',
    name: 'Instant Pancit Canton',
    price: 16,
    category: 'Pagkain',
    image: 'https://smmarkets.ph/media/catalog/product/2/0/20351788_1.png',
    desc: 'Calamansi flavor. Pagkain ng estudyante.',
    editorial: 'Midnight snack ng nag-thethesis.',
    discount: 8
  },
  {
    id: 'rice',
    name: '1kg Well-Milled Rice',
    price: 54,
    category: 'Pagkain',
    image: 'https://www.ibuypacific.com/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/f/o/food_rice_1kg_2.80_1.jpg',
    desc: 'Sinandomeng. Kanin is life.',
    editorial: 'Anyare sa bente pesos na pangako?',
    discount: 5
  },
  {
    id: 'red-horse',
    name: 'Beer (1 Case)',
    price: 1100,
    category: 'Pagkain',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrlildlLYulVD0N8VhYbwuq8rCyl_N_ZbFNg&s',
    desc: 'Extra strong. Pang-wasak ng atay.',
    editorial: 'Ang tanging solusyon sa problema ng bayan.',
    discount: 10
  },
  {
    id: 'sibuyas',
    name: 'Red Onions (1 Kilo)',
    price: 180,
    category: 'Pagkain',
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80',
    desc: 'Essential sa gisa. Minsan ginto.',
    editorial: 'Mas mahal pa sa crypto nung 2023.',
    discount: 0
  },
  {
    id: 'starbucks',
    name: 'Iced Caramel Coffee',
    price: 230,
    category: 'Pagkain',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80',
    desc: 'Pang-story sa IG, pampagising sa reality.',
    editorial: 'Isang araw na sahod ng iba, iniinom mo lang.',
    discount: 0
  },
  {
    id: 'chickenjoy',
    name: '6-pc Fried Chicken',
    price: 699,
    category: 'Pagkain',
    image: 'https://www.nicepng.com/png/detail/888-8887515_15-wedges-6-pcs-fried-chicken.png',
    desc: 'Bida ang saya ng pamilya.',
    editorial: 'Ang tunay na pambansang ibon.',
    discount: 12
  },

  // ==========================
  // BASIC COMMODITIES & BILLS
  // ==========================
  {
    id: 'wage',
    name: 'Minimum Wage (1 Day)',
    price: 645,
    category: 'Serbisyo',
    image: '👷',
    desc: 'NCR Rate. 8 oras na kayod.',
    editorial: 'Walang kasamang overtime o dignidad.',
    discount: 0
  },
  {
    id: 'lpg',
    name: 'LPG Tank (11kg)',
    price: 980,
    category: 'Commodity',
    image: 'https://www.petron.com/wp-content/uploads/2018/09/7kg.png',
    desc: 'Standard tank. Pang-luto ng pamilya.',
    editorial: 'Pag naubusan, pritong itlog na lang sa rice cooker.',
    discount: 5
  },
  {
    id: 'meralco',
    name: 'Electric Bill (Summer)',
    price: 4500,
    category: 'Commodity',
    image: '🧾',
    desc: 'Average consumption with 1 Aircon.',
    editorial: 'Gulat ka no? System loss charge pa more.',
    discount: 0
  },
  {
    id: 'gasoline',
    name: 'Full Tank Gas (SUV)',
    price: 4200,
    category: 'Commodity',
    image: '⛽️',
    desc: 'Unleaded. 60 Liters.',
    editorial: 'Weekly budget na to ng iba, pang-roadtrip mo lang.',
    discount: 2
  },

  // ==========================
  // REAL ESTATE (Lupa't Bahay)
  // ==========================
  {
    id: 'rent',
    name: 'Bedspace sa Manila',
    price: 3500,
    category: 'Real Estate',
    image: 'https://pix10.agoda.net/hotelImages/7345635/0/ddfc93cd0fcd67daad20829655b9e67c.jpg?ca=12&ce=1&s=414x232',
    desc: 'Upper bunk. Kasama kuryente at tubig.',
    editorial: 'Siksikan parang sardinas, pero at least may matutulugan.',
    discount: 0
  },
  {
    id: 'cavite-house',
    name: 'House & Lot sa Cavite',
    price: 3500000,
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
    desc: 'Rowhouse. 40sqm. "Near" Metro Manila.',
    editorial: 'Maganda sana, kaso 4 hours ang byahe papasok.',
    discount: 5
  },
  {
    id: 'condo',
    name: 'Condo sa BGC',
    price: 15000000,
    category: 'Real Estate',
    image: 'https://www.presello.com/wp-content/uploads/2025/11/585334548_1279083907571723_2979828006046289610_n.jpg',
    desc: '36sqm. Walking distance sa High Street.',
    editorial: 'Mas maliit pa sa banyo ng pulitiko, pero presyong ginto.',
    discount: 5
  },

  // ==========================
  // LUHO & OTHERS
  // ==========================
  {
    id: 'iphone',
    name: 'iPhone 16 Pro Max',
    price: 80000,
    category: 'Luho',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrAPkJr-A83pgKDpNBrRatIXniBLXptZhmZQ&s',
    desc: '1TB Storage. Titanium Finish.',
    editorial: 'Status symbol. Hulugan ng 24 months.',
    discount: 10
  },
  {
    id: 'hermes',
    name: 'Luxury Handbag',
    price: 1450000,
    category: 'Luho',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    desc: 'Togo leather. Gold hardware.',
    editorial: '3 years sa waitlist, pero barya lang sa\'yo.',
    discount: 2
  },
  {
    id: 'ferrari',
    name: 'Luxury Sports Car',
    price: 35000000,
    category: 'Luho',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80',
    desc: 'V6 Hybrid. 0-100kph in 2.9s.',
    editorial: 'Tengga sa EDSA, pero pogi sa garahe.',
    discount: 3
  },
  {
    id: 'vote',
    name: 'Vote Buying (Barangay)',
    price: 500000,
    category: 'Politika',
    image: '👨',
    desc: 'Hypothetical "logistics" para sa eleksyon.',
    editorial: 'Bato-bato sa langit.',
    discount: 20
  }
];
