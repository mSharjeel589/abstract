import React from "react";
import Item from "./Item";
import Input from "./Input";
import Form from "./Form";

export default function Popup() {
  const itemsArray = [
    {
      name: "IPhone 12 Pro",
      src: "./mob.png",
      color: "Golden",
      price: "$999.00",
    },
    {
      name: "Apple Watch",
      src: "./watch.png",
      color: "Blue",
      price: "$399.00",
    },
    {
      name: "IMac",
      src: "./iMac.png",
      color: "Green",
      price: "$1199.00",
    },
  ];

  return (
    <div className="flex flex-col w-full h-full sm:flex-row">
      {/* Left side */}
      <div className="w-full sm:w-1/2 bg-[#e6e7eb] px-10 py-8 space-y-6 max-sm:rounded-t-3xl sm:rounded-l-3xl">
        {itemsArray.map((item, index) => (
          <Item
            imageSrc={item.src}
            color={item.color}
            price={item.price}
            name={item.name}
            key={index}
          />
        ))}
        <hr className="border-gray-400 my-8" />

        <div className="flex items-center justify-center w-full">
          <Input
            id="coupon"
            type="text"
            placeholder="Enter coupon code"
            bgColor="white"
            holderColor="placeholder-gray-400"
            width="w-full"
          />
          <button className="bg-[#1d1d1f] text-white text-md font-semibold py-3 px-6 rounded-md mt-2 ml-4">
            Apply Coupon
          </button>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 font-bold text-gray-600 space-y-1">
          <p>Sub total</p>
          <p className="text-right">$2597.00</p>

          <p>Tax</p>
          <p className="text-right">$623.28</p>

          <p className="text-gray-800">Total</p>
          <p className="text-gray-800 text-right">$3220.28</p>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center bg-white sm:rounded-r-3xl max-sm:rounded-b-3xl">
        <Form />
      </div>
    </div>
  );
}
