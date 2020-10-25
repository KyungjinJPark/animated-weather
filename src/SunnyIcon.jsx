import React from "react";

const sunSize = 15

const SunnyIcon = ({ x }) => {
  return <div style={{
    width: sunSize * x + "em",
    height: sunSize + "em",
    backgroundColor: "yellow",
    borderRadius: "50%",
    opacity: x,
  }}>
  </div >
}

export default SunnyIcon;