import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Import all fabric images
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
import SCpoly from "../assets/galleryfabrics/SCpoly.jpg";
import SCPFake from "../assets/galleryfabrics/SCPFake.jpg";
import SCViscos from "../assets/galleryfabrics/SCViscos.jpg";
import CPDenim from "../assets/galleryfabrics/CPDenim.jpg";

// Import other images
import Logo from "../assets/logo.jpg";
import officepic from "../assets/officepic.jpg";

const Footer = () => {
  // Array of fabric images with names
  const fabricImages = [
    { src: ponteRoma, name: "Ponte Roma" },
    { src: PolesterTricot, name: "Polyster Tricot" },
    { src: microFleece, name: "Micro Fleece" },
    { src: polySPANDEX, name: "Poly Spandex" },
    { src: PolyCREP, name: "Poly Crepe" },
    { src: polyMesh, name: "Poly Mesh" },
    { src: Bengaline, name: "Bengaline" },
    { src: Twill, name: "Twill" },
    { src: SpandexTwill, name: "Spandex Twill" },
    { src: Viscos, name: "Viscos" },
    { src: MicrofiberPlain, name: "Microfiber Plain" },
    { src: TaffetaTASLON, name: "Taffeta Taslon" },
    { src: SCpoly, name: "SC Poly" }, // Fixed reference
    { src: SCPFake, name: "SCP Fake" },
    { src: SCViscos, name: "SC Viscos" },
    { src: CPDenim, name: "CP Denim" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div>
            <div className="flex items-center mb-4">
              {/* Logo */}
              <img
                src={Logo}
                alt="FABTEX Logo"
                className="h-10 w-auto mr-3 rounded"
              />
              {/* Company Name */}
              <h2 className="text-2xl font-extrabold text-[#006BB9]">
                FABTEX GALLERY
              </h2>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Your trusted partner for premium fabric sourcing from China and
              Vietnam. We deliver quality fabrics to garment factories and
              buying houses across Bangladesh.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-7">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-400 transition-colors"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-800 transition-colors"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href="https://wa.me/8801712608500"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-green-500 transition-colors"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          <div className="flex flex-col h-full">
            {/* Office Address with Premium Background */}
            <a
              href="https://www.google.com/maps/place/Sector-7,+Road-7,+House-7,+Uttara,+Dhaka-1230"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div
                className="relative rounded-xl overflow-hidden shadow-lg mb-4 flex-1 cursor-pointer"
                style={{
                  backgroundImage: `url(${officepic})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative p-6 flex flex-col justify-center h-full">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Office Address
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Sector-07, Road-07 <br /> House-07, Flat-5A (Lift 4)
                    <br />
                    Uttara, Dhaka-1230.
                  </p>
                </div>
              </div>
            </a>

            {/* Contact Details */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact Details</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                📧{" "}
                <a
                  href="mailto:faysal@fabtexgallery.com"
                  className="hover:text-white"
                >
                  faysal@fabtexgallery.com
                </a>
                <br />
                📞{" "}
                <a href="tel:+8801712608500" className="hover:text-white">
                  +8801712608500
                </a>
                <br />
                🌐{" "}
                <a
                  href="http://www.fabtexgallery.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  www.fabtexgallery.com
                </a>
              </p>
            </div>
          </div>

          {/* Product Showcase section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Fabric Showcase</h3>
            <div className="grid grid-cols-4 gap-2">
              {fabricImages.slice(0, 8).map((fabric, index) => (
                <div
                  key={index}
                  className="bg-gray-800 h-20 rounded-md overflow-hidden relative group"
                >
                  <img
                    src={fabric.src}
                    alt={fabric.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs text-center px-1">
                      {fabric.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 text-center">
              <Link
                to="/fabrics"
                className="text-xs text-gray-400 hover:text-white transition-colors inline-flex items-center"
              >
                View All Fabrics <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} FABTEX GALLERY. All rights reserved. |
            Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;