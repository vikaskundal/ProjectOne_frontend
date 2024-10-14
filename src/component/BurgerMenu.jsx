import React, { useState } from "react";

const BurgerMenuCard = () => {
  // State to control card visibility
  const [isHovered, setIsHovered] = useState(false);

  // Handlers to show and hide the card
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="flex items-center justify-center  bg-gray-100">
      {/* Burger Menu Container */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Burger Menu Button */}
        <button className="p-2 border rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none">
          {/* Burger Icon */}
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Card Component with Higher z-index */}
        {isHovered && (
          <div
            className="absolute  top-12 left-0 p-4 bg-red-100 border rounded-lg shadow-lg z-50 "
            onMouseEnter={handleMouseEnter} // Keep visible when hovering over the card
            onMouseLeave={handleMouseLeave} // Hide when leaving the card
          >
            
            <ul className="mt-2 space-y-1 w-32 ">
              <li className="text-black font-bold font-serif hover:text-red-600 cursor-pointer ">COLLECTION</li>
              <li className="text-black font-bold font-serif hover:text-red-600 cursor-pointer">HOME</li>
              <li className="text-black font-bold font-serif hover:text-red-600 cursor-pointer">CONTACT US</li>
              <li className="text-black font-bold font-serif hover:text-red-600 cursor-pointer ">ABOUT US</li>
              <li className="text-black font-bold font-serif hover:text-red-600 cursor-pointer">SPECIAL OFFERS</li>
              <li className="text-black font-bold font-serif hover:text-red-600 cursor-pointer">SOCIAL HANDLE</li>

            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BurgerMenuCard;
