import React, { useState } from "react";
import LoginModal from "./LoginModal"; // Adjust the import path as necessary
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setShowMenu(false); // Close menu when login modal opens
  };

  return (
    <nav className="bg-white md:mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-4xl font-bold text-gray-800 ">
              <span style={{ color: "#8972EC" }}>ross</span>tech
            </span>
          </div>

          {/* Hamburger Menu Icon - Visible on Small Screens */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {showMenu ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menu Links - Hidden by Default, Visible on Small Screens */}
          <div className="hidden md:flex flex-grow items-center justify-center space-x-4">
            <Link
              to="/about"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              ABOUT US
            </Link>
            <Link
              to="/how-it-works"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              HOW IT WORKS ?
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              CONTACT US
            </Link>
          </div>

          {/* Login Button */}
          <div className="flex items-center">
            <button
              className="border-2 border-gray text-black font-bold py-2 px-4 rounded-3xl w-28"
              onClick={toggleLogin}
            >
              Log in
            </button>
          </div>
        </div>

        {/* Responsive Menu - Hidden by Default, Visible on Small Screens */}
        {showMenu && (
          <div className="md:hidden mt-2 flex flex-col space-y-2">
            <Link
              to="/about"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setShowMenu(false)}
            >
              ABOUT US
            </Link>
            <Link
              to="/how-it-works"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setShowMenu(false)}
            >
              HOW IT WORKS ?
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setShowMenu(false)}
            >
              CONTACT US
            </Link>
          </div>
        )}
      </div>

      {/* Login Modal */}
      <LoginModal show={showLogin} onClose={toggleLogin} />
    </nav>
  );
};

export default Navbar;
