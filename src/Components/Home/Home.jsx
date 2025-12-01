import React from 'react'
import style from "../Home/Home.module.css";
import Navebar from '../Navebar/Navebar';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import ScrollToHash from "../ScrollToHash/ScrollToHash";
import About from '../About/About';
export default function Home() {
  return (
   <>  
   <ScrollToHash/>
      <div
        id="header"
        className={`${style.src}  relative w-full  h-auto pb-56 bg-center text-white`}
      >
        <Navebar   />
        <Header />
      </div>
     <section  id='menu' className={`${style.srcAbout}  relative w-full h-auto pb-56 bg-center text-white`}>
       <Menu/>
     </section>
     <section  id='about' className={`${style.srcAbout}  relative w-full h-auto pb-56 bg-center text-white`}>
       <About/>
     </section>
   </>
  )
}
