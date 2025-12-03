import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import heroImg from "../../assets/images/hero1.png";
import burgerup from "../../assets/images/burgerup.webp";
import burgerdown from "../../assets/images/burgerdown.webp";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  // Scroll
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const heroOpacityScroll = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const upY = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const upOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const downY = useTransform(scrollYProgress, [0, 1], [0,300]);
  const downOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Initial animation عند ظهور الكومبوننت
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
    <div ref={ref} className="relative z-10 flex flex-col justify-center items-center h-[1000px] text-center px-4 pt-32">
      
      {/* الصورة الرئيسية */}
      <motion.img
        src={heroImg}
        alt="hero"
        className="w-[379px] h-[170px] mt-16"
        initial={{ y: -250, opacity: 0 }}
        animate={controls}
        style={{ opacity: heroOpacityScroll }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

    <div className="flex gap-28 my-4">
  {/* الزر الأول يدخل من اليمين */}
  <motion.button
    initial={{ x: 250, opacity: 0 }}
    animate={controls2}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="px-2 py-2 rounded-2xl cursor-pointer flex gap-3"
    style={{ background: "linear-gradient(90deg, #EB1508 0%, #F44401 100%)" ,opacity: heroOpacityScroll }}
  >
    <ShoppingCart /> view menu
  </motion.button>

  {/* الزر الثاني يدخل من الشمال */}
  <motion.button
    initial={{ x: -250, opacity: 0 }}
    animate={controls3}
    transition={{ duration: 1.2, ease: "easeOut" }}
    style={{ opacity: heroOpacityScroll }}
    className="px-2 py-2 flex gap-3 cursor-pointer rounded-2xl bg-white text-black"
  >
    <ShoppingCart /> view menu
  </motion.button>
</div>

      {/* الصور المتحركة أثناء scroll */}
      <motion.img
        src={burgerup}
        className="h-[312px] mt-7"
        initial={{ y: 250, opacity: 0 }}
        animate={controls}
        style={{ y: upY, opacity: upOpacity }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.img
        src={burgerdown}
        className="h-[312px]"
        initial={{ y: 250, opacity: 0 }}
        animate={controls}
        style={{ y: downY, opacity: downOpacity }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </div>
  );
}
