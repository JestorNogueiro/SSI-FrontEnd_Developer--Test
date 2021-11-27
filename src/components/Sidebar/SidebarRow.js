import React from "react";
const SidebarRow = ({ title, Icon }) => {
  return (
    <button className="flex p-3 cursor-pointer bg-transparent hover:bg-blue-500 rounded-md transform scale-95 text-white focus:bg-blue-400 w-full ">
      {Icon && <Icon />}
      <span className="ml-3 font-bold ">{title}</span>
    </button>
  );
};

export default SidebarRow;
