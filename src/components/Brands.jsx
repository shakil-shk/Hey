import React from 'react';
import CarrefourLogo from '../assets/brandslogos/carrefour.png';
import LidlLogo from '../assets/brandslogos/lidl.png';
import PrimarkLogo from '../assets/brandslogos/primark.png';
import RelianceLogo from '../assets/brandslogos/reliance.png';
import OliverLogo from '../assets/brandslogos/oliver.png';
import WalmartLogo from '../assets/brandslogos/walmart.png';
import CAlogo from '../assets/brandslogos/c&a.jpg';
import CostcoLogo from '../assets/brandslogos/costco.jpg';
import WoolworthsLogo from '../assets/brandslogos/woolworths.jpg';

const brands = [
  { name: 'Carrefour', logo: CarrefourLogo },
  { name: 'Lidl', logo: LidlLogo },
  { name: 'Primark', logo: PrimarkLogo },
  { name: 'Reliance Industries', logo: RelianceLogo },
  { name: 'Oliver', logo: OliverLogo },
  { name: 'Walmart', logo: WalmartLogo },
  { name: 'C&A', logo: CAlogo },
  { name: 'Costco Wholesale', logo: CostcoLogo },
  { name: 'Woolworths', logo: WoolworthsLogo }
];

const duplicatedBrands = [...brands, ...brands];

const Brands = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-200 rounded-full opacity-10"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-200 rounded-full opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Global Brands</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're proud to collaborate with industry leaders worldwide, delivering exceptional solutions.
          </p>
        </div>

        {/* Marquee container */}
        <div className="relative overflow-hidden py-6">
          <div className="flex animate-marquee whitespace-nowrap">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={index}
                className="mx-6 flex flex-col items-center justify-center w-72 h-44 transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-white hover:bg-blue-200 rounded-xl p-4 border border-gray-100"
              >
                <div className="h-28 w-full flex items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-20 max-w-48 object-contain"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-gray-600">{brand.name}</p>
              </div>
            ))}
          </div>
        </div>
        <br/>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Brands;