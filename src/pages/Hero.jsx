import React from "react";
import bgimg from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[450px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-[100svh] flex items-center px-6 sm:px-10 lg:px-16">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start  text-center lg:text-left gap-5 md:gap-6 text-white">
          
          {/* Badge */}
          <button className="border border-white rounded-full mt-[-90px] px-5 py-2 text-sm md:text-base">
            Invite Only
          </button>

          {/* Heading */}
          <h1 className="font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-5xl">
            Start.
            Scale.
            Grow.
          </h1>

          {/* Description */}
          <p className="max-w-md md:max-w-lg text-sm sm:text-base md:text-lg leading-7 text-gray-200">
            AI-powered biometric and smart access solutions designed
            for workplaces, offices, and enterprises with advanced
            technology.
          </p>

          {/* Button */}
          <button
            type="button"
            className="px-8 py-3 rounded-lg bg-gradient-to-r bg-white text-black hover:from-blue-600 hover:to-blue-800 transition-all duration-300 text-black font-medium text-sm md:text-base"
          >
            Explore Solutions
          </button>
        </div>
      </div>
    </section>
  );
}