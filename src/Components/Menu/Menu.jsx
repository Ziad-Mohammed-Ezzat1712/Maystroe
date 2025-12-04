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

import { Download, Loader2 } from "lucide-react";

export default function Menu() {
  const [loading, setLoading] = useState(false);
  const handleDownload = async () => {
    if (loading) return; // منع التكرار
    setLoading(true);
    try {
      // رابط ملف PDF
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

  const products = [
    {
      name: "The Signature",
      desc: "Wagyu beef, truffle aioli, aged cheddar, caramelized onions",
      price: "16.99EG",
      rating: 4.9,
      img: product1,
    },
    {
      name: "Smoky BBQ",
      desc: "Wagyu beef, truffle aioli, aged cheddar, caramelized onions",
      price: "14.50EG",
      rating: 4.7,
      img: product2,
    },
    {
      name: "Spicy Inferno",
      desc: "Wagyu beef, truffle aioli, aged cheddar, caramelized onions",
      price: "18.00EG",
      rating: 4.8,
      img: combo1,
    },
    {
      name: "Classic Burger",
      desc: "Wagyu beef, truffle aioli, aged cheddar, caramelized onions",
      price: "12.99EG",
      rating: 4.5,
      img: combo2,
    },
    {
      name: "Cheese Burst",
      desc: "Wagyu beef, truffle aioli, aged cheddar, caramelized onions",
      price: "15.25EG",
      rating: 4.6,
      img: combo3,
    },
    {
      name: "Double Trouble",
      desc: "Wagyu beef, truffle aioli, aged cheddar, caramelized onions",
      price: "19.99EG",
      rating: 4.9,
      img: fries,
    },
  ];

  return (
    <div className={` w-full pt-0 bg-center text-white`}>
      <h1 className="text-5xl font-extrabold text-center mb-10">OUR MENU</h1>


      <div className="overflow-hidden  px-10">
        <Slider {...settings}>
          {products.map((p, i) => (
            <div
              key={i}
              className=" rounded-xl  overflow-hidden  px-3 mx-3 relative"
            >
              <span className="absolute top-3 right-6 bg-orange-500 text-[16px] px-4 py-1 rounded-full font-normal z-50">
                offer
              </span>
              <div className="relative w-full h-full">
  <img
    src={p.img}
    alt="burger"
    className="w-full h-full object-cover rounded-t-xl"
  />

  {/* الـ layer مربوط بالصورة لأنها داخل نفس الـ relative */}
  <div className="absolute inset-0 bg-black/30 rounded-t-xl"></div>
</div>
              <div className="p-4 bg-[#111] rounded-b-2xl">
                <div className="flex items-center ml-auto bg-[#2a2727] w-18 px-4 py-2 rounded-xl gap-2 text-sm mb-2">
                  <FaStar className="text-yellow-400" /> {p.rating}
                </div>
                <h3 className="font-bold text-lg mb-1">{p.name}</h3>
                <p className="text-sm opacity-80 mb-4 leading-tight text-[#99A1AF]">
                  {p.desc}
                </p>
                <p className="w-full py-2 text-lg rounded-md bg-linear-to-r from-[#EB1508] to-[#F44401] bg-clip-text text-transparent font-bold">
                  {p.price}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex justify-center mt-12 px-15  gap-4">
        <img
          src={menu}
          alt="burger"
          className="w-[50%] h-[50%] bg-[#111] rounded-xl object-contain"
        />
        <img
          src={menu2}
          alt="burger"
          className="w-[50%] h-[50%] bg-[#111] rounded-xl object-contain"
        />
      </div>
      <div className="flex justify-center mt-12">
        <button
          onClick={handleDownload}
          disabled={loading}
          className="px-6 py-3 cursor-pointer bg-orange-600 rounded-xl font-bold shadow-md flex items-center gap-2 text-white disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" />
              Downloading...
            </>
          ) : (
            <>
              <Download />
              Download Menu
            </>
          )}
        </button>
      </div>
    </div>
  );
}
