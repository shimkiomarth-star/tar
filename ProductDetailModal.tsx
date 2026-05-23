import React, { useState } from 'react';
import { X, ShoppingBag, Check, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onAddToBag: (product: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToBag
}) => {
  const [qty, setQty] = useState(1);
  const [success, setSuccess] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  const handleAdd = () => {
    onAddToBag(product, qty);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      {/* Background click */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 cursor-pointer" 
      />

      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden z-10 max-h-[90vh] text-neutral-900 border border-neutral-100">
        
        {/* Close Button Top Right */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white rounded-full shadow-md text-neutral-500 hover:text-[#001610] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Editorial Image Block */}
        <div className="w-full md:w-1/2 relative bg-neutral-100 flex flex-col justify-between">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 md:h-full object-cover"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-[#001610] text-[#f9f9f9] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
              {product.badge}
            </span>
          )}
        </div>

        {/* Right Side: Scientific Specifications & Purchase Panel */}
        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto flex flex-col justify-between max-h-[480px] md:max-h-full">
          <div>
            {/* Scientific credentials */}
            <div className="flex items-center gap-1.5 mb-2.5">
              <span className="text-[10px] uppercase tracking-widest text-[#775a19] font-bold">Clinical Formulation</span>
              <span className="w-1.5 h-1.5 bg-neutral-200 rounded-full" />
              <span className="text-[10px] font-mono text-neutral-400">Micro-emulsified</span>
            </div>

            <h2 className="font-serif italic font-bold text-2xl lg:text-3xl text-neutral-900 tracking-tight leading-tight">
              {product.name}
            </h2>

            {/* Price */}
            <div className="mt-2 text-xl font-mono font-bold text-[#001610]">
              ${product.price}.00
            </div>

            {/* Description */}
            <div className="mt-4 pb-4 border-b border-neutral-100">
              <p className="text-sm text-neutral-600 leading-relaxed">
                {product.details || product.description}
              </p>
            </div>

            {/* Sourced Active Ingredients */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="mt-4">
                <h4 className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">Botanical Ingredients</h4>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {product.ingredients.map(ing => (
                    <span 
                      key={ing} 
                      className="px-2.5 py-1 text-[11px] bg-neutral-50 border border-neutral-200/60 rounded-md font-sans text-neutral-600 flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3 text-[#775a19]" />
                      <span>{ing}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Application Practice guidance */}
            {product.usage && (
              <div className="mt-4 p-4 rounded-xl bg-[#001610]/[0.02] border border-[#001610]/10">
                <h4 className="text-[10px] uppercase font-bold tracking-wider text-[#001610]">The Application Practice</h4>
                <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed italic">
                  "{product.usage}"
                </p>
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="pt-6 mt-6 border-t border-neutral-100 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#775a19] font-bold">Quantity select</span>
                <span className="text-xs text-neutral-400 font-mono">Dermatological volume</span>
              </div>

              {/* Counter buttons */}
              <div className="flex items-center border border-neutral-200 rounded-full bg-white scale-105">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="px-3.5 py-1.5 text-[#001610] hover:bg-neutral-50 transition-colors font-bold rounded-l-full"
                >
                  -
                </button>
                <span className="text-sm font-semibold font-mono w-6 text-center text-neutral-900">{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="px-3.5 py-1.5 text-[#001610] hover:bg-neutral-50 transition-colors font-bold rounded-r-full"
                >
                  +
                </button>
              </div>
            </div>

            {/* Purchase Options */}
            <div className="flex gap-2.5">
              <button
                onClick={handleAdd}
                className="flex-1 bg-[#001610] hover:bg-[#46645b] text-[#f9f9f9] py-3.5 rounded-xl text-xs uppercase tracking-widest font-bold font-display shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {success ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag • ${(product.price * qty)}.00</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setWishlisted(!wishlisted)}
                className={`p-3.5 rounded-xl border transition-colors cursor-pointer ${
                  wishlisted 
                    ? 'border-red-200 bg-red-50 text-red-600' 
                    : 'border-neutral-200 hover:border-neutral-900 text-neutral-600 hover:text-neutral-900'
                }`}
                title="Save product to ritual list"
              >
                <Heart className={`w-4 h-4 ${wishlisted ? 'fill-red-600' : ''}`} />
              </button>
            </div>

            {/* Verification promise */}
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-neutral-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Complimentary organic shipping. Satisfaction backed by clinical lab review.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
