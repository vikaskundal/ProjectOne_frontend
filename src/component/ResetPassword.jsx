import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token'); // extract token from URL
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    try {
      const response = await axios.post('http://localhost:3000/reset-password', {
        token: token, // make sure to send the correct token
        newPassword: newPassword,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error resetting password:', error.response?.data || error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Reset Your Password</h2>

        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
            disabled={loading}
          >
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>

        {message && <p className="mt-4 text-center text-sm text-gray-700">{message}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
