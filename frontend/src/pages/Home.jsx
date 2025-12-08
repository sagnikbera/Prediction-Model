import React from "react";
import { Link } from "react-router-dom";
// Ensure this path is correct based on your folder structure
import homeBgImg from "../assets/homebg.jpg";

const Home = () => {
  // Common styles for the rectangular boxes
  const boxClasses = `
    flex flex-col justify-center items-center 
    w-full md:w-80 h-52 
    bg-white/90 backdrop-blur-md 
    rounded-2xl shadow-xl border-2 border-transparent 
    hover:border-green-500 hover:shadow-2xl hover:-translate-y-1 
    transition-all duration-300 ease-in-out 
    p-6 cursor-pointer group
  `;

  const titleClasses = `
    text-2xl font-bold text-green-800 mb-2 group-hover:text-green-600 transition-colors
  `;

  return (
    <div className="relative h-[85vh] w-full flex flex-col justify-center items-center overflow-hidden">
      {/* --- BACKGROUND LAYERS --- */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 scale-110 transition-transform duration-1000"
        style={{
          backgroundImage: `url(${homeBgImg})`,
          filter: "blur(8px)",
        }}
      />

      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 flex flex-col items-center w-full px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12 drop-shadow-lg text-center">
          Welcome to Agri-Assist
        </h1>

        {/* Grid Update: added 'place-items-center' 
           This forces the boxes to center themselves within their grid cells.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full place-items-center">
          {/* --- Box 1: Crop Recommendation --- */}
          <Link to="/crop-recommendation" className={boxClasses}>
            <h2 className={titleClasses}>Crop Recommendation</h2>
            <p className="text-gray-700 text-center font-medium">
              Get analysis based on your soil and climate data.
            </p>
          </Link>

          {/* --- Box 2: Predict Disease --- */}
          <Link to="/predict-disease" className={boxClasses}>
            <h2 className={titleClasses}>Predict Disease</h2>
            <p className="text-gray-700 text-center font-medium">
              Upload images to identify potential crop diseases.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
