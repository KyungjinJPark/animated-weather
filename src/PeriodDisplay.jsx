import React from "react";

const PeriodDisplay = ({ periodData }) => {
  return <div>
    <p className="period-title">{periodData.name.toUpperCase()}</p>
    <p className="period-temperature">{periodData.temperature}&deg;{periodData.temperatureUnit}</p>
    <p className="period-description">{periodData.shortForecast}</p>
    <p className="period-wind-speed">{periodData.windSpeed + " winds"}</p>
  </div>
}

export default PeriodDisplay;