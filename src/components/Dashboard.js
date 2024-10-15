import React from 'react'
import {Routes, Route} from 'react-router-dom'
import NewsWidget from "./NewsWidget";
import WeatherWidget from "./WeatherWidget";
import Navbar from './NavBar';

function Dashboard() {

  
  return (
    <div className="dashboard">
       {/* <Navbar />  */}
      <div className="content">
        <Routes>
          <Route path="/" element={<WeatherWidget />} />
          <Route path="/news" element={<NewsWidget />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;