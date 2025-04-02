import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const CartPage = () => {
  const { cart, removeFromCart } = useCart();  // Use removeFromCart here

  // Calculate total price with proper fallback handling
  const totalPrice = cart
    .reduce((total, item) => {
      const price = item.price ? item.price.replace('$', '') : '0'; // Ensure price is a string
      return total + parseFloat(price || 0);  // Convert to float and add to total
    }, 0)
    .toFixed(2);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center p-4 border-b">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.variant}</p> {/* If you have variant info */}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-green-600">{item.price}</p>
                  <button
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                    onClick={() => removeFromCart(index)} // Call removeFromCart on click
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center border-t pt-4">
            <h2 className="text-xl font-semibold">Total Price</h2>
            <p className="text-2xl font-bold text-green-600">${totalPrice}</p>
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
              Checkout
            </button>
            <Link to="/" className="px-8 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300">
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
