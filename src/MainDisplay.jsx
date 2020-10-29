import React, { useState } from "react";

import "./MainDisplay.css";
import SunnyIcon from "./SunnyIcon";

import { useSpring, animated, interpolate } from "react-spring";

const MainDisplay = ({ animStyle, dayData }) => {
  const { x } = useSpring({ x: 1, from: { x: 0 } });

  const [active, toggle] = useState(true);
  const temperatureProps = useSpring({
    config: { duration: 750 },
    color: active ? "white" : "black",
    x: active ? 1 : 0,
  });

  const AnimatedSunnyIcon = animated(SunnyIcon);
  return <animated.div className="main-wrapper" style={animStyle}>
    <AnimatedSunnyIcon x={x} />
    <p className="main-title">{dayData.name.toUpperCase()}</p>
    <p className="main-temperature unselectable" onClick={() => toggle(!active)}>
      <animated.span style={{ color: temperatureProps.color }}>
        {temperatureProps.x.interpolate(x => "" + Math.round(dayData.temperature * x))}
      </animated.span>
      <animated.span style={{ color: temperatureProps.color }}>
        &deg;{dayData.temperatureUnit}
      </animated.span>
    </p>
    <p className="main-description">{dayData.shortForecast}</p>
    <p className="main-wind-speed">{dayData.windSpeed + " winds"}</p>
  </animated.div>
}

export default MainDisplay;