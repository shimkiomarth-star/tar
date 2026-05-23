/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: 'haircare' | 'modestwear';
  description: string;
  details?: string;
  price: number;
  image: string;
  badge?: string; // e.g. "Best Seller", "Natural Focus", "New Formulation"
  usage?: string;
  ingredients?: string[];
  activeIngredients?: Array<{ name: string; icon: string }>;
  collectionType?: 'Silk Series' | 'Abaya Essentials' | 'Evening Flow';
  material?: 'Japanese Crepe' | 'Organic Linen' | 'Mulberry Silk';
  colorName?: string;
  colorHex?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface PillarItem {
  id: string;
  icon: string; // lucide icon name
  title: string;
  description: string;
}

export interface SiteContent {
  // Navigation / Brand Name
  brandName: string;
  brandSlogan: string;

  // Split Home Hero Left (Haircare)
  homeHeroLeftTitle: string;
  homeHeroLeftSubtitle: string;
  homeHeroLeftImage: string;
  homeHeroLeftButtonText: string;

  // Split Home Hero Right (Modestwear)
  homeHeroRightTitle: string;
  homeHeroRightSubtitle: string;
  homeHeroRightImage: string;
  homeHeroRightButtonText: string;

  // Essentials Section
  essentialsSub: string;
  essentialsTitle: string;

  // Modest Collection Lookbook
  modestSub: string;
  modestTitle: string;
  modestBody: string;
  modestButtonText: string;
  modestImgLeft: string;
  modestImgRight: string;

  // Our Ethos (Collections page bottom philosophy)
  ethosSub: string;
  ethosTitle: string;
  ethosBody: string;
  ethosStats: StatItem[];

  // Our Story / Genesis View Content
  genesisSub: string;
  genesisTitle: string;
  genesisBody1: string;
  genesisBody2: string;
  genesisImage: string;

  // Full width banner / manifesto text
  manifestoQuote: string;
  manifestoAuthor: string;
  manifestoImage: string;

  // Brand Pillars
  pillarsTitle: string;
  brandPillars: PillarItem[];

  // Detailed story: spotlight
  spotlightSub: string;
  spotlightTitle: string;
  spotlightBody: string;
  spotlightStats: StatItem[];
  spotlightImage: string;

  // Haircare Page Editorial Header
  haircareSub: string;
  haircareTitle: string;
  haircareDescription: string;

  // Inner circle newsletter
  newsletterTitle: string;
  newsletterBody: string;

  // Footer brand text
  footerDescription: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
