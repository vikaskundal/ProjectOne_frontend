import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Ensure correct path
import MainLayout from './component/MainPage';
import CartPage from "./component/Cartpage"; // Ensure correct path
import CheckoutPage from "./component/CheckoutPage"; // Ensure correct path
import HomePage from "./component/HomePage";
import ContactUsPage from "./component/ContactUs";
import TrendingProducts from "./component/TrendingProducts";
import AboutUs from "./component/AboutUs";
import ProductPage from "./component/Productpage";
import { CartProvider } from "./component/CartContext";
import ResetPassword from './component/ResetPassword'; // adjust path as needed
import AllProducts from "./component/AllProducts";
import NavigationBar from "./component/Navigation";



const App = () => {
  return (
    
    <CartProvider> {/* Wrap everything in CartProvider */}
      
      <Router>
        <NavigationBar/>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<MainLayout />} /> {/* Define home route */}
          <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/trending" element={<TrendingProducts/>}/>
          <Route path="/contactus" element={<ContactUsPage/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/products" element={<AllProducts/>}/>
          
        </Routes>
      </Router>
    </CartProvider>
    
  );
};

export default App;
