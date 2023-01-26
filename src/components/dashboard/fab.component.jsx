import React from "react";
import AddIcon from "@mui/icons-material/Add";
import fabStyles from "../../lib/fab.styles";
import { Fab } from "@mui/material";

export const FabButton = ({ handleClick, FabStyle }) => {
  return (
    <Fab color="primary" aria-label="add" sx={fabStyles} onClick={handleClick}>
      <AddIcon />
    </Fab>
  );
};
