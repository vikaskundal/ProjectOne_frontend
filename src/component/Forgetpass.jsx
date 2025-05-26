import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = ({ handleBackToLogin }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await axios.post('http://localhost:3000/auth/forgot-password', { email });
      setMessage(res.data.message); // Server returns: "Password reset link sent to your email"
    } catch (error) {
      setMessage(
        error.response?.data?.message || 'Something went wrong. Try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Forgot Password</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Enter your email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Your email address"
          />
        </div>

        {message && <p className="text-sm text-center text-gray-500">{message}</p>}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 px-4 text-white font-semibold rounded-md transition ${loading ? 'bg-gray-500' : 'bg-indigo-600 hover:bg-indigo-700'}`}
        >
          {loading ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>

      <button
        type="button"
        onClick={handleBackToLogin}
        className="w-full py-3 px-4 text-white font-semibold rounded-md bg-gray-500 hover:bg-gray-600"
      >
        Cancel
      </button>
    </div>
  );
};

export default ForgotPassword;
