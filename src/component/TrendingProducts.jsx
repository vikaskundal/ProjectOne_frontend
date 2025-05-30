import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { FaStar, FaRegStar } from "react-icons/fa";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      try {
        const response = await axios.get('https://final-project-4-kjpv.onrender.com/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingProducts();
  }, []);

  const renderStars = (rating) => {
    return (
      <div className="flex justify-center mt-2">
        {Array.from({ length: 5 }, (_, i) =>
          i < rating ? (
            <FaStar key={i} className="text-blue-400" />
          ) : (
            <FaRegStar key={i} className="text-blue-200" />
          )
        )}
      </div>
    );
  };

  return loading ? (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-400"></div>
    </div>
  ) : (
    <div className="bg-white text-black font-sans">

      {/* Title */}
      <h1 className="text-3xl font-bold text-center my-6">Treding <span className="text-pink-500">Products</span></h1>

      {/* Hot Products Section */}
      <section className="px-4 mb-10">
        <h2 className="text-xl font-bold mb-4 text-center">Hot Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
          {products.slice(0, 4).map(product => (
            <div key={product._id} className="text-center">
              <Link to={`/product/${product._id}`}>
                <img src={product.imageUrl} alt={product.name} className="w-[95px] h-[85px] object-cover mx-auto border" />
                {renderStars(Math.floor(product.rating || 3))}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Feature Skins */}
      <section className="bg-gray-100 px-4 py-6 text-center">
        <h2 className="text-xl font-bold mb-2">Trending Feature skins</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <img src={products[4]?.imageUrl} alt="Trending Skin" className="w-[136px] h-[112px] object-cover border" />
          <p className="max-w-md text-gray-700">
           Glow Boosting Face Serum
Get radiant, dewy skin with every drop - your glow-up starts here!
          </p>
        </div>
      </section>

      {/* Customer Feedback */}
      <section className="px-4 py-6">
        <h2 className="text-xl font-bold text-center mb-4">Customer Feedbacks</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <div className="border border-blue-500 p-4 rounded-md flex items-center gap-3 max-w-sm">
            <div className="w-12 h-12 border rounded-full flex justify-center items-center text-blue-500">👤</div>
            <p className="text-sm text-gray-700">
              This serum gave my skin a glow I didn’t know was possible. Lightweight, non-greasy, and smells amazing!"

, <span className="text-red-500 font-bold">John</span>.
            </p>
          </div>
          <div className="border border-blue-500 p-4 rounded-md flex items-center gap-3 max-w-sm">
            <div className="w-12 h-12 border rounded-full flex justify-center items-center text-blue-500">👤</div>
            <p className="text-sm text-gray-700">
             Absolutely love this foundation! Blends perfectly and stays on all day without cracking." <span className="text-red-500 font-bold">Michael</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-4 text-center border-t text-black font-semibold">
        @saas&beauty
      </footer>
    </div>
  );
};

export default TrendingProducts;
