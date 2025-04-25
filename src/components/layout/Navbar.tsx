
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">VulnGuard</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-primary transition-colors">
              Features
            </Link>
            <Link to="#about" className="text-gray-700 hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="#contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/auth">
              <Button>Get Started</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/features"
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              to="#about"
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              to="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link to="/auth" className="block px-3 py-2">
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
