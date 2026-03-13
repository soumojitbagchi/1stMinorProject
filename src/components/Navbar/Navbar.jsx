import React, { useState } from 'react';
import Handler from '../Handler/Handler';
import Profile from '../Profile/Profile';
import Mode from '../Mode/Mode';
import Settings from '../Settings/Settings';
import Forecast from '../Forecast/Forecast';
import './Navbar.css';
import { pLink } from '../../services/extLinks';
import { NavLink,Link } from 'react-router-dom';

const Navbar = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };
  const handleThemeChange = (isDark) => {
    setIsDarkMode(isDark);
    document.documentElement.setAttribute('data-theme',theme);
  };

  return (
    <div className={`navbar-container ${isDarkMode ? 'dark' : 'light'}`} data-theme={isDarkMode ? 'dark' : 'light'}>
      <div className="navbar-header">
        <h1 className="navbar-title">Weather App</h1>
        <div className="navbar-controls">
          
          <Handler onDataFetch={handleWeatherData} loading={loading} setLoading={setLoading} setError={setError} />
          <Mode isDarkMode={isDarkMode} setDarkMode={setIsDarkMode} onThemeChange={handleThemeChange} />
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            <Profile  url={pLink} weatherData={weatherData}/>
          </NavLink>
          <NavLink to="/settings" className={({ isActive }) => isActive ? 'active' : ''}>
            <Settings />
          </NavLink>
        </div>
      </div>
      <Forecast weatherData={weatherData} loading={loading} error={error} />
    </div>
  );
};

export default Navbar;
