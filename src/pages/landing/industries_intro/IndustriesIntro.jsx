import { Grid } from "@mui/material";
import Thumbnail from "./Thumbnail";
import "./IndustriesIntro.css";

const serviesList = ["Refining", "Petrochemical", "Steel", "Cerment", "Pulp & Paper", "Glass", "Manufacturing"];

export default function IndustriesIntro() {
  return (
    <section className="industries-intro-section">
      <p className="industries-title">INDUSTRIES WE SERVE</p>
      <Grid  container spacing={2} style={{ justifyContent: "center" }}>
        {serviesList.map((category, index) => (
          <Grid sx={12} md={3} item key={category + index}>
            <Thumbnail category={category} index={index} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
