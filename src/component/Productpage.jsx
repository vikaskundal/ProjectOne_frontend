import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCart } from './CartContext';
import axios from 'axios';
import { toast } from 'react-toastify'; // For showing notifications
import 'react-toastify/dist/ReactToastify.css';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); 
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [productRes, productsRes] = await Promise.all([
          axios.get('https://final-project-4-kjpv.onrender.com/api/products/${id}'),
          axios.get('https://final-project-4-kjpv.onrender.com/api/products')
        ]);
        
        setProduct(productRes.data);
        
        // Filter out the current product and get 4 random related products
        const filteredProducts = productsRes.data.filter(p => p._id !== id);
        const shuffled = [...filteredProducts].sort(() => 0.5 - Math.random());
        setRelatedProducts(shuffled.slice(0, 4));
      } catch (err) {
        setError('Failed to load product.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Math.min(99, parseInt(e.target.value) || 1));
    setQuantity(value);
  };

  const handleAddToCart = (e,product) => {
    e.stopPropagation();
    // Here you would typically add to cart logic
     addToCart({ ...product, quantity }); // Add the product with selected quantity
     alert(`${product.name} added to cart!`);
    // For now, we'll just show a success message
    
   
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        {error}
        <button
          className="mt-4 px-4 py-2 bg-pink-300 text-white rounded hover:bg-pink-400 transition-colors"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center py-10">Product not found</div>;
  }

  // Create an array of images (main image + any additional images)
  const images = [product.imageUrl, ...(product.additionalImages || [])];

  return (
    <div className="container mx-auto px-4 py-8 bg-pink-50 min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-pink-200 rounded hover:bg-pink-300 text-pink-800 transition-colors flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Products
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex mb-16">
        <div className="md:w-1/2 p-6">
          <div className="relative h-96 mb-4 bg-pink-50 rounded-lg flex items-center justify-center">
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="max-h-full max-w-full object-contain transition-opacity duration-300"
            />
          </div>
          
          {images.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto py-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-16 border-2 rounded ${selectedImage === index ? 'border-pink-400' : 'border-transparent'}`}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="md:w-1/2 p-6">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-pink-800 bg-pink-100 rounded-full">
              {product.category}
            </span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < (product.rating || 4) ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 text-sm">({product.reviewCount || 12} reviews)</span>
          </div>
          
          <p className="text-3xl text-pink-600 font-semibold mb-6">${product.price.toFixed(2)}</p>
          
          <p className="mb-6 text-gray-700 leading-relaxed">{product.description}</p>
          
          {/* Always show "In Stock" since you don't use inventory system */}
          <div className="mb-6 flex items-center">
            <span className="text-green-600 font-medium mr-2">In Stock</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          
          <div className="flex items-center mb-6">
            <label htmlFor="quantity" className="mr-4 text-gray-700">Quantity:</label>
            <div className="flex border rounded-md overflow-hidden">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 bg-pink-100 text-pink-800 hover:bg-pink-200 transition-colors"
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                min="1"
                max="99"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 text-center border-l border-r border-gray-300"
              />
              <button 
                onClick={() => setQuantity(Math.min(99, quantity + 1))}
                className="px-3 py-1 bg-pink-100 text-pink-800 hover:bg-pink-200 transition-colors"
              >
                +
              </button>
            </div>
          </div>
          
          <button 
            onClick={(e)=>handleAddToCart(e,product)}
            className="w-full bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors shadow-md hover:shadow-lg flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-pink-200">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <Link to={`/product/${item._id}`} className="block">
                <div className="relative h-48 bg-pink-50 flex items-center justify-center p-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 truncate">{item.name}</h3>
                  <p className="text-pink-600 font-bold">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <div className="flex text-yellow-400 mr-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < (item.rating || 3) ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-500 text-xs">({item.reviewCount || 8})</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;