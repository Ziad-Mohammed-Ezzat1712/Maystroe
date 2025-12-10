import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png';
import { ShoppingCart,Phone,ForkKnife   } from "lucide-react";

export default function Navebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className=" relative  w-full mx-auto z-20  py-4 px-4 md:px-8 lg:px-0 mt-0 ">
        <div className="max-w-screen-2xl mx-auto bg-black flex items-center justify-between py-4 px-4 md:px-8 lg:px-4 rounded-2xl">
          {/* Logo */}
          <span to="/">
            <img src={logo} alt="Logo" className="h-11 w-auto" />
          </span>

          {/* Nav links (centered) */}
          <div className="hidden md:flex  justify-center flex-1">
          <ul className="flex items-center text-lg text-white px-6 py-2 gap-6 font-semibold">
  <li className='px-10'>
    <Link to="/#" className="text-white hover:text-orange-500 font-bold">
      Home
    </Link>
  </li>
  <li className='px-10'>
    <Link to="/#menu" className="text-white hover:text-orange-500 font-bold">
      Menu
    </Link>
  </li>
    <li className='px-10'>
    <Link to="/#about" className="text-white hover:text-orange-500">
      About
    </Link>
  </li>
   <li className='px-10'>
    <Link to="/#reviews" className="text-white hover:text-orange-500">
       Reviews
    </Link>
  </li>

</ul>

          </div>

          {/*  Order Now Button */}
          <div className="hidden md:block">
            <Link target='_blank' to="https://www.orderfast.com/en/meastroburger?fbclid=IwY2xjawOeN0pleHRuA2FlbQIxMABicmlkETE5SkhFeVM1d1hUVHpZazNBc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvALLRVcrs6CGpzjqt9xNR1zCT98wZFsjpGN5ONlnhYx0R2pHFFlnuxCklQn_aem_H_Htq6OA8ufcULWv4WXWrA"><button  className=" flex gap-3 py-3  cursor-pointer hover:bg-transparent hover:shadow-sm   text-white font-bold text-lg px-6 rounded-2xl shadow-md transition" style={{ background: "linear-gradient(90deg, #EB1508 0%, #F44401 100%)" }}>
                <ForkKnife /> Order Now
            </button></Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-500 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu links */}
   {isOpen && (
  <div className="bg-black  text-md pl-4 font-semibold py-3  my-2 p-[5px] mb-2  w-full md:hidden rounded-lg shadow-md  space-y-1">
    <Link to="/#" className="text-white block hover:text-orange-500 font-bold">
      Home
    </Link>
    <Link to="/#menu" className="text-white block hover:text-orange-500 font-bold">
      Menu
    </Link> 
    <Link to="/#about" className="text-white block hover:text-orange-500">
      About
    </Link>
    <Link to="/#reviews" className="text-white block hover:text-orange-500">
       Reviews
    </Link>
<Link target='_blank' to="https://www.orderfast.com/en/meastroburger?fbclid=IwY2xjawOeN0pleHRuA2FlbQIxMABicmlkETE5SkhFeVM1d1hUVHpZazNBc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvALLRVcrs6CGpzjqt9xNR1zCT98wZFsjpGN5ONlnhYx0R2pHFFlnuxCklQn_aem_H_Htq6OA8ufcULWv4WXWrA"><button  className=" flex gap-3 py-2  cursor-pointer hover:bg-transparent hover:shadow-sm   text-white font-bold text-md px-3 rounded-xl shadow-md transition" style={{ background: "linear-gradient(90deg, #EB1508 0%, #F44401 100%)" }}>
                <ForkKnife size={24} /> Order Now
            </button></Link>
  </div>
)}

      </nav>
  );
}
