import React, { useState } from "react";
import Navbar from "./components/Navbar";
import WeatherInfo from "./components/WeatherInfo";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [city, setCity] = useState("london");

  return (
    <main>
      <Navbar setCity={setCity} />
      <WeatherInfo city={city} />
      <Toaster />
    </main>
  );
};

export default App;
