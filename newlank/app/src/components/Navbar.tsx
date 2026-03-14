import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Sheet, SheetContent } from '@/components/ui/sheet';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'CATALOG', path: '/catalog' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Main Header */}
      <header className="header-red sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left - Menu & Search */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
              <button className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors hidden md:block">
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Center - Logo */}
            <Link to="/" className="flex items-center justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-red-600 to-red-800 border-4 border-black/30 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm md:text-lg tracking-wider">Modo</span>
              </div>
            </Link>

            {/* Right - User & Cart */}
            <div className="flex items-center gap-2 md:gap-4">
              <button className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
                <User className="w-5 h-5" />
              </button>
              <Link
                to="/cart"
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors relative"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-full sm:w-80 p-0">
          <div className="flex flex-col h-full">
            {/* Close button */}
            <div className="p-4 border-b">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 p-6">
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-2xl font-bold tracking-wide transition-colors ${
                        isActive(link.path)
                          ? 'text-modo-red'
                          : 'text-gray-900 hover:text-modo-red'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Shop by Collection */}
              <div className="mt-10">
                <h3 className="text-lg font-bold text-gray-900 mb-4">SHOP BY COLLECTION</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/catalog/wallets"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-gray-600 hover:text-modo-red transition-colors"
                    >
                      Wallets
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/catalog/watches"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-gray-600 hover:text-modo-red transition-colors"
                    >
                      Watches
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/catalog/belts"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-gray-600 hover:text-modo-red transition-colors"
                    >
                      Belts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/catalog/earbuds"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-gray-600 hover:text-modo-red transition-colors"
                    >
                      Earbuds
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/catalog/hats"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-gray-600 hover:text-modo-red transition-colors"
                    >
                      Hats
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/catalog/mens-accessories"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-gray-600 hover:text-modo-red transition-colors"
                    >
                      Men's Accessories
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/catalog/womens-accessories"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-gray-600 hover:text-modo-red transition-colors"
                    >
                      Women's Accessories
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
