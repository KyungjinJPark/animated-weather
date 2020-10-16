import React from "react";

import "./WeekDisplay.css";
import PeriodDisplay from "./PeriodDisplay";

const WeekDisplay = ({ weekData }) => {
  return <div className="week-wrapper">
    {weekData.map((periodData) => {
      return <>
        <PeriodDisplay periodData={periodData} />
        <hr />
      </>
    })}
  </div>
}

export default WeekDisplay;