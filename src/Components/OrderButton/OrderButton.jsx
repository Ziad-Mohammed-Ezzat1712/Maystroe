
import React, { useState } from 'react';
import { ShoppingCart    } from "lucide-react";



const OrderButton = () => {
  const [isTouched, setIsTouched] = useState(false);

  const handleClick = () => {
    window.open('https://www.orderfast.com/en/meastroburger', '_blank'); 
  };


  return (
    <div
      onClick={handleClick}
    
      className={`
        fixed bottom-5 md:right-10 -right-4 z-50 cursor-pointer 
        md:text-white text-[#F44401] px-6 py-2 rounded-full flex items-center 
        transition-all duration-300 group
        md:hover:bg-[#F44401] md:hover:pr-5
        ${isTouched ? 'bg-[#F44401] pr-5' : ''}
      `}
    >
     <div className='bg-white  rounded-full px-3 py-3 group-hover:bg-transparent '>
       <ShoppingCart    size={48} className='text-[#F44401] hover:text-white group-hover:text-white  '/>
     </div>
      <span
        className={`
          ml-2 text-xl font-bold overflow-hidden whitespace-nowrap
          transition-all duration-300
          max-w-0 opacity-0
          md:group-hover:max-w-[200px] group-hover:opacity-100
          ${isTouched ? 'max-w-[200px] opacity-100' : ''}
        `}
      >
       Order Now
      </span>
    </div>
  );
};

export default OrderButton;
