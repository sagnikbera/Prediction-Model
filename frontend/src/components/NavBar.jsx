import React, { useState } from "react";
import { Link } from "react-router-dom"; // 1. Import Link

const NavBar = () => {
  const [language, setLanguage] = useState("ENG");

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-yellow-300 shadow-md text-lg">
      {/* Left Side: Logo */}
      <div className="text-4xl font-bold text-green-800 cursor-pointer">
        Agri-Assist
      </div>

      {/* Right Side: Menu Items */}
      <div className="flex items-center gap-6">
        {/* 2. Updated Home Link */}
        <Link
          to="/"
          className="text-yellow-800 hover:text-yellow-600 transition-colors font-bold"
        >
          Home
        </Link>

        {/* 3. Updated Feature Link */}
        <Link
          to="/feature"
          className="text-yellow-800 hover:text-yellow-600 transition-colors font-bold"
        >
          Feature
        </Link>

        {/* Language Dropdown */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="px-3 py-1 border border-yellow-400 rounded-md text-sm bg-yellow-100 text-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 font-semibold"
        >
          <option value="ENG" className="font-semibold">
            ENG
          </option>
          <option value="BENG" className="font-semibold">
            BENG
          </option>
        </select>

        {/* Log In  */}
        {/*
        <Link
        to="/"
        className="py-1 px-6 text-white  bg-yellow-800 rounded-full font-bold"
        >
            Log In
        </Link> */}
      </div>
    </nav>
  );
};

export default NavBar;
