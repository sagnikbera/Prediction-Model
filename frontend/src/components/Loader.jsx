import React from 'react';
import { WiDayRainWind } from "react-icons/wi";
import { GiGrainBundle } from "react-icons/gi";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm">
      <div className="relative flex flex-col items-center gap-2">
        
        <div className="text-teal-600 animate-bounce" style={{ animationDuration: '2s' }}>
          <WiDayRainWind size={80} />
        </div>

        <div className="text-amber-600 animate-pulse -mt-2.5">
          <GiGrainBundle size={64} />
        </div>

        <p className="mt-4 text-sm font-medium tracking-widest text-gray-500 uppercase animate-pulse">
          Harvesting Data...
        </p>
      </div>
    </div>
  );
};

export default Loader;