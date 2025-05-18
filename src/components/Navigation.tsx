
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-xl sm:text-2xl font-bold text-red-600">NSUT</div>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-600" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 hover:text-red-600 font-medium transition-colors">Home</Link>
          <Link to="/about" className="text-gray-800 hover:text-red-600 font-medium transition-colors">About</Link>
          <Link to="/courses" className="text-gray-800 hover:text-red-600 font-medium transition-colors">Courses</Link>
          <Link to="/placement" className="text-gray-800 hover:text-red-600 font-medium transition-colors">Placement</Link>
          <Link to="/contact" className="text-gray-800 hover:text-red-600 font-medium transition-colors">Contact</Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4 border-t border-gray-100 flex flex-col space-y-4">
            <Link to="/" className="text-gray-800 hover:text-red-600 font-medium px-4 py-2 rounded-md hover:bg-gray-50">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-red-600 font-medium px-4 py-2 rounded-md hover:bg-gray-50">About</Link>
            <Link to="/courses" className="text-gray-800 hover:text-red-600 font-medium px-4 py-2 rounded-md hover:bg-gray-50">Courses</Link>
            <Link to="/placement" className="text-gray-800 hover:text-red-600 font-medium px-4 py-2 rounded-md hover:bg-gray-50">Placement</Link>
            <Link to="/contact" className="text-gray-800 hover:text-red-600 font-medium px-4 py-2 rounded-md hover:bg-gray-50">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
