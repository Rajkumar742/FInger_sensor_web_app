import React from "react";
import bgimg from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Image */}
      <img
        src={bgimg}
        alt="Hero Banner"
        className="w-full h-[500px] md:h-[700px] object-cover md:object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left text-white gap-5">

            {/* Badge */}
            <button className="border border-white rounded-full px-5 py-2 text-sm">
              Invite Only
            </button>

            {/* Heading */}
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Start.
           
              Scale.
              
              Grow.
            </h1>

            {/* Description */}
            <p className="max-w-md text-sm sm:text-base lg:text-lg leading-7 text-gray-200">
              AI-powered biometric and smart access solutions designed for
              workplaces, offices, and enterprises with advanced technology.
            </p>

            {/* Button */}
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Explore Solutions
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}