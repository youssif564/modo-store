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
  // Watches
  {
    id: 'watch-1',
    name: 'Audemar Piguet Black Dial Men',
    price: 6500000000000000,
    originalPrice: 1200,
    image: 'https://images.unsplash.com/photo-15232753356847898b6baf30?w=600&h=600&fit=crop',
    category: 'watches',
    description: 'Luxury automatic watch with black dial and stainless steel bracelet. Water resistant up to 50m.',
    inStock: true,
    sale: true
  },
  {
    id: 'watch-2',
    name: 'Audemar Piguet White Dial Men',
    price: 644,
    originalPrice: 1500,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop',
    category: 'watches',
    description: 'Elegant white dial watch with premium leather strap. Perfect for formal occasions.',
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
    description: 'Sporty black rubber watch with diamond accents. Bold design for the modern man.',
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
    description: 'Classic Tommy Hilfiger design with mirror finish. Swiss movement accuracy.',
    inStock: true,
    sale: true
  },
  // Belts
  {
    id: 'belt-1',
    name: 'LV Monogram Belt',
    price: 299,
    originalPrice: 450,
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&h=600&fit=crop',
    category: 'belts',
    description: 'Premium leather belt with signature monogram pattern. Gold-tone buckle.',
    inStock: true,
    sale: true
  },
  {
    id: 'belt-2',
    name: 'Gucci Classic Belt',
    price: 349,
    originalPrice: 500,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop',
    category: 'belts',
    description: 'Italian leather belt with iconic GG buckle. Timeless elegance.',
    inStock: true,
    sale: true
  },
  // Wallets
  {
    id: 'wallet-1',
    name: 'LV Monogram Wallet',
    price: 199,
    originalPrice: 350,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop',
    category: 'wallets',
    description: 'Classic bifold wallet with card slots and bill compartment.',
    inStock: true,
    sale: true
  },
  {
    id: 'wallet-2',
    name: 'Gucci Leather Wallet',
    price: 249,
    originalPrice: 400,
    image: 'https://images.unsplash.com/photo-1606503825008-909a6184ad57?w=600&h=600&fit=crop',
    category: 'wallets',
    description: 'Premium leather wallet with embossed logo. Multiple card slots.',
    inStock: true,
    sale: true
  },
  // Earbuds
  {
    id: 'earbuds-1',
    name: 'AirPods Pro 2',
    price: 899,
    originalPrice: 1200,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop',
    category: 'earbuds',
    description: 'Active noise cancellation, transparency mode, spatial audio.',
    inStock: true,
    sale: true
  },
  {
    id: 'earbuds-2',
    name: 'Samsung Galaxy Buds Pro',
    price: 699,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&h=600&fit=crop',
    category: 'earbuds',
    description: 'Premium sound with intelligent active noise cancellation.',
    inStock: true,
    sale: true
  },
  // Hats
  {
    id: 'hat-1',
    name: 'Gucci Bucket Hat',
    price: 179,
    originalPrice: 299,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=600&fit=crop',
    category: 'hats',
    description: 'Stylish bucket hat with signature pattern. Perfect for summer.',
    inStock: true,
    sale: true
  },
  {
    id: 'hat-2',
    name: 'Palm Angels Cap',
    price: 129,
    originalPrice: 199,
    image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&h=600&fit=crop',
    category: 'hats',
    description: 'Streetwear cap with embroidered logo. Adjustable strap.',
    inStock: true,
    sale: true
  },
  // iPhone Accessories
  {
    id: 'iphone-1',
    name: 'iPhone 15 Pro Case',
    price: 99,
    originalPrice: 149,
    image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&h=600&fit=crop',
    category: 'iphone-accessories',
    description: 'Premium silicone case with MagSafe compatibility.',
    inStock: true,
    sale: true
  },
  {
    id: 'iphone-2',
    name: 'MagSafe Charger',
    price: 149,
    originalPrice: 229,
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=600&h=600&fit=crop',
    category: 'iphone-accessories',
    description: 'Wireless charging with magnetic alignment. 15W fast charging.',
    inStock: true,
    sale: true
  },
  // Men's Accessories
  {
    id: 'mens-1',
    name: 'Jewellery Chain For Men',
    price: 150,
    originalPrice: 300,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop',
    category: 'mens-accessories',
    description: 'Stainless steel chain necklace. Bold and masculine design.',
    inStock: true,
    sale: true
  },
  {
    id: 'mens-2',
    name: 'Chain Neck Necklace',
    price: 150,
    originalPrice: 300,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop',
    category: 'mens-accessories',
    description: 'Classic chain necklace for men and boys. Durable construction.',
    inStock: true,
    sale: true
  },
  // Shavers
  {
    id: 'shaver-1',
    name: 'Philips Electric Shaver',
    price: 399,
    originalPrice: 599,
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&h=600&fit=crop',
    category: 'shavers',
    description: 'Wet and dry electric shaver with precision trimmer.',
    inStock: true,
    sale: true
  },
  {
    id: 'shaver-2',
    name: 'Braun Series 9 Shaver',
    price: 799,
    originalPrice: 1200,
    image: 'https://images.unsplash.com/photo-1599351431202-0e671340044d?w=600&h=600&fit=crop',
    category: 'shavers',
    description: 'Premium shaver with 5 shaving elements. Smart technology.',
    inStock: true,
    sale: true
  },
  // Women's Accessories
  {
    id: 'womens-1',
    name: 'Designer Handbag',
    price: 499,
    originalPrice: 799,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop',
    category: 'womens-accessories',
    description: 'Elegant designer handbag with gold hardware.',
    inStock: true,
    sale: true
  },
  {
    id: 'womens-2',
    name: 'Luxury Card Holder',
    price: 99,
    originalPrice: 179,
    image: 'https://images.unsplash.com/photo-1606503825008-909a6184ad57?w=600&h=600&fit=crop',
    category: 'womens-accessories',
    description: 'Compact card holder with multiple slots. Premium leather.',
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
