import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const NavigationBar = () => {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-red-200 sticky top-0 z-50 w-full p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold hover:text-pink-600 transition duration-300">
          Sass Hair@Makeup
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="fas fa-bars text-2xl text-gray-700"></i>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/contactus" className="text-lg font-semibold text-gray-700 hover:text-white">
            Contact Us
          </Link>
          <Link to="/aboutus" className="text-lg font-semibold text-gray-700 hover:text-white">
            About Us
          </Link>
          <Link to="/trending" className="text-lg font-semibold text-gray-700 hover:text-white">
            Trending
          </Link>
        </div>

        {/* Cart Icon */}
        <div className="ml-4 relative">
          <Link to="/cart">
            <i className="fas fa-shopping-cart text-2xl text-gray-700"></i>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="mt-4 flex flex-col space-y-2 md:hidden">
          <Link to="/contactus" className="text-lg font-semibold text-gray-700 hover:text-white" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </Link>
          <Link to="/aboutus" className="text-lg font-semibold text-gray-700 hover:text-white" onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
          <Link to="/trending" className="text-lg font-semibold text-gray-700 hover:text-white" onClick={() => setIsMenuOpen(false)}>
            Trending
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
