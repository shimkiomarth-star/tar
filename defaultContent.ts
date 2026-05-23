import { SiteContent, Product } from '../types';

export const initialSiteContent: SiteContent = {
  brandName: "LUMINA",
  brandSlogan: "The Art of Refinement",

  // Split Home Hero Left (Haircare)
  homeHeroLeftTitle: "Restorative Care",
  homeHeroLeftSubtitle: "Botanical Science",
  homeHeroLeftImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXa0p1JrCNran2FCbhp3TW6CEoxjfv_Fmza7Q_J0FKT1_j_Afv-_qZdpBj-N7zndPEU9UKvXCqnQpUf6lf1jLB99Ys7M1K9fwUSXzHzoL6bKz4Q7EHE6bDaodpUo0s53ih1w8aWLi7Sne78b0HkbSBXu0oFEIch1dcY2SJzOUHA3zkuTImmTkW7I4N5AoarhIbmo2InkT0b4_nLLtmFBWjVYWNzQcP2J-NtTTlTxMjAbokCG-tmETZRufcup_eLoTVotkLtfloBQ",
  homeHeroLeftButtonText: "Explore Haircare",

  // Split Home Hero Right (Modestwear)
  homeHeroRightTitle: "The Modest Edit",
  homeHeroRightSubtitle: "Ethereal Silhouettes",
  homeHeroRightImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRpI7kEbLOqwKjVjXTzRybo3F84tbj_05j38T9DhE_PwWSMU1rjBqaoq5N9ugyzrolZ2mg803SYmKM7nFlkYW-RbOa5YRgv-1-5mCP0Cji4eFYv4CqhubNz5VS1Q9WhRjqDujoVr_KA_k_XwMmJB24PfHIvKT_t9op_w_k_KL7RutMGY4WbfZ3qYYo7p4Lo-qCvgFabqrWrAyihXePZWlMgLblfYVwbOysuYRX4e3AWh4s5NWS3JtO0HWmWaX03zUmo_ybUJlPsA",
  homeHeroRightButtonText: "View Collection",

  // Essentials Section
  essentialsSub: "Essentials",
  essentialsTitle: "The Haircare Edit",

  // Modest Collection Lookbook
  modestSub: "Spring 2024",
  modestTitle: "The Modest Collection",
  modestBody: "Our newest collection blends traditional silhouettes with contemporary architectural tailoring. Crafted from Italian silk and organic linen for the discerning woman.",
  modestButtonText: "Discover The Lookbook",
  modestImgLeft: "https://lh3.googleusercontent.com/aida-public/AB6AXuClT4pcrTlQlUjw15wBssxKPGpJ-nqCb-W90haD8YBFhNaQZRMf7dhkm9QvKSjuA5WwdhyMMnVIXTKkTc-X9fEmTQiQc_g7ncFdkOjqlQYKQ1uY0H3LnSJUmplsotggb2VU68YpRyWbxZj7ghGELsWPV-9MI-PU9-xKEf6LWyDjVMOqAidLGQ4Rqvafv0_HBVDpBx9Fs6cr1bChdeZ8EHljUU3uMNbcPxuNNO7a4yRK7XWNc3Avj31gxB3ZhjoppXsauV1YmvWlBg",
  modestImgRight: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5cpNdZX0DHAGQg9_QAv51uJOwA6I9x2OgZE1SvUAqLPAXsehZkWBBDK5i13xqBlmbLDnde8-ASmryVqqCTGnadlRg4sPYznIpPddCF8O3uXcIe0Ruc8YKFS9ZkjrNJdEQUMjsD3VMgZTrtKLFYCl8si25y9UOuNJX59OXdd1-pmeUN0zwLWrSnCJkwpfpTDoACvkZHt83Zlh9-vyrRVpsnk7PPZjG1UjNY4ZRXNUl9TOZJFmlBLRZuiKCzqpI3sRj0WeidfF6bw",

  // Our Ethos (Philosophy bottom stats)
  ethosSub: "Our Ethos",
  ethosTitle: "Purity in every form.",
  ethosBody: "LUMINA was born from a singular vision: to harmonize the clinical excellence of premium haircare with the timeless grace of modest fashion. We believe that true luxury lies in restraint. Our products are formulated without compromise, and our garments are designed for enduring elegance. We honor the quiet strength of the modern woman who seeks quality over excess.",
  ethosStats: [
    { value: "100%", label: "Organic Ethics" },
    { value: "24k", label: "Active Botanical" },
    { value: "∞", label: "Timeless Style" }
  ],

  // Our Story / Genesis View Content
  genesisSub: "The Genesis",
  genesisTitle: "Born from a need for intentional luxury.",
  genesisBody1: "LUMINA was founded on the belief that beauty should never demand compromise. We saw a void where premium hair science failed to meet the specific needs of modest-wearing women, and where fashion lacked the clinical precision of dermatological health.",
  genesisBody2: "Our journey began in a small boutique laboratory, experimenting with rare botanicals and textile weaves that respect both the scalp's microbiome and the wearer's skin.",
  genesisImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9pfPSpftyj_DwMhEWnd_cuDZQ6GwpooZu_oUSH4wapV5d6cVsfN1yJqDbwmAwTMAYA48X8zqeeBALpkEUfA11AvoDzNtTa2aYjDpf1jttMROe3Y-jScuhQJq8epZUtTfP4MZ2-EU0V5yxufIV7Bo3wJd4qucH1TmOtym6OffUgVArDLsxX3spb2RvuTR6AS1OYCL27lGL5gt_CK5JKfAEAD7vgvmQK7_yim-paAgUO4xRPA1896KHv_-6aTx1xxE66UjlPEKPwQ",

  // Full-width texture / manifesto quotes
  manifestoQuote: "True elegance is the harmony of what you wear and how you care for yourself.",
  manifestoAuthor: "The LUMINA Manifesto",
  manifestoImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuArdjTjV-09sH7WGKZ1ZjcCzIFkBDVtebDQBOdZfef953FSfBvv51YopfFQlIgHrZ3sQ4qLKw4qopWpcWtaJoh-dcS-09I2699rqgYbAUgMGCDbc-ZrvWkEefvC3C48bvN2y1pXimpoLg5C9i9GjTVGH24MZDLlfMRO1Su0Z1sqbSk3t0IPhKit1JTlZYzyWxj3T1uVXWSzpu-sYflj2qYwdPNJTZrRIHPu4PDN36MHp2JYWSvmgB5JaXeXuj52hrQW2M9ExcmEVQ",

  // Brand Pillars
  pillarsTitle: "Our Core Pillars",
  brandPillars: [
    {
      id: "p1",
      icon: "Beaker",
      title: "Clinical Integrity",
      description: "Every formula is dermatologically tested to ensure scalp health and follicular strength under all conditions."
    },
    {
      id: "p2",
      icon: "Flower",
      title: "Ethical Modesty",
      description: "We source textiles that provide breathable coverage, respecting traditional values with modern breathable technology."
    },
    {
      id: "p3",
      icon: "Shield",
      title: "Sustainably Sourced",
      description: "From biodegradable packaging to fair-trade silk, our footprint is as light as our fabrics."
    }
  ],

  // Spotlight ingredient
  spotlightSub: "Ingredient Spotlight",
  spotlightTitle: "The Alchemy of Pure Botanical Extracts",
  spotlightBody: "We traveled from the Atlas Mountains to the valleys of Provence to source ingredients that don't just sit on the hair but transform it. Our signature Emerald Elixir contains cold-pressed Moringa oil and fermented Camellia, providing a nutrient-dense barrier for those who wear hijabs and head coverings daily.",
  spotlightStats: [
    { value: "100%", label: "Vegan Ingredients" },
    { value: "0%", label: "Parabens & Sulfates" },
    { value: "24h", label: "Scalp Hydration" },
    { value: "Silk", label: "Grade 6A Mulberry" }
  ],
  spotlightImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4rehwGVjySmqmAPs-lyk5oJDfF4LgVkh9syj1oZzfDRsizvziPky3Qibwm4moACzfY72oHlGx7otWhJTMEjkggdthfKe4VPnSnHf-z25M_f5etgSr9CkaG5G55IYuvz29hroPUecLMCzJZg55cPFovR9TeK6TJWuclOT1b3HUBkfmiFa8UCmM_O0ez9pf5V8XgbRABN6ErkmSLjK84snIUw6EfsOwWQzyNiWEpETC2XQWbAtn-wDPdtQZiQrm9kg4Lm6Ytw2poA",

  // Haircare Page Editorial Header
  haircareSub: "Scientific Solutions",
  haircareTitle: "The Haircare Edit",
  haircareDescription: "Clinically proven formulas meeting high-performance botanicals. Our minimalist approach to scalp health and hair vitality, designed for discerning rituals.",

  // Inner Circle newsletter
  newsletterTitle: "Join the Inner Circle",
  newsletterBody: "Receive early access to seasonal collections and curated beauty rituals directly to your inbox.",

  // Footer brand text
  footerDescription: "A convergence of clinical excellence and cultural grace. Redefining high-performance beauty for the modern woman."
};

export const defaultProducts: Product[] = [
  {
    id: "prod-1",
    name: "Silk Infusion Cleanser",
    category: "haircare",
    description: "Deep hydration for natural hair, providing rich clinical protection and premium shine.",
    details: "Formulated specifically for hair that requires deep hydration under scarves or hats. This cleanser maintains scalp-microbiome health, cleansing softly without stripping away essential natural oils. Blended with pure luxury silk proteins and cold-pressed oil extracts.",
    price: 48,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRYZq5DZMsTyiQXkjz_r0ZV1xHQJSWBMCoJqnDy8TQHQCX0fmAneBdbOSYap3qPmWGNEwT9gSVZ6bm_LmsXlT49Ra0YoELpkw9WmnrezDFQ5Xo2XpjzQNMVlE0Y5xcwitnhjddUQ5pkb7yEpP8m3TUlADr26HI_b7VIfkEsCBTvODPKvxVqriZRDnZGFkylkcIxVVYgma5nOXBlBTXsMpjGb5VCQ_EfB_tSkFSSImyBRAokByv-8K8npMQvnx2yBzlBJ967WuPGw",
    badge: "Best Seller",
    usage: "Massage into damp hair, focusing on the scalp. Maintain lather for 2-3 minutes before rinsing cleanly with lukewarm water.",
    ingredients: ["Silk Protein", "Argan Extract", "Camellia Ferment", "Moringa Seed Oil"],
    activeIngredients: [
      { name: "Silk Protein", icon: "Sparkles" },
      { name: "Argan Extract", icon: "Leaf" }
    ]
  },
  {
    id: "prod-2",
    name: "Scalp Vitality Serum",
    category: "haircare",
    description: "Intensive shine and dermal protection with premium botanical renewal.",
    details: "An ultra-restorative cellular serum that energizes follicle metabolism, counteracting pressure lines or moisture accumulation under hair wraps. Rich in botanical hyaluronic acid and pure organic rosemary oil to stimulate cellular microcirculation.",
    price: 62,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBznBTYaGfjnKThV89eUeo6wDT-QxTETtF0jnSZDK6CybqyJyXdGWyavat3cFoyxGMaksgd6Pz1yPSLzK8m_r_-ghclyAYyGOv2YcgYTno25_oYe3zQZ3L8wWm80HQ9SFhOqrd8vLLs2FgF_zzci9dw7IHde7TLLi9lJUBVD1WWrrO2vPDO_7tUi0ab5tCD7vaEc16QxYEs-40jaZGY3yBKp18eIWdMNcCY7yTu9NWnU5uNXq3X9a4RieK4044zLAtIFjB1oHjl5g",
    badge: "Natural Focus",
    usage: "Apply 4-5 drops evenly on clean towel-dried scalp. Massage with fingertips in light circular motions. Do not rinse.",
    ingredients: ["Hyaluronic Acid", "Rosemary Oil", "Eucalyptus Extract", "Zinc PCA"],
    activeIngredients: [
      { name: "Hyaluronic Acid", icon: "Droplet" },
      { name: "Rosemary Oil", icon: "Sprout" }
    ]
  },
  {
    id: "prod-3",
    name: "Intensive Bond Mask",
    category: "haircare",
    description: "Weekly ritual for strength, cuticle repair, and intensive moisture lock.",
    details: "A dense, rich structural treatment crafted in high-performance botanical matrices. Rebuilds broken sulfide bonds inside hair strands damaged by wear friction, heat styling, or dryness. Yields unmatched softness and reflective gloss.",
    price: 54,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaY9ICBU4dimQbEf_7PRZVDgotD7EbC2ic0iPFJUOjAPFEoaOv8aS_j3Am1-M9rINrTW5cMj-V4ryZ7hrkXFGnUjxfAv9NrYS0qqYAMhPJauTRWoE_f5goO0xzu2DfWnK_yUbiueql9iwzXnB5mC2c5BzVXwhP_cyCCJb_Uzti2L34jABOYnQJrG53JX-2uTmvENr5JFSDUH4WlW3ZEjmHo27HE0T70zJm9LQkkjc_KRhwFv8d-WNHelKKt-DJ8kivzMTzQB_MRg",
    badge: "Premium Repair",
    usage: "After cleansing, smooth evenly from mid-lengths to ends. Leave for 10-15 minutes as an immersive calm ritual, then rinse thoroughly.",
    ingredients: ["Keratin 2.0", "Shea Butter", "Fermented Camellia Juice", "Panthenol"],
    activeIngredients: [
      { name: "Keratin 2.0", icon: "Zap" },
      { name: "Shea Butter", icon: "Flower" }
    ]
  },
  {
    id: "prod-4",
    name: "Volume Mist",
    category: "haircare",
    description: "Lift and weightless volume at the roots, designed to maintain hair lift.",
    details: "Specially engineered to counteract the flat-flattening effect of continuous hijab or head covering wear. Infuses clean marine minerals and trace protein molecules directly into shaft roots, keeping hair light, elevated, and oxygenated.",
    price: 36,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIiPhIHOu4LWSp9pNk1UoNPx-MCYZtOudQW2Mu7k8_h5D0ndMu7-BeJe15aEB7GQAor3uNootN91KxGNEDFTUzJmyrK74E2I13WjO1RqiHKM6XVyd4WNkYmeXH71vjt2vIc7tTB6q0EWJeG1x02vpwTAMOZAQuIUafbj3j1KLBk6NCWpmEIFo7sRg7qKJeSdITFSthPoNdUA3uJ-bQlZ5GMKG5Bm3a7Bn0wZxFn7rOsgjobqLUIRxOes9cCw28m_ZnculMHqlG8g",
    badge: "Root Lift",
    usage: "Spray directly onto damp roots prior to styling or before wrapping. Comb through softly.",
    ingredients: ["Sea Minerals", "Wheat Protein", "Bamboo Extract", "Niacinamide"],
    activeIngredients: [
      { name: "Sea Minerals", icon: "Waves" },
      { name: "Wheat Protein", icon: "Grid" }
    ]
  },
  {
    id: "prod-5",
    name: "Argan Elixir Oil",
    category: "haircare",
    description: "Gloss and frizz-control coating for continuous luxurious softness.",
    details: "Pure Moroccan cold-pressed argan oil married to micro-filtration science. Drapes around the cuticles in an invisible barrier that completely halts humidity frizz, while facilitating breathing of the hair strands underneath daily fabrics.",
    price: 75,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAySqwh8jYKnl5eF54G69vD54Y8yxF-emct1gJDAmN2wOYNB-wzjje1hgErNsgu7A6yDTB4wmOnSxwAPnCc8xeJQNVtUw-8VuhvhoSeU8m1lMl8VZyhk6oSsQO0dbl1tWi3y7RWeIOHa8eRRjbo_iG90InHCrFaXdomsIEqrTyB4wPXkEjAtWMzFid35tZ8tgcObCxsqj_j173v3QXENz-76uVE0D9Z0sTKVcOjGuF4I21mR4Ffc33jOhnYXrjMR9oQvVx_Mhc3tA",
    badge: "New Formulation",
    usage: "Dispense 2 drops into palms, rub together, and smooth softly from mid-shaft to hair ends. Can be used on dry or damp hair.",
    ingredients: ["Cold-Pressed Argan", "UV Protect Matrix", "Vitamin E", "Fermented Camellia"],
    activeIngredients: [
      { name: "Cold-Pressed Argan", icon: "Droplet" },
      { name: "UV Protect", icon: "ShieldCheck" }
    ]
  },
  {
    id: "prod-6",
    name: "Silk Smooth Conditioner",
    category: "haircare",
    description: "Unmatched detangling silk protection to guard against wear friction.",
    details: "A majestic daily detangler designed to decrease friction breakage. Smoothens coarse cuticles into a glass-like finish that prevents snags, locking in moisture seamlessly.",
    price: 50,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlCDBFurwXiaEdU7Yo42ASeau-P7x3y1RriyYNqxt1sq6jCwIgvvw5mpbnb92ex094k5hyiE6oF1bMzYRbe1eBIpU5YXjmXaG2Wv1T2ixpewNt-lLAxNKObG_G1ym0RUM7R_IFkY2ziusDcnwSGgHWKePSrekbRgENJH6QQFadroZ23KdRxucO8j4hgRjcBOiQwfCvnoUNc7Ng8TrtnA9JDVqAmnfK32N9_EaClqo5WOVgaMFqMECATPwDpV_TsAmtuAi1FAy8PQ",
    badge: "Friction Guard",
    usage: "After cleansing, apply from roots to tips. Leave in for 1-2 minutes, detangle softly with fingers, and rinse thoroughly.",
    ingredients: ["Silk Peptides", "Aloe Vera", "Lavender Water", "Moringa Extract"],
    activeIngredients: [
      { name: "Silk Peptides", icon: "Sparkles" },
      { name: "Aloe Vera", icon: "Heart" }
    ]
  },
  {
    id: "prod-7",
    name: "The Noor Abaya",
    category: "modestwear",
    description: "Midnight Emerald Silk",
    details: "Hand-finished embroidery on the cuffs and a signature draped neckline for effortless elegance. Tailored with care in premium Grade 6A Mulberry Silk for a flowing, exquisite silhouette.",
    price: 345,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzjQB2PIcptWx2YR190fqdb6zRGy8qn01jZk1qsdbJXwX3Px0t4NDML7YH2i96kCXRHvsWFYKx6gMcaZUYkJehUgpHHblm353x_FWhnEN7BWcaCcuJKp-bUg9y9uHndhkaZRTddcchy8YZ1rJAJ-Ekiwi2HJexMkHNQzTZqwL_1ivqeCN7ytu3QHfrWTLLRWrdfLCml7f4x9PjQzVNUj_vJfinC2bCeq31lgqmUwZYi4t9PWDUyAbdg-_ElXwcMchkPtU9FglTEA",
    badge: "Featured Detail",
    collectionType: "Abaya Essentials",
    material: "Mulberry Silk",
    colorName: "Midnight Emerald",
    colorHex: "#001610",
    usage: "Dry clean only. Recommended to hang on padded luxury velvet hangers to preserve delicate embroidery and draped silhouette.",
    ingredients: ["100% Organic Mulberry Silk", "Gold Thread Embroidery", "French Seam Stitching"]
  },
  {
    id: "prod-8",
    name: "Zenith Modal Wrap",
    category: "modestwear",
    description: "Sand Beige",
    details: "Ultra-breathable modal blend that stays perfectly in place all day without the need for pins. Offers featherlight coverage and an airy cooling feeling.",
    price: 85,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL_MPLsOFFBbPwdsiZApaQ_twh4CsXRkwUiZsE14Sdq-BfuO9aGsLoOlQgoyD5D1D7lkri-uzVMtkhCO9SqKjTBVPdNIuedlVzcucSvrJt6D2cBHsIz9Qwor-FGJWx8xrE-6kaY2zxIZazvY6PTY4CAGD7xJHAw1bNKImtkViOOsspHnbFd55-LMoUSYPMmjJx7KYPHz8-tcf9RRoxQR9l4fvepgF9XAAz_sgiiCwqlWAa3NvLmvwQAcGq-R4f7sK96gYHf1Ky1Q",
    badge: "Fabric Insight",
    collectionType: "Abaya Essentials",
    material: "Japanese Crepe",
    colorName: "Sand Beige",
    colorHex: "#E5E0D8",
    usage: "Hand wash with delicate organic linen laundry detergent. Let lay flat to dry.",
    ingredients: ["85% Organic Beechwood Modal", "15% Fine Spandex", "Eco-Friendly Dyes"]
  },
  {
    id: "prod-9",
    name: "Linen Flow Set",
    category: "modestwear",
    description: "Charcoal Grey",
    details: "Crafted from 100% European Flax, this set offers unparalleled comfort and cooling for warmer climates.",
    price: 290,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdxpoGyW0t62w3AAhXQoepJHjkz2hrgOvOjr8chmnegvQiXvN6hGijvTXArxwPR751jUA17ciP3kxKr3zVcanvKt2lsJv5EsemsN-423-L2PiP1csat9kPOVvL4YFok8Ki-dUiK1I83YSD9Uh1Pe-VQfA5Wsd01eK8N24bDXN5liaGOXb79VNbRVwjgcC9f4wdZKJdwQR5YaBroWmr7cSwWe4aRW4Mdnld4htMgiVM_o08SWsploqpv2WmbLt7l6Z6nuYVhqu12Q",
    badge: "Sustainable Choice",
    collectionType: "Silk Series",
    material: "Organic Linen",
    colorName: "Charcoal Grey",
    colorHex: "#4A3728",
    usage: "Gentle machine wash cold on linen cycle, inside a mesh laundry bag. Warm iron whilst slightly damp for dynamic recovery of flat folds.",
    ingredients: ["100% Certified European Flax Linen", "Biodegradable Shell Buttons"]
  },
  {
    id: "prod-10",
    name: "Elysian Evening Gown",
    category: "modestwear",
    description: "Navy / Silver",
    details: "Full-length silhouette with a hidden waist cinch and delicate metallic silver threads woven throughout.",
    price: 520,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZR1BVoM8XdHEsxlQlGQS35HunfeknaXWMhfyROgoBmrSoleeqrlyzzWLGp1cp0sHW-m_8egHBOohefLkslx3g5XlGCXMbHORCFr_8Jp722wyKT_IwcS4QSHwh3c0dU_A6cWXgNhpoPFl8HBZHN0v-FaBJ-K-HO0ec0j5SCAj8Icg3UjFp-HSS-3MlETooEn2q3YfEKHvza857ahhGhUhJqmEsPDgNj1Dx8rYEFRaSI1QJ7gsIgk_rvRN9mcnRQYfwDyyK-SmSLA",
    badge: "Evening Wear",
    collectionType: "Evening Flow",
    material: "Japanese Crepe",
    colorName: "Navy / Silver",
    colorHex: "#2E3B4E",
    usage: "Dry clean only. Store inside the included canvas garment cover.",
    ingredients: ["92% Silk Filaments", "8% Pure Lurex Metallic Thread", "Japanese Satin Lining"]
  },
  {
    id: "prod-11",
    name: "Aura Crepe Kimono",
    category: "modestwear",
    description: "Dusty Rose",
    details: "A transitional piece that layers beautifully over dresses or trousers for an elevated daily look.",
    price: 210,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCknJ0vFMRISxz2Z-6bL0--QvlAYzgkaTCEel0zfwOqq2xcWm79rA-3GmsTIRqSg6qGk3Ikb6ylt5DznwtINlPtRkIAg0RiqCeLu1c4MqJg5GEW0qji0E13cOhRH3h-VusyXjsa_Q9zruTWN1_2CEoKKLvjS12hvusl2MgZCyqDCoKIJMwNojpK5tdA1y3r0cCA6Ag4b4pfNHATqJ2fwwYDCpb9FBfbcTxBu3nWxKsgtYIvNB2sVNyOoFUGMXOPMbWOrMVLenXaqQ",
    badge: "Versatility",
    collectionType: "Silk Series",
    material: "Japanese Crepe",
    colorName: "Dusty Rose",
    colorHex: "#E5C2C2",
    usage: "Dry clean or delicate cold hand wash. Tumble dry is prohibited.",
    ingredients: ["100% Japanese Georgette Crepe", "Frictionless Inner Sheen Treatment"]
  },
  {
    id: "prod-12",
    name: "Signature Chiffon",
    category: "modestwear",
    description: "Pearl White",
    details: "Featherlight chiffon with rolled hems and a subtle sheen, perfect for formal occasions.",
    price: 65,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB354m-8Yddb32bSsvuwa-8dSWai33XuDDmdzyIMcLP-i2benwzYAzywbhBn7Sp41T6mXdtKCqx_9BIJpHV7RjQyNcYCiejHGzjjU02wTOl3YPq7qfsFoCUXI_Go6RFyumHIV6ARmwOHCR64qqiQ8E3ktzsPykLwd3LaWLd32if7neTwWNvqGGRsrtGh_eJs-nMGmttPes-Xhy5fbVFj_STKQhETkLpTAF3bdiNlQZBQfj5i9SyeURRt2LmAFTP2CvxiaYPObAlRA",
    badge: "Craftsmanship",
    collectionType: "Evening Flow",
    material: "Japanese Crepe",
    colorName: "Pearl White",
    colorHex: "#F5F5F5",
    usage: "Hand wash with ultra-delicate baby shampoo, drip dry. Low temperature iron using a protective cotton press cloth.",
    ingredients: ["100% Heavy Silk Georgette Chiffon", "Rolled Hand-Sewn Hems"]
  }
];
