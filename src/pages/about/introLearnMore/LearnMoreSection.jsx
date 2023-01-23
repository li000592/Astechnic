import { Grid } from "@mui/material";
import React from "react";
import BottomBorderButton from "../../../components/BottomBorderButton";
import AboutImg from "../../../assets/images/about1.jpg";
import "./LearnMoreSection.css";

export default function LearnMoreSection() {
  return (
    <section>
      <Grid container>
        <Grid item xs={12} md={6}>
          <div className="text-section-container">
            <h2 style={{ color: "var(--dark-grey)" }}>Our KES Partners.</h2>
            <p>
              OnPoint’s integrated, data-driven digital solutions leverage
              decades of industry-leading domain expertise within Koch
              Engineered Solutions, empowering our customers to operate more
              efficiently and improve operational goals.
            </p>
          </div>
          <BottomBorderButton label="LEARN MORE ABOUT KES" color="var(--black)" />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
      <div className="partner-images-div">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="img-div">
              <img src={AboutImg} alt="about-img" />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="img-div">
              <img src={AboutImg} alt="about-img" />
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
