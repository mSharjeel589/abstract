import React from "react";
import Popup from "./Popup";

export default function Checkout() {
  return (
    <div className="relative w-full h-screen bg-[#f3f4f6] overflow-hidden">
      <img src="./bg.png" alt="BG" className="w-full" />

      <div className="absolute inset-0 flex flex-col items-center justify-center m-6">
        <div className="flex items-center space-x-4 mb-6">
          <p className="text-white text-3xl font-bold">Checkout</p>

          <p className="text-white bg-[#1d1d1f] rounded-full px-4 py-2 text-center">
            3 ITEMS
          </p>
        </div>

        <Popup />
      </div>
    </div>
  );
}
