import React, { useState } from 'react';
import Handler from '../Handler/Handler';
import Profile from '../Profile/Profile';
import Mode from '../Mode/Mode';
import Settings from '../Settings/Settings';
import Forecast from '../Forecast/Forecast';
import './Navbar.css';
import { pLink } from '../../services/extLinks';

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
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  };

  return (
    <div className="navbar-container" data-theme={isDarkMode ? 'dark' : 'light'}>
      <div className="navbar-header">
        <h1 className="navbar-title">Weather App</h1>
        <div className="navbar-controls">
          <Handler onDataFetch={handleWeatherData} loading={loading} setLoading={setLoading} setError={setError} />
          <Mode isDarkMode={isDarkMode} onThemeChange={handleThemeChange} />
          <Profile  url={pLink}/>
          <Settings />
        </div>
      </div>
      <Forecast weatherData={weatherData} loading={loading} error={error} />
    </div>
  );
};

export default Navbar;
