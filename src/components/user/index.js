import React from "react";
import Header from "../Dashboard/Header";

const User = () => {
  return (
    <>
      <div className=" flex flex-col h-full w-full p-3  ">
        <Header />
        <div
          style={{ maxWidth: "640px", marginTop: "30px" }}
          className=" bg-white p-3 m-3 rounded-lg shadow-lg space-x-3 space-y-4"
        >
          <div
            className=" p-3 bg-blue-500 text-white h-auto mb-3 rounded-md shadow-md"
            style={{ marginTop: "-30px" }}
          >
            <h3 className="font-bold">Edit Profile</h3>
            <p className="font-smaller">Complete your profile</p>
          </div>
          <div className="mt-3">
            <p className="  space-x-3 my-3 text-sm ">
              <input
                type="text"
                placeholder="company(disabled)"
                className="bg-transparent outline-none border-b-2 w-48  "
              />
              <input
                type="text"
                placeholder="Username"
                className="bg-transparent outline-none border-b-2"
              />
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent outline-none border-b-2"
              />
            </p>
            <p className="flex-1 space-x-3 space-y-3 my-3 text-sm">
              {" "}
              <input
                type="text"
                placeholder="First Name"
                className="bg-transparent outline-none border-b-2 w-64"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-transparent outline-none border-b-2 w-64"
              />
            </p>
            <p className="space-x-3 my-3 text-sm">
              <input
                type="text"
                placeholder="City "
                className="bg-transparent outline-none border-b-2"
              />
              <input
                type="text"
                placeholder="Country"
                className="bg-transparent outline-none border-b-2"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="bg-transparent outline-none border-b-2"
              />
            </p>
            <p>
              <label className="text-gray-300">About me</label>
              <input
                type="text"
                placeholder="Lamborghini Mercy, your chick she so thirsty, I'm in the two seat lambo"
                className="bg-transparent outline-none border-b-2 h-24 sm:h-48 w-full text-sm"
              />
            </p>
            <button className=" p-2 my-3 rounded-md shadow-md transform hover:scale-110 duration-500 font-semibold bg-blue-500 text-white text ">
              UPDATE PROFILE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
