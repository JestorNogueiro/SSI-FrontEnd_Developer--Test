import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SidebarRow from "./SidebarRow";

import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";

import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import RoomIcon from "@material-ui/icons/Room";
import NotificationsIcon from "@material-ui/icons/Notifications";
import LanguageIcon from "@material-ui/icons/Language";
import CloseIcon from "@material-ui/icons/Close";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import AssignmentIcon from "@material-ui/icons/Assignment";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import { Link } from "react-router-dom";
import { Menu } from "@material-ui/icons";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  // const [open, setOpen] = useState(false);
  // const location = useLocation();
  // const [bgNav, setBgNav] = useState("blue");

  // useEffect(() => {
  //   if (location.pathname === "/" && location.pathname === "/user") {
  //     setBgNav("blue");
  //   }
  // }, [location]);
  const handleClick = () => setOpenSidebar(true);
  const closeSidebar = () => setOpenSidebar(false);
  return (
    <div className="relative flex flex-col ">
      <div
        className="flex absolute md:hidden cursor-pointer hover:text-gray-500 top-3 "
        onClick={handleClick}
      >
        <Menu />
      </div>
      <div
        className={` flex flex-col justify-between p-3 h-screen w-[252px] rounded-sm float-left SidebarBackground inset-y-0 left-0 transform transition duration-500 ease-in-out md:relative absolute -translate-x-full  md:translate-x-0 z-50  ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <div
          className="flex items-center justify-center md:hidden cursor-pointer hover:text-gray-500 right-0 m-2 top-1 p-2 rounded-full border border-white "
          onClick={closeSidebar}
        >
          <CloseIcon />
        </div>
        {/* <div className="border-2 border-red-600" /> */}
        <hr className="mt-5" />
        <div className=" ">
          <Link to="/">
            <SidebarRow title="Dashboard" Icon={DashboardIcon} />
          </Link>
          <Link to="/user">
            <SidebarRow title=" User Profile" Icon={PersonIcon} />
          </Link>
          <SidebarRow title="Table List" Icon={AssignmentIcon} />
          <SidebarRow title="Typography" Icon={InsertDriveFileIcon} />
          <SidebarRow title="Icon" Icon={BubbleChartIcon} />
          <SidebarRow title="Maps" Icon={RoomIcon} />

          <SidebarRow title="Notification" Icon={NotificationsIcon} />
          <SidebarRow title="RTL Support" Icon={LanguageIcon} />
        </div>
        <div>
          <p className="bg-blue-500 font-bold rounded-md mt-2 p-2 text-white text-sm transform hover:scale-105 duration-500 cursor-pointer flex-nowrap ">
            {<CloudUploadIcon />}
            <span>Upgrade To PRO</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
