import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/image/logo.jpg";

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const location = useLocation(); // Get current path

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  const Allusers = useSelector((state) => state.app.users);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Active style utility
  const isActive = (path) =>
    location.pathname === path ? "text-black font-semibold underline" : "text-gray-900";

  return (
    <nav className="p-4 bg-[#c0c0c0] sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img className="h-10 w-10 rounded-full" src={logo} alt="Logo" />
          </Link>
          <span className="text-lg font-semibold hidden md:block">
            <img
              className="h-10 w-auto"
              src="https://img.icons8.com/?size=80&id=0hL1XXinNxFc&format=png"
              alt="News"
            />
          </span>
          <span className="ml-8 text-sm md:text-base text-gray-800">
            {currentDateTime.toLocaleString()}
          </span>
          <Link to="https://github.com/Rajan1851421" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </Link>
          <Link
            to="https://www.linkedin.com/in/rajan-prajapati-717337192/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            <i className="fa-brands fa-linkedin"></i>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-5">
          <Link to="/" className={`${isActive("/")}`}>Home</Link>
          <Link to="/editor" className={`${isActive("/editor")}`}>Editor</Link>
          <Link to="/project" className={`${isActive("/project")}`}>Project</Link>
          <Link to="/game" className={`${isActive("/game")}`}>Game</Link>
          <Link to="/calculator" className={`${isActive("/calculator")}`}>Calculator</Link>
          <Link to="/shopping" className={`${isActive("/shopping")}`}>Shopping</Link>
          <Link to="/register" className={`relative ${isActive("/register")}`}>
            Register
            <span className="absolute top-0 right-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-red-500 text-white">
              {Allusers.length}
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleDrawer}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Backdrop */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-40 ${
          isDrawerOpen ? "block" : "hidden"
        }`}
        onClick={closeDrawer}
      ></div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4">
          <button className="text-right text-xl font-bold w-full mb-4" onClick={closeDrawer}>
            ✖
          </button>

          {/* Mobile Links */}
          <Link to="/" onClick={closeDrawer} className={`block py-2 border-b ${isActive("/")}`}>
            Home
          </Link>
          <Link to="/editor" onClick={closeDrawer} className={`block py-2 border-b ${isActive("/editor")}`}>
            Editor
          </Link>
          <Link to="/game" onClick={closeDrawer} className={`block py-2 border-b ${isActive("/game")}`}>
            Game
          </Link>
          <Link to="/calculator" onClick={closeDrawer} className={`block py-2 border-b ${isActive("/calculator")}`}>
            Calculator
          </Link>
          <Link to="/project" onClick={closeDrawer} className={`block py-2 border-b ${isActive("/project")}`}>
            Project
          </Link>
          <Link to="/shopping" onClick={closeDrawer} className={`block py-2 border-b ${isActive("/shopping")}`}>
            Shopping
          </Link>
          <Link to="/register" onClick={closeDrawer} className={`block py-2 border-b ${isActive("/register")}`}>
            Register ({Allusers.length})
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default App;
