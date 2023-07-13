import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Chip } from "@mui/material";
import CardImage from "../assets/images/card-image1.jpg";
import "./ProductCard.css";

export default function ProductCard({ data, height = "495px" }) {
  const onClickDownload = () => {
    const link = document.createElement("a");
    link.download = `${data.fileName}.pdf`;
    link.href = `/resources/${data.type}/${data?.fileName}/${data?.fileName}.pdf`;
    link.click();
  };

  return (
    <Card
      sx={{
        // height: height,
        // maxWidth: "450px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* <CardActionArea> */}
      <div>
        <CardMedia
          component="img"
          // height="355"
           sx={{minHeight: '200px'}}
          image={
            `/resources/${data.type}/${data?.fileName}/${data?.fileName}.${
              data.type === "Electronic Controls" ? "jpg" : "png"
            }` || `/resources/${data.type}/${data?.fileName}/${data?.fileName}.jpg`
          }
          alt="card-image"
        />
        <CardContent style={{ paddingBottom: 0 }}>
          {/* <Typography variant="body" color="text.secondary">
            {data?.product}
          </Typography> */}
          <Chip label={data.type} sx={{ marginBottom: "4px" }} />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "var(--theme-color-1)",
              fontWeight: "700",
              fontSize: "1.2rem",
            }}
          >
            {data?.fileName}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary" >
            {data?.body.length > 420 ? data?.body.slice(0, 420) + "..." : data?.body}
          </Typography> */}
        </CardContent>
        {/* </CardActionArea> */}
      </div>
      <CardActions>
        <Button size="small" color="primary" onClick={onClickDownload}>
          DOWNLOAD
        </Button>
      </CardActions>
    </Card>
  );
}
