import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardImage({link, namePost}) {
  return (
    <Card sx={{ maxWidth: 390 }}>
      <CardMedia
        component="img"
        alt={link}
        height="140"
        image={link}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {namePost}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}