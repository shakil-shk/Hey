import React from 'react';
import fab1 from "../assets/aboutsFabrics/aboutfab1.jpg";
import fab2 from "../assets/aboutsFabrics/aboutfab2.jpg";
import fab3 from "../assets/aboutsFabrics/aboutfab3.jpg";
import fab4 from "../assets/aboutsFabrics/aboutfab4.jpg";

const Overview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Content Column - Left Side */}
          <div className="md:w-3/5 md:pr-10 mb-10 md:mb-0">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-4">
              OVERVIEW
            </h1>
            <div className="space-y-5 text-gray-700">
              <p className="text-lg leading-relaxed">
               “FABTEX GALLERY.”, is a well-established renowned fabric sourcing company with a view to provide quality fabric to the local garment factories and buying houses in Dhaka, Bangladesh. We import all type of quality fabric as per buyer’s order from China and Vietnam. We have an skilled quality control team, which can provide you with a complete service supplying quality fabrics at reasonable prices.
              </p>
              <p className="text-lg leading-relaxed">
                Our goal is to build up stable relations with our valued clients by providing high quality and best services at a competitive price and we are also searching emerging markets and developing business scopes. Our purpose is to give you the best value for your money; so, we offer imported Fabrics as your needs and budgets, advanced marketing concepts, quality products and advanced manufacturing methods have always been driven by the demands for customer satisfaction.
              </p>
            </div>

            {/* Features Section */}
            <div className="mt-1">
              <div className="max-w-5xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Verified Factories */}
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-blue-50 p-3 rounded-full mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">VERIFIED FACTORIES</h3>
                  </div>
                  
                  {/* Secure Escrow Payments */}
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-green-50 p-3 rounded-full mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">SECURE ESCROW PAYMENTS</h3>
                  </div>
                  
                  {/* Fast Quotes */}
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-purple-50 p-3 rounded-full mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">FAST QUOTES</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fabric Images Column - Right Side */}
          <div className="md:w-2/5">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src={fab1} 
                  alt="Fabric 1" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src={fab2}
                  alt="Fabric 2" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src={fab3}
                  alt="Fabric 3" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src={fab4} 
                  alt="Fabric 4" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
