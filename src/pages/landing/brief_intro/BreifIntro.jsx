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
    clearInterval(time)
   }, 10000);
    
  }, []);
  console.log(animationTimer);
  return (
    <Grid
      container
      spacing={2}
      className="breif-info-container"
      id="breif-intro"
      sx={{ width: "85%", maxWidth: "1465px", margin: "0 auto" }}
    >
      {animationTimer > 500 && (
        <Grid xs={4} className="animate__animated animate__fadeInLeft" item sx={{ alignSelf: "center" }}>
          <p className="intro-text">
            Today, the expectation to operate at increasingly optimal levels using digital technology has never been
            higher. That’s where we come in.
          </p>
          <p className="intro-text">
            OnPoint is a portfolio of digital solutions that delivers enhanced system performance through optimization
            technologies developed by proven experts in your domain.
          </p>
        </Grid>
      )}
      <Grid xs={8} container item spacing={2}>
        {animationTimer > 1000 && (
          <Grid xs={4} item className="animate__animated  animate__fadeInDown">
            <img src={intro3} alt="" />
          </Grid>
        )}
        {animationTimer > 2000 && (
          <Grid xs={4} item className="animate__animated  animate__fadeInUp">
            <img src={intro2} alt="" />
          </Grid>
        )}
        {animationTimer > 3000 && (
          <Grid xs={4} item className="animate__animated  animate__fadeInDown">
            <img src={intro1} alt="" />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}
