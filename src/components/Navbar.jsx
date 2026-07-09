import React, { useState } from "react";
import{Link} from "react-router-dom"
import {
  HiOutlineViewGrid,
  HiChevronDown,
  HiMenu,
  HiX,
} from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import frame1 from "../assets/Frame 1.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3">
        {/* Logo */}
        <img
          src={frame1}
          alt="Logo"
          className="w-28 sm:w-32 md:w-36"
        />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {/* Fingerprint */}
          <li
            className="relative flex items-center gap-1 cursor-pointer hover:text-blue-600"
            onClick={() => {
              setShowMenu(!showMenu);
              setShowMenu2(false);
            }}
          >
            Fingerprint <HiChevronDown />

            {showMenu && (
              <ul className="absolute top-full left-0 mt-2 w-52 bg-white shadow-lg rounded-md border z-50">
                <li className="px-4 py-2 hover:bg-gray-100"><Link to="/mb20">Mb20</Link></li>
                 <li className="px-4 py-2 hover:bg-gray-100"><Link to="/mb20">Mb20</Link></li>
                 <li className="px-4 py-2 hover:bg-gray-100"><Link to="/mb20">Mb20</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link to="/mb20">Mb20</Link></li>
                   <li className="px-4 py-2 hover:bg-gray-100"><Link to="/mb20">Mb20</Link></li>
                
              </ul>
            )}
          </li>

          {/* Face */}
          <li
            className="relative flex items-center gap-1 cursor-pointer hover:text-blue-600"
            onClick={() => {
              setShowMenu2(!showMenu2);
              setShowMenu(false);
            }}
          >
            Face <HiChevronDown />

            {showMenu2 && (
              <ul className="absolute top-full left-0 mt-2 w-52 bg-white shadow-lg rounded-md border z-50">
               <li className="px-4 py-2 hover:bg-gray-100"><Link to="/mb20">Mb20</Link></li>
                 <li className="px-4 py-2 hover:bg-gray-100"><Link to="/mb20">Mb20</Link></li>
                 <li className="px-4 py-2 hover:bg-gray-100"><Link to="/mb20">Mb20</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link to="/mb20">Mb20</Link></li>
                   <li className="px-4 py-2 hover:bg-gray-100"><Link to="/mb20">Mb20</Link></li>
              </ul>
            )}
          </li>

          <li className="cursor-pointer hover:text-blue-600">
            Boom Barrier
          </li>

          <li className="cursor-pointer hover:text-blue-600">
            Turnstiles
          </li>

          <li className="cursor-pointer hover:text-blue-600">
            Downloads
          </li>

          <li className="cursor-pointer hover:text-blue-600">
            CSR
          </li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <FaSearch className="text-xl cursor-pointer hover:text-blue-600" />

          <HiOutlineViewGrid className="text-2xl cursor-pointer hover:text-blue-600" />

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <HiX className="text-3xl" />
            ) : (
              <HiMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t bg-white shadow-md">
          <ul className="flex flex-col p-5 space-y-4">

            <li>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}
              >
                Fingerprint
                <HiChevronDown />
              </div>

              {showMenu && (
                <ul className="pl-5 mt-2 space-y-2 text-gray-600">
                  <li>MB20</li>
                  <li>MB360</li>
                  <li>MB460</li>
                  <li>F18</li>
                  <li>VF680</li>
                </ul>
              )}
            </li>

            <li>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setShowMenu2(!showMenu2)}
              >
                Face
                <HiChevronDown />
              </div>

              {showMenu2 && (
                <ul className="pl-5 mt-2 space-y-2 text-gray-600">
                  <li>Face X</li>
                  <li>SpeedFace V5L</li>
                  <li>FaceDepot-7B</li>
                  <li>Horus E1</li>
                </ul>
              )}
            </li>

            <li>Boom Barrier</li>
            <li>Turnstiles</li>
            <li>Downloads</li>
            <li>CSR</li>
          </ul>
        </div>
      )}
    </nav>
  );
}