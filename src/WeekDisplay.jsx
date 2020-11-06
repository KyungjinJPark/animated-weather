import React, { useState } from "react";
import { Row } from "react-bootstrap";
import ScrollContainer from "react-indiana-drag-scroll";
import { useSpring, animated } from "react-spring";

const WeekDisplay = ({ weekData, index, setIndex }) => {
  if (index < 2) {
    index = 2;
  }
  else if (index > weekData.length - 3) {
    index = weekData.length - 3;
  }

  return <Row className="lower-display">
    <ScrollContainer className="week-wrapper" hideScrollbars={false}>
      {weekData.map((periodData, i) =>
        <PeriodDisplay key={i} periodData={periodData} index={i} setIndex={setIndex} />
      )}
    </ScrollContainer>
  </Row>
}

const PeriodDisplay = ({ periodData, index, setIndex }) => {
  const [pressed, setPressed] = useState(false);
  const buttonProps = useSpring({
    transform: pressed ? "scale(0.95)" : "scale(1)",
    config: {
      mass: 0.25,
      tension: 500,
      friction: 15,
    }
  });

  return <animated.div
    className="period-wrapper clickable"
    onMouseDown={() => setPressed(true)}
    onMouseLeave={() => setPressed(false)}
    onClick={() => {
      setIndex(index);
      setPressed(false);
    }}
    style={buttonProps}>
    <p className="period-title">{periodData.name.toUpperCase()}</p>
    <p className="period-temperature">{periodData.temperature}&deg;{periodData.temperatureUnit}</p>
  </animated.div>
}

export default WeekDisplay;