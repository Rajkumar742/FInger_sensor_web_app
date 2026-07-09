import React from "react";
import frame1 from "../assets/Frame 1.png";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Logo */}
          <div>
            <img
              src={frame1}
              alt="Logo"
              className="w-32 md:w-40 mb-4"
            />
           
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="list-none space-y-3">
              
              
            
             
              <li className="hover:text-red-500 cursor-pointer"><Link to="/mb20">Home</Link></li>
              <li className="hover:text-red-500 cursor-pointer"><Link to="/mb20">About Us</Link></li>
              <li className="hover:text-red-500 cursor-pointer">  <Link to="/mb20">Solutions</Link></li>
              <li className="hover:text-red-500 cursor-pointer">  <Link to="/mb20">Services</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="list-none space-y-3">
              <li className="hover:text-red-500 cursor-pointer">
                <Link to="/mb20">Biometric Systems</Link>
              </li>
              <li className="hover:text-red-500 cursor-pointer">
              <Link to="/mb20">  Smart Door Locks</Link>
              </li>
              <li className="hover:text-red-500 cursor-pointer">
                <Link to="/mb20">Access Control</Link>
              </li>
              <li className="hover:text-red-500 cursor-pointer">
               <Link to="/mb20"> Boom Barriers</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="list-none space-y-3">
              <li className="hover:text-red-500 cursor-pointer">
               <Link to="/mb20"> Installation Support</Link>
              </li>
              <li className="hover:text-red-500 cursor-pointer">
               <Link to="/mb20"> Technical Maintenance</Link>
              </li>
              <li className="hover:text-red-500 cursor-pointer">
              <Link to="/mb20">  Cloud Integration</Link>
              </li>
            </ul>
          </div>

          {/* icons */}


          <div>
  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

  <div className="flex items-center gap-4">
    <a
      href="#"
      className="w-10 h-10   flex items-center justify-center hover:bg-pink-600 transition"
    >
      <FaInstagram size={18} />
    </a>

    <a
      href="#"
      className="w-10 h-10  flex items-center justify-center hover:bg-blue-700 transition"
    >
      <FaLinkedinIn size={18} />
    </a>

    <a
      href="#"
      className="w-10 h-10  flex items-center justify-center hover:bg-blue-600 transition"
    >
      <FaFacebookF size={18} />
    </a>

    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center hover:bg-red-600 transition"
    >
      <FaYoutube size={18} />
    </a>

    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center hover:bg-gray-600 transition"
    >
      <FaXTwitter size={18} />
    </a>
  </div>
</div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-sm text-gray-400">
  <p>
    © {new Date().getFullYear()} Smart Security Systems. All rights reserved.
  </p>

  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
    <p className="cursor-pointer hover:text-white">Privacy Policy Site Disclaimer</p>
    <p className="cursor-pointer hover:text-white"></p>
  </div>
</div>
      </div>
    </footer>
  );
}