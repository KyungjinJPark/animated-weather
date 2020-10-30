import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import "./stylesheet.css";

const Dashboard = ({ weatherData }) => {
  const [index, setI] = useState(0);
  const incIndex = (inc) => {
    setI(old => {
      if (0 <= old + inc && old + inc < Object.keys(weatherData).length) {
        old += inc;
      }
      return old;
    });
  }

  return <Container style={{ padding: "2em 0" }}>
    <MainDisplay dayData={weatherData[index]} inc={() => incIndex(1)} dec={() => incIndex(-1)} />
    <WeekDisplay weekData={weatherData.slice(0)} index={index} />
  </Container>
}

export default Dashboard;

const MainDisplay = ({ dayData, inc, dec }) => {
  return <Row>
    <Col className="change-button" onClick={dec}>
      <p>left</p>
      <p>{"<<<"}</p>
    </Col>
    <Col className="main-wrapper">
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
    <Col className="change-button" onClick={inc}>
      <p>right</p>
      <p>{">>>"}</p>
    </Col>
  </Row >
}

const WeekDisplay = ({ weekData, index }) => {
  if (index < 2) index = 2;
  if (index > weekData.length - 3) index = weekData.length - 3;
  return <Row className="week-wrapper">
    {weekData.slice(index - 2, index + 3).map((periodData) => {
      return <>
        <PeriodDisplay periodData={periodData} /><br />
      </>
    })}
  </Row>
}

const PeriodDisplay = ({ periodData }) => {
  return <Col className="period-wrapper">
    <p className="period-title">{periodData.name.toUpperCase()}</p>
    <p className="period-temperature">{periodData.temperature}&deg;{periodData.temperatureUnit}</p>
  </Col>
}