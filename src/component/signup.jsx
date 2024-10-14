import React, { useState } from 'react';
import axios from 'axios'; // You can also use fetch if you prefer

const Signup = ({handleCancel,setComponent,setShowLogout}) => {
    const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');



  const handleSignup = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3000/auth/signup', {
        username,
        email,
        password
      });
      setSuccessMessage('Signup successful!');
      setErrorMessage('');
      setShowLogout(true);
      setComponent(null);
    } catch (error) {
      setErrorMessage('Signup failed. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div className="bg-red-100 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Signup</h2>
        <div className="mb-4">
            <label className="block text-gray-700">UserName</label>
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your Username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
           
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          <div className='flex flex center space-x-2'>
          <button onClick={handleSignup} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            SignUp
          </button>
        <button onClick={handleCancel} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Cancel
          </button>
          </div>
        
      </div>
    </div>
  );
};

export default Signup;
