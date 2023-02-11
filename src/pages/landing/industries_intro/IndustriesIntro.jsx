import { Grid } from "@mui/material";
import Thumbnail from "./Thumbnail";
import "./IndustriesIntro.css";

const serviesList = [
  {
    label: "Steel",
    img: "thumbnails/steel.png",
  },
  {
    label: "Metallurgy",
    img: "thumbnails/metallurgy.png",
  },
  {
    label: "Heat treatment",
    img: "thumbnails/heat treatment.png",
  },
  {
    label: "Ceramics",
    img: "thumbnails/ceramics.png",
  },
  {
    label: "Textile",
    img: "thumbnails/textile.png",
  },
  {
    label: "Glass",
    img: "thumbnails/glass.png",
  },
  {
    label: "Manufacturing",
    img: "thumbnails/manufacturing.png",
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
