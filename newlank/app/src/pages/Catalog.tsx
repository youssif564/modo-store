import { useParams, Link } from 'react-router-dom';
import { products, categories, getProductsByCategory } from '@/data/products';

export default function Catalog() {
  const { category } = useParams<{ category?: string }>();
  
  const displayProducts = category 
    ? getProductsByCategory(category)
    : products;

  const categoryName = category 
    ? categories.find(c => c.id === category)?.name || 'All Products'
    : 'All Products';

  return (
    <div className="animate-fade-in py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-modo-red">Home</Link>
          <span>/</span>
          <Link to="/catalog" className="hover:text-modo-red">Catalog</Link>
          {category && (
            <>
              <span>/</span>
              <span className="text-gray-900">{categoryName}</span>
            </>
          )}
        </div>

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 uppercase">
          {categoryName}
        </h1>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link
            to="/catalog"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !category 
                ? 'bg-modo-red text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/catalog/${cat.id}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === cat.id 
                  ? 'bg-modo-red text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Products Grid */}
        {displayProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {displayProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="product-card bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-lg transition-all"
              >
                <div className="relative aspect-square bg-gray-50">
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
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="price-current font-bold">
                      LE {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="price-original text-sm">
                        LE {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
            <Link
              to="/catalog"
              className="inline-block mt-4 text-modo-red font-medium hover:underline"
            >
              View all products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
