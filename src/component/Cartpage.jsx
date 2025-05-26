// src/components/CartPage.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = typeof item.price === 'number' 
        ? item.price 
        : parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
      return total + (price * (item.quantity || 1));
    }, 0).toFixed(2);
  };

  const totalPrice = calculateTotal();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => {
              const price = typeof item.price === 'number' 
                ? item.price 
                : parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
              const itemTotal = price * (item.quantity || 1);

              return (
                <li key={index} className="flex justify-between items-center p-4 border-b">
                  
                  <div className="flex items-center">
  <Link to={`/products/${item.id}`} className="flex items-center">
    <img
      src={item.imageUrl}
      alt={item.name}
      className="w-20 h-20 object-cover rounded-lg mr-4"
    />
    <div>
      <h3 className="text-lg font-semibold hover:text-blue-600 transition-colors">
        {item.name}
      </h3>
      <p className="text-gray-600">Quantity: {item.quantity || 1}</p>
    </div>
  </Link>
</div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-green-600">
                      ${itemTotal.toFixed(2)}
                    </p>
                    <button
                      className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 flex justify-between items-center border-t pt-4">
            <h2 className="text-xl font-semibold">Total Price</h2>
            <p className="text-2xl font-bold text-green-600">${totalPrice}</p>
          </div>

          <div className="mt-6 flex justify-between">
            <button
              className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300"
              onClick={clearCart}
            >
              Clear Cart
            </button>
            <button
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;