import React, { useState, useEffect } from "react";
import { useTransition } from "react-spring";

// import "./stylesheet.css";
import MainDisplay from "./MainDisplay";
import WeekDisplay from "./WeekDisplay";

const Dashboard = ({ weatherData, setTheme }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (weatherData[index].name.toLowerCase().includes("night")) {
      setTheme("night");
    }
    else {
      setTheme("day");
    }
  }, [index]);
  const incIndex = (inc) => {
    setIndex(old => {
      if (0 <= old + inc && old + inc < Object.keys(weatherData).length) {
        old += inc;
      }
      return old;
    });
  }

  const mainTransitions = useTransition(weatherData[index], {
    from: { opacity: 0, transform: "scale(1.1)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.9)" },
  });

  return <div className="dashboard">
    {mainTransitions((values, item) =>
      <MainDisplay
        passStyle={values}
        dayData={item}
        inc={() => incIndex(1)}
        dec={() => incIndex(-1)}
      />)}
    <WeekDisplay weekData={weatherData.slice(0)} index={index} setIndex={setIndex} />
  </div>
}

export default Dashboard;