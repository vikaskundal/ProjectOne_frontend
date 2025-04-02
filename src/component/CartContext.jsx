import React, { createContext, useState, useContext } from "react";

// Create Context
const CartContext = createContext();

// Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to Add Item to Cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Added to cart:", product);
  };
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index)); // Filter out the item by index
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook for Using Cart
export const useCart = () => {
  return useContext(CartContext);
};
