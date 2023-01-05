import React from "react";
import { Grid } from "@mui/material";
import CardImage from "../../components/dashboard/card-image.component";

const arrDummy = ["Promo 121", "Introduce", "New Product", "Hublah"];

export const Caraousel = () => {
  return (
    <div>
      <Grid
        container
        marginY={5}
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 0 }}
      >
        {arrDummy.map((item, index) => (
          <Grid xs={12} sm={6} md={6} lg={3} item={true} key={index}>
            <CardImage link={"https://picsum.photos/500"} namePost={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
