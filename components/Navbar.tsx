import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../types';
import { Menu, X, BookOpen } from 'lucide-react';

const navItems: NavItem[] = [
  { label: 'Acasă', path: '/' },
  { label: 'Context', path: '/context' },
  { label: 'Țara Românească', path: '/tara-romaneasca' },
  { label: 'Moldova', path: '/moldova' },
  { label: 'Transilvania', path: '/transilvania' },
  { label: 'Factori', path: '/factori' },
  { label: 'Domnitori', path: '/domnitori' },
  { label: 'Despre', path: '/despre' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-brand-50/90 backdrop-blur-md border-b border-brand-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <BookOpen className="h-6 w-6 text-brand-700 group-hover:text-brand-900 transition-colors" />
              <span className="font-serif font-bold text-xl text-stone-900">Proiect</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-brand-100 text-brand-900 shadow-sm'
                    : 'text-stone-600 hover:text-brand-800 hover:bg-brand-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-600 hover:text-brand-900 hover:bg-brand-100 focus:outline-none"
            >
              <span className="sr-only">Deschide meniu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-brand-50 border-t border-brand-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'bg-brand-100 text-brand-900'
                    : 'text-stone-600 hover:text-brand-900 hover:bg-brand-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};