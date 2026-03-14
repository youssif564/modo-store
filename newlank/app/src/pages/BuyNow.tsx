import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Check, CreditCard, Mail, Package, User, MapPin, Phone, ShoppingBag } from 'lucide-react';
import { getProductById } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { sendOrderEmail, generateOrderId } from '@/services/emailService';

export default function BuyNow() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const productId = searchParams.get('product');
  const quantity = parseInt(searchParams.get('qty') || '1');
  
  const product = productId ? getProductById(productId) : undefined;
  
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'card'>('cod');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
  });

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <Link
          to="/catalog"
          className="inline-block bg-modo-red text-white px-8 py-4 rounded-lg font-bold"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  const subtotal = product.price * quantity;
  const shippingCost = 70;
  const totalPrice = subtotal + shippingCost;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate order ID
    const newOrderId = generateOrderId();
    setOrderId(newOrderId);

    // Create order items array
    const orderItems = [{
      ...product,
      quantity: quantity
    }];

    // Prepare order data for email
    const orderData = {
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      customerAddress: formData.address,
      customerCity: formData.city,
      items: orderItems,
      totalPrice: totalPrice,
      subtotal: subtotal,
      shippingCost: shippingCost,
      paymentMethod: paymentMethod,
      orderId: newOrderId,
    };

    try {
      // Send order email to store owner
      const emailSent = await sendOrderEmail(orderData);
      
      if (emailSent) {
        toast.success(
          paymentMethod === 'cod' 
            ? 'Order placed successfully! You will pay on delivery.' 
            : 'Order placed successfully!'
        );
        setOrderPlaced(true);
      } else {
        toast.error('There was an issue sending the order. Please try again.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Order Success Page
  if (orderPlaced) {
    return (
      <div className="animate-fade-in py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-black text-gray-900 mb-2">
              ORDER PLACED!
            </h1>
            <p className="text-gray-600 mb-6">
              Thank you for your order. We've sent the details to our team.
            </p>
            
            {/* Order ID */}
            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-500 mb-1">Order ID</p>
              <p className="text-xl font-bold text-gray-900">{orderId}</p>
            </div>

            {/* Order Summary */}
            <div className="text-left bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-modo-red" />
                Order Summary
              </h3>
              
              {/* Customer Info */}
              <div className="mb-4 pb-4 border-b">
                <p className="text-sm text-gray-500 mb-2">Customer Information</p>
                <div className="space-y-1 text-sm">
                  <p className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    {formData.name}
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    {formData.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    {formData.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    {formData.address}, {formData.city}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="mb-4 pb-4 border-b">
                <p className="text-sm text-gray-500 mb-2">Item Ordered</p>
                <div className="flex gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-500">Qty: {quantity}</p>
                    <p className="font-bold text-modo-red">
                      LE {subtotal.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Shipping */}
              <div className="flex justify-between items-center py-2 border-t">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">LE {shippingCost}</span>
              </div>

              {/* Taxes */}
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Taxes (0%)</span>
                <span className="font-medium">LE 0</span>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center pt-3 border-t">
                <span className="font-bold text-gray-900">Total</span>
                <span className="text-xl font-black text-modo-red">
                  LE {totalPrice.toLocaleString()}
                </span>
              </div>

              {/* Payment Method */}
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-500">Payment Method</p>
                <p className="font-medium">
                  {paymentMethod === 'cod' ? 'Cash on Delivery' : 'Credit/Debit Card'}
                </p>
              </div>
            </div>

            {/* Note to customer */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> We will contact you shortly to confirm your order. 
                Please keep your phone available.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/"
                className="flex-1 bg-modo-red text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
              >
                CONTINUE SHOPPING
              </Link>
              <Link
                to="/catalog"
                className="flex-1 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
              >
                BROWSE MORE PRODUCTS
              </Link>
            </div>
          </div>
        </div>
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
          <Link to={`/product/${product.id}`} className="hover:text-modo-red">Product</Link>
          <span>/</span>
          <span className="text-gray-900">Buy Now</span>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-modo-red mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Product
        </button>

        <h1 className="text-3xl font-black text-gray-900 mb-8">BUY NOW</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white p-6 rounded-lg border">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                CONTACT INFORMATION
              </h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white p-6 rounded-lg border">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                SHIPPING ADDRESS
              </h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="address">Street Address *</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Enter your street address"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="Enter your city"
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 rounded-lg border">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                PAYMENT METHOD
              </h2>
              <div className="space-y-3">
                {/* Cash on Delivery */}
                <label
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    paymentMethod === 'cod'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="sr-only"
                  />
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💵</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900">Cash on Delivery</p>
                      <p className="text-sm text-gray-500">Pay when you receive your order</p>
                    </div>
                    {paymentMethod === 'cod' && (
                      <Check className="w-6 h-6 text-green-500" />
                    )}
                  </div>
                </label>

                {/* Credit Card */}
                <label
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    paymentMethod === 'card'
                      ? 'border-modo-red bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="sr-only"
                  />
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900">Credit/Debit Card</p>
                      <p className="text-sm text-gray-500">Pay securely with your card</p>
                    </div>
                    {paymentMethod === 'card' && (
                      <Check className="w-6 h-6 text-modo-red" />
                    )}
                  </div>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-modo-red text-white py-4 h-auto text-lg font-bold hover:bg-red-700"
            >
              {isSubmitting ? (
                'Processing...'
              ) : (
                <>
                  {paymentMethod === 'cod' ? (
                    <>
                      <span className="mr-2">💵</span>
                      PLACE ORDER - CASH ON DELIVERY
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5 mr-2" />
                      PAY LE {totalPrice.toLocaleString()}
                    </>
                  )}
                </>
              )}
            </Button>
          </form>

          {/* Order Summary */}
          <div className="lg:pl-8">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">ORDER SUMMARY</h2>
              
              {/* Product */}
              <div className="flex gap-4 mb-6 pb-6 border-b">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="font-medium text-gray-900 mb-1">{product.name}</p>
                  <p className="text-sm text-gray-500 mb-2">Qty: {quantity}</p>
                  <p className="font-bold text-modo-red">
                    LE {product.price.toLocaleString()} each
                  </p>
                </div>
              </div>

              {/* Totals */}
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>LE {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium">LE {shippingCost}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Taxes (0%)</span>
                  <span className="font-medium">LE 0</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-xl font-black">
                    <span>Total</span>
                    <span>LE {totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Direct purchase - no cart needed</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Check className="w-4 h-4" />
                  <span>Order confirmation email will be sent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
