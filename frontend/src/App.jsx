import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PredictDisease from "./pages/PredictDisease";
import PdRice from "./pages/PdRice";
import Result from "./pages/Result";
import PdPotato from "./pages/PdPotato";
import PdWheat from "./pages/PdWheat";
import EarlyRiskCheck from "./pages/EarlyRiskCheck";
import ResultEarly from "./pages/ResultEarly";
import CropRecommendation from "./pages/CropRecommendation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/predict-disease" element={<PredictDisease />}></Route>
          <Route path="/predict-disease/rice" element={<PdRice />}></Route>
          <Route path="/predict-disease/potato" element={<PdPotato />}></Route>
          <Route path="/predict-disease/wheat" element={<PdWheat/>}></Route>
          <Route path="/early-disease-prediction" element={<EarlyRiskCheck/>}></Route>
          <Route path="/result-early" element={<ResultEarly />} />
          <Route path="/crop-recommendation" element={<CropRecommendation />} />
          <Route path="/result" element={<Result/>}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
