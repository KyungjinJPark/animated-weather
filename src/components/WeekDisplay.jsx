import React, { useState, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import useDragScroll from "react-scroll-ondrag";
import { useSpring, animated } from "react-spring";

const WeekDisplay = ({ weekData, index, setIndex }) => {
  const containerRef = useRef(null)
  const dragging = useRef(false)
  const { events } = useDragScroll(containerRef, { onDragStart: () => { dragging = true }, onDragEnd: () => { dragging = false } });

  const setIndexIfNoDrag = (i) => {
    if (!dragging) {
      setIndex(i)
    }
  }

  return <Row className="lower-display">
    <Container {...events} ref={containerRef} className="week-wrapper">
      {weekData.map((periodData, i) => {
        if (i !== 0) {
          return [
            <div className="period-spacer" key={"spacer:" + i}></div>,
            <PeriodDisplay key={i} periodData={periodData} index={i} setIndex={setIndexIfNoDrag} selected={i === index}/>
          ]
        } else {
          return <PeriodDisplay key={i} periodData={periodData} index={i} setIndex={setIndexIfNoDrag} selected={i === index}/>
        }
      }
      )}
    </Container>
  </Row>
}

const PeriodDisplay = ({ periodData, index, setIndex, selected }) => {
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
    className={"period-wrapper clickable unselectable" + (selected ? " selected" : "")} 
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