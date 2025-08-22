import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import Logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll handler
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // scrolling down
      setIsVisible(false);
    } else {
      // scrolling up
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-white shadow-md fixed w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <img
                className="h-12 rounded-[7px] w-auto mr-2"
                src={Logo}
                alt="FABTEX Logo"
              />
              <span className="text-[23px] font-extrabold text-[#006BB9] mb-[3px]">
                FABTEX GALLERY
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/home"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-[17px] font-medium transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-[17px] font-medium transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/fabrics"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-[17px] font-medium transition duration-300"
            >
              Fabrics
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-[17px] font-medium transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              About
            </Link>
            <Link
              to="/fabrics"
              className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Fabrics
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
