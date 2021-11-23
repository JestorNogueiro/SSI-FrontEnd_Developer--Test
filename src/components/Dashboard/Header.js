import React from "react";

import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import NotificationIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  return (
    <div className="flex fixed top-0 justify-between items-center">
      <p>Dashboard</p>

      <div className="right-0 mx-auto">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none focus:border-none border-b-2"
        />

        <SearchIcon />
        <DashboardIcon />
        <NotificationIcon />
        <PersonIcon />
      </div>
    </div>
  );
};

export default Header;
