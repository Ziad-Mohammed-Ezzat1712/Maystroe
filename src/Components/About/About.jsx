import React, { useState } from "react";
import burgerAbout1 from "../../assets/images/burgerAbout.png";
import burgerAbout2 from "../../assets/images/burgerAbout.png";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";

export default function About() {
  const [slide, setSlide] = useState(0);

  return (
    <div className="relative w-full h-dvh flex flex-col justify-center px-10 text-white">
      {/* Title */}
      <h2 className="text-center text-[60px] font-bold mb-2">About US</h2>
      <p className="text-center text-[20px] mb-10">
        Handpicked favorites that keep our customers coming back for more
      </p>

      {/* Slider Content */}
      <div className="flex justify-around items-center">
        {/* Slide 0 - Image + Text */}
        {slide === 0 && (
          <>
            <div className="max-w-md">
              <h3 className="text-[60px] font-bold leading-snug">
                We Are The Best Restaurant In Egypt
              </h3>
              <p className="mt-4 text-[35px]">We start in 1990</p>
            </div>
            <img
              src={burgerAbout1}
              alt="burger1"
              className="w-[408px] h-[545px] object-cover drop-shadow-xl"
            />
          </>
        )}

        {/* Slide 1 - 3 Cards Centered, No Text */}
        {slide === 1 && (
          <div className="flex justify-center gap-6 w-full">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative w-[408px] h-[545px] drop-shadow-xl overflow-hidden cursor-pointer"
              >
                <img
                  src={burgerAbout2}
                  alt={`Card ${i}`}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
<div className="absolute  inset-0 bg-linear-to-b from-[#EB1508] to-[#F44401] transition-all duration-500 hover:rotate-35 hover:translate-y-60 flex items-center justify-center text-center">
  <div className="flex flex-col items-center justify-center">
    <h1 className="text-white text-[35px] font-bold">Hardrouck</h1>
    <h1 className="text-white text-[35px] font-bold">Burger</h1>
    <p className="text-white text-[20px] px-24 mt-2">
      Lettuce Tomato Ketchup Mayonnaise Pickles 150g Beef Burger Sesame Bun
    </p>
  </div>
</div>

              </div>
            ))}
          </div>
        )}

        {/* Slide 2 - Empty */}
        {slide === 2 && (
          <>
<div className="block mb-24">
         <div className="flex gap-12 justify-evenly ">
              <div className="flex px-1 py-16  bg-black rounded-2xl flex-col items-center justify-center">
   <img src={icon1} alt="" className="bg-[#EC1B07] rounded-2xl h-24 py-4 px-4" />
    <h1 className="text-white text-[20px] font-bold mt-3">Premium Beef</h1>
    <p className="text-[#99A1AF] text-[16px] text-center  px-12 mt-2">
      100% grass-fed Angus beef, never frozen
    </p>
  </div>
                 <div className="flex px-1 py-16  bg-black rounded-2xl flex-col items-center justify-center">
   <img src={icon2} alt="" className="bg-[#EC1B07] rounded-2xl h-24 py-4 px-4" />
    <h1 className="text-white text-[20px] font-bold mt-3">Premium Beef</h1>
    <p className="text-[#99A1AF] text-[16px] text-center  px-12 mt-2">
      100% grass-fed Angus beef, never frozen
    </p>
  </div>
                   <div className="flex px-1 py-16  bg-black rounded-2xl flex-col items-center justify-center">
   <img src={icon3} alt="" className="bg-[#EC1B07] rounded-2xl h-24 py-4 px-4" />
    <h1 className="text-white text-[20px] font-bold mt-3">Premium Beef</h1>
    <p className="text-[#99A1AF] text-[16px] text-center  px-12 mt-2">
      100% grass-fed Angus beef, never frozen
    </p>
  </div>
                  <div className="flex px-1 py-16  bg-black rounded-2xl flex-col items-center justify-center">
   <img src={icon4} alt="" className="bg-[#EC1B07] rounded-2xl h-24 py-4 px-4" />
    <h1 className="text-white text-[20px] font-bold mt-3">Premium Beef</h1>
    <p className="text-[#99A1AF] text-[16px] text-center  px-12 mt-2">
      100% grass-fed Angus beef, never frozen
    </p>
  </div>
  </div>
          <div className="flex gap-x-12 justify-evenly mt-24">
             <div className="flex  bg-[#EE2406] rounded-2xl flex-col text-center px-12 py-2">
   <h1 className="text-[60px] font-medium">100%</h1>
    <h1 className="text-white text-[20px] font-bold mt-3">Premium Beef</h1>
    <p className="text-[#000000] text-[16px] text-center  px-8 mt-2">
      No artificial flavors or <br/> preservatives
    </p>
  </div>
         <div className="flex  bg-[#EE2406] rounded-2xl flex-col text-center px-24">
   <h1 className="text-[60px] font-medium">Local</h1>
    <h1 className="text-white text-[20px] font-bold mt-3">Farm Fresh</h1>
    <p className="text-[#000000] text-[16px] text-center  px-12 mt-2">
      Supporting local farmers and <br/> communities
    </p>
  </div>
                  <div className="flex  bg-[#EE2406] rounded-2xl flex-col text-center">
   <h1 className="text-[60px] font-medium">Daily</h1>
    <h1 className="text-white text-[20px] font-bold mt-3">Fresh Baked</h1>
    <p className="text-[#000000] text-[16px] text-center  px-12 mt-2">
    Buns made fresh every <br/> morning
    </p>
  </div>
          </div>

</div>
          </>
        )}
      </div>

      {/* Dots */}
      <div className="flex gap-4 mt-10 mx-auto">
        {[0, 1, 2].map((idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={`w-[100px] h-[8px] rounded-md transition cursor-pointer ${
              slide === idx ? "bg-[#e2462b]" : "bg-white/30"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
