import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, useTransition, animated } from "react-spring";

import "./stylesheet.css";

const Dashboard = ({ weatherData }) => {
  const [index, setIndex] = useState(0);
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

const MainDisplay = ({ passStyle, dayData, inc, dec }) => {
  const AnimatedRow = animated(Row);

  return <AnimatedRow className="upper-display" style={passStyle}>
    <Col xs={2} className="change-button clickable" onClick={dec}>
      <p>left</p>
      <p>{"<<<"}</p>
    </Col>
    <Col xs={8} className="main-wrapper">
      <div style={{
        width: "15em",
        height: "15em",
        backgroundColor: "#FFFF55",
        borderRadius: "10%",
      }}>
      </div>
      <p className="main-title">{dayData.name.toUpperCase()}</p>
      <p className="main-temperature">{dayData.temperature}&deg;{dayData.temperatureUnit}</p>
      <p className="main-description">{dayData.shortForecast}</p>
      <p className="main-wind-speed">{dayData.windSpeed + " winds"}</p>
    </Col>
    <Col xs={2} className="change-button clickable" onClick={inc}>
      <p>right</p>
      <p>{">>>"}</p>
    </Col>
  </AnimatedRow >
}

const WeekDisplay = ({ weekData, index, setIndex }) => {
  if (index < 2) {
    index = 2;
  }
  else if (index > weekData.length - 3) {
    index = weekData.length - 3;
  }

  return <div className="week-wrapper">
    {weekData.map((periodData, i) =>
      <PeriodDisplay key={i} periodData={periodData} index={i} setIndex={setIndex} />
    )}
  </div>
}

const PeriodDisplay = ({ periodData, index, setIndex }) => {
  return <div className="period-wrapper clickable" onClick={() => setIndex(index)}>
    <p className="period-title">{periodData.name.toUpperCase()}</p>
    <p className="period-temperature">{periodData.temperature}&deg;{periodData.temperatureUnit}</p>
  </div>
}