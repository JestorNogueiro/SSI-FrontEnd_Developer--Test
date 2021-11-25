import { UpdateOutlined } from "@material-ui/icons";
import React from "react";

const GraphDetail = ({ title, subTitle, updateTime, img }) => {
  return (
    <div className="bg-white h-64 w-80 sm:h-52 sm:w-64 md:h-64 md:w-80 m-3 p-2 rounded-md shadow-md transform hover:scale-105 duration-500 cursor-pointer">
      <img
        src={img}
        alt="graph"
        loading="lazy"
        className="rounded-md shadow-md h-48 mt-[-40px] sm:h-36  md:h-48 flex items-center justify-center"
      />

      <div className="border-b-2">
        <h2 className="text-xl font-thin"> {title}</h2>
        <p className="text-sm text-gray-400 my-2"> {subTitle}</p>
      </div>
      <p className="text-gray-400 text-sm">
        <UpdateOutlined />
        {updateTime}
      </p>
    </div>
  );
};

export default GraphDetail;
