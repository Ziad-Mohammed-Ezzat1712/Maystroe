import React, { useState } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assets/images/sarah.png";

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

export default function ReviewsMobile() {
  const [slide, setSlide] = useState(0);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000, // كل ثانيتين
    slidesToShow: 1,
    slidesToScroll: 1,

    // dots container
    appendDots: (dots) => (
      <div className="pt-4 pb-2">
        <ul className="flex justify-center gap-3">{dots}</ul>
      </div>
    ),

    // dot style
     customPaging: (i) => (
      <div
        className={`w-10 h-1.5 rounded-md ${
          i === slide ? "bg-[#e2462b]" : "bg-white/30"
        }`}
      ></div>
    ),
    beforeChange: (_, next) => setSlide(next),
  };

  return (
    <div className="px-4 py-6 text-center md:hidden mobile-reviews">
      <h1 className="text-[34px] font-bold text-white mb-2">What People Say</h1>
      <p className="text-white text-[14px] mb-6 leading-snug">
        Don't just take our word for it – hear from our satisfied customers
      </p>

      <div className="bg-[#36322f] w-full mx-auto py-6 rounded-xl">
        <Slider {...sliderSettings}>
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-[#36322f] text-white px-5 py-8 flex flex-col gap-4 justify-center items-center"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-[#F0B100] w-5 h-5" />
                ))}
              </div>

              {/* Text */}
              <p className="italic text-[14px] leading-relaxed px-2">
                "{review.text}"
              </p>

              {/* User */}
              <div className="flex items-center gap-3 mt-2">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-left">
                  <p className="font-semibold text-[15px]">{review.name}</p>
                  <p className="text-gray-400 text-[12px]">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Stats */}
      <div className="bg-[#36322f] text-white mt-8 rounded-xl p-5 flex flex-col gap-5">
        <div className="text-center">
          <p className="text-[30px] font-bold">4.9</p>
          <div className="flex justify-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-[#F0B100] w-4 h-4" />
            ))}
          </div>
          <p className="text-[13px] text-[#99A1AF]">Average Rating</p>
        </div>

        <div className="text-center">
          <p className="text-[30px] font-bold">2,500+</p>
          <p className="text-[13px] text-[#99A1AF]">Happy Customers</p>
        </div>

        <div className="text-center">
          <p className="text-[30px] font-bold">98%</p>
          <p className="text-[13px] text-[#99A1AF]">Would Recommend</p>
        </div>
      </div>
    </div>
  );
}

