import React from 'react';

const ImageBannerWithText = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 bg-gray-100">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
        <img
          src="/Images/slider-image2.jpg" 
          alt="Banner"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 p-4 lg:p-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4 text-center lg:text-left">
          Don't go with Trend. Be the Trend
        </h2>
        <p className="font-serif text-base sm:text-lg text-center lg:text-left">
          At Hair&Beauty, we believe in embracing originality and setting the trend, not just following it. 
          Our unique products empower you to express your individuality and inspire others. 
          Stand out, make a statement, and lead the way with Hair&Beauty — where true style begins.
        </p>
      </div>
    </div>
  );
};

export default ImageBannerWithText;
