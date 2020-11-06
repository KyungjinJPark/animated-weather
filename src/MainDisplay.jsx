import React from "react";
import { Row, Col } from "react-bootstrap";
import { animated } from "react-spring";

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

export default MainDisplay;