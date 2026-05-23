import React, { useState } from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2, ShieldCheck, Tag, Heart } from 'lucide-react';
import { CartItem, SiteContent } from '../types';

interface TopNavBarProps {
  siteContent: SiteContent;
  activeView: 'collections' | 'haircare' | 'story' | 'modestwear';
  setActiveView: (view: 'collections' | 'haircare' | 'story' | 'modestwear') => void;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  isAdmin: boolean;
  onLoginClick: () => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  siteContent,
  activeView,
  setActiveView,
  cart,
  setCart,
  isAdmin,
  onLoginClick
}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [checkoutName, setCheckoutName] = useState('');
  const [checkoutAddress, setCheckoutAddress] = useState('');

  const cartTotalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const cartSubtotal = cart.reduce((acc, curr) => acc + (curr.product.price * curr.quantity), 0);

  const updateQuantity = (productId: string, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.product.id === productId) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: Math.max(1, newQty) };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const removeItem = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutComplete(true);
    setTimeout(() => {
      setCart([]);
      setCheckoutComplete(false);
      setIsCartOpen(false);
      setCheckoutName('');
      setCheckoutAddress('');
    }, 4000);
  };

  return (
    <>
      <header id="top-navigation-header" className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-neutral-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Name Left */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveView('collections')}
              className="group text-left cursor-pointer"
            >
              <h1 className="font-display font-bold text-2xl tracking-[0.25em] text-[#001610] transition-colors duration-300 group-hover:text-[#46645b]">
                {siteContent.brandName}
              </h1>
              <p className="text-[9px] font-sans tracking-[0.3em] uppercase text-neutral-400 mt-0.5 group-hover:text-[#775a19] transition-colors font-medium">
                {siteContent.brandSlogan}
              </p>
            </button>
            {isAdmin && (
              <span className="ml-2 px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-widest text-amber-700 bg-amber-50 rounded border border-amber-200">
                Live Admin
              </span>
            )}
          </div>

          {/* Desktop Navigation Links (Center) */}
          <nav className="hidden md:flex items-center gap-10">
            {[
              { id: 'collections', label: 'Collections' },
              { id: 'haircare', label: 'Haircare Edit' },
              { id: 'modestwear', label: 'Modest Wear' },
              { id: 'story', label: 'Our Story' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveView(link.id as any)}
                className={`font-display text-xs uppercase tracking-[0.16em] font-semibold py-2 relative transition-all duration-300 cursor-pointer ${
                  activeView === link.id 
                    ? 'text-[#001610]' 
                    : 'text-neutral-400 hover:text-[#001610]'
                }`}
              >
                <span>{link.label}</span>
                {activeView === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#001610]" />
                )}
              </button>
            ))}
          </nav>

          {/* Shopping controls & Account Right */}
          <div className="flex items-center gap-4">
            
            {/* Simple elegant secure lock icon to help highlight admin portal */}
            <button
              onClick={onLoginClick}
              title="Admin Portal Login"
              className={`p-2 rounded-full border transition-all duration-200 cursor-pointer ${
                isAdmin 
                  ? 'bg-amber-50 border-amber-300 text-amber-800' 
                  : 'border-neutral-200 hover:border-neutral-900 text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Heart className={`w-4 h-4 ${isAdmin ? 'fill-amber-600 text-amber-600' : ''}`} />
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              id="cart-drawer-toggle"
              className="group relative flex items-center gap-1.5 px-4 py-2 rounded-full border border-neutral-200 hover:border-neutral-900 bg-neutral-50/50 hover:bg-white transition-all duration-300 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-neutral-700 group-hover:text-[#001610] transition-colors" />
              <span className="font-display font-semibold text-xs text-neutral-800 tracking-wider">
                Bag
              </span>
              <span className="flex items-center justify-center bg-[#001610] text-[#f9f9f9] text-[10px] w-5 h-5 rounded-full font-bold ml-0.5 font-mono">
                {cartTotalItems}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-neutral-200 text-neutral-700 hover:text-[#001610] cursor-pointer"
            >
              <span className="font-display text-xs uppercase tracking-widest font-bold">
                {isMenuOpen ? 'Close' : 'Menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-100 bg-white/95 backdrop-blur-lg px-4 py-4 space-y-2 animate-fade-in">
            {[
              { id: 'collections', label: 'Collections' },
              { id: 'haircare', label: 'Haircare Edit' },
              { id: 'modestwear', label: 'Modest Wear' },
              { id: 'story', label: 'Our Story' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveView(link.id as any);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left font-display font-bold text-sm uppercase tracking-widest py-3 px-4 rounded-lg transition-colors cursor-pointer ${
                  activeView === link.id 
                    ? 'bg-[#001610] text-white' 
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Cart Drawer Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs">
          <div 
            onClick={() => setIsCartOpen(false)} 
            className="absolute inset-0 cursor-pointer" 
          />
          
          <div className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col z-10 overflow-hidden text-neutral-900">
            {/* Cart Drawer Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#001610]" />
                <h3 className="font-display font-semibold text-lg tracking-wide uppercase text-neutral-900">Your Bag</h3>
                <span className="text-xs text-neutral-400 font-mono">({cartTotalItems} items)</span>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-1 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 text-neutral-500" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {checkoutComplete ? (
                <div className="flex flex-col items-center justify-center text-center h-full space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                    <ShieldCheck className="w-10 h-10 animate-bounce" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-neutral-900 tracking-tight">Order Received</h4>
                  <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
                    Thank you for preparing your ritual. A complimentary consultation note and priority shipping is reserved for your shipment.
                  </p>
                  <p className="text-[10px] text-neutral-400 italic">This demo order checkout is processed successfully.</p>
                </div>
              ) : cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center h-4/5 space-y-3">
                  <div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-neutral-300" />
                  </div>
                  <p className="font-serif italic text-neutral-400">The bag is currently empty.</p>
                  <button
                    onClick={() => {
                      setActiveView('haircare');
                      setIsCartOpen(false);
                    }}
                    className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#001610] underline underline-offset-4 hover:text-[#46645b] cursor-pointer"
                  >
                    Explore Restoration Products
                  </button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.product.id} className="flex gap-4 p-4 rounded-xl border border-neutral-100 bg-neutral-50/50 hover:bg-neutral-50 transition-colors">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="w-20 h-20 object-cover rounded-md border border-neutral-200" 
                    />
                    
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 className="font-display font-bold text-sm text-neutral-900 tracking-tight leading-snug">
                            {item.product.name}
                          </h4>
                          <span className="font-mono text-sm font-bold text-neutral-900 whitespace-nowrap ml-2">
                            ${item.product.price}.00
                          </span>
                        </div>
                        <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-mono mt-0.5">
                          {item.product.badge || 'Scientific Ritual'}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Adjust qty */}
                        <div className="flex items-center border border-neutral-200 rounded-full bg-white">
                          <button
                            onClick={() => updateQuantity(item.product.id, -1)}
                            className="p-1 px-2.5 hover:bg-neutral-100 rounded-l-full text-[#001610]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono text-xs font-bold px-1.5 text-neutral-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, 1)}
                            className="p-1 px-2.5 hover:bg-neutral-100 rounded-r-full text-[#001610]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="flex items-center gap-1 text-[11px] text-neutral-400 hover:text-red-700 font-semibold transition-colors uppercase tracking-widest cursor-pointer"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer Total / Form */}
            {cart.length > 0 && !checkoutComplete && (
              <div className="border-t border-neutral-100 p-6 bg-neutral-50/50 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs uppercase tracking-widest text-neutral-500 font-semibold">Subtotal</span>
                  <span className="font-mono text-lg font-bold text-neutral-900">${cartSubtotal}.00</span>
                </div>

                <form onSubmit={handleCheckoutSubmit} className="space-y-3 pt-2">
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Jane Doe"
                      value={checkoutName}
                      onChange={(e) => setCheckoutName(e.target.value)}
                      className="w-full px-3 py-1.5 bg-white border border-neutral-200 rounded-lg text-xs focus:outline-none focus:border-[#001610] text-[#001610]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-1">Delivering Address</label>
                    <input 
                      type="text" 
                      required
                      placeholder="77 Avenue de l'Opéra, Paris"
                      value={checkoutAddress}
                      onChange={(e) => setCheckoutAddress(e.target.value)}
                      className="w-full px-3 py-1.5 bg-white border border-neutral-200 rounded-lg text-xs focus:outline-none focus:border-[#001610] text-[#001610]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 bg-[#001610] hover:bg-[#46645b] text-[#f9f9f9] py-3 rounded-lg text-xs font-semibold uppercase tracking-widest font-display shadow-lg transition-colors cursor-pointer"
                  >
                    Confirm Luxury Delivery • ${cartSubtotal}.00
                  </button>
                </form>

                <div className="flex items-center gap-1.5 justify-center text-[10px] text-neutral-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Secure SSL formulation encryption standard.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
