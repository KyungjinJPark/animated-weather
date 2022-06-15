import { useState, useEffect } from "react";

const useLocation = () => {
  const [coords, setCoords] = useState([]);
  const [status, setStatus] = useState("Loading");
  const [message, setMessage] = useState("Fetching your location...");

  useEffect(() => {
    if ("geolocation" in navigator === false) {
      setStatus("Failure");
      setMessage("Please use a browser with geolocation capabilities.");
    } else {
      navigator.geolocation.getCurrentPosition(
        (pos) => { // success
          setStatus("Success");
          setMessage("Success");
          setCoords([pos.coords.latitude, pos.coords.longitude]);
        },
        (_) => { // error
          setStatus("Failure");
          setMessage("Please allow your browser to read geolocation data.");
        }
      );
    }
  }, [])

  return [coords, { status, message }];
}

export default useLocation;