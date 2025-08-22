import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 px-4">
      <div className="max-w-6xl mx-auto mt-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About Fabtex Gallery
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Fabtex Gallery is a well-established, renowned fabric sourcing
              company dedicated to providing quality fabrics to local garment
              factories and buying houses in Dhaka, Bangladesh. We specialize in
              importing all types of quality fabrics as per buyer specifications
              from China and Vietnam.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our skilled quality control team ensures complete service
              delivery, supplying premium fabrics at reasonable prices. We're
              committed to building stable relationships with our valued clients
              by providing high-quality products and services at competitive
              prices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Quality Assurance
                  </h3>
                  <p className="text-gray-600">
                    Expert QC team ensures premium fabric quality
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Global Sourcing
                  </h3>
                  <p className="text-gray-600">
                    Direct imports from China and Vietnam
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Secure Transactions
                  </h3>
                  <p className="text-gray-600">
                    Escrow payments for financial security
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Fast Response
                  </h3>
                  <p className="text-gray-600">
                    Quick quotes and efficient service
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats/Features Section */}
          <div className="lg:w-1/3 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              Why Choose Fabtex Gallery?
            </h3>

            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  100%
                </div>
                <p className="text-gray-700">Quality Verified Factories</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  Secure
                </div>
                <p className="text-gray-700">Escrow Payment Protection</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">24h</div>
                <p className="text-gray-700">Fast Quote Response Time</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link to="/contact">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                  Contact Our Team
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-blue-800 text-white rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-xl max-w-3xl mx-auto">
            To give you the best value for your money by offering imported
            fabrics tailored to your needs and budgets, driven by advanced
            marketing concepts, quality products, and manufacturing methods
            focused on customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};


export default AboutSection;
