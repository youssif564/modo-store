import type { Product, Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'wallets',
    name: 'Wallets',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop'
  },
  {
    id: 'watches',
    name: 'Watches',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop'
  },
  {
    id: 'belts',
    name: 'Belts',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&h=600&fit=crop'
  },
  {
    id: 'earbuds',
    name: 'Earbuds',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop'
  },
  {
    id: 'hats',
    name: 'Hats',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=600&fit=crop'
  },
  {
    id: 'iphone-accessories',
    name: 'iPhone Accessories',
    image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&h=600&fit=crop'
  },
  {
    id: 'mens-accessories',
    name: "Men's Accessories",
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop'
  },
  {
    id: 'shavers',
    name: 'Shavers',
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&h=600&fit=crop'
  },
  {
    id: 'womens-accessories',
    name: "Women's Accessories",
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop'
  }
];

export const products: Product[] = [
  // WATCHES
  {
    id: 'watch-1',
    name: 'Audemar Piguet Black Dial Men',
    price: 650,
    originalPrice: 1200,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
    category: 'watches',
    description: 'Luxury automatic watch with black dial and stainless steel bracelet.',
    inStock: true,
    sale: false
  },
  {
    id: 'watch-2',
    name: 'Audemar Piguet White Dial Men',
    price: 644,
    originalPrice: 1500,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop',
    category: 'watches',
    description: 'Elegant white dial watch with stainless steel bracelet.',
    inStock: true,
    sale: true
  },
  {
    id: 'watch-3',
    name: 'Franck Muller Rubber Watch Black',
    price: 1499,
    originalPrice: 2500,
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600&h=600&fit=crop',
    category: 'watches',
    description: 'Sporty black rubber watch with diamond accents.',
    inStock: true,
    sale: true
  },
  {
    id: 'watch-4',
    name: 'Tommy Hilfiger Watch Mirror Original',
    price: 1500,
    originalPrice: 3000,
    image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600&h=600&fit=crop',
    category: 'watches',
    description: 'Classic Tommy Hilfiger design with mirror finish.',
    inStock: true,
    sale: true
  },
  {
    id: 'watch-5',
    name: 'Cartier Santos Leather Green',
    price: 999,
    originalPrice: 1500,
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&h=600&fit=crop',
    category: 'watches',
    description: 'Classic Cartier Santos with green leather strap.',
    inStock: true,
    sale: true
  },
  {
    id: 'watch-6',
    name: 'Rolex White Dial Women',
    price: 999,
    originalPrice: 2500,
    image: 'https://images.unsplash.com/photo-1547996663-b8308d6e161c?w=600&h=600&fit=crop',
    category: 'watches',
    description: 'Elegant Rolex with white dial and two-tone bracelet.',
    inStock: true,
    sale: true
  },
  {
    id: 'watch-7',
    name: 'Bvlgari White Dial Women',
    price: 999,
    originalPrice: 2500,
    image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600&h=600&fit=crop',
    category: 'watches',
    description: 'Luxury Bvlgari watch with white dial and gold bracelet.',
    inStock: true,
    sale: true
  },
  {
    id: 'watch-8',
    name: 'TTEC Tempus Pro',
    price: 1000,
    originalPrice: 1100,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&h=600&fit=crop',
    category: 'watches',
    description: 'Smart watch with health tracking features.',
    inStock: true,
    sale: true
  },
  {
    id: 'watch-9',
    name: 'Connectme SP9 Ultra Max',
    price: 350,
    originalPrice: 400,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&h=600&fit=crop',
    category: 'watches',
    description: 'Smart watch with fitness tracking and notifications.',
    inStock: true,
    sale: true
  },

  // WALLETS
  {
    id: 'wallet-1',
    name: 'LV Wallet (With Box)',
    price: 550,
    originalPrice: 750,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop',
    category: 'wallets',
    description: 'Classic LV monogram wallet with original box.',
    inStock: true,
    sale: false
  },
  {
    id: 'wallet-2',
    name: 'Louis Vuitton Women Wallet',
    price: 450,
    originalPrice: 750,
    image: 'https://images.unsplash.com/photo-1606503825008-909a6184ad57?w=600&h=600&fit=crop',
    category: 'wallets',
    description: 'Elegant LV women wallet in monogram canvas.',
    inStock: true,
    sale: true
  },
  {
    id: 'wallet-3',
    name: 'Gucci Wallet (With Box)',
    price: 700,
    originalPrice: 1100,
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&h=600&fit=crop',
    category: 'wallets',
    description: 'Premium Gucci wallet with signature pattern and box.',
    inStock: true,
    sale: true
  },
  {
    id: 'wallet-4',
    name: 'Gucci Women Wallet',
    price: 550,
    originalPrice: 800,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop',
    category: 'wallets',
    description: 'Stylish Gucci wallet for women with red and green stripe.',
    inStock: true,
    sale: false
  },
  {
    id: 'wallet-5',
    name: 'Tommy Hilfiger Wallet (With Box)',
    price: 600,
    originalPrice: 1000,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop',
    category: 'wallets',
    description: 'Classic Tommy Hilfiger wallet with original packaging.',
    inStock: true,
    sale: true
  },
  {
    id: 'wallet-6',
    name: 'Tommy Hilfiger Wallet',
    price: 450,
    originalPrice: 600,
    image: 'https://images.unsplash.com/photo-1606503825008-909a6184ad57?w=600&h=600&fit=crop',
    category: 'wallets',
    description: 'Sleek leather wallet with Tommy Hilfiger logo.',
    inStock: true,
    sale: false
  },
  {
    id: 'wallet-7',
    name: 'CK Wallet',
    price: 199,
    originalPrice: 550,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop',
    category: 'wallets',
    description: 'Calvin Klein leather wallet in brown.',
    inStock: true,
    sale: true
  },
  {
    id: 'wallet-8',
    name: 'CK Wallet (With Box)',
    price: 550,
    originalPrice: 1000,
    image: 'https://images.unsplash.com/photo-1606503825008-909a6184ad57?w=600&h=600&fit=crop',
    category: 'wallets',
    description: 'Calvin Klein wallet with gift box.',
    inStock: true,
    sale: true
  },
  {
    id: 'wallet-9',
    name: 'Lacoste Wallet',
    price: 199,
    originalPrice: 500,
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&h=600&fit=crop',
    category: 'wallets',
    description: 'Classic Lacoste leather wallet with crocodile logo.',
    inStock: true,
    sale: true
  },
  {
    id: 'wallet-10',
    name: 'Boss Wallet',
    price: 199,
    originalPrice: 550,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop',
    category: 'wallets',
    description: 'Hugo Boss leather wallet with embossed logo.',
    inStock: true,
    sale: true
  },
  {
    id: 'wallet-11',
    name: 'Cardholder',
    price: 1,
    originalPrice: 100,
    image: 'https://images.unsplash.com/photo-1606503825008-909a6184ad57?w=600&h=600&fit=crop',
    category: 'wallets',
    description: 'Slim cardholder for essential cards.',
    inStock: true,
    sale: true
  },
  {
    id: 'wallet-12',
    name: 'Burberry Crestfield Card Holder (With Box)',
    price: 250,
    originalPrice: 400,
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&h=600&fit=crop',
    category: 'wallets',
    description: 'Premium card holder with Burberry check pattern.',
    inStock: true,
    sale: true
  },
  {
    id: 'wallet-13',
    name: 'Horse Imperia',
    price: 199,
    originalPrice: 5000,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop',
    category: 'wallets',
    description: 'Luxury leather wallet with strap closure.',
    inStock: true,
    sale: true
  },
  {
    id: 'wallet-14',
    name: 'Burberry Heritage Trio (With Box)',
    price: 999,
    originalPrice: 1500,
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&h=600&fit=crop',
    category: 'wallets',
    description: 'Gift set with wallet, key holder, and card case.',
    inStock: true,
    sale: true
  },
  {
    id: 'wallet-15',
    name: 'Women Wallet',
    price: 550,
    originalPrice: 1000,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop',
    category: 'wallets',
    description: 'Elegant women wallet with zip closure.',
    inStock: true,
    sale: true
  },

  // BELTS
  {
    id: 'belt-1',
    name: 'LV Belt',
    price: 550,
    originalPrice: 750,
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&h=600&fit=crop',
    category: 'belts',
    description: 'Classic LV monogram belt with gold buckle.',
    inStock: true,
    sale: true
  },
  {
    id: 'belt-2',
    name: 'Dior Belt',
    price: 550,
    originalPrice: 750,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop',
    category: 'belts',
    description: 'Dior belt with signature buckle.',
    inStock: true,
    sale: true
  },
  {
    id: 'belt-3',
    name: 'Diesel Belt',
    price: 550,
    originalPrice: 750,
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&h=600&fit=crop',
    category: 'belts',
    description: 'Stylish Diesel belt with logo buckle.',
    inStock: true,
    sale: true
  },
  {
    id: 'belt-4',
    name: 'CK Belts',
    price: 250,
    originalPrice: 500,
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&h=600&fit=crop',
    category: 'belts',
    description: 'Calvin Klein leather belt with CK buckle.',
    inStock: true,
    sale: true
  },
  {
    id: 'belt-5',
    name: 'CK Belts',
    price: 199,
    originalPrice: 550,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop',
    category: 'belts',
    description: 'Classic Calvin Klein belt.',
    inStock: true,
    sale: true
  },
  {
    id: 'belt-6',
    name: 'Tommy Hilfiger Square-Buckled Belt',
    price: 550,
    originalPrice: 650,
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&h=600&fit=crop',
    category: 'belts',
    description: 'Premium leather belt with square buckle.',
    inStock: true,
    sale: true
  },
  {
    id: 'belt-7',
    name: 'Calvin Klein Meridian Belt',
    price: 550,
    originalPrice: 650,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop',
    category: 'belts',
    description: 'Elegant CK belt with meridian design.',
    inStock: true,
    sale: true
  },
  {
    id: 'belt-8',
    name: 'Burberry Vanguard Belt',
    price: 550,
    originalPrice: 650,
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&h=600&fit=crop',
    category: 'belts',
    description: 'Burberry belt with check pattern and knight buckle.',
    inStock: true,
    sale: true
  },
  {
    id: 'belt-9',
    name: 'BT Tethered Belt',
    price: 550,
    originalPrice: 650,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop',
    category: 'belts',
    description: 'Stylish belt with unique buckle design.',
    inStock: true,
    sale: true
  },
  {
    id: 'belt-10',
    name: 'Vega Belts',
    price: 250,
    originalPrice: 500,
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&h=600&fit=crop',
    category: 'belts',
    description: 'Fashionable belt with distinctive buckle.',
    inStock: true,
    sale: true
  },
  {
    id: 'belt-11',
    name: 'Leather Belt',
    price: 150,
    originalPrice: 300,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop',
    category: 'belts',
    description: 'Classic leather belt with metal buckle.',
    inStock: true,
    sale: true
  },
  {
    id: 'belt-12',
    name: 'Belt',
    price: 150,
    originalPrice: 250,
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&h=600&fit=crop',
    category: 'belts',
    description: 'Tactical belt with quick-release buckle.',
    inStock: true,
    sale: true
  },

  // BAGS (Women's Accessories)
  {
    id: 'bag-1',
    name: 'Dior Bags',
    price: 1250,
    originalPrice: 1800,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop',
    category: 'womens-accessories',
    description: 'Luxury Dior handbag with oblique pattern.',
    inStock: true,
    sale: false
  },
  {
    id: 'bag-2',
    name: 'Dior Bags',
    price: 999,
    originalPrice: 1400,
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=600&fit=crop',
    category: 'womens-accessories',
    description: 'Elegant Dior tote bag.',
    inStock: true,
    sale: false
  },
  {
    id: 'bag-3',
    name: 'LV Bag',
    price: 999,
    originalPrice: 1400,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop',
    category: 'womens-accessories',
    description: 'Classic LV tote bag in monogram canvas.',
    inStock: true,
    sale: false
  },
  {
    id: 'bag-4',
    name: 'LV Bags',
    price: 1250,
    originalPrice: 1800,
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=600&fit=crop',
    category: 'womens-accessories',
    description: 'Premium LV travel bag.',
    inStock: true,
    sale: false
  },
  {
    id: 'bag-5',
    name: 'LV Bags',
    price: 999,
    originalPrice: 1400,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop',
    category: 'womens-accessories',
    description: 'Stylish LV handbag with since 1854 pattern.',
    inStock: true,
    sale: false
  },
  {
    id: 'bag-6',
    name: 'MK',
    price: 999,
    originalPrice: 1400,
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=600&fit=crop',
    category: 'womens-accessories',
    description: 'Michael Kors tote bag with signature pattern.',
    inStock: true,
    sale: false
  },
  {
    id: 'bag-7',
    name: 'Gucci Bag',
    price: 1199,
    originalPrice: 1600,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop',
    category: 'womens-accessories',
    description: 'Gucci duffle bag with monogram and web stripe.',
    inStock: true,
    sale: false
  },
  {
    id: 'bag-8',
    name: 'Gucci Bags',
    price: 999,
    originalPrice: 1400,
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=600&fit=crop',
    category: 'womens-accessories',
    description: 'Gucci tote bag in blue monogram.',
    inStock: true,
    sale: false
  },

  // HATS
  {
    id: 'hat-1',
    name: 'Dior',
    price: 250,
    originalPrice: 750,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=600&fit=crop',
    category: 'hats',
    description: 'Dior bucket hat with oblique pattern.',
    inStock: true,
    sale: true
  },
  {
    id: 'hat-2',
    name: 'Palm Angles',
    price: 1000,
    originalPrice: 1400,
    image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&h=600&fit=crop',
    category: 'hats',
    description: 'Fuzzy Palm Angels cap with logo.',
    inStock: true,
    sale: false
  },
  {
    id: 'hat-3',
    name: 'Gucci',
    price: 250,
    originalPrice: 500,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=600&fit=crop',
    category: 'hats',
    description: 'Gucci cap with monogram and red/green stripe.',
    inStock: true,
    sale: false
  },
  {
    id: 'hat-4',
    name: 'Gucci Black',
    price: 250,
    originalPrice: 400,
    image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&h=600&fit=crop',
    category: 'hats',
    description: 'Black Gucci cap with signature stripe.',
    inStock: true,
    sale: false
  },
  {
    id: 'hat-5',
    name: 'CK Caps',
    price: 250,
    originalPrice: 500,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=600&fit=crop',
    category: 'hats',
    description: 'Calvin Klein baseball cap with CK logo.',
    inStock: true,
    sale: true
  },

  // MEN'S ACCESSORIES (Jewelry/Chains)
  {
    id: 'mens-1',
    name: 'Jewellery Chain For Men Boys',
    price: 150,
    originalPrice: 300,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop',
    category: 'mens-accessories',
    description: 'Stainless steel chain necklace.',
    inStock: true,
    sale: true
  },
  {
    id: 'mens-2',
    name: 'Chain Neck Necklace Chains for Men & Boys',
    price: 150,
    originalPrice: 300,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop',
    category: 'mens-accessories',
    description: 'Classic chain necklace for men.',
    inStock: true,
    sale: true
  },
  {
    id: 'mens-3',
    name: 'Chain Necklace For Men Women',
    price: 170,
    originalPrice: 250,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop',
    category: 'mens-accessories',
    description: 'Cuban link chain suitable for all.',
    inStock: true,
    sale: true
  },
  {
    id: 'mens-4',
    name: 'Chain Pendant Men\'s Necklace Jewelry',
    price: 220,
    originalPrice: 300,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop',
    category: 'mens-accessories',
    description: 'Necklace with razor blade pendant.',
    inStock: true,
    sale: true
  },
  {
    id: 'mens-5',
    name: 'Gold Snake Chain',
    price: 150,
    originalPrice: 300,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop',
    category: 'mens-accessories',
    description: 'Flat snake chain necklace.',
    inStock: true,
    sale: true
  },
  {
    id: 'mens-6',
    name: 'Essential Set One | 4 Pieces Bracelet Set',
    price: 699,
    originalPrice: 1000,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop',
    category: 'mens-accessories',
    description: 'Set of 4 bracelets including Cartier style and Van Cleef style.',
    inStock: true,
    sale: false
  },
  {
    id: 'mens-7',
    name: 'Four Leaf Set | Necklace + Bracelet + Nail',
    price: 599,
    originalPrice: 1500,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop',
    category: 'mens-accessories',
    description: 'Van Cleef inspired jewelry set.',
    inStock: true,
    sale: true
  },

  // IPHONE ACCESSORIES
  {
    id: 'iphone-1',
    name: 'iPhone 13 Pro Max Cover',
    price: 200,
    originalPrice: 350,
    image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&h=600&fit=crop',
    category: 'iphone-accessories',
    description: 'Clear MagSafe case for iPhone 13 Pro Max.',
    inStock: true,
    sale: false
  },
  {
    id: 'iphone-2',
    name: 'iPhone 15 Case',
    price: 250,
    originalPrice: 450,
    image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&h=600&fit=crop',
    category: 'iphone-accessories',
    description: 'Protective case with 4-in-1 sturdy structure.',
    inStock: true,
    sale: true
  },
  {
    id: 'iphone-3',
    name: 'iPhone USB Cable',
    price: 110,
    originalPrice: 250,
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=600&h=600&fit=crop',
    category: 'iphone-accessories',
    description: 'Fast charging USB-C to Lightning cable.',
    inStock: true,
    sale: true
  },
  {
    id: 'iphone-4',
    name: 'iPhone 12 Case',
    price: 250,
    originalPrice: 400,
    image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&h=600&fit=crop',
    category: 'iphone-accessories',
    description: 'Full body protection case.',
    inStock: true,
    sale: true
  },
  {
    id: 'iphone-5',
    name: 'iPhone 12 Pro Max Cover',
    price: 200,
    originalPrice: 350,
    image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&h=600&fit=crop',
    category: 'iphone-accessories',
    description: 'Slim fit case for iPhone 12 Pro Max.',
    inStock: true,
    sale: false
  },
  {
    id: 'iphone-6',
    name: 'iPhone 13 Covers',
    price: 200,
    originalPrice: 400,
    image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&h=600&fit=crop',
    category: 'iphone-accessories',
    description: 'Protective cover with comprehensive protection.',
    inStock: true,
    sale: true
  },
  {
    id: 'iphone-7',
    name: 'Elodek Silicone Phone Sticky Grip',
    price: 65,
    originalPrice: 79,
    image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&h=600&fit=crop',
    category: 'iphone-accessories',
    description: 'Silicone grip with multiple color options.',
    inStock: true,
    sale: true
  },

  // EARBUDS
  {
    id: 'earbuds-1',
    name: 'Bluetooth Pro Wireless Headset',
    price: 340,
    originalPrice: 400,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop',
    category: 'earbuds',
    description: 'AirPods Pro style wireless earbuds.',
    inStock: true,
    sale: true
  },
  {
    id: 'earbuds-2',
    name: 'Soundcore Anker Life P25i Wireless Earbuds',
    price: 1000,
    originalPrice: 1400,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&h=600&fit=crop',
    category: 'earbuds',
    description: 'Premium wireless earbuds with noise cancellation.',
    inStock: true,
    sale: false
  },
  {
    id: 'earbuds-3',
    name: 'ME20 Series',
    price: 400,
    originalPrice: 450,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop',
    category: 'earbuds',
    description: 'Smart watch with orange band.',
    inStock: true,
    sale: true
  },

  // SHAVERS
  {
    id: 'shaver-1',
    name: 'Shaver Kemei WS-T99',
    price: 299,
    originalPrice: 1000,
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&h=600&fit=crop',
    category: 'shavers',
    description: 'Professional hair trimmer with multiple guards.',
    inStock: true,
    sale: true
  },
  {
    id: 'shaver-2',
    name: 'Kemei Electric Dry Shaving Machine For Men',
    price: 650,
    originalPrice: 750,
    image: 'https://images.unsplash.com/photo-1599351431202-0e671340044d?w=600&h=600&fit=crop',
    category: 'shavers',
    description: 'Electric shaver and trimmer combo.',
    inStock: true,
    sale: true
  },
  {
    id: 'shaver-3',
    name: 'Braun Series 3 ProSkin',
    price: 4500,
    originalPrice: 5500,
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&h=600&fit=crop',
    category: 'shavers',
    description: 'Electric foil shaver for men.',
    inStock: true,
    sale: false
  },
  {
    id: 'shaver-4',
    name: 'VGR 377 Foil Shaver For Men',
    price: 1500,
    originalPrice: 2000,
    image: 'https://images.unsplash.com/photo-1599351431202-0e671340044d?w=600&h=600&fit=crop',
    category: 'shavers',
    description: 'High-speed foil shaver 7000-9000 RPM.',
    inStock: true,
    sale: false
  },
  {
    id: 'shaver-5',
    name: 'VGR Professional Black (Model V-390)',
    price: 290,
    originalPrice: 500,
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&h=600&fit=crop',
    category: 'shavers',
    description: 'Professional hair clipper with pop-up trimmer.',
    inStock: true,
    sale: true
  },
  {
    id: 'shaver-6',
    name: 'VGR Professional Model V-020',
    price: 450,
    originalPrice: 1000,
    image: 'https://images.unsplash.com/photo-1599351431202-0e671340044d?w=600&h=600&fit=crop',
    category: 'shavers',
    description: 'Cordless hair trimmer with precision blade.',
    inStock: true,
    sale: true
  },
  {
    id: 'shaver-7',
    name: 'VGR Professional - V-669',
    price: 500,
    originalPrice: 1500,
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&h=600&fit=crop',
    category: 'shavers',
    description: 'Professional hair clipper with LED display.',
    inStock: true,
    sale: true
  }
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getSaleProducts = (): Product[] => {
  return products.filter(product => product.sale);
};
