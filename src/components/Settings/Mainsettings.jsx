import React from "react";
import "./Settings.css";
import { CgArrowLongLeft } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
const Mainsettings = () => {
  return (
    <div className="flex flex-col gap-9 bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-50 min-h-screen p-8 rounded-lg">
      <div className=" flex  w-full ">
        <div
          className="Back-button h-7 w-10 rounded-full text-center absolute left-[0%]"
          title="previous page"
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <CgArrowLongLeft className=" text-5xl pl-2 hover:bg-gray-200 relative left-[%] rounded-xl active:scale-90" />
          </NavLink>
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
          Change Unit
          <div>
            <IoIosArrowForward />
          </div>
        </div>
        <div className="divOnclick">
          App Version
          <div>
            <IoIosArrowForward />
          </div>
        </div>
        <div className="divOnclick">
          Help Center
          <div>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainsettings;
