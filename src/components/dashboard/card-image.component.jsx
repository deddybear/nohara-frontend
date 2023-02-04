import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Carousel } from "react-bootstrap";

export default function CardImage({
  link,
  namePost,
  functionDelete,
  caraousel,
  dataCarousel,
}) {
  return (
    <Card sx={{ maxWidth: 390, boxShadow: 2 }}>
      {caraousel ? (
        <Carousel>
          {dataCarousel.map((item, index) => (
            <Carousel.Item key={index}>
              <CardMedia
                component="img"
                height="240"
                image={`${process.env.REACT_APP_SERVER_URL}${item.path}`}
                alt={`img_service_${index}`}
              ></CardMedia>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <CardMedia component="img" alt={link} height="240" image={link} />
      )}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {namePost}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="flex-end">
          <IconButton
            aria-label="delete"
            size="large"
            color="error"
            onClick={functionDelete}
          >
            <DeleteForeverIcon fontSize="inherit" />
          </IconButton>
        </Grid>
      </CardActions>
    </Card>
  );
}
