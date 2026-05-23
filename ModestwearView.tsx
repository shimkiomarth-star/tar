import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, ArrowUpDown, Sparkles, Check, ChevronRight } from 'lucide-react';
import { SiteContent, Product } from '../types';
import { ProductCard } from './ProductCard';

interface ModestwearViewProps {
  siteContent: SiteContent;
  products: Product[];
  onViewProductDetails: (product: Product) => void;
  onAddToBag: (product: Product) => void;
  isAdmin: boolean;
  onEditProduct: (prodId: string) => void;
}

export const ModestwearView: React.FC<ModestwearViewProps> = ({
  siteContent,
  products,
  onViewProductDetails,
  onAddToBag,
  isAdmin,
  onEditProduct
}) => {
  // Filter States
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'alphabetical'>('featured');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Get modest wear products
  const modestwearProducts = useMemo(() => {
    return products.filter((p) => p.category === 'modestwear');
  }, [products]);

  // Toggle helpers
  const handleCollectionToggle = (type: string) => {
    setSelectedCollections((prev) =>
      prev.includes(type) ? prev.filter((item) => item !== type) : [...prev, type]
    );
  };

  const handleMaterialToggle = (material: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(material) ? prev.filter((item) => item !== material) : [...prev, material]
    );
  };

  const handleColorSelect = (hex: string) => {
    setSelectedColor((prev) => (prev === hex ? null : hex));
  };

  // Process and Filter Products
  const processedProducts = useMemo(() => {
    let list = [...modestwearProducts];

    // 1. Filter by collection (AND or OR - let's do OR if multiple are selected)
    if (selectedCollections.length > 0) {
      list = list.filter((p) => p.collectionType && selectedCollections.includes(p.collectionType));
    }

    // 2. Filter by material
    if (selectedMaterials.length > 0) {
      list = list.filter((p) => p.material && selectedMaterials.includes(p.material));
    }

    // 3. Filter by color (matching HEX or nearest color)
    if (selectedColor) {
      list = list.filter((p) => p.colorHex?.toLowerCase() === selectedColor.toLowerCase());
    }

    // 4. Sorting
    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'alphabetical') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [modestwearProducts, selectedCollections, selectedMaterials, selectedColor, sortBy]);

  const displayedProducts = useMemo(() => {
    return processedProducts.slice(0, visibleCount);
  }, [processedProducts, visibleCount]);

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedCollections([]);
    setSelectedMaterials([]);
    setSelectedColor(null);
  };

  // Colors list
  const filterColors = [
    { hex: '#001610', name: 'Midnight Emerald', bgClass: 'bg-[#001610]' },
    { hex: '#E5E0D8', name: 'Sand Beige', bgClass: 'bg-[#E5E0D8]' },
    { hex: '#4A3728', name: 'Charcoal Grey', bgClass: 'bg-[#4A3728]' },
    { hex: '#F5F5F5', name: 'Pearl White', bgClass: 'bg-[#F5F5F5] border border-neutral-300' },
    { hex: '#2E3B4E', name: 'Navy / Silver', bgClass: 'bg-[#2E3B4E]' },
    { hex: '#E5C2C2', name: 'Dusty Rose', bgClass: 'bg-[#E5C2C2]' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fade-in">
      
      {/* Editorial Header Section */}
      <section className="mb-4 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-100 pb-10">
          <div className="space-y-3">
            <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-[#775a19] block">
              New Season
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-[#001610] tracking-tight">
              The Modest Wear Collection
            </h1>
          </div>
          <p className="font-sans text-xs md:text-sm text-neutral-500 max-w-sm leading-relaxed">
            A refined blend of traditional grace and contemporary design. Flowing silhouettes crafted in breathable, exquisite fabrics for the modern visionary.
          </p>
        </div>
      </section>

      {/* Main Listing Layout Split */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">
        
        {/* Sidebar Filters */}
        <aside className="lg:col-span-1 space-y-8 bg-neutral-50/50 p-6 rounded-2xl border border-neutral-200/50 sticky top-28">
          
          <div className="flex items-center justify-between">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#001610] flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Refine View</span>
            </h2>
            {(selectedCollections.length > 0 || selectedMaterials.length > 0 || selectedColor !== null) && (
              <button 
                onClick={handleClearFilters}
                className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 hover:text-red-700 underline underline-offset-2 transition-colors cursor-pointer"
              >
                Clear All
              </button>
            )}
          </div>

          <div className="h-px bg-neutral-200" />

          {/* 1. Collection Filter group */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#775a19]">
              Collection Filter
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { id: 'Silk Series', label: 'Silk Series' },
                { id: 'Abaya Essentials', label: 'Abaya Essentials' },
                { id: 'Evening Flow', label: 'Evening Flow' }
              ].map((item) => (
                <label key={item.id} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedCollections.includes(item.id)}
                    onChange={() => handleCollectionToggle(item.id)}
                    className="w-4 h-4 rounded-sm border-neutral-300 text-[#001610] focus:ring-[#001610]"
                  />
                  <span className="text-xs font-sans text-neutral-600 group-hover:text-[#001610] transition-colors font-medium">
                    {item.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* 2. Material Filter group */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#775a19]">
              Material Texture
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { id: 'Japanese Crepe', label: 'Japanese Crepe' },
                { id: 'Organic Linen', label: 'Organic Linen' },
                { id: 'Mulberry Silk', label: 'Mulberry Silk' }
              ].map((item) => (
                <label key={item.id} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedMaterials.includes(item.id)}
                    onChange={() => handleMaterialToggle(item.id)}
                    className="w-4 h-4 rounded-sm border-neutral-300 text-[#001610] focus:ring-[#001610]"
                  />
                  <span className="text-xs font-sans text-neutral-600 group-hover:text-[#001610] transition-colors font-medium">
                    {item.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* 3. Color Palette filter */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#775a19]">
              Color Space
            </h3>
            <div className="flex flex-wrap gap-3">
              {filterColors.map((color) => {
                const isSelected = selectedColor === color.hex;
                return (
                  <button
                    key={color.hex}
                    onClick={() => handleColorSelect(color.hex)}
                    className={`w-8 h-8 rounded-full ${color.bgClass} flex items-center justify-center relative transition-transform hover:scale-110 active:scale-95 cursor-pointer`}
                    title={color.name}
                  >
                    {isSelected && (
                      <Check className={`w-4 h-4 ${color.hex === '#F5F5F5' ? 'text-neutral-800' : 'text-white'}`} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Premium Disclaimer Card inside sidebar */}
          <div className="pt-4 mt-4 border-t border-neutral-200">
            <div className="bg-white p-4 rounded-xl border border-neutral-200/50 space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-[9px] uppercase tracking-wider font-bold text-[#775a19] font-sans">
                  The Linen & Silk Ethos
                </span>
              </div>
              <p className="text-[10px] text-neutral-400 font-sans leading-relaxed">
                We select weights optimized for daily coverage and thermal exchange under active haircare protocols.
              </p>
            </div>
          </div>

        </aside>

        {/* Product Grid and Sort Panel on the Right */}
        <div className="lg:col-span-3 space-y-8">
          
          {/* Top Sort Panel bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl border border-neutral-100 shadow-xs">
            <div className="text-xs text-neutral-500 font-sans font-medium">
              Showing <span className="font-bold text-[#001610]">{processedProducts.length}</span> luxury designs
            </div>

            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-neutral-400" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#775a19]">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs bg-white border border-neutral-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#001610] font-sans font-medium text-neutral-700 hover:border-neutral-400 transition-colors"
              >
                <option value="featured">Featured Selections</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="alphabetical">Alphabetical A-Z</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          {displayedProducts.length === 0 ? (
            <div className="text-center py-20 bg-neutral-50 rounded-3xl border border-neutral-200/40 flex flex-col items-center justify-center space-y-3">
              <p className="font-serif italic text-lg text-neutral-400">No matching garments found.</p>
              <p className="text-xs text-neutral-400 max-w-sm">Consider resetting refinements or exploring our standard Silk configurations.</p>
              <button
                onClick={handleClearFilters}
                className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#001610] underline underline-offset-4 hover:text-[#46645b] cursor-pointer"
              >
                View Whole Collection
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {displayedProducts.map((p) => (
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

          {/* Load More pagination button */}
          {processedProducts.length > visibleCount && (
            <div className="pt-10 flex justify-center">
              <button
                onClick={() => setVisibleCount((prev) => prev + 3)}
                className="border border-neutral-300 hover:border-neutral-900 px-10 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#001610] hover:bg-[#001610] hover:text-[#f9f9f9] transition-all duration-500 rounded-lg flex items-center gap-3 group cursor-pointer"
              >
                <span>Discover More Designs</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
