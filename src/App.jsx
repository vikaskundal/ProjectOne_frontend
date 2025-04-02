import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./component/ProductPage"; // Ensure correct path
import MainLayout from './component/MainPage';
import CartPage from "./component/Cartpage"; // Ensure correct path
import { CartProvider } from "./component/CartContext"; // Ensure correct path
import HomePage from "./component/HomePage";
import ContactUsPage from "./component/ContactUs";
import Special from "./component/Special";
import TrendingProducts from "./component/TrendingProducts";


const App = () => {
  return (
    <CartProvider> {/* Wrap everything in CartProvider */}
      <Router>

        <Routes>
          <Route path="/" element={<MainLayout />} /> {/* Define home route */}
          <Route path="/productpage" element={<ProductPage/>}/>
          <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/trending" element={<TrendingProducts/>}/>
          <Route path="/contactus" element={<ContactUsPage/>}/>
          <Route path="/special" element={<Special/>}/>
          <Route path="/cart" element={<CartPage />} /> {/* Define cart route */}
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
