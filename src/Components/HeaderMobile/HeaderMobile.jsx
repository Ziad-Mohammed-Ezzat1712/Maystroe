import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import heroImg from "../../assets/images/hero1.png";
import burgerup from "../../assets/images/burgerup.webp";
import heroVideo from "../../assets/images/video.mp4"; // استيراد الفيديو
import burgerdown from "../../assets/images/burgerdown.webp";
import { ShoppingCart,Phone ,BookOpen  } from "lucide-react";
import { FaFacebookMessenger } from "react-icons/fa";

export default function HeaderMobile() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const heroOpacityScroll = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const upY = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const upOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const downY = useTransform(scrollYProgress, [0, 1], [0,300]);
  const downOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  
  useEffect(() => {
    if (isInView) {
      controls.start({ y: 0, opacity: 1 });
      controls2.start({ x: 0, opacity: 1 });
      controls3.start({ x: 0, opacity: 1 });
    } else {
      controls.start({ y: -250, opacity: 0 });
      controls2.start({ x: -350, opacity: 0 });
      controls3.start({ x: 350, opacity: 0 });
    }
  }, [isInView, controls,controls2]);

  return (
    <div ref={ref} className="relative z-10 flex flex-col justify-start pt-10 items-center h-[1000px] text-center px-4 ">
      

      <motion.img
        src={heroImg}
        alt="hero"
        className="w-[200px] h-[100px] "
        initial={{ y: -250, opacity: 0 }}
        animate={controls}
        style={{ opacity: heroOpacityScroll }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

    <div className="flex gap-10 my-10">

  <motion.button
  initial={{ x: 250, opacity: 0 }}
  
  animate={controls2}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="px-4 py-2 rounded-2xl cursor-pointer flex gap-3"
  style={{ background: "linear-gradient(90deg, #EB1508 0%, #F44401 100%)", opacity: heroOpacityScroll }}
  onClick={() => {
    document.getElementById("menumobile").scrollIntoView({
      behavior: "smooth",
    });
  }}
>
  <BookOpen /> view menu
</motion.button>


<motion.button
  initial={{ x: -250, opacity: 0 }}
  animate={controls3}
  transition={{ duration: 1.2, ease: "easeOut" }}
  style={{ opacity: heroOpacityScroll }}
  onClick={() => {
    window.open("https://m.me/maestroburgeregy", "_blank");
  }}
  className="px-4 py-2 flex gap-3 cursor-pointer rounded-2xl bg-white text-black"
>
  <FaFacebookMessenger size={24} className="text-black" />

  Contact Us
</motion.button>

</div>

  <motion.video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="h-[420px] w-[1500px]  rounded-2xl bg-transparent"
        initial={{ y: 100, opacity: 0 }}

        animate={controls}
    
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </div>
  );
}

