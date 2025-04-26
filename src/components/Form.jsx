import React from "react";
import Input from "./Input";
import CountryDropdown from "./CountryDropDown";

export default function Form() {
  return (
    <div className="w-full h-full px-8 py-6">
      <h1 className="text-md font-bold mb-7">Contact Information</h1>

      <div className="space-y-5">
        <Input
          id="name"
          type="text"
          width="w-full"
          label="First & Last name"
          placeholder="Enter first & last name"
          bgColor="#e6e7eb"
          holderColor="placeholder-gray-700"
        />

        <Input
          id="email"
          type="email"
          width="w-full"
          label="Email Address"
          placeholder="Enter email address"
          bgColor="#e6e7eb"
          holderColor="placeholder-gray-700"
        />

        <div className="grid grid-cols-2 space-x-5">
          <CountryDropdown />
          <Input
            id="postal"
            type="text"
            width="w-full"
            label="Postal Code"
            placeholder="Enter postal code"
            bgColor="#e6e7eb"
            holderColor="placeholder-gray-700"
          />
        </div>
        <button className="w-full bg-[#1d1d1f] text-white text-lg font-semibold rounded-md p-4">Continue</button>
      </div>
    </div>
  );
}
