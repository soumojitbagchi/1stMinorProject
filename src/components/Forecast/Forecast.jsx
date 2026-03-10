import React from "react";
import "./Forecast.css";

const Forecast = ({ weatherData, loading, error }) => {
  return (
    <div className="forecast-container">
      {loading ? (
        <div className="forecast-loading">
          <p className="loading-text">Loading forecast...</p>
        </div>
      ) : error ? (
        <p className="forecast-error">❌ {error}</p>
      ) : weatherData ? (
        <div className="forecast-content">
          <h2 className="forecast-title">
            📍 {weatherData.name}, {weatherData.sys?.country}
          </h2>
          <div className="weather-info">
            <p>
              <strong>Temperature:</strong> {weatherData.main?.temp}°C
            </p>
            <p>
              <strong>Feels Like:</strong> {weatherData.main?.feels_like}°C
            </p>
            <p>
              <strong>Humidity:</strong> {weatherData.main?.humidity}%
            </p>
            <p>
              <strong>Pressure:</strong> {weatherData.main?.pressure} hPa
            </p>
            <p>
              <strong>Wind Speed:</strong> {weatherData.wind?.speed} m/s
            </p>
            <p>
              <strong>Condition:</strong>{" "}
              {weatherData.weather?.[0]?.description}
            </p>
          </div>
        </div>
      ) : (
        <p className="forecast-default">Enter a city to see the forecast</p>
      )}
    </div>
  );
};

export default Forecast;