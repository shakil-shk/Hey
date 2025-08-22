import React, { useState } from "react";
import ponteRoma from "../assets/galleryfabrics/ponteRoma.jpg";
import PolesterTricot from "../assets/galleryfabrics/PolesterTricot.jpg";
import microFleece from "../assets/galleryfabrics/micro_fleece.jpg";
import polySPANDEX from "../assets/galleryfabrics/polySPANDEX.jpg";
import PolyCREP from "../assets/galleryfabrics/PolyCREP.jpg";
import polyMesh from "../assets/galleryfabrics/polyMesh.jpg";
import Bengaline from "../assets/galleryfabrics/Bengaline.jpg";
import Twill from "../assets/galleryfabrics/Twill.jpg";
import SpandexTwill from "../assets/galleryfabrics/SpandexTwill.jpg";
import Viscos from "../assets/galleryfabrics/Viscos.jpg";
import MicrofiberPlain from "../assets/galleryfabrics/MicrofiberPlain-Twill.jpg";
import TaffetaTASLON from "../assets/galleryfabrics/TaffetaTASLON.jpg";
import SCPoly from "../assets/galleryfabrics/SCPoly.jpg";
import SCPFake from "../assets/galleryfabrics/SCPFake.jpg";
import SCViscos from "../assets/galleryfabrics/SCViscos.jpg";
import CPDenim from "../assets/galleryfabrics/CPDenim.jpg";

const PremiumFabricsSection = () => {
  const [activeCategory, setActiveCategory] = useState("knit");
  const [selectedImage, setSelectedImage] = useState(null);

  const fabricCategories = {
    knit: {
      title: "Knit Fabrics",
      items: [
        { id: 1, name: "PONTE ROMA/SCUBA", image: ponteRoma },
        { id: 2, name: "POLY, SPANDEX SINGLE JERSEY", image: polySPANDEX },
        { id: 3, name: "POLYESTER MICRO FLEECE", image: microFleece },
        { id: 4, name: "POLYESTER TRICOT", image: PolesterTricot },
        { id: 5, name: "POLYESTER CREP JERSEY", image: PolyCREP },
        { id: 6, name: "POLYESTER MESH", image: polyMesh },
        {
          id: 7,
          name: "VISCOS / POLYESTER JERSEY",
          image: "/api/placeholder/300/300",
        },
        {
          id: 8,
          name: "SOFT SHELL/SOFT SHELL WITH BONDED FLEECE",
          image: "/api/placeholder/300/300",
        },
        {
          id: 9,
          name: "100% POLYESTER SHERPA/ FAKE FUR",
          image: "/api/placeholder/300/300",
        },
      ],
    },
    woven: {
      title: "Woven Fabrics",
      items: [
        { id: 1, name: "BENGALINE", image: Bengaline },
        { id: 2, name: "TWILL/CANVAS/OXFORD/RIBSTOP", image: Twill },
        {
          id: 3,
          name: "98%CTN 2%SPANDEX ST TWILL/CANVAS/CORDUROY",
          image: SpandexTwill,
        },
        { id: 4, name: "100% VISCOS SOLID & AOP", image: Viscos },
        {
          id: 5,
          name: "100%POLY MICROFIBRE PLAIN WEAVE/TWILL WEAVE",
          image: MicrofiberPlain,
        },
        { id: 6, name: "TAFFETA/TASLON", image: TaffetaTASLON },
        {
          id: 7,
          name: "COTTON, POLYESTER, SPANDEX POPLIN",
          image: "/api/placeholder/300/300",
        },
        {
          id: 8,
          name: "COTTON, NYLON POPLIN",
          image: "/api/placeholder/300/300",
        },
        {
          id: 9,
          name: "COTTON, SPANDEX POPLIN",
          image: "/api/placeholder/300/300",
        },
      ],
    },
    hot: {
      title: "Hot Products",
      items: [
        { id: 1, name: "COTTON, POLY, SPANDEX DENIM", image: SCPoly }, // Fixed reference
        {
          id: 2,
          name: "COTTON, POLY, SPANDEX FACK KNIT DENIM",
          image: SCPFake,
        },
        {
          id: 3,
          name: "COTTON, POLY, VISCOSE ,SPANDEX DENIM",
          image: SCViscos,
        },
        { id: 4, name: "COTTON, POLY DENIM", image: CPDenim },
      ],
    },
  };

  const currentCategory = fabricCategories[activeCategory];

  // Always use the first 6 images regardless of how many products there are
  const imageItems = currentCategory.items.slice(0, 6);

  // Function to handle image click
  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto mt-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            FABRICS COLLECTION
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our exquisite range of high-quality fabrics, meticulously
            curated for fashion professionals and enthusiasts.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium rounded-l-lg border transition-all duration-300 ${
                activeCategory === "knit"
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => setActiveCategory("knit")}
            >
              Knit Fabrics
            </button>
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium border-t border-b transition-all duration-300 ${
                activeCategory === "woven"
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => setActiveCategory("woven")}
            >
              Woven Fabrics
            </button>
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium rounded-r-lg border transition-all duration-300 ${
                activeCategory === "hot"
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => setActiveCategory("hot")}
            >
              Hot Products
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">
              {currentCategory.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Grid - Always show exactly 6 images */}
            <div className="grid grid-cols-2 gap-4 p-8">
              {imageItems.map((item) => (
                <div
                  key={item.id}
                  className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer"
                  onClick={() => handleImageClick(item)}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-600 opacity-10 z-10"></div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <span className="text-white font-medium text-sm">
                      {item.id.toString().padStart(2, "0")}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Product Names - No scrolling needed */}
            <div className="bg-gray-50 p-8">
              <div className="space-y-6">
                {currentCategory.items.map((item) => (
                  <div key={item.id} className="flex items-start">
                    <span className="text-gray-400 font-medium text-lg mr-4 mt-1">
                      {item.id.toString().padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-medium text-gray-800">
                      {item.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Premium quality fabrics for discerning fashion professionals</p>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">
                {selectedImage.name}
              </h3>
              <button
                className="text-gray-500 hover:text-gray-700 text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
            <div className="p-4 flex justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.name}
                className="max-h-[70vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiumFabricsSection;