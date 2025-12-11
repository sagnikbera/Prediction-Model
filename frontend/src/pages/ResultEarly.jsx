import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { PageContext } from "../context/PageContext";
import {
  FaArrowLeft,
  FaShieldAlt,
  FaExclamationTriangle,
  FaBiohazard,
  FaThermometerHalf,
  FaTint,
  FaFlask,
} from "react-icons/fa";
import { GiFertilizerBag } from "react-icons/gi";

const ResultEarly = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { lang } = useContext(PageContext);

  // MOCK DATA STATE
  const [result, setResult] = useState({
    loading: true,
    riskScore: 0, // 1 = Low (Safe), 2 = Moderate (Caution), 3 = High (Danger)
    soilData: {},
    description: "",
  });

  // Simulate Analysis
  useEffect(() => {
    if (!state?.position) {
      navigate("/early-disease-prediction"); // Redirect if no location
      return;
    }

    // Simulate API Calculation
    const timer = setTimeout(() => {
      setResult({
        loading: false,
        riskScore: 2, // <--- CHANGE THIS (1, 2, or 3) TO TEST DIFFERENT RESULTS
        soilData: {
          nitrogen: "Low",
          phosphorus: "Adequate",
          potassium: "High",
          ph: "5.5 (Acidic)",
          moisture: "82%",
          temp: "28°C",
        },
        description:
          "Soil moisture levels are higher than optimal, and high acidity creates a favorable environment for Fungal Blight. Nitrogen deficiency may weaken crop immunity.",
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [state, navigate]);

  const content = {
    ENG: {
      title: "Soil Analysis Report",
      analyzing: "Analyzing Soil & Climate Data...",
      back: "Check Another Location",
      riskHeader: "Disease Risk Assessment",
      levels: ["Low Risk", "Moderate Risk", "High Risk"],
      descTitle: "Risk Factors",
      soilTitle: "Soil Parameters",
    },
    BENG: {
      title: "মাটি বিশ্লেষণের রিপোর্ট",
      analyzing: "মাটি ও আবহাওয়ার তথ্য বিশ্লেষণ করা হচ্ছে...",
      back: "অন্য অবস্থান পরীক্ষা করুন",
      riskHeader: "রোগের ঝুঁকি মূল্যায়ন",
      levels: ["কম ঝুঁকি", "মাঝারি ঝুঁকি", "উচ্চ ঝুঁকি"],
      descTitle: "ঝুঁকির কারণসমূহ",
      soilTitle: "মাটির পরামিতি",
    },
    HINDI: {
      title: "मृदा विश्लेषण रिपोर्ट",
      analyzing: "मिट्टी और जलवायु डेटा का विश्लेषण...",
      back: "दूसरे स्थान की जांच करें",
      riskHeader: "रोग जोखिम मूल्यांकन",
      levels: ["कम जोखिम", "मध्यम जोखिम", "उच्च जोखिम"],
      descTitle: "जोखिम कारक",
      soilTitle: "मिट्टी के पैरामीटर",
    },
  };

  const text = content[lang] || content.ENG;

  // --- RENDER STATUS BAR (Risk Logic) ---
  const renderRiskMeter = () => {
    const { riskScore } = result;
    const baseClass =
      "h-5 rounded-full transition-all duration-500 flex-1 border border-white/20";

    return (
      <div className="w-full mt-6 bg-white p-4 rounded-xl shadow-inner">
        <div className="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
          <span className={riskScore === 1 ? "text-green-600 scale-110" : ""}>
            {text.levels[0]}
          </span>
          <span className={riskScore === 2 ? "text-yellow-600 scale-110" : ""}>
            {text.levels[1]}
          </span>
          <span className={riskScore === 3 ? "text-red-600 scale-110" : ""}>
            {text.levels[2]}
          </span>
        </div>

        <div className="flex gap-1">
          {/* Level 1: Low Risk (Green) */}
          <div
            className={`${baseClass} ${riskScore === 1 ? "bg-green-500 shadow-green-glow scale-105" : "bg-green-200 opacity-30"}`}
          ></div>
          {/* Level 2: Mod Risk (Yellow) */}
          <div
            className={`${baseClass} ${riskScore === 2 ? "bg-yellow-400 shadow-yellow-glow scale-105" : "bg-yellow-200 opacity-30"}`}
          ></div>
          {/* Level 3: High Risk (Red) */}
          <div
            className={`${baseClass} ${riskScore === 3 ? "bg-red-500 shadow-red-glow scale-105" : "bg-red-200 opacity-30"}`}
          ></div>
        </div>
      </div>
    );
  };

  // Helper for Data Cards
  const DataCard = ({ icon, label, val }) => (
    <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="text-green-700 text-xl">{icon}</div>
      <div>
        <div className="text-xs text-gray-500 font-bold uppercase">{label}</div>
        <div className="text-gray-800 font-semibold">{val}</div>
      </div>
    </div>
  );

  if (result.loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-green-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-600 mb-4"></div>
        <h2 className="text-xl font-semibold text-green-800 animate-pulse">
          {text.analyzing}
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link
          to="/early-disease-prediction"
          className="inline-flex items-center text-gray-600 hover:text-green-700 font-semibold mb-6 transition-colors"
        >
          <FaArrowLeft className="mr-2" /> {text.back}
        </Link>

        <h1 className="text-4xl font-bold text-green-900 mb-8 text-center">
          {text.title}
        </h1>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* --- TOP: RISK SCORE SECTION --- */}
          <div className="bg-green-50 p-8 border-b border-green-100">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3 mb-2">
                {result.riskScore === 1 && (
                  <FaShieldAlt className="text-green-600 text-5xl" />
                )}
                {result.riskScore === 2 && (
                  <FaExclamationTriangle className="text-yellow-500 text-5xl" />
                )}
                {result.riskScore === 3 && (
                  <FaBiohazard className="text-red-600 text-5xl" />
                )}

                <h2 className="text-3xl font-extrabold text-gray-800">
                  {text.levels[result.riskScore - 1]}
                </h2>
              </div>
              <p className="text-gray-500 font-semibold">{text.riskHeader}</p>

              {renderRiskMeter()}
            </div>
          </div>

          {/* --- MIDDLE: DESCRIPTION & MAP COORDS --- */}
          <div className="p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-green-600 pl-3">
              {text.descTitle}
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              {result.description}
            </p>

            {/* --- BOTTOM: SOIL PARAMETERS --- */}
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">
              {text.soilTitle}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <DataCard
                icon={<FaFlask />}
                label="pH Level"
                val={result.soilData.ph}
              />
              <DataCard
                icon={<FaTint />}
                label="Moisture"
                val={result.soilData.moisture}
              />
              <DataCard
                icon={<FaThermometerHalf />}
                label="Temp"
                val={result.soilData.temp}
              />
              <DataCard
                icon={<GiFertilizerBag />}
                label="Nitrogen"
                val={result.soilData.nitrogen}
              />
              <DataCard
                icon={<GiFertilizerBag />}
                label="Phosphorus"
                val={result.soilData.phosphorus}
              />
              <DataCard
                icon={<GiFertilizerBag />}
                label="Potassium"
                val={result.soilData.potassium}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultEarly;
