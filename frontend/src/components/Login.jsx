import React from 'react';
import desktopImage from '../assets/signIn_desktop.jpg'; // Import desktop image

const Login = () => {
  return (
    <div className="relative flex flex-col md:flex-row min-h-screen">
      {/* Login details */}
      <div className="flex-1 flex flex-col justify-center items-center bg-gray-100 p-6 md:p-12">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Welcome Back</h1>
        <p className="text-gray-600 mb-6">Log in to your account</p>
        <div className="w-full max-w-md space-y-4">
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white bg-opacity-80" 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white bg-opacity-80" 
          />
        </div>
        <button className="w-full max-w-md bg-orange-600 text-white py-3 mt-6 rounded-lg hover:bg-red-700 transition">
          Log In
        </button>
        <p className="mt-4 text-gray-600 text-sm">
          Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
      {/* Login Image */}
      <div className="hidden md:flex flex-1 bg-cover bg-center" 
           style={{ backgroundImage: `url(${desktopImage})` }}>
      </div>
    </div>
  );
};

export default Login;