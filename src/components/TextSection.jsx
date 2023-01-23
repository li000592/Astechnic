import { Grid } from "@mui/material";
import React from "react";
import "./TextSection.css";

export default function TextSection({ title = "", body = "" }) {
  return (
    <section>
      <Grid container>
        <Grid item xs={12} md={6}>
          <div className="text-section-container">
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </section>
  );
}
