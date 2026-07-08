import React from "react";
import location from "../../assets/bio_location.png";

export default function Smart_secrity_system() {
  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-10 bg-slate-50">
      {/* Heading */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-10 pt-10">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Smart Security Services
        </h1>

        <p className="text-gray-600 text-sm sm:text-base">
          Professional biometric and smart security solutions for modern
          <br className="hidden sm:block" />
          businesses, offices, industries, and enterprise environments.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="bg-green-50 p-6 rounded-3xl">
          <h1 className="font-bold text-xl mb-5">
            Expert Installation Support
          </h1>

          <p className="text-gray-600 leading-7">
            Professional biometric and smart security setup services for
            offices, industries, commercial spaces, and enterprise
            infrastructures with reliable technical support and seamless
            system integration.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-50 rounded-3xl flex justify-center items-center p-6">
          <img
            src={location}
            alt="location"
            className="w-full max-w-xs object-contain"
          />
        </div>

        {/* Card 3 */}
        <div className="bg-yellow-50 p-6 rounded-3xl">
          <h1 className="font-bold text-xl mb-5">
            Secure & Reliable
          </h1>

          <p className="text-gray-600 leading-7">
            Professional biometric and smart security setup services for
            offices, industries, commercial spaces, and enterprise
            infrastructures with reliable technical support and seamless
            system integration.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-green-200 p-6 rounded-3xl">
          <h1 className="font-bold text-xl mb-5">
            Smart Security Services
          </h1>

          <p className="text-gray-600 leading-7 mb-16">
            Professional biometric and smart security setup services for
            offices, industries, commercial spaces, and enterprise
            infrastructures with reliable technical support and seamless
            system integration.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-pink-100 p-6 rounded-3xl">
          <h1 className="font-bold text-xl mb-5">
            Fast Service Response
          </h1>

          <p className="text-gray-600 leading-7 mb-16">
            Professional biometric and smart security setup services for
            offices, industries, commercial spaces, and enterprise
            infrastructures with reliable technical support and seamless
            system integration.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-blue-200 p-6  rounded-3xl">
          <h1 className="font-bold text-xl mb-5">
            Cloud & Remote Management
          </h1>

          <p className="text-gray-600 leading-7 mb-16">
            Professional biometric and smart security setup services for
            offices, industries, commercial spaces, and enterprise
            infrastructures with reliable technical support and seamless
            system integration.
          </p>
        </div>

      </div>
    </div>
  );
}