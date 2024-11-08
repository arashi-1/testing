import React, { useState } from "react";

const Header = () => {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-orange-500 flex items-center justify-between py-3 px-6 md:px-10">
      <h1 className="text-xl text-white">चाणक्य नीति</h1>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-6">
        <h1 className="text-white">Home</h1>
        <h1 className="text-white">About</h1>
        <h1 className="text-white">More</h1>
        <h1 className="text-white">Login</h1>
      </div>

      {/* Mobile Hamburger Menu */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Mobile Menu - Toggle visibility on click */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 left-0 bg-orange-500 flex flex-col items-center gap-6 py-4 md:hidden">
          <h1 className="text-white">Home</h1>
          <h1 className="text-white">About</h1>
          <h1 className="text-white">More</h1>
          <h1 className="text-white">Login</h1>
        </div>
      )}
    </nav>
  );
};

export default Header;
