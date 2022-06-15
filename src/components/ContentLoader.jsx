import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { ThemeProvider } from "styled-components";
import { dayTheme, nightTheme } from "../theme/themes";
import { GlobalStyles } from "../theme/global";

import "./stylesheet.css";
import Dashboard from "./Dashboard";
import useLocation from "../hooks/useLocation";
import useForecast from "../hooks/useForecast";

const ContentLoader = () => {
  const [theme, setTheme] = useState("day");
  const [coords, { status: locStatus, message: locMsg }] = useLocation();
  const [weather, { status: forStatus, message: forMsg }] = useForecast(coords);
  
  const status = locStatus !== "Success" ? locStatus : forStatus
  const message = locStatus !== "Success" ? locMsg : forMsg

  if (status === "Loading") {
    return <div>{ message }</div>
  } else if (status === "Failure") {
    return <div>{ message }</div>
  } else {
    return (
      <ThemeProvider theme={theme == "day" ? dayTheme : nightTheme}>
        <>
          <GlobalStyles />
          {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
          <div id="main">
            {weather[0]
              ? <Container style={{
                position: "relative",
                height: "100%",
              }}>
                <Dashboard weatherData={weather} setTheme={setTheme} />
              </Container>
              : <Loading />}
          </div>
        </>
      </ThemeProvider>
    );
  }
}

export default ContentLoader;

const Loading = () => <>{"Loading..."}</>;