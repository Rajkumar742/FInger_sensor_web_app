import React, { useState } from "react";
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

  return (
    <nav className="w-full  bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <div>
          <img
            src={frame1}
            alt="logo"
            className="w-28 sm:w-32 md:w-36"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <li className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
            Fingerprint <HiChevronDown />
          </li>

          <li className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
            Face <HiChevronDown />
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

        {/* Right Side */}
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
        <div className="lg:hidden bg-white shadow-md border-t">
          <ul className="flex flex-col p-5 space-y-4 text-base">
            <li className="flex items-center justify-between cursor-pointer">
              Fingerprint
              <HiChevronDown />
            </li>

            <li className="flex items-center justify-between cursor-pointer">
              Face
              <HiChevronDown />
            </li>

            <li className="cursor-pointer">
              Boom Barrier
            </li>

            <li className="cursor-pointer">
              Turnstiles
            </li>

            <li className="cursor-pointer">
              Downloads
            </li>

            <li className="cursor-pointer">
              CSR
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}