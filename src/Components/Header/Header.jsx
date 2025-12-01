import React from 'react'
import { Link } from 'react-router-dom';
import heroImg from "../../assets/images/hero1.png"
import burgerup from "../../assets/images/burgerup.png"
import burgerdown from "../../assets/images/burgerdown.png"
import { ShoppingCart } from "lucide-react";
export default function Header() {
  return (
   <>
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 pt-32">
         <img src={heroImg} alt='hero' className='w-[379px] h-[170px] mt-16'/>
         <div className=' flex gap-28 my-4'>
          <button className=' px-2 py-2 rounded-2xl cursor-pointer flex gap-3' style={{ background: "linear-gradient(90deg, #EB1508 0%, #F44401 100%)" }}>
           <ShoppingCart/> view menu
          </button>
           <button className=' px-2 py-2 flex gap-3 cursor-pointer rounded-2xl bg-white text-black' >
           <ShoppingCart/> view menu
          </button>
         </div>
        <img src={burgerup} className='h-[312px] mt-7 '/>
        <img src={burgerdown} className='h-[312px]'/>
        </div>     
   </>
  )
}
