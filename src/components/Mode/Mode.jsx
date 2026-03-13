import React from "react";
import "./Mode.css";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";

const Mode = ({ isDarkMode, setIsDarkMode, onThemeChange }) => {
  return (
    <button
      className={`mode-button`}
      onClick={() => {
        onThemeChange(!isDarkMode);
        setIsDarkMode();
      }}
      title="Toggle theme"
    >
      {isDarkMode ? <MdLightMode /> : <MdOutlineDarkMode />}
    </button>
  );
};

export default Mode;
