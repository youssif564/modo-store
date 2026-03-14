import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Send, User } from 'lucide-react';
import { toast } from 'sonner';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-100 mt-16">
      {/* Newsletter Section */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h3 className="text-xl font-bold text-gray-900">GET ON THE LIST</h3>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="newsletter-input flex-1 md:w-80"
                required
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 font-bold hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                OK
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-800 border-4 border-black/30 flex items-center justify-center shadow-lg mb-4">
              <span className="text-white font-bold text-lg tracking-wider">Modo</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Premium accessories for the modern lifestyle. Quality products at unbeatable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-modo-red transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-600 hover:text-modo-red transition-colors text-sm">
                  Catalog
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-600 hover:text-modo-red transition-colors text-sm">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-modo-red transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">POLICIES</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-modo-red transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-gray-600 hover:text-modo-red transition-colors text-sm">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/shipping-policy" className="text-gray-600 hover:text-modo-red transition-colors text-sm">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-600 hover:text-modo-red transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">CONTACT</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <Mail className="w-4 h-4 text-modo-red" />
                youssifkarim12@gmail.com
              </li>
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <User className="w-4 h-4 text-modo-red" />
                Youssif Karim
              </li>
              <li className="flex items-start gap-2 text-gray-600 text-sm">
                <MapPin className="w-4 h-4 text-modo-red mt-0.5" />
                Egypt
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} MODO. All rights reserved.
            </p>
            <Link
              to="/admin-guide"
              className="text-gray-400 hover:text-modo-red transition-colors text-xs"
            >
              Admin Guide
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
