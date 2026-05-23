import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, ArrowUpDown, Sparkles, AlertCircle } from 'lucide-react';
import { SiteContent, Product } from '../types';
import { ProductCard } from './ProductCard';

interface HaircareViewProps {
  siteContent: SiteContent;
  products: Product[];
  onViewProductDetails: (product: Product) => void;
  onAddToBag: (product: Product) => void;
  isAdmin: boolean;
  onEditProduct: (prodId: string) => void;
}

// Map product IDs to hair type categories for a highly realistic scientific catalog experience
const HAIR_TYPE_MAPPINGS: Record<string, string[]> = {
  'all': ['prod-1', 'prod-2', 'prod-3', 'prod-4', 'prod-5', 'prod-6'],
  'normal': ['prod-1', 'prod-6'],
  'dry': ['prod-1', 'prod-3', 'prod-5'],
  'damaged': ['prod-3', 'prod-5', 'prod-2'],
  'fine': ['prod-4', 'prod-2']
};

export const HaircareView: React.FC<HaircareViewProps> = ({
  siteContent,
  products,
  onViewProductDetails,
  onAddToBag,
  isAdmin,
  onEditProduct
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'normal' | 'dry' | 'damaged' | 'fine'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'alphabetical'>('featured');

  // Filter and Sort implementation
  const processedProducts = useMemo(() => {
    // 1. Get products in active hair type category mapping
    const allowedIds = HAIR_TYPE_MAPPINGS[activeFilter] || [];
    let list = products.filter(p => allowedIds.includes(p.id));

    // 2. Sort the array
    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'alphabetical') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    return list;
  }, [products, activeFilter, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 animate-fade-in">
      
      {/* 1. Scientific Solutions Banner Section */}
      <section className="bg-neutral-900 text-white rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#46645b]/10 blur-3xl rounded-full" />
        
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
            <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-amber-400 font-sans">
              {siteContent.haircareSub}
            </span>
          </div>
          
          <h2 className="font-serif italic font-bold text-3xl md:text-5xl tracking-tight leading-tight">
            {siteContent.haircareTitle}
          </h2>
          
          <p className="text-xs text-neutral-300 leading-relaxed font-sans max-w-lg">
            {siteContent.haircareDescription}
          </p>

          <div className="pt-4 flex flex-wrap gap-4 text-[10px] uppercase tracking-widest text-neutral-400 font-semibold font-mono">
            <span>✓ Dermatologist Tested</span>
            <span>✓ Sulfate & Paraben Free</span>
            <span>✓ Breathable under fabrics</span>
          </div>
        </div>
      </section>

      {/* 2. Custom Filter and Sort Options Panel */}
      <section className="flex flex-col md:flex-row gap-6 md:items-center justify-between pb-6 border-b border-neutral-200">
        
        {/* Hair Type Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          <div className="flex items-center gap-1.5 text-neutral-500 mr-2">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="text-[10px] uppercase font-bold tracking-widest font-display">Target Hair:</span>
          </div>

          {[
            { id: 'all', label: 'All Protocols' },
            { id: 'normal', label: 'Normal / Daily Rinse' },
            { id: 'dry', label: 'Dry / Coarse Hydrate' },
            { id: 'damaged', label: 'Damaged / Bond Repair' },
            { id: 'fine', label: 'Fine / Volume Lift' }
          ].map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveFilter(type.id as any)}
              className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === type.id 
                  ? 'bg-[#001610] border-[#001610] text-[#f9f9f9] shadow-md' 
                  : 'bg-white border-neutral-200 text-neutral-500 hover:border-neutral-900 hover:text-[#001610]'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Sort Controls */}
        <div className="flex items-center gap-2 justify-end self-end md:self-auto select-none">
          <ArrowUpDown className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#775a19] font-display">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="text-xs bg-white border border-neutral-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#001610] font-sans font-medium text-neutral-700 hover:border-neutral-400 transition-colors"
          >
            <option value="featured">Featured Solutions</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="alphabetical">Alphabetical A-Z</option>
          </select>
        </div>

      </section>

      {/* 3. Products Grid with dynamic filtering */}
      <section className="space-y-6">
        {processedProducts.length === 0 ? (
          <div className="text-center py-20 bg-neutral-50 rounded-2xl border border-neutral-200/50 flex flex-col items-center justify-center space-y-2">
            <AlertCircle className="w-8 h-8 text-neutral-300" />
            <p className="font-serif italic text-neutral-400">No active formula matches the selection.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {processedProducts.map(p => (
              <ProductCard 
                key={p.id}
                product={p}
                onViewDetails={onViewProductDetails}
                onAddToBag={onAddToBag}
                isAdmin={isAdmin}
                onEditClick={onEditProduct}
              />
            ))}
          </div>
        )}
      </section>

      {/* 4. Brand Ingredient Scientific Guarantee Callout */}
      <section className="bg-neutral-50 border border-neutral-200/50 rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span>Botanical Integrity Clinical Guarantee</span>
          </div>
          <h3 className="font-serif italic font-bold text-xl text-neutral-900 tracking-tight">
            Our promise is absolute clarity of chemical components.
          </h3>
          <p className="text-xs text-neutral-500 leading-relaxed font-sans">
            Every wash, mist, and elixir is synthesized in ISO-certified laboratories. We omit fillers, silicones, and synthetic fragrance matrices that degrade follicles over time. We believe in providing the maximum clean breathable barrier for your scalp health.
          </p>
        </div>
        <div className="md:col-span-4 flex justify-end">
          <div className="text-center bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm w-full md:w-auto">
            <span className="font-mono text-2xl font-black text-emerald-800">100%</span>
            <span className="text-[9px] uppercase tracking-widest text-[#775a19] font-bold block mt-1">Dermal Bio-Compatibility</span>
          </div>
        </div>
      </section>

    </div>
  );
};
