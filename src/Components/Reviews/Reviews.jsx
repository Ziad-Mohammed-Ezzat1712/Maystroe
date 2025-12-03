import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assets/images/sarah.png";

// بيانات تجريبية
const reviewsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: img,
    text: "Absolutely the best burger I've ever had! The quality is unmatched and the atmosphere is incredible.",
    date: "2 days ago",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Lee",
    avatar: img,
    text: "Absolutely the best burger I've ever had! The quality is unmatched and the atmosphere is incredible.",
    date: "1 Week ago",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Watson",
    avatar: img,
    text: "Absolutely the best burger I've ever had! The quality is unmatched and the atmosphere is incredible.",
    date: "1 Week ago",
    rating: 5,
  },
  {
    id: 4,
    name: "John Doe",
    avatar: img,
    text: "Absolutely the best burger I've ever had! The quality is unmatched and the atmosphere is incredible.",
    date: "3 days ago",
    rating: 5,
  },
];

export default function Reviews() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className=" py-1 px-2 text-center">
      <h1 className="text-[60px] font-bold text-white mb-2">What People Say</h1>
      <p className="text-white text-[20px] mb-8">Don't just take our word for it - hear from our satisfied customers</p>

  <div className="bg-[#282523] max-w-[1500px] mx-auto py-6  rounded-xl"> 
     <Slider
  {...sliderSettings}
  className=""
  arrows={true} // لو عاوز السهم
  dots={true}
>
  {reviewsData.map((review) => (
    <div
      key={review.id}
      className="bg-[#282523] text-white px-6 py-10 gap-4 border-r-2 border-neutral-700 flex flex-col justify-center items-center h-60"
      style={{ margin: "0 30px" }} // ده بيعمل جاب بين الكروت
    >
      <div>
        <div className="flex gap-1 mb-3">
          {[...Array(review.rating)].map((_, i) => (
            <FaStar key={i} className="text-[#F0B100] w-5 h-5" />
          ))}
        </div>
        <p className="italic text-left mb-4 ">"{review.text}"</p>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full" />
        <div className="text-left">
          <p className="font-semibold">{review.name}</p>
          <p className="text-gray-400 text-sm">{review.date}</p>
        </div>
      </div>
    </div>
  ))}
</Slider></div>


      <div className="bg-[#282523] text-white mt-12 inline-flex rounded-xl p-6 gap-8 justify-center">
        <div className="text-center space-y-0">
          <p className="text-[36px] font-bold">4.9</p>
       
          <div className="flex justify-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-[#F0B100] w-5 h-5" />
            ))}
          </div>
             <p className="text-[16px] text-[#99A1AF]">Average Rating</p>
        </div>
        <div className="text-center">
          <p className="text-[36px] font-bold">2,500+</p>
          <p className="text-[16px] text-[#99A1AF]">Happy Customers</p>
        </div>
        <div className="text-center">
          <p className="text-[36px] font-bold">98%</p>
          <p className="text-[16px] text-[#99A1AF]">Would Recommend</p>
        </div>
      </div>
    </div>
  );
}
