import React from 'react'
import { Link } from 'react-router-dom';
import heroImg from "../../assets/images/hero1.png"
import burgerup from "../../assets/images/burgerup.png"
import burgerdown from "../../assets/images/burgerdown.png"
import { ShoppingCart } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Header() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
   <>
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 pt-32">
         <motion.img ref={ref} src={heroImg} alt='hero' className='w-[379px] h-[170px] mt-16' initial={{ y: -250, opacity: 0 }}
     animate={isInView ? { y : 0, opacity: 1 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }}/>
         <div className=' flex gap-28 my-4'>


          <motion.button ref={ref}  initial={{ x: -250, opacity: 0 }}
    animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }} className=' px-2 py-2 rounded-2xl cursor-pointer flex gap-3' style={{ background: "linear-gradient(90deg, #EB1508 0%, #F44401 100%)" }}>
           <ShoppingCart/> view menu
          </motion.button>


           <motion.button ref={ref} 
            className=' px-2 py-2 flex gap-3 cursor-pointer rounded-2xl bg-white text-black'
            initial={{ x: 250, opacity: 0 }}
     animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }} >
           <ShoppingCart/> view menu
          </motion.button>
         </div>
        <motion.img  src={burgerup} className='h-[312px] mt-7 ' initial={{ y: 250, opacity: 0 }}
     animate={ { y : 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}/>
        <motion.img  src={burgerdown} className='h-[312px]'     initial={{ y: 250, opacity: 0 }}
     animate={ { y : 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}/>
        </div>     
   </>
  )
}
