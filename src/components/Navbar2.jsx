import React, { useState } from "react";
import { FaUserCircle, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import homme from "../assets/homme.png";


const Navbar2 = ({ isLoggedIn = true }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 py-3 flex items-center justify-between z-50">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img src={logo} alt="GDG Blog" className="h-10" />
      </a>

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
          <a href="/homealumni" className="text-gray-600 hover:text-blue-500">Home</a>
          <a href="/alumni" className="text-gray-600 hover:text-blue-500">Alumni</a>
          <a href="/blogs" className="text-gray-600 hover:text-blue-500">Blogs</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-500">Contact</a>
        </div>
      )}

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <FaSearch 
          className="text-gray-600 cursor-pointer" 
          onClick={() => setIsSearchOpen(true)}
        />

        {isLoggedIn ? (
          <div className="relative group">
             <img src={homme} alt="Profile" className="w-10 h-10 rounded-full cursor-pointer" />   
            <div className="absolute right-0 mt-2 bg-white border rounded shadow-md w-40 opacity-0 group-hover:opacity-100 transition-opacity">
              <a href="/favorites" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">My Blogs</a>
              <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 ">Logout</button>
            </div>
          </div>
        ) : (
          <a href="/login" className="bg-blue-500 hover:text-black text-white px-4 py-2 rounded-md">Login</a>
        )}

        <FaBars 
          className="md:hidden text-2xl cursor-pointer" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden">
          <a href="/" className="text-gray-600 hover:text-blue-500">Home</a>
          <a href="/alumni" className="text-gray-600 hover:text-blue-500">Alumni</a>
          <a href="/blogs" className="text-gray-600 hover:text-blue-500">Blogs</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-500">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;