import React from "react";

export default function Item({imageSrc, name, price, color}) {
  return (
    <div className="flex">
      <div className="bg-white w-28 h-24 flex items-center justify-center rounded-md">
        <img src={imageSrc} alt="" />
      </div>

      <div className="font-bold ml-4 w-full grid grid-cols-2 grid-rows-3">
        <span className="text-left">{name}</span>
        <span className="text-right">{price}</span>
        <p className="text-[#9599a2] font-semibold">{color}</p>
        <p></p>
        <p className="text-[#9599a2]">x 1</p>
        <div className="text-right">
        <img src="./src/assets/close.svg" alt="" className="inline-block"  />
        </div>
      </div>
    </div>
  );
}
