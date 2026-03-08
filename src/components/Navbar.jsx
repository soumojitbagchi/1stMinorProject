import React from "react";
import Handler from "../jsx/Handeler.jsx";
import Profile from "../buttons/profile";
import Mode from "../buttons/Mode";
import Settings from "../buttons/Settings";
import Forecast from "./Forecast";
const navbar = () => {
  return (
    <div className="h-full w-full">
      <div className="bg-amber-500 flex flex-row relative gap-12">
        <h1>Weather App</h1>
        <Handler />
        <Mode />
        <Profile />
        <Settings />
      </div>
    <Forecast />
    </div>
  );
};

export default navbar;
