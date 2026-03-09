import React from 'react';
import { Navbar } from './components';
import './styles/App.css';
import MainProfile from './components/Profile/MainProfile';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
    <MainProfile />
    </div>
  );
};

export default App;