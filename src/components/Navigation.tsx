
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'For Recruiters', href: '/recruiters' },
    { name: 'Placement Process', href: '/process' },
    { name: 'Past Recruiters', href: '/past-recruiters' },
    { name: 'Placement Stats', href: '/stats' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-nsut-red">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">

          <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
            <img 
              src="/logo.png" 
              alt="NSUT Logo" 
              className="h-12 w-12"
            />
            <span className="ml-2 font-bold text-xl ">NSUT T&P</span>
          </Link>


          <div className="hidden lg:flex items-center space-x-2 lg:space-x-3 xl:space-x-4">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.href}
                className="text-gray-800 hover:text-nsut-red font-medium transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-nsut-red after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left px-2 py-1"
              >
                {item.name}
              </Link>
            ))}
          </div>


          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-nsut-red hover:text-nsut-darkRed transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>


        <div 
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col space-y-4 pt-4 pb-6 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-nsut-red font-medium transition-colors px-2 py-1 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
