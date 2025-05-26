import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Signup from './signup';
import BeforeAfterSlider from './BeforeAfterSlider';
import Sidebar from './Sidebar'
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
    setComponent('login'); // Show Login component
    localStorage.getItem('token');
  };

  const handleSignupClick = () => {
    setComponent('signup'); // Show Signup component
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-end items-center p-4 bg-red-100 shadow-md">
      
              
        <div className="w-1/4 flex ">
          {!showLogout ? (
            <>
              <button
                className={`px-4 py-3 mr-4 font-semibold rounded-full transition duration-300 ease-in-out ${
                  component === 'login'
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
                onClick={handleLoginClick}
              >
                Login
              </button>
              <button
                className={`px-6 py-3 font-semibold rounded-full transition duration-300 ease-in-out ${
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
            <div className='flex flex direction-raw space-x-2'>
              <div className='flex px-6 py-3 font-bold rounded-full bg-green-500 text-black border border-solid 2'>Welcome</div>
              <button
                className="flex px-6 py-3 font-semibold rounded-full bg-red-500 text-white hover:bg-red-600 transition duration-300 ease-in-out"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      

      {/* Image Slider Positioned Below Login/Signup */}
      <div className="mt-8">
        <ImageSlider />
      </div>
      

      {/* Conditional rendering of Login or Signup components */}
      {component === 'login' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
            <Login handleCancel={handleCancel} handleSignupClick={handleSignupClick} setComponent={setComponent} setShowLogout={setShowLogout} />
          </div>
        </div>
      )}
      {component === 'signup' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
            <Signup handleCancel={handleCancel} setComponent={setComponent} setShowLogout={setShowLogout} />
          </div>
        </div>
      )}
      <div className="bg-black rounded-xl border-2 border-gray-300 text-center p-6 my-6">
  <h1 className=" font-serif text-3xl font-bold text-white">Featured Collection</h1>
</div>
      {/* Sections below the image */}

      <AllProducts/>
      

<div className="bg-black rounded-xl border-2 border-gray-300 text-center p-6 my-6">
  <h1 className="font-serif text-3xl font-bold text-white">Top-Picked</h1>
</div>
<div className='flex'>
  <Sidebar/>

</div>
    

      {/* Second section */}
        <div className="mt-6 px-6 pb-12">
    <div className="bg-gray-200 border-2 border-black rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/productpage">
        <div className="bg-white p-6 rounded-lg shadow-md h-64 group relative">
    {/* Image */}
    <img
        src="Images/makeup5.jpg" // Replace this with your image URL
        alt="Product Sample"
        className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out"
    />
    
    {/* Hover Effect - Dark Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out rounded-lg flex items-center justify-center">
        {/* Text with Price */}
        <span className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        $14.99
        </span>
    </div>
    </div>
        </Link>
        <Link to="/productpage">
        <div className="bg-white p-6 rounded-lg shadow-md h-64 group relative">
    {/* Image */}
    <img
        src="Images/makeup6.jpg" // Replace this with your image URL
        alt="Product Sample"
        className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out"
    />
    
    {/* Hover Effect - Dark Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out rounded-lg flex items-center justify-center">
        {/* Text with Price */}
        <span className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        $18.99
        </span>
    </div>
    </div>
        </Link>
        <Link to="/productpage">
        <div className="bg-white p-6 rounded-lg shadow-md h-64 group relative">
    {/* Image */}
    <img
        src="Images/makeup7.jpg" // Replace this with your image URL
        alt="Product Sample"
        className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out"
    />
    
    {/* Hover Effect - Dark Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out rounded-lg flex items-center justify-center">
        {/* Text with Price */}
        <span className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        $12.99
        </span>
    </div>
    </div>
        </Link>
        <Link to="/productpage">
        <div className="bg-white p-6 rounded-lg shadow-md h-64 group relative">
    {/* Image */}
    <img
        src="Images/makeup8.jpg" // Replace this with your image URL
        alt="Product Sample"
        className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out"
    />
    
    {/* Hover Effect - Dark Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out rounded-lg flex items-center justify-center">
        {/* Text with Price */}
        <span className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        $16.99
        </span>
    </div>
    </div>
        </Link>
        <Link to="/productpage">
        <div className="bg-white p-6 rounded-lg shadow-md h-64 group relative">
    {/* Image */}
    <img
        src="Images/makeup9.jpg" // Replace this with your image URL
        alt="Product Sample"
        className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out"
    />
    
    {/* Hover Effect - Dark Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out rounded-lg flex items-center justify-center">
        {/* Text with Price */}
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
        src="Images/makeup10.jpg" // Replace this with your image URL
        alt="Product Sample"
        className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out"
    />
  
  {/* Hover Effect - Dark Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out rounded-lg flex items-center justify-center">
    {/* Text with Price */}
    <span className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
      $34.99
    </span>
  </div>
</div>
      </Link>
    </div>
  </div>
</div>
            <BeforeAfterSlider/>
            <ImageBannerWithText />


                                {/*footer*/}

            <Footer/>
      
    </div>
  );
};

export default MainLayout;
