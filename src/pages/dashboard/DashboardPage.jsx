import React from "react";
import { Grid } from "@mui/material";
import { CardDashboard } from "../../components/dashboard/card.component";
import CardDashboardData from "../../data/card.dashboard.dummy";
import { ChartDummy } from "../../data/chart.dummy";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export const Dashboard = () => {
  return (
    <div>
      <Grid
        container
        marginY={5}
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {CardDashboardData.map((item, index) => (
          <Grid xs={12} sm={12} md={6} lg={3} item={true} key={index}>
            <CardDashboard {...item} />
          </Grid>
        ))}
      </Grid>
      <h5>Data Pengunjung</h5>
      <Grid
        container
        marginY={3}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {ChartDummy.map((item, index) => (
          <Grid xs={12} sm={12} md={6} item={true} key={index}>
            <Bar options={item.option} data={item.data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
