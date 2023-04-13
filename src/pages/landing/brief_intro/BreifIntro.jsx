import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid"; // Grid version 1
import intro1 from "../../../assets/images/intro1.png";
import intro2 from "../../../assets/images/intro2.png";
import intro3 from "../../../assets/images/intro3.png";
import "./BreifIntro.css";

export default function BreifIntro() {
  const [animationTimer, setAnimationTimer] = useState(0);
  useEffect(() => {
    const time = setInterval(() => {
      setAnimationTimer((seconds) => seconds + 1000);
    }, 1000);
    setTimeout(() => {
      clearInterval(time);
    }, 10000);
  }, []);

  return (
    <Grid
      container
      spacing={2}
      className="breif-info-container"
      id="breif-intro"
      // sx={{ width: "85%", maxWidth: "1465px", margin: "0 auto" }}
    >
      {animationTimer > 500 && (
        <Grid xs={12} md={5} xl={3} className="animate__animated animate__fadeInLeft" item>
          <div style={{ alignSelf: "center" }}>
            <p className="intro-text">
              We understand that addressing climate change is a crucial issue, and we are dedicated to doing our part to
              help. At Astechnic, we fully integrate the requirements of carbon peak and carbon neutrality into our
              long-term planning and enterprise development. By doing so, we are committed to ensuring that our
              operations and products are as sustainable as possible.
            </p>
            <p className="intro-text">
              Our mission is simple: to provide innovative solutions that help reduce carbon emissions and promote
              energy efficiency. We believe that by working together, we can make a real difference in protecting our
              planet for future generations. This is what drives us every day at Astechnic.
            </p>
          </div>
        </Grid>
      )}
      <Grid xs={12} md={7} xl={9} item>
        <Grid container spacing={1}>
          {animationTimer > 1000 && (
            <Grid xs={4} item className="animate__animated  animate__fadeInDown">
              <div className="image-container intro1-img" />
              {/* <img src={intro1} alt="" /> */}
            </Grid>
          )}
          {animationTimer > 2000 && (
            <Grid xs={4} item className="animate__animated  animate__fadeInUp">
              <div className="image-container intro2-img" />
              {/* <img src={intro2} alt="" /> */}
            </Grid>
          )}
          {animationTimer > 3000 && (
            <Grid xs={4} item className="animate__animated  animate__fadeInDown">
              <div className="image-container intro3-img" />
              {/* <img src={intro3} alt="" /> */}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
