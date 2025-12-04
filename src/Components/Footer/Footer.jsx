import React from "react";
import logo from "../../assets/images/hero1.png"; // حط مسار اللوجو عندك
import {
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="w-full py-10 px-6 md:px-20 bg-white/10 backdrop-blur-md text-white">
      <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Logo & Info */}
        <div className="flex flex-col gap-4">
          <img src={logo} alt="Logo" className="w-42" />
          <p className="text-gray-200 text-md">
           At Maestro Burger, we don’t just serve burgers we craft flavor that stops time.

          </p>
          <div className="flex gap-4 text-lg text-gray-200">
            <Link target="_blank" to="https://www.facebook.com/maestroburgeregy">
              <FaFacebookF />
            </Link>
            
            <Link target="_blank" to="https://www.instagram.com/maestroburger_eg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <FaInstagram />
            </Link>
            <Link target="_blank"  to="https://www.tiktok.com/@maestroburger_eg?_r=1&_t=ZS-91uzTkge4NI">
              <FaTiktok />
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Navigation</h3>
          <Link
            to="/#header"
            className="hover:text-orange-500 text-lg transition"
          >
            Home
          </Link>
          <Link
            to="/#menu"
            className="hover:text-orange-500 text-lg transition"
          >
            Menu
          </Link>
          <Link
            to="/#about"
            className="hover:text-orange-500 text-lg transition"
          >
            About
          </Link>
          <Link
            to="/#reviews"
            className="hover:text-orange-500 text-lg transition"
          >
            Reviews
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Contact</h3>

          <p className="text-lg flex gap-2">
            <FaPhone className="mt-1 rotate-90" /> 01153526455
          </p>
          <p className="text-lg flex gap-2">
            <FaPhone className="mt-1 rotate-90" /> 01222239983
          </p>
          <p className="text-lg flex gap-2">
            <FaMapMarkerAlt className="mt-1" /> Nasr City – Diplomatic District,
            Da Centro
          </p>
          <p className="text-lg flex gap-2">
            <FaMapMarkerAlt className="mt-1" /> Heliopolis – Chill Out Roxy,
            Al-Muqrezi Street
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-300/20 pt-6 text-center text-[#e2462b] text-sm">
        &copy; {new Date().getFullYear()} Traffic Digital 360. All rights reserved.
      </div>
    </footer>
  );
}
