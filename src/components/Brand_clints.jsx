import React from "react";

import aakash from "../assets/brands_home/aakash.png";
import casagrand from "../assets/brands_home/casagrand.png";
import corent from "../assets/brands_home/corent.png";
import elile from "../assets/brands_home/elile.png";
import ford from "../assets/brands_home/ford.png";
import nippo from "../assets/brands_home/nippo.png";
import qpms from "../assets/brands_home/qpms.png";
import svce from "../assets/brands_home/svce.png";

export default function Brand_clients() {
  const brands = [
    { name: "Ford", logo: ford },
    { name: "Aakash", logo: aakash },
    { name: "QPMS", logo: qpms },
    { name: "Elile", logo: elile },
    { name: "Corent", logo: corent },
    { name: "SVCE", logo: svce },
    { name: "Nippo", logo: nippo },
    { name: "Casagrand", logo: casagrand },
  ];

  return (
    <section className="w-full py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Mobile View */}
        <div className="flex md:hidden overflow-x-auto hide-scrollbar">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex-shrink-0 w-14 gap-13 flex justify-center items-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Tablet & Desktop View */}
        <div className="hidden md:flex justify-between items-center gap-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex justify-center items-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-14 lg:h-16 w-auto object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}