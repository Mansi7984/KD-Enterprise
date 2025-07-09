import React, { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-sm">
          {/* Left side */}
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <a href="tel:+918487006000" className="hover:underline">
                +91 8487006000
              </a>
            </div>

            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kdenterprise1108@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                kdenterprise1108@gmail.com
              </a>
            </div>

            <Link
              to="/contact#map-location"
              className="flex items-center space-x-1 hover:underline cursor-pointer"
            >
              <MapPin className="w-4 h-4" />
              <span>Ahmedabad & Gandhinagar</span>
            </Link>
          </div>

          {/* Right side - Action buttons */}
          <div className="flex items-center space-x-3">
            <a
              href="tel:+918487006000"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/918487006000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 sm:px-6 md:px-8 py-1">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img
              src="images/logo.png"
              className="w-40 sm:w-56 h-auto object-contain"
              alt="KD-Enterprise RO"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="nav hidden md:flex items-center space-x-8 ">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors transform transition duration-500 hover:scale-101"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors transform transition duration-500 hover:scale-101"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-blue-600 transition-colors transform transition duration-500 hover:scale-101"
            >
              Services
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-blue-600 transition-colors transform transition duration-500 hover:scale-101"
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors transform transition duration-500 hover:scale-101"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4 text-center">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Products
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
