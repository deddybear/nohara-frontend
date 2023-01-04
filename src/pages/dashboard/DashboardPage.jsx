import React from "react";
import { Grid } from "@mui/material";
import { CardDashboard } from "../../components/dashboard/card.dashboard.component";


export const Dashboard = () => {
  const arr = [0, 1, 2, 3];
  return (
    <div>
      <Grid container marginTop={4} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {arr.map((index) => (
          <Grid xs={1} sm={1} md={3} item={true} key={index}>
            <CardDashboard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
