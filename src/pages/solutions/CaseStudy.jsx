import { Grid } from "@mui/material";
import React from "react";
import ProductCard from "../../components/ProductCard";
import "./CaseStudy.css";

export default function CaseStudy() {
  return (
    <div className="case-study-container">
      <section>
        <Grid container>
          <Grid item sx={12} md={6}>
            <div className="case-study-left">
              <h2>Case Studies</h2>
              <div className="case-study-line"></div>
              <p>
                See how OnPoint’s domain expertise paired with AWS’s world class
                infrastructure is delivering real results.
              </p>
            </div>
          </Grid>
          <Grid item sx={12} md={6} container spacing={2}>
            {[1, 2].map((i) => (
              <Grid item sx={12} md={6}>
                <ProductCard />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </section>
    </div>
  );
}
