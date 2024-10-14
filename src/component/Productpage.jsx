// src/components/ProductPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom for links

// Sample Product Data
const productData = {
  title: 'Elegant Silk Dress',
  description:
    'Experience the luxury of our elegant silk dress, perfect for any occasion. Crafted with the finest materials to ensure comfort and style.',
  price: '$199.99',
  variants: [
    {
      id: 1,
      name: 'Red',
      image:
        'src/Images/makeup6.jpg',
    },
    {
      id: 2,
      name: 'Blue',
      image:
        'src/Images/makeup1.jpg',
    },
    {
      id: 3,
      name: 'Green',
      image:
        'src/Images/makeup4.jpg',
    },
  ],
};

const ProductPage = () => {
  const [selectedVariant, setSelectedVariant] = useState(productData.variants[0]);

  return (
    <section className="py-12 bg-gray-100">
      {/* New Section Before Everything */}
      <div className="flex justify-between items-center p-6 bg-red-100 shadow-md">
    
        <h1 className="text-3xl font-bold text-center w-1/2">Sass Hair@Makeup</h1>
        </div>
      
      {/* Existing Product Page Content */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6 mt-6">
        <div className="flex flex-col md:flex-row">
          {/* Image Gallery */}
          <div className="md:w-1/2">
            {/* Main Image */}
            <div className="mb-4">
              <img
                src={selectedVariant.image}
                alt={`${productData.title} - ${selectedVariant.name}`}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex space-x-4">
              {productData.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`border rounded-lg overflow-hidden focus:outline-none ${
                    selectedVariant.id === variant.id
                      ? 'border-blue-500'
                      : 'border-gray-300'
                  }`}
                >
                  <img
                    src={variant.image}
                    alt={variant.name}
                    className="w-16 h-16 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 md:pl-12 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4">{productData.title}</h1>
            <p className="text-gray-700 mb-6">{productData.description}</p>
            <p className="text-2xl font-semibold text-green-600 mb-6">
              {productData.price}
            </p>
            <div className="flex space-x-4 mb-6">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                Add to Cart
              </button>
              <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
                Buy Now
              </button>
            </div>
            {/* Variant Selector */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Available Variants:</h2>
              <div className="flex space-x-4">
                {productData.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 rounded-full border ${
                      selectedVariant.id === variant.id
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                    } transition duration-300`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Optional: Additional Information or Features */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Product Features</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>100% Pure Silk Material</li>
            <li>Available in Multiple Colors</li>
            <li>Elegant and Comfortable Fit</li>
            <li>Perfect for Formal Occasions</li>
          </ul>
        </div>
      </div>
      <div className="bg-black rounded-xl border-2 border-gray-300 text-center p-6 my-6">
  <h1 className=" font-serif text-3xl font-bold text-white">Related Product</h1>
</div>
      <div className='flex flex-row space-x-5 p-6 mt-3 rounded-lg justify-center bg-red-100'>
  <Link to="/productpage">
    <div className="bg-white p-6 rounded-lg shadow-md h-64 group relative">
      {/* Image */}
      <img
        src="/src/images/makeup10.jpg" // Replace this with your image URL
        alt="Product Sample"
        className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out"
      />
      {/* Overlay with Price */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out rounded-lg flex items-center justify-center">
        <span className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          $19.99
        </span>
      </div>
    </div>
  </Link>
  
  <Link to="/productpage">
    <div className="bg-white p-6 rounded-lg shadow-md h-64 group relative">
      {/* Image */}
      <img
        src="/src/images/makeup10.jpg" // Replace this with your image URL
        alt="Product Sample"
        className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out"
      />
      {/* Overlay with Price */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out rounded-lg flex items-center justify-center">
        <span className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          $19.99
        </span>
      </div>
    </div>
  </Link>
  
  <Link to="/productpage">
    <div className="bg-white p-6 rounded-lg shadow-md h-64 group relative">
      {/* Image */}
      <img
        src="/src/images/makeup10.jpg" // Replace this with your image URL
        alt="Product Sample"
        className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out"
      />
      {/* Overlay with Price */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out rounded-lg flex items-center justify-center">
        <span className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          $19.99
        </span>
      </div>
    </div>
  </Link>
  
  <Link to="/productpage">
    <div className="bg-white p-6 rounded-lg shadow-md h-64 group relative">
      {/* Image */}
      <img
        src="/src/images/makeup10.jpg" // Replace this with your image URL
        alt="Product Sample"
        className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out"
      />
      {/* Overlay with Price */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out rounded-lg flex items-center justify-center">
        <span className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          $19.99
        </span>
      </div>
    </div>
  </Link>
  
  <Link to="/productpage">
    <div className="bg-white p-6 rounded-lg shadow-md h-64 group relative">
      {/* Image */}
      <img
        src="/src/images/makeup10.jpg" // Replace this with your image URL
        alt="Product Sample"
        className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out"
      />
      {/* Overlay with Price */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out rounded-lg flex items-center justify-center">
        <span className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          $19.99
        </span>
      </div>
    </div>
  </Link>
</div>
<footer className="bg-gray-900 text-white py-4 mt-12 flex justify-between items-center px-6">
  {/* Left Section: All rights reserved */}
  <div className="text-lg">
    <p>© 2024 Team Project-One. All rights reserved.</p>
  </div>

  {/* Right Section: Social Media Links */}
  <div className="flex space-x-4 ">
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
      <i className="fab fa-instagram text-xl"></i> {/* Instagram Icon */}
    </a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
      <i className="fab fa-facebook text-xl"></i> {/* Facebook Icon */}
    </a>
  </div>
</footer>
    </section>
  );
};

// PropTypes for better type checking (optional but recommended)
ProductPage.propTypes = {};

export default ProductPage;
