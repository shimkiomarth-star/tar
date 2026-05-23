import React from 'react';
import { ArrowUp, HelpCircle, Instagram, Globe, Mail } from 'lucide-react';
import { SiteContent } from '../types';

interface FooterProps {
  siteContent: SiteContent;
  setActiveView: (view: 'collections' | 'haircare' | 'story' | 'modestwear') => void;
}

export const Footer: React.FC<FooterProps> = ({
  siteContent,
  setActiveView
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121c17] text-[#f9f9f9] pt-20 pb-8 border-t border-emerald-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
        
        {/* Brand overview column */}
        <div className="md:col-span-5 space-y-4">
          <button 
            onClick={() => { setActiveView('collections'); scrollToTop(); }}
            className="text-left font-display font-bold text-2xl tracking-[0.2em] text-white hover:text-amber-400 transition-colors cursor-pointer"
          >
            {siteContent.brandName}
          </button>
          
          <p className="text-xs text-neutral-400 leading-relaxed max-w-sm font-sans pt-1">
            {siteContent.footerDescription}
          </p>

          <div className="flex items-center gap-3 pt-2 text-[#f9f9f9]/60">
            <a href="#instagram" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#globe" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#mail" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Links Column 1: Protocols */}
        <div className="md:col-span-2.5 space-y-3.5">
          <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#775a19]">
            The Protocols
          </h4>
          <ul className="space-y-2 text-xs text-neutral-400">
            <li>
              <button 
                onClick={() => { setActiveView('haircare'); scrollToTop(); }} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                The Haircare Edit
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setActiveView('modestwear'); scrollToTop(); }} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                The Modest Wear
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setActiveView('story'); scrollToTop(); }} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                The Modest Lookbook
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setActiveView('story'); scrollToTop(); }} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                Active Botanicals
              </button>
            </li>
            <li>
              <a href="#consultations" className="hover:text-white transition-colors">
                Confidential Consultations
              </a>
            </li>
          </ul>
        </div>

        {/* Links Column 2: Genesis info */}
        <div className="md:col-span-2.5 space-y-3.5">
          <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#775a19]">
            Philosophy
          </h4>
          <ul className="space-y-2 text-xs text-neutral-400">
            <li>
              <button 
                onClick={() => { setActiveView('story'); scrollToTop(); }} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                The Genesis
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setActiveView('story'); scrollToTop(); }} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                Core Pillars
              </button>
            </li>
            <li>
              <a href="#sustainability" className="hover:text-white transition-colors">
                Clinical Sustainability
              </a>
            </li>
            <li>
              <a href="#science" className="hover:text-white transition-colors">
                Dermatological Science
              </a>
            </li>
          </ul>
        </div>

        {/* Links Column 3: Legal compliance */}
        <div className="md:col-span-2 space-y-3.5">
          <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#775a19]">
            Assistance
          </h4>
          <ul className="space-y-2 text-xs text-neutral-400 font-sans">
            <li>
              <a href="#shipping" className="hover:text-white transition-colors">
                Complementary Delivery
              </a>
            </li>
            <li>
              <a href="#returns" className="hover:text-white transition-colors">
                Returns protocol
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white transition-colors">
                Formulation FAQs
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Allocation
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Sub-footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-sans">
        <div>
          © {new Date().getFullYear()} {siteContent.brandName} Luxe Laboratories Ltd. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
          <button
            onClick={() => setActiveView('collections')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            V1.4 Production
          </button>
          
          <button 
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-white transition-colors font-bold uppercase tracking-widest cursor-pointer"
            title="Scroll to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
