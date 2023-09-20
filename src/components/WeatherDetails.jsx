import React from "react";

const WeatherDetails = ({ details, units }) => {
  return (
    <div className=" flex flex-wrap justify-center align-middle items-center my-6 gap-20">
      <p className="text-white  border border-slate-100 font-thin rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 ">
        Windspeed <br />{" "}
        {units
          ? details.current.wind_kph + " km/h"
          : details.current.wind_mph + " mi/h"}
      </p>
      <p className="text-white  border border-slate-100 font-thin rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 ">
        Feelslike <br />{" "}
        {units
          ? details.current.feelslike_c + " °C"
          : details.current.feelslike_f + " °F"}
      </p>
      <p className="text-white  border border-slate-100 font-thin rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 ">
        Humidity <br /> {details.current.humidity} %
      </p>
    </div>
  );
};

export default WeatherDetails;
