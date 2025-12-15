import React, { useState } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import style from "../Menu/Menu.module.css";
import product1 from "../../assets/images/brguerBeef.png";
import product2 from "../../assets/images/burgerCh.png";
import combo1 from "../../assets/images/combo1.png";
import combo2 from "../../assets/images/combo2.png";
import combo3 from "../../assets/images/combo3.png";
import fries from "../../assets/images/fries.png";
import menu from "../../assets/images/menu.JPG";
import menu2 from "../../assets/images/menu2.JPG";
import { Download, ForkKnife, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";


export default function MenuMobile() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,   // 🔥 هنا للكارتين
    slidesToScroll: 1,
  };

    const [loading, setLoading] = useState(false);
  
    const handleDownload = async () => {
      if (loading) return; // منع التكرار
      setLoading(true);
      try {
        const pdfUrl = "/MaestroMenu.pdf"; // غيّره حسب مكان الملف
  
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "MaestroMenu.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error("Download failed:", error);
      } finally {
        setLoading(false);
      }
    };

  const products = [
    { name: "The Signature", desc: "Wagyu beef, truffle aioli", price: "16.99EG", rating: 4.9, img: product1 },
    { name: "Smoky BBQ", desc: "Wagyu beef, truffle aioli", price: "14.50EG", rating: 4.7, img: product2 },
    { name: "Spicy Inferno", desc: "Wagyu beef, truffle aioli", price: "18.00EG", rating: 4.8, img: combo1 },
    { name: "Classic Burger", desc: "Wagyu beef, truffle aioli", price: "12.99EG", rating: 4.5, img: combo2 },
    { name: "Cheese Burst", desc: "Wagyu beef, truffle aioli", price: "15.25EG", rating: 4.6, img: combo3 },
    { name: "Double Trouble", desc: "Wagyu beef, truffle aioli", price: "19.99EG", rating: 4.9, img: fries },
  ];

  return (
    <div className="w-full pt-0 bg-center text-white md:hidden">
      {/* 🔥 يظهر فقط على الموبايل (md:hidden) */}
      <h1 className="text-4xl font-extrabold text-center mb-6">OUR MENU</h1>

      <div className="overflow-hidden px-7">
        <Slider {...settings}>
          {products.map((p, i) => (
            <div key={i} className="rounded-xl overflow-hidden px-2 mx-auto relative">
              <span className="absolute top-3 right-3 bg-orange-500 text-sm px-3 py-1 rounded-full z-50">
                offer
              </span>

              <div className="relative w-full h-full">
                <img
                  src={p.img}
                  alt="burger"
                  className="w-full h-[150px] object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-black/30 rounded-t-xl"></div>
              </div>

              <div className="p-3 bg-[#111] rounded-b-xl">
                <div className="flex items-center bg-[#2a2727] px-2 py-1 w-[50%] rounded-xl gap-1 text-xs mb-1">
                  <FaStar className="text-yellow-400" /> {p.rating}
                </div>

                <h3 className="font-bold text-base mb-1">{p.name}</h3>

                <p className="text-xs opacity-80 mb-3 leading-tight text-[#99A1AF]">
                  {p.desc}
                </p>

                <p className="w-full py-2 text-base rounded-md bg-linear-to-r from-[#EB1508] to-[#F44401] bg-clip-text text-transparent font-bold">
                  {p.price}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

        {/* Menu Images */}
      <div className="flex flex-col md:flex-row justify-center mt-12  px-8 gap-4">
        <img
          src={menu}
          alt="menu"
          className="w-full md:w-[50%] bg-[#111] rounded-xl object-contain"
        />
        <img
          src={menu2}
          alt="menu"
          className="w-full md:w-[50%] bg-[#111] rounded-xl object-contain"
        />
      </div>

      {/* Download Button */}
      <div className="flex justify-center gap-5 mt-12">
        <button
          onClick={handleDownload}
          disabled={loading}
          className="px-4 py-3 cursor-pointer text-lg bg-orange-600 rounded-xl font-bold shadow-md flex items-center gap-2 text-white disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" />
              Downloading...
            </>
          ) : (
            <>
              <Download size={24} />
              Download Menu
            </>
          )}
        </button>

        <Link
                  target="_blank"
                  to="https://www.orderfast.com/en/meastroburger?fbclid=IwY2xjawOeN0pleHRuA2FlbQIxMABicmlkETE5SkhFeVM1d1hUVHpZazNBc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvALLRVcrs6CGpzjqt9xNR1zCT98wZFsjpGN5ONlnhYx0R2pHFFlnuxCklQn_aem_H_Htq6OA8ufcULWv4WXWrA"
                >
                  <button
                    className=" px-6 py-3 gap-4 cursor-pointer text-lg bg-orange-600 rounded-xl font-bold shadow-md flex items-center  text-white disabled:opacity-70"
                  
                  >
                    <ForkKnife size={24} /> Order Now
                  </button>
                </Link>
      </div>
    </div>
  );
}
