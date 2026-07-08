import React from "react";

export default function FrequentlyAsked() {
  return (
    <div className="w-full  px-6 py-10 my-5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between ">
        
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h1 className="text-xl md:text-2xl font-bold">
            Frequently Asked Questions
          </h1>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2">
          <p className="text-lg font-bold mb-4">
            What services do you provide?
          </p>

          <p className="text-gray-700 leading-7">
            We provide advanced biometric attendance systems, smart door
            locks, CCTV surveillance, access control systems, AI-powered
            security solutions, cloud-based monitoring, visitor management
            systems, and smart automation technologies for modern businesses,
            industries, offices, apartments, schools, hospitals, and
            enterprise infrastructures.
          </p>
        </div>
      </div>
    </div>
  );
}