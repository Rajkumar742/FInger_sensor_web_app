import React from "react";
import bgimg from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row items-center px-6 md:px-12 lg:px-16">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 text-white">
          
          <button className="w-fit border-2 border-white rounded-full px-5 py-2">
            Invite Only
          </button>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Start.
            Scale. 
            Grow.
          </h1>

          <p className="text-base md:text-lg leading-7 max-w-lg">
            AI-powered biometric and smart access solutions designed
            for workplaces, offices, and enterprises with advanced
            technology.
          </p>

            <button type="button" class="w-50 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm py-2.5 text-center leading-5">Explore Solutions</button>
        </div>

        {/* Right Side */}
        <div className="hidden lg:block lg:w-1/2">
          {/* Add an image or illustration here if needed */}
        </div>

      </div>
    </section>
  );
}