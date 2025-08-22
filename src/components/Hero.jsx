import React from "react";
import HeroFabric from "../assets/pile-textiles-background.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroFabric})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-35"></div>

      {/* Content */}
      <div className="relative text-center px-4 z-10 text-white">
        <h1 className="text-4xl md:text-5xl font-light mb-4">
          Welcome to <span className="font-bold">FABTEX</span>
        </h1>

        <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-wide">
          GALLERY
        </h2>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Premium Fabric Sourcing Solutions Across Bangladesh
        </p>

        <Link to="/fabrics">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md text-lg transition duration-300">
            Explore Our Gallery
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
