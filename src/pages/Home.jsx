import React from "react";
import Welcome from "../components/Welcome";
import WelcomeSec2 from "../components/WelcomeSec2";
import { Box } from "@mui/material";
import WelcomeSec3 from "../components/WelcomeSec3";
import WelcomeSec4 from "../components/WelcomeSec4";
import WelcomeSec5 from "../components/WelcomeSec5";
import WelcomeSec6 from "../components/WelcomeSec6";
import WelcomeSec7 from "../components/WelcomeSec7";

const Home = () => {
  return (
    <>
      <Welcome />
      <WelcomeSec2 />
      <WelcomeSec3 />
      <WelcomeSec4 />
      <WelcomeSec5 />
      <WelcomeSec6 />
      <WelcomeSec7 />
    </>
  );
};

export default Home;
