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

export default function ProductCard({ data, height = "500px" }) {
  const onClickDownload = () => {
    const link = document.createElement("a");
    link.download = data.download_path;
    link.href = `./${data.download_path}`;
    link.click();
  };

  return (
    <Card
      sx={{
        height: height,
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={data?.image_path || CardImage} alt="card-image" />
        <CardContent style={{ paddingBottom: 0 }}>
          <Typography variant="body2" color="text.secondary">
            {data?.product}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "var(--theme-color-1)", fontWeight: "800" }}
          >
            {data?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            {data?.body.length > 420 ? data?.body.slice(0, 420) + "..." : data?.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onClickDownload}>
          {data.type == "pdf" && "DOWNLOAD CASE STUDY"}
        </Button>
      </CardActions>
    </Card>
  );
}
