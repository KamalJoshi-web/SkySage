import React from "react";
import { icon } from "./WeatherChecker";
const WeatherStatus = ({ status }) => {
  return (
    <div>
      <img
        src={icon(status.code)}
        alt="weatherIcon"
        className=" max-w-full m-auto"
      />
      <h2 className=" text-center font-space font-extrabold text-xl text-yellow-100">
        {status.text}
      </h2>
    </div>
  );
};

export default WeatherStatus;
