import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close menu on link click
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="w-full bg-gray-800 shadow-md py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <Link to="/">
      <div className="flex items-center flex-shrink-0">
        <img 
          src="/refactora_logo.png" 
          alt="Refactora Logo" 
          className="h-10 w-auto md:w-auto flex-shrink-0" 
        />
      </div>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="text-white md:hidden text-2xl"
        onClick={() => setMenuOpen(true)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-800/95 text-white flex flex-col items-center justify-center space-y-6 py-6 shadow-lg md:hidden z-50">
          {/* Close Button */}
          <button
            className="absolute top-4 right-6 text-3xl text-gray-400 hover:text-white"
            onClick={closeMenu}
          >
            ❌
          </button>

          <Link 
            to="/" 
            className="text-xl relative group" 
            onClick={closeMenu}
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/about" 
            className="text-xl relative group" 
            onClick={closeMenu}
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:flex md:space-x-8">
        <Link 
          to="/" 
          className="text-lg text-gray-300 hover:text-white relative group"
        >
          Home
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link 
          to="/about" 
          className="text-lg text-gray-300 hover:text-white relative group"
        >
          About
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
