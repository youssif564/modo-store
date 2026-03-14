import { Link } from 'react-router-dom';
// Icons are used as emoji in the features section
import { categories, products } from '@/data/products';

export default function Home() {
  const saleProducts = products.filter(p => p.sale).slice(0, 6);
  const watchProducts = products.filter(p => p.category === 'watches').slice(0, 4);

  return (
    <div className="animate-fade-in">
      {/* Hero Banner - 50% OFF */}
      <section className="hero-banner py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=400&fit=crop"
                alt="50% OFF Everything"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
              UP TO <span className="text-modo-red">50% OFF</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
              EVERYTHING
            </p>
            <Link
              to="/catalog"
              className="inline-block bg-modo-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors shadow-lg"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center gap-4 p-6 bg-gray-50 rounded-lg">
              <span className="text-4xl">🚚</span>
              <span className="text-xl font-black text-gray-900">FAST DELIVERY</span>
            </div>
            <div className="flex items-center justify-center gap-4 p-6 bg-gray-50 rounded-lg">
              <span className="text-4xl">💵</span>
              <span className="text-xl font-black text-gray-900">CASH ON DELIVERY</span>
            </div>
            <div className="flex items-center justify-center gap-4 p-6 bg-gray-50 rounded-lg">
              <span className="text-4xl">🔄</span>
              <span className="text-xl font-black text-gray-900">EASY RETURNS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Collection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 text-center">
            SHOP BY COLLECTION
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/catalog/${category.id}`}
                className="category-card group"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                </div>
                <h3 className="mt-3 text-sm md:text-lg font-bold text-gray-900 uppercase">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sale Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              SALE ITEMS
            </h2>
            <Link
              to="/catalog"
              className="text-modo-red font-bold hover:underline"
            >
              VIEW ALL
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {saleProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="product-card bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <div className="relative aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.sale && (
                    <span className="absolute top-2 right-2 sale-badge">SALE</span>
                  )}
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="price-current">LE {product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="price-original text-xs">
                        LE {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Watches Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10">
            WATCHES
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {watchProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="product-card bg-white rounded-lg overflow-hidden shadow-sm border"
              >
                <div className="relative aspect-square bg-amber-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.sale && (
                    <span className="absolute top-2 right-2 sale-badge">SALE</span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-modo-red uppercase mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="price-current text-lg">
                      LE {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="price-original">
                        LE {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Men's Accessories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10">
            MEN'S ACCESSORIES
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products
              .filter(p => p.category === 'mens-accessories')
              .map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="product-card bg-white rounded-lg overflow-hidden shadow-sm"
                >
                  <div className="relative aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-modo-red mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="price-current">
                        LE {product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="price-original text-xs">
                          LE {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Belts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10">
            BELTS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products
              .filter(p => p.category === 'belts')
              .map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="product-card bg-white rounded-lg overflow-hidden shadow-sm border"
                >
                  <div className="relative aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {product.sale && (
                      <span className="absolute top-2 right-2 sale-badge">SALE</span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-gray-900 uppercase mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="price-current text-lg">
                        LE {product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="price-original">
                          LE {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
