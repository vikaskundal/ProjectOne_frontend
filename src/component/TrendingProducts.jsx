import React from "react";

const trendingProducts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: `$${(i + 1) * 10}`,
  image: "src/Images/slider-image2.jpg",
}));

const TrendingProducts = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Trending Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
        {trendingProducts.map((product) => (
          <div key={product.id} className="p-6 bg-white rounded-2xl shadow-lg text-center">
            <img src={product.image} alt={product.name} className="w-32 h-32 mx-auto mb-4 rounded-lg" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
