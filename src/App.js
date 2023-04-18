// src/App.js
import React from 'react';
import './output.css';
import Input from './Input';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="text-center text-black p-4 w-full">
        <h1 className="text-4xl">Welcome to Mysticx</h1>
      </header>
      <main className="container mx-auto p-4 text-center">
        <h2 className="text-xl mb-4">Click to Login</h2>
        <button className="bg-purple-500 text-white px-4 py-2 rounded shadow">
          Login
        </button>
        <Input label="Your Email" type="email" placeholder="Enter your email" />
      </main>
    </div>
  );
}

export default App;
