import "./App.css";
import { useState } from "react";

function App() {
  const [locations, setLocations] = useState([]);

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocations(() => [
        ...locations,
        {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
      ]);
    });
  };

  return (
    <div className="App">
      <button className="main-button" onClick={() => handleLocation()}>
        Location Now
      </button>
      <div>
        {locations.map((location, index) => (
          <h1 key={index} >
            {`Latitud: ${location.latitude} --|-- Longitud: ${location.longitude}`}
          </h1>
        ))}
      </div>
    </div>
  );
}

export default App;
