import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingProducts();
  }, []);

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-200"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-200 to-white">
      {/* Hero Section */}
      <div className="bg-pink-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold  mb-4">Trending Now</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Shop our most popular products
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product._id}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <Link to={`/product/${product._id}`} className="block">
                {/* Product Image */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Trending Badge */}
                <div className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  TRENDING
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-800 truncate">
                      {product.name}
                    </h3>
                    <span className="text-pink-500 font-bold">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </Link>

              {/* Add to Cart Button */}
              <div className="px-5 pb-5">
                <button
                  onClick={(e) => handleAddToCart(product, e)}
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;