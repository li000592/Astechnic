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
          <Grid item xs={12} md={3}>
            <div className="featured-left">
              <h1>
                Featured<br></br>Content
              </h1>
            </div>
          </Grid>
          <Grid item xs={12} md={9}>
            <div className="featured-right">
              <Grid container spacing={3}>
                {featuredContent.map((i, index) => (
                  <Grid item xs={12} md={4}>
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
