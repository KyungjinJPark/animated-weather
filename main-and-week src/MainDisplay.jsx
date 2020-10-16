import React from "react";

import "./MainDisplay.css";
import SunnyIcon from "./SunnyIcon";

const MainDisplay = ({ dayData }) => {
  return <div className="main-wrapper">
    <SunnyIcon />
    <p className="main-title">{dayData.name.toUpperCase()}</p>
    <p className="main-temperature">{dayData.temperature}&deg;{dayData.temperatureUnit}</p>
    <p className="main-description">{dayData.shortForecast}</p>
    <p className="main-wind-speed">{dayData.windSpeed + " winds"}</p>
  </div>
}

export default MainDisplay;