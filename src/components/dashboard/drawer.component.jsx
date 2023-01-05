import React from "react";
import { NavBar } from "../navbar/navbar.component";
import { SideBar } from "../sidebar/sidebar.component";
import { CssBaseline } from "@mui/material";

export const DrawerDashboard = () => (
  <div>
    <NavBar />
    <SideBar />
    <CssBaseline />
  </div>
);
