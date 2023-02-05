import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useId } from "react";
import ProductCard from "../../components/ProductCard";
import "./FeaturedContent.css";
const featuredContentList = [
  {
    product: "Zolo",
    title: "A-PRO Self-Preheating Burnern",
    body: "A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces…A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces to allevia",
    type: "pdf",
    download_path: "resources/A-PRO Self-Preheating Burner.pdf",
    image_path: "",
  },
  {
    product: "Zolo",
    title: "A-RC Integrated Regenerative Burner",
    body: "A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces…A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces to allevia",
    type: "pdf",
    download_path: "resources/A-RC Integrated Regenerative Burner.pdf",
  },
  {
    product: "Zolo",
    title: "A-SHE Efficient Self-Preheating Burner",
    body: "A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces…A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces to allevia",
    type: "pdf",
    download_path: "resources/A-SHE Efficient Self-Preheating Burner.pdf",
  },
];
export default function FeaturedContent() {
  const [featuredContent, setFeaturedContent] = useState(featuredContentList);
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
                  <Grid item xs={12} md={6} xl={4}>
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
