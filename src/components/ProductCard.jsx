import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CardImage from "../assets/images/card-image1.jpg";
import "./ProductCard.css";

let data = {
  product: "Zolo",
  title: "Ethylene Cracker Optimization",
  body: "A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces…A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces to allevia",
  type: "pdf",
};

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={CardImage}
          alt="card-image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {data.product}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" sx={{color: "var(--dark-blue)", fontWeight: "800"}}>
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {data.type == "pdf" && "DOWNLOAD CASE STUDY"}
        </Button>
      </CardActions>
    </Card>
  );
}
