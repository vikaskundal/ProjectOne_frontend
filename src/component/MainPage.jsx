import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Signup from './signup';
import BeforeAfterSlider from './BeforeAfterSlider';
import Sidebar from './Sidebar';
import AllProducts from './AllProducts';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ImageSlider } from './ImageSlider';
import ImageBannerWithText from './ImageBanner';
import Footer from './Footer';

const MainLayout = () => {
  const [component, setComponent] = useState(null);
  const [showLogout, setShowLogout] = useState(false);

  const handleLogoutClick = () => {
    setShowLogout(false);
  };

  const handleCancel = () => {
    setComponent(null);
  };

  const handleLoginClick = () => {
    setComponent('login');
  };

  const handleSignupClick = () => {
    setComponent('signup');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="flex justify-end items-center p-4 bg-red-100 shadow-md">
        <div className="w-full sm:w-1/2 flex flex-col sm:flex-row justify-end gap-3">
          {!showLogout ? (
            <>
              <button
                className={`px-4 py-2 font-semibold rounded-full transition duration-300 ${
                  component === 'login'
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
                onClick={handleLoginClick}
              >
                Login
              </button>
              <button
                className={`px-4 py-2 font-semibold rounded-full transition duration-300 ${
                  component === 'signup'
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
                onClick={handleSignupClick}
              >
                Signup
              </button>
            </>
          ) : (
            <div className="flex flex-row space-x-2">
              <div className="px-4 py-2 font-bold rounded-full bg-green-500 text-black border">Welcome</div>
              <button
                className="px-4 py-2 font-semibold rounded-full bg-red-500 text-white hover:bg-red-600 transition duration-300"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Image Slider */}
      <div className="mt-8">
        <ImageSlider />
      </div>

      {/* Conditional Login/Signup */}
      {component === 'login' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
            <Login handleCancel={handleCancel} handleSignupClick={handleSignupClick} setComponent={setComponent} setShowLogout={setShowLogout} />
          </div>
        </div>
      )}

      {component === 'signup' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
            <Signup handleCancel={handleCancel} setComponent={setComponent} setShowLogout={setShowLogout} />
          </div>
        </div>
      )}

      {/* Featured Section */}
      <div className="bg-black rounded-xl border-2 border-gray-300 text-center p-6 my-6 mx-2 sm:mx-8">
        <h1 className="font-serif text-3xl font-bold text-white">Featured Collection</h1>
      </div>

      {/* All Products */}
      <div className="px-4 sm:px-8">
        <AllProducts />
      </div>

      {/* Sidebar and other sections */}
      <div className="flex flex-col lg:flex-row px-4 sm:px-8 gap-4">
        <Sidebar />
      </div>

      <div className="px-4 sm:px-8 mt-6">
        <BeforeAfterSlider />
      </div>

      <div className="px-4 sm:px-8 mt-6">
        <ImageBannerWithText />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
