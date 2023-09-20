import React from "react";
import { icon } from "./WeatherChecker";

const WeatherForecast = ({ forecast, units }) => {
  return (
    <div>
      <p className="font-space font-bold text-5xl  text-slate-100 ml-2">
        {" "}
        Forecast{" "}
      </p>
      <div className=" flex gap-5 justify-center flex-wrap my-2 mx-1 ">
        {forecast.forecastday.map((days) => (
          <div
            key={days.date_epoch}
            className="text-white  border border-slate-100 font-thin rounded-lg text-lg px-5 py-2.5 text-center"
          >
            <div className=" flex gap-2 justify-center items-center flex-wrap">
              <img
                src={icon(days.day.condition.code)}
                alt="wweather-icon"
                className=" w-14"
              />
              <p className="text-lg font-semibold text-yellow-100 text-center font-space">
                {" "}
                {days.day.condition.text}
              </p>
              <div className=" flex gap-5 justify-center ">
                <p className="font-space font-bold text-lg  text-slate-100 text-center">
                  MaxTemp <br />
                  {units
                    ? days.day.maxtemp_c + " °C"
                    : days.day.maxtemp_f + " °F"}
                </p>
                <p className="font-space font-bold text-lg  text-slate-100 text-center">
                  MinTemp <br />
                  {units
                    ? days.day.mintemp_c + " °C"
                    : days.day.mintemp_f + " °F"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
