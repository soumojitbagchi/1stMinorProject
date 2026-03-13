import { WEATHER_API_KEY, WEATHER_API_BASE_URL, API_UNITS } from '../utils/constants';
import { useCallback, useState } from 'react';
import axios from 'axios';



export const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async (city) => {
    if (!city?.trim()) {
      setError('Please provide a city name.');
      setWeatherData(null);
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const url = `${WEATHER_API_BASE_URL}?q=${encodeURIComponent(city.trim())}&appid=${WEATHER_API_KEY}&units=${API_UNITS}`;
      const response = await axios.get(url);
      setWeatherData(response.data);
      console.log(response.data)
      return response.data;
    } catch (err) {
      const message = err?.response?.data?.message || 'Failed to fetch weather data.';
      setError(message);
      setWeatherData(null);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { weatherData, loading, error, fetchWeather };
};
