import React from "react";
import { Typography } from "@mui/material";
import { DrawerHeader } from "../../components/sidebar/sidebar.styles";

export const About = () => {
  return (
    <div>
      <DrawerHeader />
      <Typography paragraph>About</Typography>
    </div>
  );
};
