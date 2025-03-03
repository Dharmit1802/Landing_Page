import React from "react";
import Herosection from "../Components/Herosection";
import Features from "../Components/Features";
import LatestWork from "../Components/LatestWork";
import Userreviews from "../Components/Userreviews";
import TeamDetails from "../Components/Teamdetails";
import IntegrationTech from "../Components/IntegrationTech";

function Homepage() {
  return (
    <div>
      <Herosection />
      <Features />
      <LatestWork />
      <Userreviews />
      <TeamDetails />
      <IntegrationTech />
    </div>
  );
}

export default Homepage;
