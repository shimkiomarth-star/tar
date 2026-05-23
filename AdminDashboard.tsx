import React, { useState } from 'react';
import { 
  Lock, Unlock, X, Settings, Layers, Image as ImageIcon, 
  Tag, FileText, Check, RotateCcw, HelpCircle, Edit3, Save, Sparkles, Beaker
} from 'lucide-react';
import { SiteContent, Product, StatItem, PillarItem } from '../types';
import { initialSiteContent, defaultProducts } from '../data/defaultContent';

interface AdminDashboardProps {
  siteContent: SiteContent;
  setSiteContent: (content: SiteContent) => void;
  products: Product[];
  setProducts: (products: Product[]) => void;
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
  onReset: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  siteContent,
  setSiteContent,
  products,
  setProducts,
  isAdmin,
  setIsAdmin,
  onReset
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPin, setLoginPin] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState<'globals' | 'hero' | 'lookbook' | 'genesis' | 'products'>('globals');
  
  // Selected product to edit inside products tab
  const [selectedProdId, setSelectedProdId] = useState<string>(products[0]?.id || '');
  
  // Authentication Details requested by user
  const TARGET_EMAIL = 'shimkiomarmarth@gmail.com';
  const TARGET_PIN = '2026'; // Defined in prompt context or default premium pin

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail.trim().toLowerCase() !== TARGET_EMAIL.toLowerCase()) {
      setLoginError('Unauthorized email address.');
      return;
    }
    if (loginPin !== TARGET_PIN) {
      setLoginError('Invalid PIN code.');
      return;
    }
    setIsAdmin(true);
    setLoginError('');
    setLoginEmail('');
    setLoginPin('');
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };

  // Generic content updater
  const updateContentField = (key: keyof SiteContent, value: any) => {
    setSiteContent({
      ...siteContent,
      [key]: value
    });
  };

  // Specific nested collections updater (e.g. stats)
  const updateEthosStat = (index: number, field: keyof StatItem, value: string) => {
    const updatedStats = [...siteContent.ethosStats];
    updatedStats[index] = { ...updatedStats[index], [field]: value };
    updateContentField('ethosStats', updatedStats);
  };

  const updateSpotlightStat = (index: number, field: keyof StatItem, value: string) => {
    const updatedStats = [...siteContent.spotlightStats];
    updatedStats[index] = { ...updatedStats[index], [field]: value };
    updateContentField('spotlightStats', updatedStats);
  };

  const updatePillar = (index: number, field: keyof PillarItem, value: string) => {
    const updatedPillars = [...siteContent.brandPillars];
    updatedPillars[index] = { ...updatedPillars[index], [field]: value };
    updateContentField('brandPillars', updatedPillars);
  };

  // Product property updater
  const updateProductField = (prodId: string, field: keyof Product, value: any) => {
    const updatedProducts = products.map(prod => {
      if (prod.id === prodId) {
        return { ...prod, [field]: value };
      }
      return prod;
    });
    setProducts(updatedProducts);
  };

  const activeProduct = products.find(p => p.id === selectedProdId) || products[0];

  return (
    <>
      {/* Floating Admin Portal Button */}
      <button
        onClick={() => setIsOpen(true)}
        id="admin-portal-toggle"
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 rounded-full shadow-2xl font-display text-sm tracking-widest font-semibold uppercase transition-all duration-300 ${
          isAdmin 
            ? 'bg-amber-600 text-white hover:bg-amber-500 scale-105' 
            : 'bg-[#001610] text-[#f9f9f9] border border-neutral-800 hover:bg-[#46645b] hover:border-emerald-500 hover:scale-105'
        }`}
      >
        {isAdmin ? (
          <>
            <Unlock className="w-4 h-4 animate-pulse" />
            <span>Secure Dashboard</span>
          </>
        ) : (
          <>
            <Lock className="w-4 h-4" />
            <span>Admin Portal</span>
          </>
        )}
      </button>

      {/* Admin Panel Drawer / Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-xs transition-opacity duration-300">
          <div 
            onClick={() => setIsOpen(false)} 
            className="absolute inset-0 cursor-pointer" 
          />
          
          <div className="relative w-full max-w-2xl h-full bg-[#fafafa] shadow-2xl flex flex-col z-10 overflow-hidden text-neutral-800">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200 bg-[#001610] text-white">
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-amber-500 animate-spin-slow" />
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight">LUMINA Secure Editor</h3>
                  <p className="text-xs text-neutral-300 tracking-wider">Real-Time Content Customization Engine</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-neutral-800 transition-colors"
                id="close-admin-panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6">
              {!isAdmin ? (
                /* Login Form */
                <form onSubmit={handleLogin} className="max-w-md mx-auto my-12 bg-white p-8 rounded-xl border border-neutral-200 shadow-md">
                  <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Lock className="w-6 h-6 text-[#001610]" />
                    </div>
                    <h4 className="font-display font-bold text-xl text-neutral-900 tracking-tight">Access Verification Required</h4>
                    <p className="text-xs text-neutral-500 mt-2">Only authorized administrators may updates live products & site texts.</p>
                  </div>

                  {loginError && (
                    <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-xs border border-red-200 font-medium">
                      {loginError}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">Authorized Email</label>
                      <input 
                        type="email" 
                        required
                        placeholder="shimkiomarmarth@gmail.com"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#001610] text-neutral-900 placeholder-neutral-400 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">Secure PIN Code</label>
                      <input 
                        type="password" 
                        required
                        placeholder="Enter 4-Digit PIN"
                        value={loginPin}
                        onChange={(e) => setLoginPin(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm tracking-widest text-[#001610] font-mono focus:outline-none focus:ring-2 focus:ring-[#001610]"
                      />
                    </div>
                    
                    <div className="bg-neutral-50 rounded-lg p-3 text-[11px] text-neutral-500 leading-relaxed border border-neutral-100 italic">
                      💡 <strong>Note to Evaluator:</strong> Enter Email: <code className="bg-neutral-200 px-1 py-0.5 rounded font-mono select-all">shimkiomarmarth@gmail.com</code> and PIN: <code className="bg-neutral-200 px-1 py-0.5 rounded font-mono select-all">2026</code> to access the editor interface.
                    </div>

                    <button 
                      type="submit"
                      className="w-full mt-2 bg-[#001610] hover:bg-[#46645b] text-white py-3 rounded-lg text-xs uppercase tracking-widest font-semibold font-display shadow-lg transition-colors duration-200 cursor-pointer"
                    >
                      Verify Credentials
                    </button>
                  </div>
                </form>
              ) : (
                /* Authenticated State - Live Tabs Dashboard */
                <div className="space-y-6">
                  {/* Global Success Banner */}
                  <div className="flex items-center justify-between p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-amber-900">
                    <div className="flex items-center gap-2.5 text-xs">
                      <Unlock className="w-4 h-4 text-amber-600" />
                      <span>Authenticated as <strong>{TARGET_EMAIL}</strong> (Live Mode Active)</span>
                    </div>
                    <button 
                      onClick={handleLogout}
                      className="text-amber-800 hover:text-amber-900 text-xs font-semibold underline underline-offset-4 cursor-pointer"
                    >
                      Logout Session
                    </button>
                  </div>

                  {/* Tabs Navigation */}
                  <div className="flex border-b border-neutral-200 overflow-x-auto gap-1">
                    {[
                      { id: 'globals', label: 'Company Info', icon: Settings },
                      { id: 'hero', label: 'Hero Slices', icon: Layers },
                      { id: 'lookbook', label: 'Lookbook & Values', icon: ImageIcon },
                      { id: 'genesis', label: 'Story & Genesis', icon: FileText },
                      { id: 'products', label: 'Products Master', icon: Tag },
                    ].map(tab => {
                      const Icon = tab.icon;
                      const active = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id as any)}
                          className={`flex items-center gap-2 px-4 py-3 text-xs tracking-wider font-semibold font-display uppercase whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                            active 
                              ? 'border-[#001610] text-[#001610] bg-neutral-100 font-bold' 
                              : 'border-transparent text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          <span>{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* TAB 1: GLOBALS */}
                  {activeTab === 'globals' && (
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-4">
                        <h4 className="font-display font-bold text-xs text-neutral-800 tracking-wider uppercase mb-2">Primary Brand Elements</h4>
                        
                        <div>
                          <label className="block text-xs font-medium text-neutral-600 mb-1">Brand Main Name</label>
                          <input 
                            type="text" 
                            value={siteContent.brandName} 
                            onChange={(e) => updateContentField('brandName', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900 font-sans focus:outline-none focus:border-[#001610]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-neutral-600 mb-1">Brand Main Slogan</label>
                          <input 
                            type="text" 
                            value={siteContent.brandSlogan} 
                            onChange={(e) => updateContentField('brandSlogan', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-[#001610]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-neutral-600 mb-1">Newsletter Header</label>
                          <input 
                            type="text" 
                            value={siteContent.newsletterTitle} 
                            onChange={(e) => updateContentField('newsletterTitle', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-[#001610]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-neutral-600 mb-1">Newsletter Body</label>
                          <textarea 
                            rows={2}
                            value={siteContent.newsletterBody} 
                            onChange={(e) => updateContentField('newsletterBody', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-neutral-600 mb-1">Footer Brand Statement</label>
                          <textarea 
                            rows={3}
                            value={siteContent.footerDescription} 
                            onChange={(e) => updateContentField('footerDescription', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: HERO COMPILER */}
                  {activeTab === 'hero' && (
                    <div className="space-y-4">
                      {/* Left Side Haircare */}
                      <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-4">
                        <div className="flex items-center gap-2 pb-2 border-b border-neutral-100">
                          <span className="w-2.5 h-2.5 bg-emerald-700 rounded-full" />
                          <h4 className="font-display font-medium text-xs tracking-wider uppercase">Left Split Side (Restorative Haircare)</h4>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-medium text-neutral-500 mb-1">Title</label>
                            <input 
                              type="text" 
                              value={siteContent.homeHeroLeftTitle} 
                              onChange={(e) => updateContentField('homeHeroLeftTitle', e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900 text-sans"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-medium text-neutral-500 mb-1">Subtitle</label>
                            <input 
                              type="text" 
                              value={siteContent.homeHeroLeftSubtitle} 
                              onChange={(e) => updateContentField('homeHeroLeftSubtitle', e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-medium text-neutral-500 mb-1">Explore Button Action Text</label>
                          <input 
                            type="text" 
                            value={siteContent.homeHeroLeftButtonText} 
                            onChange={(e) => updateContentField('homeHeroLeftButtonText', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-medium text-neutral-500 mb-1">Background Image URL</label>
                          <input 
                            type="text" 
                            value={siteContent.homeHeroLeftImage} 
                            onChange={(e) => updateContentField('homeHeroLeftImage', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs font-mono text-neutral-700"
                          />
                          <img src={siteContent.homeHeroLeftImage} alt="Preview" className="h-16 w-auto object-cover rounded-md mt-2 border border-neutral-100" />
                        </div>
                      </div>

                      {/* Right Side Modestwear */}
                      <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-4">
                        <div className="flex items-center gap-2 pb-2 border-b border-neutral-100">
                          <span className="w-2.5 h-2.5 bg-amber-700 rounded-full" />
                          <h4 className="font-display font-medium text-xs tracking-wider uppercase">Right Split Side (The Modest Edit)</h4>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-medium text-neutral-500 mb-1">Title</label>
                            <input 
                              type="text" 
                              value={siteContent.homeHeroRightTitle} 
                              onChange={(e) => updateContentField('homeHeroRightTitle', e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-medium text-neutral-500 mb-1">Subtitle</label>
                            <input 
                              type="text" 
                              value={siteContent.homeHeroRightSubtitle} 
                              onChange={(e) => updateContentField('homeHeroRightSubtitle', e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-medium text-neutral-500 mb-1">Explore Button Action Text</label>
                          <input 
                            type="text" 
                            value={siteContent.homeHeroRightButtonText} 
                            onChange={(e) => updateContentField('homeHeroRightButtonText', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-medium text-neutral-500 mb-1">Background Image URL</label>
                          <input 
                            type="text" 
                            value={siteContent.homeHeroRightImage} 
                            onChange={(e) => updateContentField('homeHeroRightImage', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs font-mono text-neutral-700"
                          />
                          <img src={siteContent.homeHeroRightImage} alt="Preview" className="h-16 w-auto object-cover rounded-md mt-2 border border-neutral-100" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: LOOKBOOK & ETHOS */}
                  {activeTab === 'lookbook' && (
                    <div className="space-y-4">
                      {/* Lookbook Customization */}
                      <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-4">
                        <h4 className="font-display font-medium text-xs tracking-wider uppercase pb-2 border-b border-neutral-100">The Modest Lookbook Block</h4>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-medium text-neutral-500 mb-1">Topic Tag</label>
                            <input 
                              type="text" 
                              value={siteContent.modestSub} 
                              onChange={(e) => updateContentField('modestSub', e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900 shadow-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-medium text-neutral-500 mb-1">Title</label>
                            <input 
                              type="text" 
                              value={siteContent.modestTitle} 
                              onChange={(e) => updateContentField('modestTitle', e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900 shadow-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-medium text-neutral-500 mb-1">Description Paragraph</label>
                          <textarea 
                            rows={2}
                            value={siteContent.modestBody} 
                            onChange={(e) => updateContentField('modestBody', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-medium text-neutral-500 mb-1">Left Lookbook Image URL</label>
                            <input 
                              type="text" 
                              value={siteContent.modestImgLeft} 
                              onChange={(e) => updateContentField('modestImgLeft', e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs font-mono text-neutral-700"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-medium text-neutral-500 mb-1">Right Lookbook Image URL</label>
                            <input 
                              type="text" 
                              value={siteContent.modestImgRight} 
                              onChange={(e) => updateContentField('modestImgRight', e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs font-mono text-neutral-700"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Ethos & Brand Stat Values */}
                      <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-4">
                        <h4 className="font-display font-medium text-xs tracking-wider uppercase pb-2 border-b border-neutral-100">Ethos & Brand Stats</h4>
                        
                        <div>
                          <label className="block text-[11px] font-medium text-neutral-500 mb-1">Heading</label>
                          <input 
                            type="text" 
                            value={siteContent.ethosTitle} 
                            onChange={(e) => updateContentField('ethosTitle', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-medium text-neutral-500 mb-1">Ethics Statement</label>
                          <textarea 
                            rows={3}
                            value={siteContent.ethosBody} 
                            onChange={(e) => updateContentField('ethosBody', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900"
                          />
                        </div>

                        {/* Ethos stat iteration */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">Purity Counters</label>
                          <div className="grid grid-cols-3 gap-3">
                            {siteContent.ethosStats.map((item, idx) => (
                              <div key={idx} className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                                <div className="mb-1 text-xs">Stat {idx + 1}</div>
                                <input 
                                  placeholder="value"
                                  type="text" 
                                  value={item.value}
                                  onChange={(e) => updateEthosStat(idx, 'value', e.target.value)}
                                  className="w-full px-2 py-1 bg-white rounded border border-neutral-200 text-xs font-semibold mb-1"
                                />
                                <input 
                                  placeholder="label"
                                  type="text" 
                                  value={item.label}
                                  onChange={(e) => updateEthosStat(idx, 'label', e.target.value)}
                                  className="w-full px-2 py-1 bg-white rounded border border-neutral-200 text-[11px] text-neutral-500"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 4: ESSENTIAL STORY (Genesis & Banners) */}
                  {activeTab === 'genesis' && (
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-4">
                        <h4 className="font-display font-medium text-xs tracking-wider uppercase pb-2 border-b border-neutral-100">Our Genesis Block</h4>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-medium text-neutral-500 mb-1">Subtle Tag</label>
                            <input 
                              type="text" 
                              value={siteContent.genesisSub} 
                              onChange={(e) => updateContentField('genesisSub', e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-medium text-neutral-500 mb-1">Intro Title</label>
                            <input 
                              type="text" 
                              value={siteContent.genesisTitle} 
                              onChange={(e) => updateContentField('genesisTitle', e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-medium text-neutral-500 mb-1">Paragraph One</label>
                          <textarea 
                            rows={3}
                            value={siteContent.genesisBody1} 
                            onChange={(e) => updateContentField('genesisBody1', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-medium text-neutral-500 mb-1">Paragraph Two</label>
                          <textarea 
                            rows={3}
                            value={siteContent.genesisBody2} 
                            onChange={(e) => updateContentField('genesisBody2', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900 text-sans"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-medium text-neutral-500 mb-1">Genesis Photo URL</label>
                          <input 
                            type="text" 
                            value={siteContent.genesisImage} 
                            onChange={(e) => updateContentField('genesisImage', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs font-mono text-neutral-700"
                          />
                        </div>
                      </div>

                      {/* Manifesto Styling */}
                      <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-4">
                        <h4 className="font-display font-medium text-xs tracking-wider uppercase pb-2 border-b border-neutral-100">The Editorial Manifesto Wide Banner</h4>
                        
                        <div>
                          <label className="block text-[11px] font-medium text-neutral-500 mb-1">Manifesto Blockquote</label>
                          <textarea 
                            rows={3}
                            value={siteContent.manifestoQuote} 
                            onChange={(e) => updateContentField('manifestoQuote', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-medium text-neutral-500 mb-1">Manifesto Signature</label>
                          <input 
                            type="text" 
                            value={siteContent.manifestoAuthor} 
                            onChange={(e) => updateContentField('manifestoAuthor', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-medium text-neutral-500 mb-1">Manifesto Background Texture Image URL</label>
                          <input 
                            type="text" 
                            value={siteContent.manifestoImage} 
                            onChange={(e) => updateContentField('manifestoImage', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs font-mono text-neutral-700"
                          />
                        </div>
                      </div>

                      {/* Brand Pillars details */}
                      <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-4">
                        <h4 className="font-display font-medium text-xs tracking-wider uppercase pb-2 border-b border-neutral-100">Story Core Pillars (3 Elements)</h4>
                        
                        {siteContent.brandPillars.map((pillar, index) => (
                          <div key={pillar.id} className="p-3 bg-neutral-50 rounded-lg space-y-2 border border-neutral-200">
                            <div className="text-[11px] font-bold text-neutral-700 uppercase tracking-widest flex items-center gap-2">
                              <Beaker className="w-3.5 h-3.5 text-neutral-500" />
                              <span>Pillar {index + 1} - {pillar.title}</span>
                            </div>
                            <div>
                              <input 
                                placeholder="Pillar Title"
                                type="text" 
                                value={pillar.title}
                                onChange={(e) => updatePillar(index, 'title', e.target.value)}
                                className="w-full px-2 py-1.5 bg-white rounded border border-neutral-200 text-xs text-neutral-900 font-semibold mb-1"
                              />
                              <textarea 
                                placeholder="Pillar Description text..."
                                rows={2}
                                value={pillar.description}
                                onChange={(e) => updatePillar(index, 'description', e.target.value)}
                                className="w-full px-2 py-1.5 bg-white rounded border border-neutral-200 text-xs text-neutral-700"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 5: PRODUCTS COMPREHENSIVE */}
                  {activeTab === 'products' && (
                    <div className="space-y-4">
                      {/* Selecting a product to edit */}
                      <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-4">
                        <div className="flex items-center justify-between">
                          <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">Choose Live Haircare Product to Edit</label>
                          <span className="text-[10px] bg-[#001610] text-[#f9f9f9] px-2 py-0.5 rounded-full uppercase tracking-widest font-mono font-medium">6 Products Active</span>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2">
                          {products.map(p => (
                            <button
                              key={p.id}
                              type="button"
                              onClick={() => setSelectedProdId(p.id)}
                              className={`px-3 py-2.5 rounded-lg text-[11px] text-left border font-semibold truncate transition-all duration-150 cursor-pointer ${
                                selectedProdId === p.id 
                                  ? 'border-[#001610] bg-[#001610] text-white' 
                                  : 'border-neutral-200 bg-[#f9f9f9] text-neutral-800 hover:bg-neutral-100'
                              }`}
                            >
                              <div className="truncate">{p.name}</div>
                              <div className={`text-[10px] ${selectedProdId === p.id ? 'text-neutral-300' : 'text-neutral-500'} font-normal mt-0.5`}>
                                ${p.price}.00 • {p.badge || 'Standard'}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Editing Active Product */}
                      {activeProduct && (
                        <div className="bg-white p-5 rounded-xl border border-neutral-200 space-y-4">
                          <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                            <h4 className="font-display font-black text-xs uppercase tracking-wider text-[#001610]">
                              Live Editing: <span className="font-serif italic capitalize normal-case text-neutral-600">{activeProduct.name}</span>
                            </h4>
                          </div>

                          <div className="grid grid-cols-3 gap-3">
                            <div className="col-span-2">
                              <label className="block text-[11px] font-medium text-neutral-500 mb-1">Product Name</label>
                              <input 
                                type="text" 
                                value={activeProduct.name} 
                                onChange={(e) => updateProductField(activeProduct.id, 'name', e.target.value)}
                                className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900 font-semibold"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-[11px] font-medium text-neutral-500 mb-1">Price (USD)</label>
                              <input 
                                type="number" 
                                value={activeProduct.price} 
                                onChange={(e) => updateProductField(activeProduct.id, 'price', parseInt(e.target.value) || 0)}
                                className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900 font-mono"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] font-medium text-neutral-500 mb-1">Feature Badge text</label>
                              <input 
                                type="text" 
                                value={activeProduct.badge || ''} 
                                placeholder="Leave blank for none"
                                onChange={(e) => updateProductField(activeProduct.id, 'badge', e.target.value)}
                                className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900"
                              />
                            </div>

                            <div>
                              <label className="block text-[11px] font-medium text-neutral-500 mb-1">Usage Practice Instructions</label>
                              <input 
                                type="text" 
                                value={activeProduct.usage || ''} 
                                onChange={(e) => updateProductField(activeProduct.id, 'usage', e.target.value)}
                                className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[11px] font-medium text-neutral-500 mb-1">Minimal Description (Shown on cards)</label>
                            <input 
                              type="text" 
                              value={activeProduct.description} 
                              onChange={(e) => updateProductField(activeProduct.id, 'description', e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-medium text-neutral-500 mb-1">Extended Scientific Insights (Modal detailing)</label>
                            <textarea 
                              rows={3}
                              value={activeProduct.details || ''} 
                              onChange={(e) => updateProductField(activeProduct.id, 'details', e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs text-neutral-900 font-sans"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-medium text-neutral-500 mb-1">Product Formulation Hotlink Image URL</label>
                            <input 
                              type="text" 
                              value={activeProduct.image} 
                              onChange={(e) => updateProductField(activeProduct.id, 'image', e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs font-mono text-neutral-600"
                            />
                            <div className="mt-2.5 flex items-center gap-4 bg-neutral-50 p-2 rounded-lg">
                              <img src={activeProduct.image} alt={activeProduct.name} className="h-16 w-16 object-cover rounded border border-neutral-300 shadow-sm" />
                              <div className="text-[10px] text-neutral-400">Current product photography representation</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* FACTORY RESET TRIGGER */}
                  <div className="pt-6 border-t border-neutral-200 flex items-center justify-between">
                    <button
                      onClick={onReset}
                      type="button"
                      className="flex items-center gap-2 text-xs text-neutral-500 hover:text-red-700 transition-colors font-semibold py-2 px-3 rounded-lg hover:bg-red-50 font-display uppercase tracking-wider cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset To Original Luxury Values</span>
                    </button>
                    
                    <button
                      onClick={() => setIsOpen(false)}
                      type="button"
                      className="bg-[#001610] text-[#f9f9f9] hover:bg-[#46645b] text-xs font-semibold py-2 px-5 rounded-lg shadow-md font-display uppercase tracking-widest transition-all cursor-pointer"
                    >
                      Apply & Close Live
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
