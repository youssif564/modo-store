import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="animate-fade-in container mx-auto px-4 py-16 text-center">
        <ShoppingBag className="w-20 h-20 mx-auto text-gray-300 mb-6" />
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
        <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link
          to="/catalog"
          className="inline-block bg-modo-red text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors"
        >
          START SHOPPING
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-modo-red">Home</Link>
          <span>/</span>
          <span className="text-gray-900">Shopping Cart</span>
        </div>

        <h1 className="text-3xl font-black text-gray-900 mb-8">
          SHOPPING CART ({items.reduce((sum, item) => sum + item.quantity, 0)} items)
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 bg-white border rounded-lg"
              >
                {/* Product Image */}
                <Link to={`/product/${item.id}`} className="w-24 h-24 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </Link>

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <Link
                    to={`/product/${item.id}`}
                    className="text-sm font-medium text-gray-900 hover:text-modo-red line-clamp-2"
                  >
                    {item.name}
                  </Link>
                  <p className="text-modo-red font-bold mt-1">
                    LE {item.price.toLocaleString()}
                  </p>
                  {item.originalPrice && (
                    <p className="text-gray-400 text-sm line-through">
                      LE {item.originalPrice.toLocaleString()}
                    </p>
                  )}
                </div>

                {/* Quantity & Actions */}
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart */}
            <button
              onClick={() => {
                clearCart();
                toast.success('Cart cleared');
              }}
              className="text-gray-500 hover:text-red-500 text-sm underline"
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">ORDER SUMMARY</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>LE {totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium">LE 70</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Taxes (0%)</span>
                  <span className="font-medium">LE 0</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>LE {(totalPrice + 70).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => navigate('/checkout')}
                className="w-full bg-modo-red text-white py-4 h-auto text-lg font-bold hover:bg-red-700 mb-4"
              >
                PROCEED TO CHECKOUT
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              {/* Cash on Delivery */}
              <Button
                onClick={() => navigate('/checkout')}
                variant="outline"
                className="w-full py-4 h-auto text-lg font-bold border-2 border-green-600 text-green-600 hover:bg-green-50"
              >
                <span className="mr-2">💵</span>
                CASH ON DELIVERY
              </Button>

              <Link
                to="/catalog"
                className="block text-center text-modo-red font-medium mt-4 hover:underline"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
