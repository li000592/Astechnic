import React, { useState } from "react";
import { Grid } from "@mui/material";
import { useId } from "react";
import ProductCard from "../../components/ProductCard";
import CardFilters from "./CardFilters";

const resourcesList = [
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
    image_path: "",
  },
  {
    product: "Zolo",
    title: "A-SHE Efficient Self-Preheating Burner",
    body: "A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces…A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces to allevia",
    type: "pdf",
    download_path: "resources/A-SHE Efficient Self-Preheating Burner.pdf",
    image_path: "",
  },
  {
    product: "Zolo",
    title: "A-STOR Regenerative Burner",
    body: "A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces…A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces to allevia",
    type: "pdf",
    download_path: "resources/A-STOR Regenerative Burner.pdf",
    image_path: "",
  },
  {
    product: "Zolo",
    title: "A-TJ Burner",
    body: "A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces…A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces to allevia",
    type: "pdf",
    download_path: "resources/A-TJ Burner.pdf",
    image_path: "",
  },
  {
    product: "Zolo",
    title: "A-U Radiation Tube Burner Series",
    body: "A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces…A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces to allevia",
    type: "pdf",
    download_path: "resources/A-U Radiation Tube Burner Series.pdf",
    image_path: "",
  },
  {
    product: "Zolo",
    title: "ANX-CM Burner",
    body: "A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces…A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces to allevia",
    type: "pdf",
    download_path: "resources/ANX-CM Burner.pdf",
    image_path: "",
  },
  {
    product: "Zolo",
    title: "ASD Integral Burner",
    body: "A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces…A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces to allevia",
    type: "pdf",
    download_path: "resources/ASD Integral Burner.pdf",
    image_path: "",
  },
  {
    product: "Zolo",
    title: "ASF Double Orifice Plate Burner",
    body: "A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces…A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces to allevia",
    type: "pdf",
    download_path: "resources/ASF Double Orifice Plate Burner.pdf",
    image_path: "",
  },
  {
    product: "Zolo",
    title: "ASH Gas Fine Regulating Valve",
    body: "A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces…A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces to allevia",
    type: "pdf",
    download_path: "resources/ASH Gas Fine Regulating Valve.pdf",
    image_path: "",
  },
  {
    product: "Zolo",
    title: "ASR Split Burner",
    body: "A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces…A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces to allevia",
    type: "pdf",
    download_path: "resources/ASR Split Burner.pdf",
    image_path: "",
  },
  {
    product: "Zolo",
    title: "AST-40 Ignition Burner",
    body: "A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces…A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces to allevia",
    type: "pdf",
    download_path: "resources/AST-40 Ignition Burner.pdf",
    image_path: "",
  },
  {
    product: "Zolo",
    title: "AT 50 Electric Actuator",
    body: "A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces…A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces to allevia",
    type: "pdf",
    download_path: "resources/AT 50 Electric Actuator.pdf",
    image_path: "",
  },
  {
    product: "Zolo",
    title: "AT-08 Ignition Transformer",
    body: "A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces…A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces to allevia",
    type: "pdf",
    download_path: "resources/AT-08 Ignition Transformer.pdf",
    image_path: "",
  },
  {
    product: "Zolo",
    title: "AT31 Electric Actuator",
    body: "A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces…A major ethylene producer benefited over $1MM in the first year by installing Ember on 7 furnaces to allevia",
    type: "pdf",
    download_path: "resources/AT31 Electric Actuator.pdf",
    image_path: "",
  },
];
export default function CardList() {
  const [data, setData] = useState(resourcesList);
  const listIds = useId();

  return (
    <section style={{ marginTop: "32px" }}>
      <Grid container>
        <Grid item xs={12} md={3}>
          <CardFilters />
        </Grid>

        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            {data.map((element, index) => (
              <Grid item xs={12} md={6} xl={4}>
                <ProductCard data={element} key={listIds + index} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}
