import React, { useState, useEffect } from "react";
import "./Profile.css";
import { pLink } from "../../services/extLinks";
import { CgArrowLongLeft } from "react-icons/cg";
import { k } from "../../services/Profile1";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { WEATHER_API_BASE_URL,WEATHER_API_KEY,API_UNITS } from "../../utils/constants";
import { fetchWeatherData } from "../../services/weatherApi";

const MainProfile = () => {

  const [data, setData] = useState({ name: "Kolkata", sys: { country: "IN" } });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const city = 'kolkata';
        const result = await fetchWeatherData(city);
        setData(result);
        setError(null);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
        // Keep default data on error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="flex flex-col gap-9 bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-50 min-h-screen p-8 rounded-lg">
      <div className=" flex justify-between w-full ">
        <div
          className="Back-button h-7 w-10 rounded-full text-center "
          title="previous page"
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <CgArrowLongLeft className=" text-5xl pl-2 hover:bg-gray-200 relative left-[%] rounded-xl active:scale-90" />
          </NavLink>
        </div>
        <div className="flex-col relative right-[46%] gap-7 text-center">
          <div>
            <img
              src={pLink}
              alt=""
              className="w-40 object-cover h-40 rounded-full  border-r-green-300 mb-3"
            />
            <h1 className="flex justify-center text-4xl font-semibold ">
              Hi, {k.userName}
            </h1>
          </div>
          <div>
            📍 {loading ? "Loading..." : data?.name} ,{loading ? "" : data?.sys?.country}
          
          </div>
        </div>
      </div>
      <div className="flex-col left-[17%] w-[66%] bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 bg-no-repeat relative mt-8 pt-5 gap-1.5 text-center">
        <div className="divOnclick">
          Edit Profile
          <div>
            <IoIosArrowForward />
          </div>
        </div>
        <div className="divOnclick">
          Manage Location
          <div>
            <IoIosArrowForward />
          </div>
        </div>
        <div className="divOnclick">
          Change Phone number
          <div>
            <IoIosArrowForward />
          </div>
        </div>
        <div className="divOnclick">
          Log out
          <div className="secondDiv">
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProfile;
