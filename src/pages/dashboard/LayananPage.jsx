import React from "react";
import { Typography } from "@mui/material";
import { DrawerHeader } from "../../components/sidebar/sidebar.styles";
import { FabButton } from "../../components/dashboard/fab.component";

export const Layanan = () => {
    
  const handleClick = (dispatch) => {
    alert(dispatch);
  };

  return (
    <div>
      <DrawerHeader />
      <Typography paragraph>Layanan</Typography>
      <FabButton handleClick={() => handleClick("layanan")} />
    </div>
  );
};
