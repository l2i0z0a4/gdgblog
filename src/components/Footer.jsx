import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer id="contact" className="bg-gray-900 text-white py-8 w-full mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {/* Logo et description */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="GDG Algiers" className="w-40 h-auto mb-3" />
          <p className="text-gray-400 text-sm">
            Our community consists of passionate developers and motivated young students. Now, we are one of the most active GDGs in the MENA region.
          </p>
          {/* Réseaux sociaux */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition"><FaTwitter size={22} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><FaFacebook size={22} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><FaInstagram size={22} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><FaLinkedin size={22} /></a>
          </div>
        </div>

        {/* Liens de navigation */}
        <div className="flex justify-center md:justify-end space-x-6 w-full md:w-auto mt-4 md:mt-0">
          <Link to="/blogs" className="text-gray-400 hover:text-white transition py-1">Blogs</Link>
          <Link to="/alumni" className="text-gray-400 hover:text-white transition py-1">Alumni</Link>
          <Link to="/about" className="text-gray-400 hover:text-white transition py-1">About Us</Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8">
        Copyright © 2024 GDG Algiers. All Rights Reserved.
      </div>

      {/* Bouton retour en haut */}
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
