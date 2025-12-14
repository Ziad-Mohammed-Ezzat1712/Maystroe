import React from 'react';
import { ShoppingCart } from "lucide-react";

const OrderButton = () => {

  const handleClick = () => {
    window.open('https://www.orderfast.com/en/meastroburger', '_blank'); 
  };

  return (
    <div
      onClick={handleClick}
      className="
        fixed bottom-5 md:right-10 right-2 z-50 cursor-pointer 
        md:text-white text-[#F44401]
        px-4 py-2 rounded-full flex items-center gap-2
        transition-all duration-300 group
        md:hover:bg-[#F44401] md:hover:pr-5
        bg-white md:bg-transparent
      "
    >
      {/* ICON */}
      <div className="rounded-full md:bg-white p-2 md:p-3">
        <ShoppingCart
          size={24}
          className="text-[#F44401] md:group-hover:text-[#F44401]"
        />
      </div>

      {/* MOBILE TEXT (دايمًا ظاهر) */}
      <span className="md:hidden text-sm font-bold">
        Order Now
      </span>

      {/* DESKTOP TEXT (hover فقط) */}
      <span
        className="
          hidden md:inline
          text-xl font-bold overflow-hidden whitespace-nowrap
          transition-all duration-300
          max-w-0 opacity-0
          md:group-hover:max-w-[200px] md:group-hover:opacity-100
        "
      >
        Order Now
      </span>
    </div>
  );
};

export default OrderButton;
