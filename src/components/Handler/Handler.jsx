import React, { useState } from 'react';
import { fetchWeatherData } from '../../services/weatherApi';
import './Handler.css';

const Handler = ({ onDataFetch, loading, setLoading, setError }) => {
  const [city, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeatherData(city);
      console.log('Weather data:', data);
      onDataFetch(data);
      setCity('');
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="handler-form">
      <input
        id="input"
        className="handler-input"
        type="text"
        placeholder="Enter location"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        disabled={loading}
      />
      <button 
        type="submit" 
        className="handler-button"
        disabled={loading}
      >
        {loading ? 'Searching...' : 'Submit'}
      </button>
    </form>
  );
};

export default Handler;
