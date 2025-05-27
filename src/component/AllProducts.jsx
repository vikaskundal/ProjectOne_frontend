import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "./CartContext";
import { Link } from 'react-router-dom';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://final-project-4-kjpv.onrender.com/api/products');
        setProducts(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleBuyNow = (e, product) => {
    e.stopPropagation();
    addToCart({ ...product, quantity: 1 });
    alert(`${product.name} added to cart!`);
  };

  if (loading) return <div className="text-center mt-10">Loading products...</div>;
  if (!products.length) return <div className="text-center mt-10">No products available</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-xl hover:ring-2 hover:ring-red-400 transform hover:scale-105 transition duration-300 text-center"
          >
            <Link to={`/product/${product._id}`} className="block">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.category}</p>
              <p className="text-gray-800 font-bold mt-2">
                ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
              </p>
              <p className="text-gray-500 text-sm mt-2 line-clamp-2">{product.description}</p>
            </Link>

            <button
              className="mt-4 px-4 py-2 bg-red-400 text-white rounded hover:bg-red-600 w-full"
              onClick={(e) => handleBuyNow(e, product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
