import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import burgerAbout1 from "../../assets/images/burgerAbout.png";
import burgerAbout2 from "../../assets/images/brguerBeef.png";
import icon1 from "../../assets/images/Icon1.png";
import icon2 from "../../assets/images/Icon2.png";
import icon3 from "../../assets/images/Icon3.png";
import icon4 from "../../assets/images/Icon4.png";

export default function AboutMobile() {
  const [slide, setSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Slide واحد فقط للموبايل
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    appendDots: (dots) => (
      <div className="pt-6 pb-2">
    <ul className="flex justify-center gap-8">{dots}</ul>
  </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-10 h-1.5 mt-5 rounded-md ${
          i === slide ? "bg-[#e2462b]" : "bg-white/30"
        }`}
      ></div>
    ),
    beforeChange: (_, next) => setSlide(next),
  };

  return (
    <div className="w-full px-5 text-white flex flex-col justify-center md:hidden">
      {/* Title */}
      <h2 className="text-center text-4xl font-bold mb-4">About US</h2>
      <p className="mb-22">
        At Maestro Burger, we don’t just serve burgers we craft flavor that
        stops time. We started as a small food truck with a big dream, and grew
        into a brand built on quality, passion, and unforgettable taste. Every
        burger is handcrafted with fresh ingredients, premium beef, and
        signature sauces that elevate every bite. Our mission is simple: deliver
        a burger experience that makes you forget the world. Maestro Burger is
        where great food meets great vibes.
      </p> 

      {/* Slider Container */}
      <div className="w-full flex flex-col">
      <Slider {...settings}>
        {/* ---------------- Slide 0 ---------------- */}
        <div className="">
          <div className="flex flex-col  items-center justify-between pt-28 text-center">
        
             <motion.h3
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-bold leading-snug mb-3 px-4"
            >
              We Are The Best Restaurant In Egypt
            </motion.h3>
            <p className="text-lg mb-6">We start in 1990</p>
       


            <motion.img
              src={burgerAbout1}
              alt="burger"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-[370px] h-[550px] object-fill rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* ---------------- Slide 1 (3 Cards) ---------------- */}
        <div>
          <div className="flex flex-col gap-4 items-center">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative w-[270px] h-[350px] rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={burgerAbout2}
                  className="w-full h-full object-cover"
                  alt=""
                />

                <div className="absolute inset-0 bg-gradient-to-b from-[#EB1508] to-[#F44401] opacity-95 flex items-center justify-center text-center p-4 transition-all duration-500 hover:rotate-35 hover:translate-y-60">
                  <div>
                    <h1 className="text-2xl font-bold">Hardrouck</h1>
                    <h1 className="text-2xl font-bold">Burger</h1>

                    <p className="text-sm mt-2 px-4">
                      Lettuce Tomato Ketchup Mayonnaise Pickles 150g Beef Burger
                      Sesame Bun
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- Slide 2 (Icons + Stats) ---------------- */}
        <div>
         <div className="grid grid-cols-2 sm:grid-cols-2 gap-10 place-items-center px-4">
    {/* ICON ROW */}
    {[
      { img: icon1, title: "Premium Beef", text: "100% grass-fed Angus beef" },
      { img: icon2, title: "Fresh Produce", text: "Vegetables delivered daily" },
      { img: icon3, title: "Artisan Buns", text: "Fresh brioche buns daily" },
      { img: icon4, title: "Secret Sauce", text: "Perfected over 10 years" },
    ].map((item, i) => (
      <motion.div
        key={i}
        className="bg-black rounded-xl p-4 flex flex-col items-center w-[160px]"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.2, duration: 0.6 }}
      >
        <img
          src={item.img}
          className="w-14 h-14 bg-[#EC1B07] p-2 rounded-xl"
        />
        <h1 className="font-bold text-lg mt-2">{item.title}</h1>
        <p className="text-[#99A1AF] text-sm text-center mt-1">
          {item.text}
        </p>
      </motion.div>
    ))}

    {/* STATS */}
    {[
      { big: "100%", t1: "Premium Beef", t2: "No preservatives" },
      { big: "Local", t1: "Farm Fresh", t2: "Support farmers" },
    
    ].map((blk, i) => (
      <motion.div
        key={i}
        className="bg-[#EE2406] rounded-xl p-6 w-[160px] text-center"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.2 }}
      >
        <h1 className="text-2xl font-bold">{blk.big}</h1>
        <h2 className="text-md font-bold mt-2">{blk.t1}</h2>
        <p className="text-black text-sm mt-2">{blk.t2}</p>
      </motion.div>
    ))}

    
</div>
  <motion.div
    
        className="bg-[#EE2406] rounded-xl mt-10 p-6 w-[260px] justify-center items-center mx-auto text-center"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay:  0.8 }}
      >
        <h1 className="text-2xl font-bold">Daily</h1>
        <h2 className="text-md font-bold mt-2">Fresh Baked</h2>
        <p className="text-black text-sm mt-2">Morning buns</p>
      </motion.div>
        </div>
      </Slider>
      </div>
    </div>
  );
}
