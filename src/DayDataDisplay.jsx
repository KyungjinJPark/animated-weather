import React from "react";

import { Card } from "react-bootstrap";

const DayDataDisplay = ({ dayData }) => {
  return <Card>
    <Card.Body>
      <Card.Title>{dayData.name}</Card.Title>
      <Card.Text>
        <h2>{dayData.temperature}&deg;{dayData.temperatureUnit}</h2>
        <h4>{dayData.shortForecast}</h4>
        <h4>{dayData.windSpeed}</h4>
      </Card.Text>
    </Card.Body>
  </Card>
}

export default DayDataDisplay;