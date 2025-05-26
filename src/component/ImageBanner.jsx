import React from 'react';
const ImageBannerWithText = () => {
  return (
    <div className="flex items-center justify-between p-6 bg-black-100">
      <div className="w-1/2">
     
        <img
          src="/Images/slider-image2.jpg" 
          alt="Banner"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="w-1/2 p-6  rounded-lg mx-3">
        <h2 className="font-serif text-3xl font-bold mb-4 ">Dont go with Trend. Be the Trend</h2>
        <p className="font-serif text-lg mb-6">
        

At Hair&Beauty, we believe in embracing originality and setting the trend, not just following it. Our unique products empower you to express your individuality and inspire others. Stand out, make a statement, and lead the way with Hair&Beauty where true style begins.        </p>
        
      </div>
    </div>
    
  );
};

export default ImageBannerWithText;
