import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import style from "../Menu/Menu.module.css";
import product1 from "../../assets/images/product1.png"
import { ShoppingCart } from "lucide-react";



export default function Menu() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const products = Array(6).fill({
    name: "The Signature",
    desc: "Wagyu beef, truffle aioli, aged cheddar, caramelized onions",
    price: "16.99EG",
    rating: 4.9,
    img: product1,
  });

  return (
    <div className={` w-full py-64  bg-center text-white`}>
      <h1 className="text-5xl font-extrabold text-center mb-2">OUR MENU</h1>
      <p className="text-center text-lg mb-10 opacity-90">
        Handpicked favorites that keep our customers coming back for more
      </p>

      <div className="overflow-hidden  px-10">
        <Slider {...settings}>
          {products.map((p, i) => (
            <div
              key={i}
              className=" rounded-xl  overflow-hidden  px-3 mx-3 relative"
            >
              <span className="absolute top-3 right-6 bg-orange-500 text-[12px] p-2 rounded-full font-normal">
                Best Seller
              </span>

              <img src={p.img} alt="burger" className="w-full h-full bg-[#111] rounded-t-xl object-contain" />

              <div className="p-4 bg-[#111] rounded-b-2xl">
                <div className="flex items-center ml-auto bg-[#2a2727] w-18 px-4 py-2 rounded-xl gap-2 text-sm mb-2">
                  <FaStar className="text-yellow-400" /> {p.rating}
                </div>
                <h3 className="font-bold text-lg mb-1">{p.name}</h3>
                <p className="text-sm opacity-80 mb-4 leading-tight text-[#99A1AF]">{p.desc}</p>
                <button className="w-full py-2 rounded-md bg-linear-to-r from-[#EB1508] to-[#F44401] font-bold">
                  {p.price}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex justify-center mt-12">
        <button className=" px-6 py-3 bg-orange-600 rounded-xl font-bold shadow-md flex items-center gap-2">
         <ShoppingCart/> View Menu
        </button>
      </div>
    </div>
  );
}
