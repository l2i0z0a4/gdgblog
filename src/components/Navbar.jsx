import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simule l'état de connexion

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-gray-800">
        GDG Blog
      </Link>

      {/* Navigation Links */}
      <div className="space-x-6">
        <Link to="/" className="text-gray-600 hover:text-blue-500">Home</Link>
        <Link to="/alumni" className="text-gray-600 hover:text-blue-500">Alumni</Link>
        <Link to="/blogs" className="text-gray-600 hover:text-blue-500">Blogs</Link>
        <Link to="/contact" className="text-gray-600 hover:text-blue-500">Contact</Link>
      </div>

      {/* Login / Profile */}
      <div>
        {isLoggedIn ? (
          <div className="relative">
            <FaUserCircle className="text-3xl text-gray-700 cursor-pointer" />
            {/* Dropdown menu */}
            <div className="absolute right-0 mt-2 bg-white border rounded shadow-md w-40">
              <Link to="/profile" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Profile</Link>
              <Link to="/favorites" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Favorites</Link>
              <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">Logout</button>
            </div>
          </div>
        ) : (
          <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
