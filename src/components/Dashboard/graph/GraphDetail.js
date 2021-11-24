import { UpdateOutlined } from "@material-ui/icons";
import React from "react";

const GraphDetail = ({ title, subTitle, updateTime, img }) => {
  return (
    <section className="bg-white h-auto w-auto space-x-3 m-3 p-2 rounded-md">
      <div className="rounded-md h-48 px-4 mt-[-40px]">
        <img src={img} alt="graph" loading="lazy" />
      </div>

      <div className="border-b-2 my-3">
        <h2 className="text-xl font-thin"> {title}</h2>
        <p className="text-sm text-gray-300 my-2"> {subTitle}</p>
      </div>
      <p className="text-gray-300 mb2 space-x-2 text-sm">
        <UpdateOutlined />
        {updateTime}
      </p>
    </section>
  );
};

export default GraphDetail;
