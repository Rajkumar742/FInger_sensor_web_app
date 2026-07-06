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
    <section className="w-full py-2 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        

        <div className="flex  justify-center items-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex justify-center items-center w-28 sm:w-32 md:w-30 lg:w-40"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-16 w-auto object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}