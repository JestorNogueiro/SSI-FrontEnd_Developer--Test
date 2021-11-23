import React from "react";

const SidebarRow = ({ title, Icon }) => {
  return (
    <div className="flex p-3 cursor-pointer bg-transparent hover:bg-blue-500 rounded-md transform scale-95 text-white ">
      {Icon && <Icon />}
      <p className="ml-3 font-bold ">{title}</p>
    </div>
  );
};

export default SidebarRow;
