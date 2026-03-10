import React from 'react';
import { Navbar } from './components';
import './styles/App.css';
import MainProfile from './components/Profile/MainProfile';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Mainsettings from './components/Settings/Mainsettings';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/about" element={< MainProfile/>} />
        <Route path="/settings" element={<Mainsettings />} />
      </Routes>
    </BrowserRouter>
    
    
  );
};

export default App;