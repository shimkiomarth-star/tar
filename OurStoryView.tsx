import React from 'react';
import { Beaker, Shield, Leaf, Flame, Sparkles, Heart, Activity } from 'lucide-react';
import { SiteContent } from '../types';

interface OurStoryViewProps {
  siteContent: SiteContent;
  isAdmin: boolean;
}

// Map pillar icon names from administrative configuration to Lucide React components
const PILLAR_ICON_MAP: Record<string, React.FC<any>> = {
  'Beaker': Beaker,
  'Flower': Leaf,
  'Shield': Shield,
  'Flame': Flame,
  'Sparkles': Sparkles,
  'Heart': Heart,
  'Activity': Activity
};

export const OurStoryView: React.FC<OurStoryViewProps> = ({
  siteContent,
  isAdmin
}) => {
  return (
    <div className="space-y-24 py-12 animate-fade-in">
      
      {/* 1. Genesis Layout (Asymmetrical split text & pipette image) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Genesis Narrative */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#775a19]">
              {siteContent.genesisSub}
            </span>
            <span className="w-1 h-1 bg-neutral-300 rounded-full" />
            <span className="text-[10px] font-mono text-neutral-400">Founded 2024</span>
          </div>

          <h2 className="font-serif italic font-bold text-3xl lg:text-5xl text-[#001610] tracking-tight leading-tight">
            {siteContent.genesisTitle}
          </h2>

          <div className="space-y-4 text-xs text-neutral-600 leading-relaxed font-sans">
            <p>{siteContent.genesisBody1}</p>
            <p>{siteContent.genesisBody2}</p>
          </div>

          {/* Core certifications */}
          <div className="pt-4 grid grid-cols-2 gap-4 border-t border-neutral-100 font-mono text-[10px] uppercase tracking-wider text-neutral-400">
            <div>
              <p className="font-bold text-neutral-800">ISO 22716</p>
              <p className="text-[9px] text-neutral-400">Cosmetics Good Mfg</p>
            </div>
            <div>
              <p className="font-bold text-neutral-800">GOTS CERTIFIED</p>
              <p className="text-[9px] text-neutral-400">Organic Silk Standard</p>
            </div>
          </div>
        </div>

        {/* Right Side: Pipette Visual representation */}
        <div className="lg:col-span-6 relative">
          <div className="absolute inset-0 bg-emerald-500/5 rounded-3xl blur-2xl transform rotate-2" />
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border border-neutral-200/50">
            <img 
              src={siteContent.genesisImage} 
              alt="Lumina Botanical Lab Pipette Genesis" 
              className="w-full h-full object-cover float-animation hover:scale-[1.02] transition-transform duration-[1.5s]"
            />
          </div>
        </div>
      </section>

      {/* 2. Manifesto block with wavy hair background */}
      <section className="relative h-[55vh] min-h-[380px] flex items-center justify-center p-8 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={siteContent.manifestoImage} 
            alt="Manifesto Beautiful Cascading Dark Hair Background" 
            className="w-full h-full object-cover transition-transform duration-[4s]"
          />
          {/* Immersive overlay gradients */}
          <div className="absolute inset-0 bg-neutral-900/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001610]/95 via-[#001610]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[10px] tracking-[0.3em] font-semibold uppercase text-amber-300">
            THE INTEGRAL RITUAL
          </span>
          
          <blockquote className="font-serif italic text-2xl lg:text-4.5xl tracking-tight leading-snug">
            "{siteContent.manifestoQuote}"
          </blockquote>
          
          <cite className="font-display font-medium text-[11px] uppercase tracking-widest text-neutral-300 block not-italic">
            — {siteContent.manifestoAuthor}
          </cite>
        </div>
      </section>

      {/* 3. Core Brand Pillars Structure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] tracking-[0.25em] font-bold uppercase text-[#775a19] block">
            Values without compromise
          </span>
          <h2 className="font-display font-bold text-3xl text-neutral-950 tracking-tight">
            {siteContent.pillarsTitle}
          </h2>
        </div>

        {/* Dynamic Pillar Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteContent.brandPillars.map((pillar) => {
            const IconComponent = PILLAR_ICON_MAP[pillar.icon] || Beaker;
            return (
              <div 
                key={pillar.id}
                className="bg-white p-8 rounded-2xl border border-neutral-200/60 shadow-xs hover:border-[#001610] hover:shadow-lg transition-all duration-300 text-left space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#001610]/[0.03] border border-[#001610]/10 text-[#001610] rounded-xl flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-emerald-800" />
                  </div>
                  
                  <h3 className="font-display font-bold text-base text-neutral-900 tracking-tight">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-2 text-[10px] font-mono tracking-wider text-neutral-400 capitalize">
                  Verified Standard Series
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Detailed Ingredient Spotlight (Alchemical extracts & 4 statistics) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#001610] text-[#f9f9f9] rounded-3xl p-8 lg:p-16 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#46645b]/10 blur-3xl rounded-full" />
        
        {/* Left: Spotlight Description & Stats */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-amber-300 uppercase tracking-widest bg-[#46645b]/40 px-2.5 py-1 rounded-full border border-amber-300/10">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>{siteContent.spotlightSub}</span>
            </div>
            
            <h2 className="font-serif italic font-bold text-3xl lg:text-4.5xl tracking-tight text-white leading-tight">
              {siteContent.spotlightTitle}
            </h2>
            
            <p className="text-xs text-neutral-300 leading-relaxed max-w-xl font-sans pt-1">
              {siteContent.spotlightBody}
            </p>
          </div>

          {/* 4 botanical spotlight statistics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
            {siteContent.spotlightStats.map((item, idx) => (
              <div key={idx} className="space-y-0.5">
                <span className="font-display font-black text-xl md:text-2.5xl text-white tracking-widest block">
                  {item.value}
                </span>
                <span className="text-[10px] text-neutral-400 font-sans uppercase tracking-wider font-semibold">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Immersive Sourced Landscape / Oil pipette image */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-white/10">
            <img 
              src={siteContent.spotlightImage} 
              alt="Lumina Alchemy Ingredients Cold Pressed Moringa" 
              className="w-full h-full object-cover hover:scale-[1.01] transition-transform duration-[2s]"
            />
          </div>
        </div>
      </section>

    </div>
  );
};
