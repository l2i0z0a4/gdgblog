import { motion } from "framer-motion";
import { useState } from "react";
import gdgLogo from "../assets/logo.png"; // Example GDG logo path
import smallIcon from "../assets/gdg.png"; // Example decoration image path

const Decoration = ({ style }) => (
  <motion.img
    src={smallIcon}
    alt="Decorative Icon"
    className="absolute w-20 h-20"
    style={style}
    animate={{ y: [0, 20, 0], x: [0, 10, -10, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
  />
);

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-white overflow-hidden">
      {/* GDG Logo */}
      <img
        src={gdgLogo}
        alt="GDG Logo"
        className="absolute top-5 left-5 w-32"
      />

      {/* Decorations across the page outside the login area */}
      {/* Positioning them randomly across the screen */}
      <Decoration style={{ top: "2%", left: "10%" }} />
      <Decoration style={{ top: "3%", right: "15%" }} />
      <Decoration style={{ top: "10%", left: "20%" }} />
      <Decoration style={{ top: "25%", right: "30%" }} />
      <Decoration style={{ bottom: "10%", left: "5%" }} />
      <Decoration style={{ bottom: "15%", right: "5%" }} />
      <Decoration style={{ top: "40%", left: "25%" }} />
      <Decoration style={{ bottom: "30%", right: "25%" }} />
      <Decoration style={{ top: "50%", left: "10%" }} />
      <Decoration style={{ bottom: "5%", left: "40%" }} />
      <Decoration style={{ top: "60%", right: "10%" }} />
      

      {/* Login Card */}
      <div className="p-8 bg-white shadow-lg rounded-xl w-[400px] z-10 relative">
        <h1 className="text-2xl font-bold text-center">WELCOME BACK</h1>
        <p className="text-center text-gray-500 mb-4">Welcome back! Please enter your details.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-sm text-blue-600">Forgot password</a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
          >
            Log in
          </button>
          <button
            type="button"
            className="w-full mt-4 bg-white text-black border border-gray-300 p-3 rounded-lg flex justify-center items-center hover:bg-gray-100"
          >
            <img
              src="https://img.icons8.com/color/24/000000/google-logo.png"
              alt="Google logo"
              className="mr-2"
            />
            Log in with Google
          </button>
        </form>
      </div>
    </div>
  );
}
