import { Grid } from "@mui/material";
import React from "react";
import ProductCard from "../../components/ProductCard";
import "./CaseStudy.css";

const caseList = [
  {
    product: "Zolo",
    title: "A-TJ Burner",
    body: "In order to further enhance the waste heat recovery capacity of flue gas and reduce fuel cost, it adds an auxiliary heat recovery system on the basis of the original finned casing primary heat exchanger, which increases the fuel efficiency to more than 90%, which is close to the level of regenerative heat recovery system. However, it has simpler structure, lower cost, less space and better maintenance performance. Therefore, compared with the regenerative burner, it has higher performance-to-price ratio.",
    type: "pdf",
    download_path: "resources/pdf/A-TJ Burner.pdf",
    image_path: "resources/images/11.png",
  },
  {
    product: "Zolo",
    title: "A-RC Integrated Regenerative Burner",
    body: "AME RC-Integrated Regenerative Burner breaks away from the basic concept of traditional regenerative combustion system: double burner + double regenerator structure. Due to the use of unique combustion and heat exchange technology, the dual heat storage, combustion and commutation system are integrated into an independent, highly integrated, high-tech and epoch-making regenerative burner.",
    type: "pdf",
    download_path: "resources/pdf/A-RC Integrated Regenerative Burner.pdf",
    image_path: "resources/images/3.jpg",
  },
];
export default function CaseStudy() {
  return (
    <div className="case-study-container">
      <section>
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className="case-study-left">
              <h2>Case Studies</h2>
              <div className="case-study-line"></div>
              <p>
                See how Astechinic’s domain expertise paired with AWS’s world class infrastructure is delivering real
                results.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6} container spacing={2}>
            {caseList.map((i, index) => (
              <Grid item xs={12} md={6}>
                <ProductCard data={i} key={index} height='350px' />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </section>
    </div>
  );
}
