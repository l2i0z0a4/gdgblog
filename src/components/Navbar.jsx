import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour gérer le clic sur un lien
  const handleLinkClick = (event, sectionId) => {
    event.preventDefault(); // Empêcher le rechargement de la page
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Défilement fluide
    }
    setIsMenuOpen(false); // Fermer le menu mobile après le clic
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 py-3 flex items-center justify-between z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="GDG Blog" className="h-10" />
      </Link>

      {/* Search Bar */}
      {isSearchOpen ? (
        <div className="flex-grow flex items-center bg-gray-100 rounded-md px-4 py-2">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-transparent outline-none"
          />
          <FaTimes 
            className="text-gray-600 cursor-pointer ml-3" 
            onClick={() => setIsSearchOpen(false)}
          />
        </div>
      ) : (
        <div className="hidden md:flex space-x-6">
          <a 
            href="#home" 
            className="text-gray-600 hover:text-blue-500" 
            onClick={(e) => handleLinkClick(e, "home")}
          >
            Home
          </a>
          <a 
            href="#alumni" 
            className="text-gray-600 hover:text-blue-500" 
            onClick={(e) => handleLinkClick(e, "alumni")}
          >
            Alumni
          </a>
          <a 
            href="#blogs" 
            className="text-gray-600 hover:text-blue-500" 
            onClick={(e) => handleLinkClick(e, "blogs")}
          >
            Blogs
          </a>
          <a 
            href="#contact" 
            className="text-gray-600 hover:text-blue-500" 
            onClick={(e) => handleLinkClick(e, "contact")}
          >
            Contact
          </a>
        </div>
      )}

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <FaSearch 
          className="text-gray-600 cursor-pointer" 
          onClick={() => setIsSearchOpen(true)}
        />

        {isLoggedIn ? (
          <div className="relative">
            <FaUserCircle className="text-3xl text-gray-700 cursor-pointer" />
            <div className="absolute right-0 mt-2 bg-white border rounded shadow-md w-40">
              <Link to="/profile" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Profile</Link>
              <Link to="/favorites" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Favorites</Link>
              <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">Logout</button>
            </div>
          </div>
        ) : (
          <Link to="/login" className="bg-blue-500  hover:text-black text-white px-4 py-2 rounded-md">Login</Link>
        )}

        <FaBars 
          className="md:hidden text-2xl cursor-pointer" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden">
          <a 
            href="#home" 
            className="text-gray-600 hover:text-blue-500" 
            onClick={(e) => handleLinkClick(e, "home")}
          >
            Home
          </a>
          <a 
            href="#alumni" 
            className="text-gray-600 hover:text-blue-500" 
            onClick={(e) => handleLinkClick(e, "alumni")}
          >
            Alumni
          </a>
          <a 
            href="#blogs" 
            className="text-gray-600 hover:text-blue-500" 
            onClick={(e) => handleLinkClick(e, "blogs")}
          >
            Blogs
          </a>
          <a 
            href="#contact" 
            className="text-gray-600 hover:text-blue-500" 
            onClick={(e) => handleLinkClick(e, "contact")}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;