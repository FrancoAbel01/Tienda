import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Package } from 'lucide-react';
import { useCartContext } from '../../context/CartContext';
import { CartCounter } from '../cart/CartCounter';

export function Navbar({ onCartClick }: { onCartClick: () => void }) {
  const { itemCount } = useCartContext();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            StyleStore
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/orders"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Package className="w-6 h-6" />
            </Link>
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && <CartCounter count={itemCount} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}