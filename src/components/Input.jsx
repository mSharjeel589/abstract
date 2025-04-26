import React from 'react';

export default function Input({ id, type, width, label,placeholder, bgColor, holderColor}) {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 font-semibold text-black">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`bg-[${bgColor}] text-black ${holderColor} border border-gray-300 rounded-md px-4 py-3 ${width} focus:outline-none focus:ring-2 focus:ring-blue-400`}
      />
    </div>
  );
}
