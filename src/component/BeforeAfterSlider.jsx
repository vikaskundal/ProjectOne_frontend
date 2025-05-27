import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BeforeAfterSlider = () => {
  const images = [
    "/Images/after1.jpg",
    "/Images/after2.jpg",
    "/Images/after3.jpg",
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-4 bg-gray-100">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 p-4 lg:p-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4 text-center lg:text-left">
          See the Difference—Glow Like Never Before!
        </h2>
        <p className="font-serif text-base sm:text-lg mb-6 text-center lg:text-left">
          Experience the magic of transformation! Our makeup enhances your natural beauty with long-lasting, lightweight, and hydrating formulas. See the difference—glow effortlessly. Shop now and redefine your look!
        </p>
      </div>

      {/* Image Slider Section */}
      <div className="w-full lg:w-1/2 flex justify-center p-4">
        <div className="w-full sm:w-[90%] md:w-[600px] lg:w-[700px] h-[400px] sm:h-[500px] lg:h-[550px] overflow-hidden rounded-lg shadow-lg">
          <Swiper
            direction="horizontal"
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Autoplay, Navigation, Pagination]}
            className="w-full h-full"
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
    </div>
  );
};

export default BeforeAfterSlider;
