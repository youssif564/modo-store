import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Truck, Shield, RotateCcw, Check } from 'lucide-react';
import { getProductById, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p className="text-gray-500 mb-6">The product you're looking for doesn't exist.</p>
        <Link
          to="/catalog"
          className="inline-block bg-modo-red text-white px-6 py-3 rounded-lg font-bold"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`Added ${quantity} item(s) to cart!`);
  };

  const handleBuyNow = () => {
    // Navigate to Buy Now page with product ID and quantity
    navigate(`/buy-now?product=${product.id}&qty=${quantity}`);
  };

  return (
    <div className="animate-fade-in py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-modo-red">Home</Link>
          <span>/</span>
          <Link to="/catalog" className="hover:text-modo-red">Catalog</Link>
          <span>/</span>
          <span className="text-gray-900 line-clamp-1">{product.name}</span>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-modo-red mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.sale && (
              <span className="absolute top-4 left-4 bg-black text-white px-4 py-2 font-bold">
                SALE
              </span>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-black text-gray-900">
                LE {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">
                  LE {product.originalPrice.toLocaleString()}
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-modo-red text-white px-3 py-1 text-sm font-bold rounded">
                  SAVE LE {(product.originalPrice - product.price).toLocaleString()}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Stock Status */}
            <div className="flex items-center gap-2 mb-6">
              <Check className={`w-5 h-5 ${product.inStock ? 'text-green-500' : 'text-red-500'}`} />
              <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100"
                >
                  -
                </button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 mb-8">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full bg-black text-white py-4 h-auto text-lg font-bold hover:bg-gray-800"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                ADD TO CART
              </Button>
              
              {/* Cash on Delivery Button */}
              <Button
                onClick={handleBuyNow}
                disabled={!product.inStock}
                className="w-full cod-button py-4 h-auto text-lg"
              >
                <span className="mr-2">💵</span>
                CASH ON DELIVERY - BUY NOW
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck className="w-6 h-6 mx-auto mb-2 text-modo-red" />
                <p className="text-xs text-gray-600">Fast Delivery</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto mb-2 text-modo-red" />
                <p className="text-xs text-gray-600">Secure Payment</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 mx-auto mb-2 text-modo-red" />
                <p className="text-xs text-gray-600">Easy Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-black text-gray-900 mb-6">
              YOU MAY ALSO LIKE
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  to={`/product/${related.id}`}
                  className="product-card bg-white rounded-lg overflow-hidden shadow-sm border"
                >
                  <div className="relative aspect-square bg-gray-50">
                    <img
                      src={related.image}
                      alt={related.name}
                      className="w-full h-full object-cover"
                    />
                    {related.sale && (
                      <span className="absolute top-2 right-2 sale-badge">SALE</span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2">
                      {related.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="price-current font-bold">
                        LE {related.price.toLocaleString()}
                      </span>
                      {related.originalPrice && (
                        <span className="price-original text-sm">
                          LE {related.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
