import React from "react";
import Details from "./data/Details";
import Graph from "./graph/Graph";

import Header from "./Header";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-between mx-3.5 my-4  ">
      <Header />

      <Details />
      <Graph />
    </div>
  );
};

export default Dashboard;
