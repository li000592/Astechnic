import { Grid } from "@mui/material";
import Thumbnail from "./Thumbnail";
import "./IndustriesIntro.css";

const serviesList = [
  {
    label: "Steel",
    img: "thumbnails/steel.png",
  },
  {
    label: "Heat treatment",
    img: "thumbnails/heat treatment.png",
  },
  {
    label: "Aluminum",
    img: "thumbnails/steel.png",
  },
  {
    label: "Chemical",
    img: "thumbnails/metallurgy.png",
  },
  {
    label: "Coal chemical",
    img: "thumbnails/heat treatment.png",
  },
  {
    label: "Food",
    img: "thumbnails/ceramics.png",
  },
  {
    label: "Ceramic Sanitary-Ware",
    img: "thumbnails/manufacturing.png",
  },
  {
    label: "Building Ceramics",
    img: "thumbnails/manufacturing.png",
  },
  {
    label: "New Energy",
    img: "thumbnails/manufacturing.png",
  },
  {
    label: "Textile",
    img: "thumbnails/textile.png",
  },
  {
    label: "Porcelain Enamel",
    img: "thumbnails/glass.png",
  },

];

export default function IndustriesIntro() {
  return (
    <section className="industries-intro-section">
      <p className="industries-title">INDUSTRIES WE SERVE</p>
      <Grid container spacing={2} style={{ justifyContent: "center" }}>
        {serviesList.map((category, index) => (
          <Grid xs={12} md={3} item key={category.label + index}>
            <Thumbnail category={category.label} img={category.img} index={index} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
