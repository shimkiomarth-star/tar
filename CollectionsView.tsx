import React, { useState } from 'react';
import { ArrowRight, Leaf, ShieldAlert, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { SiteContent, Product } from '../types';
import { ProductCard } from './ProductCard';

interface CollectionsViewProps {
  siteContent: SiteContent;
  products: Product[];
  setActiveView: (view: 'collections' | 'haircare' | 'story' | 'modestwear') => void;
  onViewProductDetails: (product: Product) => void;
  onAddToBag: (product: Product) => void;
  isAdmin: boolean;
  onEditProduct: (prodId: string) => void;
}

export const CollectionsView: React.FC<CollectionsViewProps> = ({
  siteContent,
  products,
  setActiveView,
  onViewProductDetails,
  onAddToBag,
  isAdmin,
  onEditProduct
}) => {
  const [newsEmail, setNewsEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Show first 3 products in the homepage essential section
  const essentialProducts = products.filter(p => p.category === 'haircare').slice(0, 3);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setNewsEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <div className="space-y-24 animate-fade-in">
      
      {/* 1. Vapor-smooth split hero section */}
      <section 
        id="split-hero-container" 
        className={`relative grid grid-cols-1 md:grid-cols-2 h-[80vh] min-h-[550px] overflow-hidden ${
          isAdmin ? 'ring-4 ring-amber-500/20' : ''
        }`}
      >
        {/* Left pane: RESTORATIVE HAIRCARE CARE */}
        <div className="relative group/left overflow-hidden h-full flex flex-col justify-end p-8 md:p-16 text-white cursor-pointer"
          onClick={() => setActiveView('haircare')}
        >
          {/* Background image overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={siteContent.homeHeroLeftImage} 
              alt={siteContent.homeHeroLeftTitle} 
              className="w-full h-full object-cover transition-transform duration-[2.2s] ease-out group-hover/left:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001610]/95 via-[#001610]/40 to-transparent" />
          </div>

          <div className="relative z-10 space-y-3.5 transform transition-transform duration-500">
            <span className="text-[11px] tracking-[0.3em] font-bold uppercase text-amber-400 font-sans block">
              {siteContent.homeHeroLeftSubtitle}
            </span>
            <h2 className="font-serif italic font-black text-3xl md:text-5xl tracking-tight">
              {siteContent.homeHeroLeftTitle}
            </h2>
            <p className="text-xs text-neutral-300 max-w-sm tracking-wide leading-relaxed font-sans">
              Experience the alchemy of clinical scalp-vitality and bespoke argan botanicals daily.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#f9f9f9] group-hover/left:text-amber-300 transition-colors">
              <span>{siteContent.homeHeroLeftButtonText}</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover/left:translate-x-1.5 transition-transform" />
            </div>
          </div>
        </div>

        {/* Right pane: MODESTWEAR LUXURY */}
        <div className="relative group/right overflow-hidden h-full flex flex-col justify-end p-8 md:p-16 text-white cursor-pointer"
          onClick={() => setActiveView('modestwear')}
        >
          {/* Background image overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={siteContent.homeHeroRightImage} 
              alt={siteContent.homeHeroRightTitle} 
              className="w-full h-full object-cover transition-transform duration-[2.2s] ease-out group-hover/right:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000]/95 via-[#000]/40 to-transparent" />
          </div>

          <div className="relative z-10 space-y-3.5 transform transition-transform duration-500">
            <span className="text-[11px] tracking-[0.3em] font-bold uppercase text-neutral-300 font-sans block">
              {siteContent.homeHeroRightSubtitle}
            </span>
            <h2 className="font-serif italic font-black text-3xl md:text-5xl tracking-tight">
              {siteContent.homeHeroRightTitle}
            </h2>
            <p className="text-xs text-neutral-300 max-w-sm tracking-wide leading-relaxed font-sans">
              Timeless silhouettes designed in lightweight Italian organic silks and linen arrays.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#f9f9f9] group-hover/right:text-amber-200 transition-colors">
              <span>{siteContent.homeHeroRightButtonText}</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover/right:translate-x-1.5 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Essentials: The Haircare Edit */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.25em] font-bold uppercase text-[#775a19] block">
              {siteContent.essentialsSub}
            </span>
            <h2 className="font-display font-bold text-3xl text-neutral-900 tracking-tight">
              {siteContent.essentialsTitle}
            </h2>
          </div>

          <button
            onClick={() => setActiveView('haircare')}
            className="text-xs font-bold uppercase tracking-widest text-[#001610] hover:text-[#46645b] underline underline-offset-4 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Browse Full Formulations</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Essential items grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {essentialProducts.map(p => (
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
      </section>

      {/* 3. The Modest Collection Lookbook Slices */}
      <section className="bg-neutral-100 py-20 border-y border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Content */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-[#775a19] block">
              {siteContent.modestSub}
            </span>
            <h2 className="font-serif italic font-bold text-3xl lg:text-4xl text-[#001610] tracking-tight leading-tight">
              {siteContent.modestTitle}
            </h2>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-sm">
              {siteContent.modestBody}
            </p>
            
            <div className="pt-2">
              <button
                onClick={() => setActiveView('modestwear')}
                className="bg-[#001610] hover:bg-[#46645b] text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest rounded-lg flex items-center gap-2 shadow-lg transition-transform hover:scale-105 cursor-pointer font-display"
              >
                <span>{siteContent.modestButtonText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Majestic Image Collage */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-md border border-neutral-200/40">
              <img 
                src={siteContent.modestImgLeft} 
                alt="Modest Dress Lookbook Left" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-md border border-neutral-200/40 mt-8">
              <img 
                src={siteContent.modestImgRight} 
                alt="Modest Wear Hijab Right" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Ethos: Purity in every form */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <div className="space-y-4 max-w-2xl mx-auto">
          <span className="text-[10px] tracking-[0.25em] font-bold uppercase text-[#775a19]">
            {siteContent.ethosSub}
          </span>
          <h2 className="font-serif italic font-semibold text-3xl lg:text-4xl text-[#001610] tracking-tight">
            {siteContent.ethosTitle}
          </h2>
          <p className="text-xs text-neutral-500 leading-relaxed font-sans max-w-lg mx-auto">
            {siteContent.ethosBody}
          </p>
        </div>

        {/* 3 custom statistics points */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          {siteContent.ethosStats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-neutral-200/50 shadow-sm space-y-1">
              <span className="font-display font-black text-2xl md:text-3.5xl text-[#001610] tracking-tight block">
                {stat.value}
              </span>
              <span className="text-[10px] text-neutral-400 font-sans uppercase tracking-[0.12em] font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Inner Circle Newsletter Sign Up */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#001610] text-[#f9f9f9] p-8 md:p-14 rounded-3xl relative overflow-hidden shadow-2xl">
          {/* Accent light decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 blur-3xl rounded-full" />
          
          <div className="relative z-10 max-w-xl mx-auto text-center space-y-6">
            <div className="w-10 h-10 bg-[#46645b]/40 rounded-full flex items-center justify-center mx-auto text-amber-400">
              <Leaf className="w-5 h-5 animate-spin-slow" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif italic font-bold text-2xl lg:text-3xl tracking-tight text-white leading-tight">
                {siteContent.newsletterTitle}
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed max-w-md mx-auto font-sans">
                {siteContent.newsletterBody}
              </p>
            </div>

            {subscribed ? (
              <div className="flex items-center gap-2.5 justify-center py-4 text-amber-400 font-sans font-semibold text-xs animate-fade-in bg-[#46645b]/20 rounded-xl max-w-sm mx-auto border border-amber-500/20">
                <CheckCircle2 className="w-4 h-4" />
                <span>An invitation has been dispatched to your ritual.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
                <input 
                  type="email" 
                  required
                  placeholder="Enter email for seasonal allocations"
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 text-white text-xs placeholder-neutral-400 border border-white/10 outline-none focus:ring-1 focus:ring-amber-400 transition-all font-sans"
                />
                <button 
                  type="submit"
                  className="bg-white hover:bg-neutral-100 text-[#001610] px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer font-sans"
                >
                  <span>Request Entry</span>
                  <Send className="w-3 h-3 text-[#001610]" />
                </button>
              </form>
            )}

            <div className="text-[10px] text-neutral-400">
              *By requesting entry, you agree to receive confidential allocations.
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
