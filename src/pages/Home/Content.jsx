import React from "react";
import content1 from "../../assets/content_page-img/content1.png";
import content2 from "../../assets/content_page-img/content2.png";
import content3 from "../../assets/content_page-img/content3.png";

const contents = [
  {
    title: "Intelligent Biometric Solutions for Modern Businesses",
    description:
      "We help organizations secure offices, industries, and commercial spaces with advanced biometric attendance, smart access control, and AI-powered security systems. Our technology delivers fast verification, real-time monitoring, and secure identity management for modern infrastructure.",
    image: content1,
    buttons: [
      "Real-Time Monitoring",
      "AI Verification",
      "Smart Integration",
    ],
    stats: [
      {
        value: "500+",
        color: "text-blue-500",
        title: "Successful Installations",
        desc: "Trusted biometric deployments across businesses and enterprises.",
      },
      {
        value: "300K+",
        color: "text-pink-600",
        title: "Daily Verifications",
        desc: "Trusted biometric deployments across businesses and enterprises.",
      },
    ],
  },
  {
    title: "Advanced Protection for Secure Environments",
    description:
      "Our biometric access control systems provide secure entry management for offices, factories, apartments, and enterprise facilities. Every access event is verified, monitored, and securely recorded with intelligent authentication systems.",
    image: content2,
    buttons: [
      "Secure Authentication",
      "Cloud Connected",
      "Fast Verification",
    ],
    stats: [
      {
        value: "3M+",
        color: "text-blue-500",
        title: "Access Logs Processed",
        desc: "Real-time monitoring and secure access tracking.",
      },
      {
        value: "800K+",
        color: "text-pink-600",
        title: "Identity Records",
        desc: "Advanced biometric identity management system.",
      },
    ],
  },
  {
    title: "Intelligent Monitoring for Smart Infrastructure",
    description:
      "Advanced AI-powered CCTV and surveillance systems designed for continuous monitoring, threat detection, and real-time security management across business environments.",
    image: content3,
    buttons: [
      "Smart Detection",
      "Mobile Access",
      "High Security",
    ],
    stats: [
      {
        value: "100+",
        color: "text-blue-500",
        title: "Commercial Deployments",
        desc: "Trusted biometric deployments across businesses and enterprises.",
      },
      {
        value: "99%",
        color: "text-pink-600",
        title: "Detection Accuracy",
        desc: "Trusted biometric deployments across businesses and enterprises.",
      },
    ],
  },
];

export default function Content() {
  return (
    <div className="w-full bg-slate-50 py-12">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-6 mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center lg:text-left">
          Smart Workplace Security
        </h1>

        <p className="text-gray-600 text-center lg:text-right leading-7">
          Advanced biometric and AI-powered security solutions <br />
          for modern businesses, offices, and smart infrastructure.
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-12
      ">
        {contents.map((item, index) => (
          <div
            key={index}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8"
          >
            {/* Left Card */}
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  {item.title}
                </h2>

                <p className="mt-5 text-gray-600 leading-7">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {item.buttons.map((btn, i) => (
                    <button
                      key={i}
                      className=" rounded px-9 text-blue-400 py-2  bg-slate-100 transition"
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full max-w-[300px] object-contain"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="lg:w-[300px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {item.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center"
                >
                  <h2
                    className={`text-5xl md:text-6xl font-bold ${stat.color}`}
                  >
                    {stat.value}
                  </h2>

                  <div className="bg-slate-50 mt-5 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">{stat.title}</h3>

                    <p className="text-gray-600 mt-2">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}