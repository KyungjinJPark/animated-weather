import React, { useState } from "react";

import "./MainDisplay.css";
import SunnyIcon from "./SunnyIcon";

import { useSpring, animated, interpolate } from "react-spring";

const MainDisplay = ({ dayData }) => {
  const { x } = useSpring({ x: 1, from: { x: 0 } });

  const [active, toggle] = useState(true);
  // const temperatureProps = useSpring({
  //   from: {
  //     color: "black",
  //     x: 0,
  //   },
  //   to: {
  //     color: active ? "white" : "black",
  //     x: active ? 1 : 0,
  //   }
  // });
  const temperatureProps = useSpring({
    config: { duration: 750 },
    color: active ? "white" : "black",
    x: active ? 1 : 0,
  });

  const AnimatedSunnyIcon = animated(SunnyIcon);
  return <div className="main-wrapper">
    <AnimatedSunnyIcon x={x} />
    <p className="main-title">{dayData.name.toUpperCase()}</p>
    <p className="main-temperature unselectable" onClick={() => toggle(!active)}>
      <animated.span style={{ color: temperatureProps.color }}>
        {temperatureProps.x.interpolate(x => Math.round(dayData.temperature * x))}
      </animated.span>
      <animated.span style={{ color: temperatureProps.color }}>
        &deg;{dayData.temperatureUnit}
      </animated.span>
    </p>
    <p className="main-description">{dayData.shortForecast}</p>
    <p className="main-wind-speed">{dayData.windSpeed + " winds"}</p>
  </div>
}

export default MainDisplay;