import React from "react";
import mb20 from "../../assets/Product_card_img/Product-card-2.png"
export default function MB20() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <div>
            <img
              src={mb20}
              alt="MB20 Biometric Device"
              className="w-full max-w-md mx-auto"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-blue-600 font-semibold mb-2">
              Fingerprint Device
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              MB20 Biometric Attendance System
            </h1>

            <p className="text-gray-600 text-lg mb-6">
              MB20 is a modern biometric attendance device designed for
              businesses, offices, schools, and industries. It provides fast,
              secure, and reliable fingerprint verification with advanced
              attendance management features.
            </p>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Get Quote
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Key Features
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 shadow-md rounded-xl bg-gray-50">
              <h3 className="font-bold text-xl mb-2">
                Fast Recognition
              </h3>
              <p className="text-gray-600">
                High-speed fingerprint recognition within seconds.
              </p>
            </div>

            <div className="p-6 shadow-md rounded-xl bg-gray-50">
              <h3 className="font-bold text-xl mb-2">
                Attendance Tracking
              </h3>
              <p className="text-gray-600">
                Accurate employee attendance management and reporting.
              </p>
            </div>

            <div className="p-6 shadow-md rounded-xl bg-gray-50">
              <h3 className="font-bold text-xl mb-2">
                Secure Access
              </h3>
              <p className="text-gray-600">
                Prevent unauthorized access using biometric verification.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Specifications
          </h2>

          <div className="overflow-x-auto bg-white shadow rounded-xl">
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Model</td>
                  <td className="p-4">MB20</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-semibold">User Capacity</td>
                  <td className="p-4">1000 Users</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-semibold">Fingerprint Capacity</td>
                  <td className="p-4">1000 Fingerprints</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-semibold">Transaction Capacity</td>
                  <td className="p-4">100,000 Logs</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-semibold">Communication</td>
                  <td className="p-4">USB Host, TCP/IP</td>
                </tr>

                <tr>
                  <td className="p-4 font-semibold">Display</td>
                  <td className="p-4">2.8-inch TFT Screen</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Applications */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Applications
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="shadow p-6 rounded-xl text-center">
              🏢 Office
            </div>

            <div className="shadow p-6 rounded-xl text-center">
              🏫 School
            </div>

            <div className="shadow p-6 rounded-xl text-center">
              🏭 Factory
            </div>

            <div className="shadow p-6 rounded-xl text-center">
              🏥 Hospital
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in MB20?
          </h2>

          <p className="text-gray-600 mb-6">
            Contact our team to get pricing, installation details, and product
            demonstrations.
          </p>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}