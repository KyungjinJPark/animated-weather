import React from "react";
import { Row, Col } from "react-bootstrap";
import { animated } from "react-spring";
import ReactLottie from "react-lottie-player";

import coldAnim from "../static/lotties/coldAnim.json";
import hotAnim from "../static/lotties/hotAnim.json";

const MainDisplay = ({ passStyle, dayData, inc, dec }) => {
  const AnimatedRow = animated(Row);

  return <AnimatedRow className="upper-display" style={passStyle}>
    <Col xs={2} className="change-button clickable unselectable" onClick={dec}>
      <p>{"<<<"}</p>
    </Col>
    <Col xs={8} className="main-wrapper">
      {dayData.temperature > 40
        ? <Lottie json={hotAnim}/>
        : <Lottie json={coldAnim}/>}
      <p className="main-title">{dayData.name.toUpperCase()}</p>
      <p className="main-temperature">{dayData.temperature}&deg;{dayData.temperatureUnit}</p>
      <p className="main-description">{dayData.shortForecast}</p>
      <p className="main-wind-speed">{dayData.windSpeed + " winds"}</p>
    </Col>
    <Col xs={2} className="change-button clickable unselectable" onClick={inc}>
      <p>{">>>"}</p>
    </Col>
  </AnimatedRow>
}

const Lottie = ({json}) => {
  return (
    <ReactLottie
      loop={false}
      animationData={json}
      play
      style={{ width: '15em', height: '15em' }}
    />
  )
}

export default MainDisplay;