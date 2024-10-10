import React from 'react'
import NewsWidget from "./NewsWidget";
import WeatherWidget from "./WeatherWidget";


function Dashboard() {
  return (
    <div>
        <div className = "dashboard">
          <div className= "widgets">
          <div className = "weather-content">
              <WeatherWidget/>
            </div>

            <div className = "news-content">
              <NewsWidget/>
            </div>
          </div>
            
        </div>
    </div>
  );
}

export default Dashboard;
