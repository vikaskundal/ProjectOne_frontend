import React, { useEffect, useState } from "react";

export function ImageSlider() {
  // Array of image URLs for the slider
  const images = [
    "src/images/sliderImage3.jpg",
    "src/images/slider-image2.jpg",
    "src/images/sliderimage5.jpg",
    
  ];

  // State to track the currently displayed image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to handle automatic image transitions
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="flex items-center justify-center mt-12 px-6">
      <div className="w-full max-w-6xl h-[500px] overflow-hidden rounded-2xl shadow-lg relative">
        {/* Slider container */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ width: `${images.length * 100}%`, transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}
        >
          {/* Render each image in the array */}
          {images.map((image, index) => (
            <div key={index} style={{ width: `${100 / images.length}%` }} className="flex-shrink-0">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[500px] object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
