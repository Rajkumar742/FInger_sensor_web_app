import React from "react";
import qpms from "../assets/brands_home/qpms_full.png";
import elile from "../assets/brands_home/elile_full.png";

export default function Trusted_bar() {
  const testimonials = [
    {
      img: qpms,
      text: "Their biometric attendance system improved our workforce management and security smoothly.",
    },
    {
      img: elile,
      text: "Professional biometric solutions with excellent customer support and reliable installation.",
    },
    {
      img: qpms,
      text: "Easy attendance tracking and seamless access control for our organization.",
    },
    {
      img: elile,
      text: "The smart security system has greatly improved our office safety and efficiency.",
    },
    {
      img: qpms,
      text: "Highly recommended for businesses looking for modern biometric solutions.",
    },
  ];

  return (
    <section className="w-full py-10 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Trusted by Businesses Across Industries
        </h2>

        <div className="flex flex-nowrap gap-6 overflow-x-auto  scroll-hidden">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[340px]  sm:w-[420px] md:w-[500px]   rounded   shadow-md    bg-white p-2 flex items-center gap-5"
            >
              <img
                src={item.img}
                alt="Client Logo"
                className="w-20 h-20 sm:w-15 sm:h-24 object-contain"
              />

              <p className="text-gray-700 text-sm sm:text-base leading-7">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}