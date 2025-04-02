import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom for links
import { useCart } from './CartContext';




const NavigationBar = () => {
  const { cart } = useCart();

  return (
    <div className="flex justify-between items-center w-full py-4 bg-red-200 p-7">
      {/* Centered Navigation Links */}
      <div className="flex justify-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
        <Link to="/HomePage" className="text-lg font-semibold text-gray-700 hover:text-gray-100">
          Home
        </Link>
        <Link to="/contactus" className="text-lg font-semibold text-gray-700 hover:text-gray-100">
          Contact Us
        </Link>
        <Link to="/special" className="text-lg font-semibold text-gray-700 hover:text-gray-100">
          Special
        </Link>
        <Link to="/trending" className="text-lg font-semibold text-gray-700 hover:text-gray-100">
          Trending
        </Link>
      </div>

      {/* Cart Icon aligned to the Right */}
      <div className="flex ml-auto">
        <Link to="/cart" className="relative">
          <i className="fas fa-shopping-cart text-3xl text-gray-700"></i>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
