import React from 'react'
import style from "../Home/Home.module.css";
import Navebar from '../Navebar/Navebar';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import ScrollToHash from "../ScrollToHash/ScrollToHash";
import About from '../About/About';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';
import MenuMobile from '../MenuMobile/MenuMobile';
import HeaderMobile from '../HeaderMobile/HeaderMobile';
import AboutMobile from '../AboutMobile/AboutMobile';
import ReviewsMobile from '../ReviewsMobile/ReviewsMobile';
export default function Home() {
  return (
   <>  
   <ScrollToHash/>
   <Navebar   />
      <div
        id="header"
        className={` hidden md:block relative w-full  h-auto  bg-center text-white`}
      >
     
        <Header />
      </div>
      <div
        id="header"
        className={` md:hidden block relative w-full  h-auto  bg-center text-white`}
      >
      
        <HeaderMobile />
      </div>
   
     <section  id='menu' className="hidden md:block relative w-full h-auto pb-56 mt-20 bg-center text-white " >
       <Menu/>
     </section>
     <section  id='menumobile' className="md:hidden block relative w-full h-auto pb-56 bg-center text-white scroll-mt-32">
       <MenuMobile/>
     </section>
     <section  id='about' className={` hidden md:block relative w-full h-auto pb-56 bg-center text-white`}>
       <About/>
     </section>
<section  id='aboutmobile' className={` md:hidden block relative w-full h-auto pb-56 bg-center text-white`}>
       <AboutMobile/>
     </section>

     

        <section  id='reviews' className={`  hidden md:block relative w-full h-auto pb-56 bg-center text-white`}>
       <Reviews/>
     </section>
  <section  id='reviewsmobile' className={` md:hidden block relative w-full h-auto pb-56 bg-center text-white`}>
       <ReviewsMobile/>
     </section>

     
      <Footer/>
    
   </>
  )
}
