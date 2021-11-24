import React from "react";
import GraphDetail from "./GraphDetail";

const Graph = () => {
  return (
    <div className="flex justify-evenly">
      <GraphDetail
        title="Daily Sales"
        subTitle="55% increase in today sales"
        updateTime="updated 4 minutes ago"
        img={"/graph-1.png"}
      />
      <GraphDetail
        title="Email Subscriptions"
        subTitle="Last Campaign Performance"
        updateTime="Campaign sent 2 days ago"
        img={"/graph2.png"}
      />
      <GraphDetail
        title="Completed Tasks"
        subTitle="Last Campaign Performance"
        updateTime="Campaign sent 2 days ago"
        img={"/graph3.png"}
      />
    </div>
  );
};

export default Graph;
