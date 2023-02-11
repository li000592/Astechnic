import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useId } from "react";
import ProductCard from "../../components/ProductCard";
import "./FeaturedContent.css";
const featuredContentList = [
  {
    product: "Zolo",
    title: "A-PRO Self-Preheating Burnern",
    body: "The waste heat is recovered with its own heat exchanger, and the combustion-supporting air can be preheated up to 650 ℃. Modular design, each module can be replaced and maintained separately. Suitable for pulse control and continuous control. Staged combustion, combustion is more environmentally friendly. The electrode has its own cooling air protection circuit and has the functions of detection and ignition at the same time. Heat-resistant steel heat exchanger, suitable for a variety of heat treatment furnaces below.",
    type: "pdf",
    download_path: "resources/pdf/A-PRO Self-Preheating Burner.pdf",
    image_path: "resources/images/1.jpg",
  },
  {
    product: "Zolo",
    title: "A-RC Integrated Regenerative Burner",
    body: "AME RC-Integrated Regenerative Burner breaks away from the basic concept of traditional regenerative combustion system: double burner + double regenerator structure. Due to the use of unique combustion and heat exchange technology, the dual heat storage, combustion and commutation system are integrated into an independent, highly integrated, high-tech and epoch-making regenerative burner.",
    type: "pdf",
    download_path: "resources/pdf/A-RC Integrated Regenerative Burner.pdf",
    image_path: "resources/images/3.jpg",
  },
  {
    product: "Zolo",
    title: "A-SHE Efficient Self-Preheating Burner",
    body: "In order to further enhance the waste heat recovery capacity of flue gas and reduce fuel cost, it adds an auxiliary heat recovery system on the basis of the original finned casing primary heat exchanger, which increases the fuel efficiency to more than 90%, which is close to the level of regenerative heat recovery system. However, it has simpler structure, lower cost, less space and better maintenance performance. Therefore, compared with the regenerative burner, it has higher performance-to-price ratio.",
    type: "pdf",
    download_path: "resources/pdf/A-SHE Efficient Self-Preheating Burner.pdf",
    image_path: "resources/images/2.jpg",
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
