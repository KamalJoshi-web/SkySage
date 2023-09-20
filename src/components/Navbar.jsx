import React, { useState } from "react";
import toast from "react-hot-toast";

const Navbar = ({ setCity }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      toast.error("Please Enter City Name");
    } else {
      setCity(input);
    }
  };
  return (
    <nav className=" flex flex-row  justify-around flex-wrap py-4  gap-2 items-center bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg  h-18">
      {/* Heading */}
      <h1 className=" font-semibold  text-2xl text-white">SkySage</h1>
      {/* Search Bar */}
      <form onSubmit={handleSubmit}>
        <div className="relative flex flex-wrap items-stretch">
          <input
            type="search"
            className="relative m-0  w-96 max-xl:w-72 max-lg:w-64 max-md:w-48 max-sm:w-40 -mr-0.5 block  min-w-0 flex-auto rounded-l border border-solid border-yellow-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] placeholder-yellow-100  focus:text-red-50  focus:outline-none "
            placeholder="Search Cities"
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            className="relative flex items-center rounded-r bg-yellow-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-yellow-300 hover:shadow-lg focus:bg-yellow-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg z-50"
            type="submit"
            // onClick={handleInput}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </form>
    </nav>
  );
};

export default Navbar;
