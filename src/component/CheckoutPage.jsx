// src/components/CheckoutPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const CheckoutPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });
  const [payment, setPayment] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [paymentError, setPaymentError] = useState("");

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    
    // Format card number with spaces every 4 digits
    if (name === "cardNumber") {
      const cleanedValue = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
      let formattedValue = cleanedValue.replace(/(\d{4})/g, '$1 ').trim();
      if (formattedValue.length > 19) formattedValue = formattedValue.substring(0, 19);
      setPayment({ ...payment, [name]: formattedValue });
      return;
    }
    
    // Format expiry date with slash
    if (name === "expiryDate") {
      const cleanedValue = value.replace(/[^0-9]/g, '');
      let formattedValue = cleanedValue;
      if (cleanedValue.length > 2) {
        formattedValue = `${cleanedValue.substring(0, 2)}/${cleanedValue.substring(2, 4)}`;
      }
      if (formattedValue.length > 5) formattedValue = formattedValue.substring(0, 5);
      setPayment({ ...payment, [name]: formattedValue });
      return;
    }
    
    // Limit CVV to 3-4 digits
    if (name === "cvv") {
      const cleanedValue = value.replace(/[^0-9]/g, '');
      if (cleanedValue.length > 4) return;
      setPayment({ ...payment, [name]: cleanedValue });
      return;
    }
    
    setPayment({ ...payment, [name]: value });
  };

  const validateCustomerDetails = () => {
    const requiredFields = ['name', 'email', 'phone', 'street', 'city', 'state', 'postalCode', 'country'];
    const missingFields = requiredFields.filter(field => !customer[field]);
    
    if (missingFields.length > 0) {
      setError("All fields are required.");
      return false;
    }
    
    // Simple email validation
    if (!/^\S+@\S+\.\S+$/.test(customer.email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    
    // Simple phone validation (at least 8 digits)
    if (!/^[\d\s\-+]{8,}$/.test(customer.phone)) {
      setError("Please enter a valid phone number.");
      return false;
    }
    
    setError("");
    return true;
  };

  const validatePaymentDetails = () => {
    // Card number validation (13-16 digits after removing spaces)
    const cardNumberDigits = payment.cardNumber.replace(/\s+/g, '');
    if (!/^\d{13,16}$/.test(cardNumberDigits)) {
      setPaymentError("Please enter a valid card number (13-16 digits).");
      return false;
    }
    
    // Card name validation
    if (!payment.cardName.trim()) {
      setPaymentError("Please enter the name on card.");
      return false;
    }
    
    // Expiry date validation (MM/YY format, not expired)
    if (!/^\d{2}\/\d{2}$/.test(payment.expiryDate)) {
      setPaymentError("Please enter a valid expiry date (MM/YY).");
      return false;
    }
    
    const [month, year] = payment.expiryDate.split('/').map(Number);
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    
    if (month < 1 || month > 12) {
      setPaymentError("Please enter a valid month (01-12).");
      return false;
    }
    
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      setPaymentError("This card has expired.");
      return false;
    }
    
    // CVV validation (3-4 digits)
    if (!/^\d{3,4}$/.test(payment.cvv)) {
      setPaymentError("Please enter a valid CVV (3-4 digits).");
      return false;
    }
    
    setPaymentError("");
    return true;
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (!validateCustomerDetails()) return;
    setShowPayment(true);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (!validatePaymentDetails()) return;

    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      alert("Payment successful! Your order has been placed.");
      clearCart();
      setShowForm(false);
      setShowPayment(false);
      setCustomer({
        name: "",
        email: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      });
      setPayment({
        cardNumber: "",
        cardName: "",
        expiryDate: "",
        cvv: "",
      });
      navigate("/"); // Redirect to home after successful payment
    }, 2000);
  };

  const totalPrice = cart
  .reduce((total, item) => {
    const price = item.price 
      ? typeof item.price === 'string' 
        ? parseFloat(item.price.replace("$", "")) 
        : item.price
      : 0;
    return total + price;
  }, 0)
  .toFixed(2);


  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <Link
            to="/"
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : showPayment ? (
        // Payment Form
        <form 
          onSubmit={handlePaymentSubmit} 
          className="bg-white p-8 rounded-xl shadow-lg max-w-xl mx-auto space-y-6"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Payment Method</h2>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="font-medium text-blue-800">Order Summary</h3>
            <p className="text-sm text-gray-600 mt-1">
              {cart.length} item{cart.length !== 1 ? 's' : ''} • Total: ${totalPrice}
            </p>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={payment.cardNumber}
              onChange={handlePaymentChange}
              placeholder="1234 5678 9012 3456"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              maxLength="19"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Name on Card</label>
            <input
              type="text"
              name="cardName"
              value={payment.cardName}
              onChange={handlePaymentChange}
              placeholder="John Smith"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                value={payment.expiryDate}
                onChange={handlePaymentChange}
                placeholder="MM/YY"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                maxLength="5"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">CVV</label>
              <input
                type="text"
                name="cvv"
                value={payment.cvv}
                onChange={handlePaymentChange}
                placeholder="123"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                maxLength="4"
                required
              />
            </div>
          </div>

          {paymentError && <p className="text-red-600 text-sm">{paymentError}</p>}

          <div className="flex justify-between items-center pt-4">
            <button
              type="submit"
              className="w-1/2 mr-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
              disabled={loading}
            >
              {loading ? "Processing..." : "Complete Payment"}
            </button>
            <button
              type="button"
              onClick={() => setShowPayment(false)}
              className="w-1/2 ml-2 px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition duration-300"
            >
              Back
            </button>
          </div>
        </form>
      ) : showForm ? (
        // Customer Details Form
        <form 
          onSubmit={handleCheckoutSubmit} 
          className="bg-white p-8 rounded-xl shadow-lg max-w-xl mx-auto space-y-6"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Customer Details</h2>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={customer.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={customer.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={customer.phone}
              onChange={handleChange}
              placeholder="e.g. 0412 345 678"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Street Address</label>
            <input
              type="text"
              name="street"
              value={customer.street}
              onChange={handleChange}
              placeholder="123 Example St"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">City</label>
              <input
                type="text"
                name="city"
                value={customer.city}
                onChange={handleChange}
                placeholder="Sydney"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">State</label>
              <input
                type="text"
                name="state"
                value={customer.state}
                onChange={handleChange}
                placeholder="NSW"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={customer.postalCode}
                onChange={handleChange}
                placeholder="2000"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Country</label>
              <input
                type="text"
                name="country"
                value={customer.country}
                onChange={handleChange}
                placeholder="Australia"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <div className="flex justify-between items-center pt-4">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
              disabled={loading}
            >
              {loading ? "Processing..." : "Continue to Payment"}
            </button>
          </div>
        </form>
      ) : (
        // Cart Summary View
        <>
          <ul>
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-4 border-b"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.variant}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-green-600">{item.price}</p>
                  <button
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    onClick={() => removeFromCart(index)}
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
            <button
              className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              onClick={() => setShowForm(true)}
            >
              Proceed to Checkout
            </button>
            <Link
              to="/cart"
              className="px-8 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300"
            >
              Back to Cart
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;