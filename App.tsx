/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { SiteContent, Product, CartItem } from './types';
import { initialSiteContent, defaultProducts } from './data/defaultContent';
import { TopNavBar } from './components/TopNavBar';
import { CollectionsView } from './components/CollectionsView';
import { HaircareView } from './components/HaircareView';
import { ModestwearView } from './components/ModestwearView';
import { OurStoryView } from './components/OurStoryView';
import { AdminDashboard } from './components/AdminDashboard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { Footer } from './components/Footer';

export default function App() {
  // --- STATE PERSISTENCE ---
  const [siteContent, setSiteContent] = useState<SiteContent>(() => {
    try {
      const saved = localStorage.getItem('lumina_site_content_v1');
      return saved ? JSON.parse(saved) : initialSiteContent;
    } catch {
      return initialSiteContent;
    }
  });

  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('lumina_products_v1');
      return saved ? JSON.parse(saved) : defaultProducts;
    } catch {
      return defaultProducts;
    }
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('lumina_cart_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeView, setActiveView] = useState<'collections' | 'haircare' | 'story' | 'modestwear'>('collections');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    try {
      return localStorage.getItem('lumina_is_admin') === 'true';
    } catch {
      return false;
    }
  });

  // Sync Content changes to Local Storage for real-time retention
  useEffect(() => {
    localStorage.setItem('lumina_site_content_v1', JSON.stringify(siteContent));
  }, [siteContent]);

  useEffect(() => {
    localStorage.setItem('lumina_products_v1', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('lumina_cart_v1', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('lumina_is_admin', String(isAdmin));
  }, [isAdmin]);

  // --- ACTIONS ---
  const handleAddToBag = (product: Product, quantity = 1) => {
    setCart(prev => {
      const existingIdx = prev.findIndex(item => item.product.id === product.id);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleResetToFactory = () => {
    if (window.confirm('Are you authorized to revert all site customized text and images back to absolute premium factory defaults?')) {
      setSiteContent(initialSiteContent);
      setProducts(defaultProducts);
      setCart([]);
      setSelectedProduct(null);
      setIsAdmin(false);
      localStorage.removeItem('lumina_site_content_v1');
      localStorage.removeItem('lumina_products_v1');
      localStorage.removeItem('lumina_cart_v1');
      localStorage.removeItem('lumina_is_admin');
      alert('LUMINA Factory configurations restored successfully.');
    }
  };

  // Helper when admin requests editing a specific product directly from its card
  const handleEditProductDirectly = (prodId: string) => {
    // Open the Admin portal directly
    const toggleBtn = document.getElementById('admin-portal-toggle');
    if (toggleBtn) {
      toggleBtn.click();
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-amber-100 selection:text-[#001610]">
      
      {/* 1. Global Navigation Bar header */}
      <TopNavBar
        siteContent={siteContent}
        activeView={activeView}
        setActiveView={setActiveView}
        cart={cart}
        setCart={setCart}
        isAdmin={isAdmin}
        onLoginClick={() => {
          const btn = document.getElementById('admin-portal-toggle');
          if (btn) btn.click();
        }}
      />

      {/* 2. Primary Page view router */}
      <main className="flex-grow">
        {activeView === 'collections' && (
          <CollectionsView
            siteContent={siteContent}
            products={products}
            setActiveView={setActiveView}
            onViewProductDetails={setSelectedProduct}
            onAddToBag={(p) => handleAddToBag(p, 1)}
            isAdmin={isAdmin}
            onEditProduct={handleEditProductDirectly}
          />
        )}
        
        {activeView === 'haircare' && (
          <HaircareView
            siteContent={siteContent}
            products={products}
            onViewProductDetails={setSelectedProduct}
            onAddToBag={(p) => handleAddToBag(p, 1)}
            isAdmin={isAdmin}
            onEditProduct={handleEditProductDirectly}
          />
        )}

        {activeView === 'modestwear' && (
          <ModestwearView
            siteContent={siteContent}
            products={products}
            onViewProductDetails={setSelectedProduct}
            onAddToBag={(p) => handleAddToBag(p, 1)}
            isAdmin={isAdmin}
            onEditProduct={handleEditProductDirectly}
          />
        )}

        {activeView === 'story' && (
          <OurStoryView
            siteContent={siteContent}
            isAdmin={isAdmin}
          />
        )}
      </main>

      {/* 3. Global Luxury brand Footer */}
      <Footer 
        siteContent={siteContent}
        setActiveView={setActiveView}
      />

      {/* 4. Interactive floating Admin Secure Customization Panel */}
      <AdminDashboard
        siteContent={siteContent}
        setSiteContent={setSiteContent}
        products={products}
        setProducts={setProducts}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        onReset={handleResetToFactory}
      />

      {/* 5. Formulation Specification detail modal popup */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToBag={(prod, qty) => {
            handleAddToBag(prod, qty);
          }}
        />
      )}

    </div>
  );
}
