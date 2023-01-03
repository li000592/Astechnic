import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useId } from "react";
import ProductCard from "../../components/ProductCard";
import "./FeaturedContent.css";

export default function FeaturedContent() {
  const [featuredContent, setFeaturedContent] = useState([1, 2, 3]);
  const featuredId = useId();
  return (
    <div className="featured-content-container">
      <section>
        <Grid container>
          <Grid item sx={3}>
            <div className="featured-left">
              <h1>
                Featured<br></br>Content
              </h1>
            </div>
          </Grid>
          <Grid item sx={9}>
            <div className="featured-right">
              <Grid container spacing={3}>
                {featuredContent.map((i, index) => (
                  <Grid item sx={4}>
                    <ProductCard data={i} key={featuredId + index} />
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </section>
    </div>
  );
}
