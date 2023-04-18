// src/Input.js
import React from 'react';

const Input = ({ label, ...props }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-2">{label}</label>}
      <input
        className="border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
        {...props}
      />
    </div>
  );
};

export default Input;
