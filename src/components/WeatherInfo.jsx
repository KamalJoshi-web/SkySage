import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { RingLoader } from "react-spinners";
import WeatherStatus from "./WeatherStatus";
import WeatherReport from "./WeatherReport";
import WeatherDetails from "./WeatherDetails";
import WeatherForecast from "./WeatherForecast";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const WeatherInfo = ({ city }) => {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [units, setUnits] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchWeatherData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`
        );
        setWeather(data);
        setLoading(false);
      } catch (error) {
        toast.error("Error" + error);
        setLoading(false);
      }
    };
    fetchWeatherData();
  }, [city]);

  if (loading) {
    return (
      <div className="flex  h-96 justify-center items-center">
        <RingLoader color="#FFFFE0" />
      </div>
    );
  }

  return (
    <section className=" mt-8 max-sm:mt-10">
      <div className="flex flex-row flex-wrap  w-full  justify-evenly gap-3 items-center align-middle">
        <WeatherStatus status={weather.current.condition} />
        <WeatherReport cityInfo={weather} units={units} setUnits={setUnits} />
      </div>
      <WeatherDetails details={weather} units={units} />
      <WeatherForecast forecast={weather.forecast} units={units} />
    </section>
  );
};

export default WeatherInfo;
