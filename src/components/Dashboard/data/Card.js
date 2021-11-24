import React from "react";

const Card = ({
  title,
  subTitle,
  other,
  PrimaryIcon,
  SecondaryIcon,
  color,
  red,
}) => {
  return (
    <div className=" bg-white p-3 mt-5 w-60 h-28 cursor-pointer transform hover:scale-95 duration-500 rounded-lg  shadow-lg ">
      <div className="flex justify-between border-b-2 mb-3 ">
        <div
          style={{ backgroundColor: color }}
          className=" h-[70px] w-[70px] p-3 flex items-center justify-center shadow-lg mb-2 mt-[-40px] rounded-lg text-white text-xl "
        >
          {<PrimaryIcon />}
        </div>
        <div>
          <h3 className="text-sm text-gray-300 ">{title}</h3>
          <p className="text-xl text-gray-400 ">{subTitle}</p>
        </div>
      </div>
      <p style={{ color: red }} className="text-sm text-gray-300">
        {<SecondaryIcon />} {other}
      </p>
    </div>
  );
};

export default Card;
