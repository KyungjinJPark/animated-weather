import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { animated } from "react-spring";
// import ColdLottie from "../lotties/ColdLottie";
// import HotLottie from "../lotties/HotLottie";

const MainDisplay = ({ passStyle, dayData, inc, dec }) => {
  const AnimatedRow = animated(Row);

  return <AnimatedRow className="upper-display" style={passStyle}>
    <Col xs={2} className="change-button clickable" onClick={dec}>
      <p>{"<<<"}</p>
    </Col>
    <Col xs={8} className="main-wrapper">
      {/* {dayData.temperature > 60 ? <HotLottie /> : <ColdLottie />} */}
      <p className="main-title">{dayData.name.toUpperCase()}</p>
      <p className="main-temperature">{dayData.temperature}&deg;{dayData.temperatureUnit}</p>
      <p className="main-description">{dayData.shortForecast}</p>
      <p className="main-wind-speed">{dayData.windSpeed + " winds"}</p>
    </Col>
    <Col xs={2} className="change-button clickable" onClick={inc}>
      <p>{">>>"}</p>
    </Col>
  </AnimatedRow >
}

export default MainDisplay;