import React, { useState } from 'react';

const CountryDropdown = () => {
  // A list of countries (you can add more countries as needed)
  const countries = [
    'United States', 'Canada', 'India', 'Australia', 'Germany', 
    'France', 'United Kingdom', 'Japan', 'Brazil', 'South Korea',
    'Mexico', 'China', 'Russia', 'South Africa', 'Italy'
  ];

  const [selectedCountry, setSelectedCountry] = useState('');

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="w-full">
      <label htmlFor="country" className="block mb-2 font-semibold text-gray-700">
        Select Country
      </label>
      <select 
        id="country" 
        className="w-full px-4 py-3 border border-gray-300 rounded-md bg-[#e6e7eb]" 
        value={selectedCountry} 
        onChange={handleChange}
      >
        <option value="">Select a country</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryDropdown;
