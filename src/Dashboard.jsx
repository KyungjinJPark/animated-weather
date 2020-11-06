import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTransition, animated } from "react-spring";

import "./stylesheet.css";
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

  const mainTransitions = useTransition(weatherData[index], item => item.name, {
    from: { opacity: 0, transform: "scale(1.1)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.9)" }
  });

  return <Container style={{
    position: "relative",
    height: "100%",
    overflow: "hidden",
  }}>
    {mainTransitions.map(({ item, props, key }) =>
      <MainDisplay
        key={key}
        passStyle={props}
        dayData={item}
        inc={() => incIndex(1)}
        dec={() => incIndex(-1)}
      />)}
    < WeekDisplay weekData={weatherData.slice(0)} index={index} setIndex={setIndex} />
  </Container >
}

export default Dashboard;