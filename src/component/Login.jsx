import React, { useState } from 'react';
import axios from 'axios';



const Login = ({handleCancel,handleSignupClick,setComponent,setShowLogout}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
 
 
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        username,
        password
      });
      const token=response.data.data;
      localStorage.setItem('token', token);
      // storing the token in the local storage
      setSuccessMessage('Login successful!');
      setErrorMessage('');
      setShowLogout(true)
      setComponent(null);

      // Optionally, you can store the token
      
    } catch (error) {
      setErrorMessage('Login failed. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div className="flex flex-col bg-red-100 p-8 rounded-lg shadow-md w-96">
        <div className="flex p-4 bg-blue-500 border border-solid-2 rounded-lg text-2xl font-bold mb-6">
            Login</div>
        
          <div className="mb-4">
            <label className="block text-gray-700">UserName</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your username"
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
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          <div className='flex flex center space-x-2'>
          <button onClick={handleLogin} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Login
          </button>
          <button onClick={handleSignupClick} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            SignUp
          </button>
        <button onClick={handleCancel} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            cancel
          </button>
          
          </div>
         
      </div>
    </div>
  );
};

export default Login;
