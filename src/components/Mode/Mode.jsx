import React from 'react';
import './Mode.css';
import { MdOutlineDarkMode, MdLightMode } from 'react-icons/md';

const Mode = ({ isDarkMode, onThemeChange }) => {
  return (
    <button
      className={`mode-button`}
      onClick={() => onThemeChange(!isDarkMode)}
      title="Toggle theme"
    >
      <body className={` ${isDarkMode ? 'dark' : 'light'}`}>
        
      </body>
      {isDarkMode ? <MdLightMode /> : <MdOutlineDarkMode />}
    </button>
  );
};

export default Mode;
