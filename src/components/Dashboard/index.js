import React from "react";
import Details from "./data/Details";
import Graph from "./graph/Graph";

import Header from "./Header";

const Dashboard = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-evenly  p-3">
      <Header />
      <Details />
      <Graph />
    </div>
  );
};

export default Dashboard;
