import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Background = () => {
  const location = useLocation();
  const [calculatedBackground, setCalculatedBackground] = useState("h-[464px]");

  const calculateBackground = () => {
    const currentLocation = location.pathname.toLocaleLowerCase();
    if (currentLocation === "/") setCalculatedBackground("h-[464px]");
    if (currentLocation === "/login") setCalculatedBackground("h-[362px]");
    if (currentLocation === "/showjobs") setCalculatedBackground("h-[210px]");
  };
  useEffect(() => {
    calculateBackground();
  }, [location]);

  return (
    <div
      className={`absolute top-0 left-0 w-full ${calculatedBackground} -z-10`}
      style={{
        background: `transparent linear-gradient(248deg, #303F60 0%, #1A253C 100%) 0% 0% no-repeat padding-box`,
      }}
    ></div>
  );
};

export default Background;
