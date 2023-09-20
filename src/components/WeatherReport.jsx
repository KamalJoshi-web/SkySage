import React from "react";

const WeatherReport = ({ cityInfo, units, setUnits }) => {
  return (
    <div>
      <h1 className=" text-6xl font-semibold text-yellow-100 text-center">
        {units
          ? cityInfo.current.temp_c + " °C"
          : cityInfo.current.temp_f + " °F"}
      </h1>
      <h2 className=" font-space font-bold text-5xl  text-slate-100 text-center">
        {cityInfo.location.name}
      </h2>
      <p className="font-space font-bold text-2xl  text-slate-100 text-center">
        {cityInfo.location.region}, {cityInfo.location.country}
      </p>
      <p className="text-lg font-semibold text-yellow-100 text-center">
        {cityInfo.location.localtime}
      </p>
      <div className=" flex justify-center gap-2 items-center my-2">
        <p className=" text-lg  text-white text-center ">Preferred Metrics</p>
        <button
          type="button"
          className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          onClick={() => setUnits(true)}
        >
          IND
        </button>
        <button
          type="button"
          className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          onClick={() => setUnits(false)}
        >
          US
        </button>
      </div>
    </div>
  );
};

export default WeatherReport;
