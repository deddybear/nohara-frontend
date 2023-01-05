import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export const CardDashboard = (props) => (
  <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {props.headingCard}
      </Typography>
      <Typography variant="h5" component="div">
        {props.count}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Status : Aktif
      </Typography>
      <Typography variant="body2">
        {props.desc}
      </Typography>
    </CardContent>
  </Card>
);
