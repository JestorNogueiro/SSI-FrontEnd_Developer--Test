import React from "react";
import SidebarRow from "./SidebarRow";

import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";

import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import RoomIcon from "@material-ui/icons/Room";
import NotificationsIcon from "@material-ui/icons/Notifications";
import LanguageIcon from "@material-ui/icons/Language";
// import ContentPasteIcon from "@material-ui/icons/contentP"
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="flex flex-col justify-between p-3 h-[100vh] w-72 rounded-sm float-left SidebarBackground  "
      // style={{ }}
    >
      {/* <div className="border-2 border-red-600" /> */}
      <hr className="mt-5" />
      <div className=" -mt-4">
        <Link to="/">
          <SidebarRow title="Dashboard" Icon={DashboardIcon} />
        </Link>
        <Link to="/user">
          <SidebarRow title=" User Profile" Icon={PersonIcon} />
        </Link>
        <SidebarRow title="Table List" Icon={PersonIcon} />
        <SidebarRow title="Typography" Icon={PersonIcon} />
        <SidebarRow title="Icon" Icon={BubbleChartIcon} />
        <SidebarRow title="Maps" Icon={RoomIcon} />
        <SidebarRow title="Typography" Icon={PersonIcon} />
        <SidebarRow title="Notification" Icon={NotificationsIcon} />
        <SidebarRow title="RTL Support" Icon={LanguageIcon} />
      </div>
      <div>
        <p className="bg-blue-500 font-bold rounded-md mt-2 p-2 text-white transform hover:scale-110 duration-500 cursor-pointer">
          {<CloudUploadIcon />} Upgrade To PRO
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
