import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NewsWidget from "./NewsWidget";
import WeatherWidget from "./WeatherWidget";
import SideBar from './SideBar';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('weather');
  const [inputValue, setInputValue] = useState(''); // Manage search input state here
  const [location, setLocation] = useState('');

  const handleLocationChange = (e) => {
    setInputValue(e.target.value); // Update search input value
  };

  const handleSearchClick = () => {
    setLocation(inputValue); // Set location for fetching weather data
  };

  return (
    <div className="dashboard">
      <SideBar
        inputValue={inputValue} // Pass input state
        handleLocationChange={handleLocationChange} // Pass input change handler
        handleSearchClick={handleSearchClick} // Pass search click handler
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={<WeatherWidget location={location} activeTab={activeTab} />} // Pass location and activeTab to WeatherWidget
          />
          <Route path="/news" element={<NewsWidget />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
