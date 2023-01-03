import React from "react";

import { Typography } from "@mui/material";
import { DrawerHeader } from "../../components/sidebar/sidebar.styles";

export const Dashboard = () => {
  return (
    <div>
      <DrawerHeader />
      <Typography paragraph>Dashboard</Typography>
    </div>
  );
};