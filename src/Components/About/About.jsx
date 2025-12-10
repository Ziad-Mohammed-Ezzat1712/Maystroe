import React, { useState } from "react";
import burgerAbout1 from "../../assets/images/burgerAbout.png";
import burgerAbout2 from "../../assets/images/brguerBeef.png";
import product2 from "../../assets/images/about1.png";
import icon1 from "../../assets/images/Icon1.png";
import icon2 from "../../assets/images/Icon2.png";
import icon3 from "../../assets/images/Icon3.png";
import icon4 from "../../assets/images/Icon4.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function About() {
  const [slide, setSlide] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const cardVariants = {
    hidden: { opacity: 0, y: 200 }, // نازل لتحت
    visible: { opacity: 1, y: 0 }, // يطلع لفوق
  };

  return (
    <div className="relative w-full h-dvh flex flex-col justify-center px-10 text-white">
      {/* Title */}
      <h2 className="text-center text-[60px] font-bold mb-2">About US</h2>
      <p className="text-left max-w-2xl mx-auto text-[20px] mb-10">
        At Maestro Burger, we don’t just serve burgers we craft flavor that
        stops time. We started as a small food truck with a big dream, and grew
        into a brand built on quality, passion, and unforgettable taste. Every
        burger is handcrafted with fresh ingredients, premium beef, and
        signature sauces that elevate every bite. Our mission is simple: deliver
        a burger experience that makes you forget the world. Maestro Burger is
        where great food meets great vibes.
      </p>

      {/* Slider Content */}
      <div className="flex justify-around items-center">
        {/* Slide 0 - Image + Text */}
        {slide === 0 && (
          <>
            {/* النص يدخل من الشمال */}
            <motion.div
              ref={ref}
              className="max-w-md"
              initial={{ x: -250, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h3 className="text-[60px] font-bold leading-snug">
                We Are The Best Restaurant In Egypt
              </h3>
              <p className="mt-4 text-[35px]">We start in 1990</p>
            </motion.div>

            {/* الصورة تدخل من اليمين */}
            <motion.img
              ref={ref}
              src={burgerAbout1}
              alt="burger1"
              className="w-[408px] h-[545px] object-cover drop-shadow-xl"
              initial={{ x: 250, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
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
                <div className="absolute  inset-0 bg-linear-to-b from-[#EB1508] to-[#F44401] transition-all duration-500 hover:rotate-35 hover:translate-y-100 flex items-center justify-center text-center">
                  <div className="flex flex-col items-center justify-center">
                    <h1 className="text-white text-[35px] font-bold">
                      Hardrouck
                    </h1>
                    <h1 className="text-white text-[35px] font-bold">Burger</h1>
                    <p className="text-white text-[20px] px-24 mt-2">
                      Lettuce Tomato Ketchup Mayonnaise Pickles 150g Beef Burger
                      Sesame Bun
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
              <div className="flex gap-12 justify-evenly">
                <motion.div
                  className="flex px-1 py-16 bg-black rounded-2xl flex-col items-center justify-center"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <img
                    src={icon1}
                    alt=""
                    className="bg-[#EC1B07] rounded-2xl h-24 py-4 px-4"
                  />
                  <h1 className="text-white text-[20px] font-bold mt-3">
                    Premium Beef
                  </h1>
                  <p className="text-[#99A1AF] text-[16px] text-center px-12 mt-2">
                    100% grass-fed Angus beef, never frozen
                  </p>
                </motion.div>

                <motion.div
                  className="flex px-1 py-16 bg-black rounded-2xl flex-col items-center justify-center"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                >
                  <img
                    src={icon2}
                    alt=""
                    className="bg-[#EC1B07] rounded-2xl h-24 py-4 px-4"
                  />
                  <h1 className="text-white text-[20px] font-bold mt-3">
                    Fresh Produce
                  </h1>
                  <p className="text-[#99A1AF] text-[16px] text-center px-12 mt-2">
                    Locally sourced vegetables delivered daily
                  </p>
                </motion.div>

                <motion.div
                  className="flex px-1 py-16 bg-black rounded-2xl flex-col items-center justify-center"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <img
                    src={icon3}
                    alt=""
                    className="bg-[#EC1B07] rounded-2xl h-24 py-4 px-4"
                  />
                  <h1 className="text-white text-[20px] font-bold mt-3">
                   Artisan Buns
                  </h1>
                  <p className="text-[#99A1AF] text-[16px] text-center px-12 mt-2">
                   Handcrafted brioche buns baked fresh every morning
                  </p>
                </motion.div>

                <motion.div
                  className="flex px-1 py-16 bg-black rounded-2xl flex-col items-center justify-center"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.55 }}
                >
                  <img
                    src={icon4}
                    alt=""
                    className="bg-[#EC1B07] rounded-2xl h-24 py-4 px-4"
                  />
                  <h1 className="text-white text-[20px] font-bold mt-3">
                    Secret Sauce
                  </h1>
                  <p className="text-[#99A1AF] text-[16px] text-center px-12 mt-2">
                   Our signature sauce recipe perfected over 10 years
                  </p>
                </motion.div>
              </div>

              <div className="flex gap-x-12 justify-evenly mt-24">
                <motion.div
                  className="flex  bg-[#EE2406] rounded-2xl flex-col text-center px-12 py-2"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.55 }}
                >
                  <h1 className="text-[60px] font-medium">100%</h1>
                  <h1 className="text-white text-[20px] font-bold mt-3">
                    Premium Beef
                  </h1>
                  <p className="text-[#000000] text-[16px] text-center  px-8 mt-2">
                    No artificial flavors or <br /> preservatives
                  </p>
                </motion.div>
                <motion.div
                  className="flex  bg-[#EE2406] rounded-2xl flex-col text-center px-24"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.55 }}
                >
                  <h1 className="text-[60px] font-medium">Local</h1>
                  <h1 className="text-white text-[20px] font-bold mt-3">
                    Farm Fresh
                  </h1>
                  <p className="text-[#000000] text-[16px] text-center  px-12 mt-2">
                    Supporting local farmers and <br /> communities
                  </p>
                </motion.div>
                <motion.div
                  className="flex  bg-[#EE2406] rounded-2xl flex-col text-center"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.55 }}
                >
                  <h1 className="text-[60px] font-medium">Daily</h1>
                  <h1 className="text-white text-[20px] font-bold mt-3">
                    Fresh Baked
                  </h1>
                  <p className="text-[#000000] text-[16px] text-center  px-12 mt-2">
                    Buns made fresh every <br /> morning
                  </p>
                </motion.div>
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
