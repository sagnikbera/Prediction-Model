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
          <Route path="/result" element={<Result/>}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
