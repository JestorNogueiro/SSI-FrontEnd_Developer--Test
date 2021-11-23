import React from "react";
import SidebarRow from "./SidebarRow";

import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";

import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import RoomIcon from "@material-ui/icons/Room";
import NotificationsIcon from "@material-ui/icons/Notifications";
import LanguageIcon from "@material-ui/icons/Language";
// import DriveFolderUploadIcon from "@material-ui/icons/DriveFolderUpload";

const Sidebar = () => {
  return (
    <div className="flex-1 flex-col justify-between p-3 h-[100vh] w-72 rounded-sm float-left bg-black opacity-70 sm:hidden ">
      {/* <div className="border-2 border-red-600" /> */}
      <div className="border-2">
        <SidebarRow title="Dashboard" Icon={DashboardIcon} />
        <SidebarRow title=" User Profile" Icon={PersonIcon} />
        <SidebarRow title="Table List" Icon={PersonIcon} />
        <SidebarRow title="Typography" Icon={PersonIcon} />
        <SidebarRow title="Icon" Icon={BubbleChartIcon} />
        <SidebarRow title="Maps" Icon={RoomIcon} />
        <SidebarRow title="Typography" Icon={PersonIcon} />
        <SidebarRow title="Notification" Icon={NotificationsIcon} />
        <SidebarRow title="RTL Support" Icon={LanguageIcon} />
      </div>
      <div>
        <p className="bg-blue-500 font-bold flex-end text-white">
          Upgrade To PRO
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
