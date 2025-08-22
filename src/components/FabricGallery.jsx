import React from "react";
import { Link } from "react-router-dom";
import PonteRoma from "../assets/galleryfabrics/ponteRoma.jpg";
import PolyesterFleece from "../assets/galleryfabrics/micro_fleece.jpg";
import Bengaline from "../assets/hotfabrics/bengaline.jpg";

const hotCollections = [
  {
    id: 1,
    name: "Bengaline",
    description:
      "Crosswise ribbed textile with excellent stretch and recovery.",
    image: Bengaline,
  },
  {
    id: 2,
    name: "Ponte Roma/Scuba",
    description: "Double-knit fabric with excellent recovery and structure.",
    image: PonteRoma,
  },
  {
    id: 3,
    name: "Polyester Micro Fleece",
    description: "Soft, warm fleece with excellent insulation properties.",
    image: PolyesterFleece,
  },
];

const FabricGallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f9fafb] to-white py-2 px-6 lg:px-12">
      {/* Divider line */}
      <div className="bg-blue-600 w-24 h-1 mb-20 mx-auto rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-[42px] font-bold tracking-wide mb-6 text-gray-900">
            Latest Collections
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our top high-value fabrics that are trending now, carefully
            curated for quality, style, and durability.
          </p>
        </div>

        {/* Hot Collections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {hotCollections.map((fabric) => (
            <div
              key={fabric.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="h-72 overflow-hidden">
                <img
                  src={fabric.image}
                  alt={fabric.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">
                  {fabric.name}
                </h3>
                <p className="text-gray-600 text-justify leading-relaxed">
                  {fabric.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Browse All Collection Button */}
        <div className="text-center mt-10 mb-10">
          <Link to="/fabrics">
            <button className="px-12 py-5 bg-[#02226b] text-white font-medium text-lg rounded-xl shadow-md hover:bg-[#0b3ca8] transition-all duration-300 transform hover:-translate-y-1">
              Browse All Collection
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FabricGallery;
