import React from 'react';
import { ShoppingBag, Search, Sparkles, Edit3 } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToBag: (product: Product) => void;
  isAdmin: boolean;
  onEditClick?: (prodId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onAddToBag,
  isAdmin,
  onEditClick
}) => {
  return (
    <div 
      className={`group relative bg-white rounded-2xl border transition-all duration-500 overflow-hidden flex flex-col justify-between ${
        isAdmin 
          ? 'border-amber-300 ring-2 ring-amber-500/10 hover:border-amber-500' 
          : 'border-neutral-200/60 hover:border-[#001610] hover:shadow-2xl hover:-translate-y-1'
      }`}
    >
      {/* Admin Quick Link */}
      {isAdmin && onEditClick && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEditClick(product.id);
          }}
          className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2 py-1 bg-amber-500 hover:bg-amber-600 text-white text-[10px] uppercase font-bold tracking-widest rounded-full shadow-lg transition-all"
        >
          <Edit3 className="w-3 h-3" />
          <span>Edit Formulation</span>
        </button>
      )}

      {/* Badge Top Right */}
      {product.badge && (
        <span className={`absolute top-3 right-3 z-10 px-3 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full ${
          isAdmin 
            ? 'bg-amber-100 text-amber-800'
            : 'bg-[#001610] text-[#f9f9f9]'
        }`}>
          {product.badge}
        </span>
      )}

      {/* Image Area with luxury zoom */}
      <div 
        onClick={() => onViewDetails(product)}
        className="relative aspect-square overflow-hidden cursor-pointer bg-neutral-100"
      >
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Hover overlay actions */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button 
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="p-3 bg-white rounded-full text-[#001610] hover:bg-[#001610] hover:text-white transition-colors duration-350 shadow-md cursor-pointer"
            title="Inspect Details"
          >
            <Search className="w-4 h-4" />
          </button>
          
          <button 
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onAddToBag(product);
            }}
            className="p-3 bg-[#001610] rounded-full text-white hover:bg-[#46645b] transition-colors duration-350 shadow-md cursor-pointer"
            title="Add instantly to bag"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content description area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          {/* Scientific Label info */}
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-sans tracking-widest text-[#775a19] uppercase font-bold">
              LAB-CERTIFIED
            </span>
            <span className="w-1 h-1 bg-neutral-300 rounded-full" />
            <span className="text-[10px] font-mono text-neutral-400">
              pH balanced
            </span>
          </div>

          <h3 
            onClick={() => onViewDetails(product)}
            className="font-serif italic font-semibold text-lg text-neutral-900 hover:text-[#46645b] transition-colors cursor-pointer tracking-tight"
          >
            {product.name}
          </h3>

          <p className="text-xs text-neutral-500 leading-relaxed font-sans">
            {product.description}
          </p>
        </div>

        <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-semibold">Price retail</span>
            <span className="font-mono text-base font-bold text-[#001610]">
              ${product.price}.00
            </span>
          </div>

          <button
            type="button"
            onClick={() => onAddToBag(product)}
            className="bg-[#001610]/5 hover:bg-[#001610] text-[#001610] hover:text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-lg flex items-center gap-2 transition-all duration-300 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>
    </div>
  );
};
