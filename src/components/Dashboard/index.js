import React from "react";
import Details from "./data/Details";
import Graph from "./graph/Graph";

import Header from "./Header";

const Dashboard = () => {
  return (
    <div className="flex flex-1 flex-col justify-center md:justify-evenly space-y-3   ">
      <Header />
      <Details />
      <div className="mt-4 ">
        <Graph />
      </div>
    </div>
  );
};

export default Dashboard;
