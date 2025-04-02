import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BeforeAfterSlider = () => {
  const images = [
   "src/images/BeforeAfter1.jpg",
   "src/images/BeforeAfter2.jpg",
   "src/images/BeforeAfter3.jpg",
   "src/images/BeforeAfter4.jpg",
   "src/images/BeforeAfter5.jpg",
   "src/images/BeforeAfter6.jpg",
   "src/images/BeforeAfter7.jpg",
   "src/images/BeforeAfter8.jpg"
  ];

 

  return (
    <div className="flex items-center justify-between p-4 bg-red-100">
        <div className="w-1/2 p-6 mx-7  rounded-lg ">
      <h2 className="font-serif text-3xl font-bold mb-4">
      See the Difference—Glow Like Never Before!
      </h2>
      <p className="font-serif text-lg mb-6">
      "Experience the magic of transformation! Our makeup enhances your natural beauty with long-lasting, lightweight, and hydrating formulas. See the difference—glow effortlessly. Shop now and redefine your look!"
       
      </p>
    </div>
    {/* Image Slider Section */}
    <div className="w-1/2">
      <div className="w-[700px] h-[550px] p-2 overflow-hidden  rounded-lg shadow-lg">
        <Swiper
          direction="horizontal"
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, Navigation, Pagination]}
          className="w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

    {/* Text Section */}
    
  </div>
  );
};

export default BeforeAfterSlider;
