import React from "react";

import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import NotificationIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  return (
    <div className=" flex flex-1 px-3 my-3 items-center  justify-between text-gray-500 ">
      <p className="text-xl font-semibold pl-[15px] md:mr-3 ">Dashboard</p>

      <div className="flex items-center justify-items-end space-x-3 text-sm ">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none border-b-2 w-[90px] md:w-full "
        />
        <p className="h-[40px] w-[40px] bg-white p-1.5 rounded-full hidden  md:flex items-center justify-center cursor-pointer   ">
          <SearchIcon />
        </p>

        <DashboardIcon />
        <p className="flex relative items-center justify-center">
          <NotificationIcon />
          <p className="absolute bg-red-500 h-[20px] w-[20px]  px-1.5 rounded-full flex items-center justify-center cursor-pointer mt-[-10px] top-0 right-0 text-white">
            5
          </p>
        </p>
        <PersonIcon />
      </div>
    </div>
  );
};

export default Header;
