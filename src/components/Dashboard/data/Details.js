import React from "react";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import Card from "./Card";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

import WarningIcon from "@material-ui/icons/Warning";
import DateRangeIcon from "@material-ui/icons/DateRange";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { UpdateOutlined } from "@material-ui/icons";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

const Details = () => {
  return (
    <section className="flex justify-evenly -mt-5 h-56 mb-3 w-full">
      <Card
        title="Used Space"
        subTitle="49/50 GB"
        other="Get more space"
        PrimaryIcon={FilterNoneIcon}
        SecondaryIcon={WarningIcon}
        color={"#ffa74d"}
        red={"#ef5350"}
      />
      <Card
        title="Revenue"
        subTitle="$34.245"
        other="Last 24 Hours"
        PrimaryIcon={AccountBalanceIcon}
        SecondaryIcon={DateRangeIcon}
        color={"#81c784"}
      />
      <Card
        title="Fixed Issues"
        subTitle="75"
        other="Tracked from Github"
        PrimaryIcon={HelpOutlineIcon}
        SecondaryIcon={LocalOfferIcon}
        color={"#ef5350"}
      />
      <Card
        title="Followers"
        subTitle="+245"
        other="Just Updated"
        PrimaryIcon={AccessibilityIcon}
        SecondaryIcon={UpdateOutlined}
        color={"#42a5f5"}
      />
    </section>
  );
};

export default Details;
