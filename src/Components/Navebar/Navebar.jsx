import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png';
import { ShoppingCart } from "lucide-react";
export default function Navebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className="absolute  w-full mx-auto z-20  py-4 px-4 md:px-8 lg:px-0 mt-0 ">
        <div className="max-w-screen-2xl mx-auto bg-black flex items-center justify-between py-4 px-4 md:px-8 lg:px-4 rounded-2xl">
          {/* Logo */}
          <span to="/">
            <img src={logo} alt="Logo" className="h-11 w-auto" />
          </span>

          {/* Nav links (centered) */}
          <div className="hidden md:flex  justify-center flex-1">
          <ul className="flex items-center text-lg text-white px-6 py-2 gap-6 font-semibold">
  <li className='px-10'>
    <Link to="/#header" className="text-white hover:text-orange-500 font-bold">
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
    <Link to="/#services" className="text-white hover:text-orange-500">
       Reviews
    </Link>
  </li>

</ul>

          </div>

          {/*  Order Now Button */}
          <div className="hidden md:block">
            <Link to="/conectus"><button  className=" flex gap-3 py-3  cursor-pointer hover:bg-transparent hover:shadow-sm   text-white font-bold text-lg px-6 rounded-2xl shadow-md transition" style={{ background: "linear-gradient(90deg, #EB1508 0%, #F44401 100%)" }}>
                <ShoppingCart/>  Order Now
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
  <div className="bg-black text-md pl-4 font-semibold py-3  my-2 p-[5px] mb-2  w-[200px] md:hidden rounded-lg shadow-md  space-y-1">
    <Link to="/#header" className=" text-white hover:text-orange-500">Home</Link>
     <Link to="/#about" className="block text-white hover:text-orange-500">About</Link>
      <Link to="/#services" className="block text-white hover:text-orange-500"> Services</Link>
    <Link to="/#portfolio" className="block text-white hover:text-orange-500">Portfolio</Link>
    <Link to="/#testimonials" className="block text-white hover:text-orange-500">Testimonials</Link>
    <Link to="/#faqs" className="block text-white hover:text-orange-500">Q&A</Link>
<Link to="/conectus">
<button className="w-3/4 mx-5  bg-orange-500  hover:bg-transparent hover:text-orange-500 text-white font-semibold text-sm py-2 shadow-md rounded-full transition">
       Order Now
</button>
     </Link>
  </div>
)}

      </nav>
  );
}
