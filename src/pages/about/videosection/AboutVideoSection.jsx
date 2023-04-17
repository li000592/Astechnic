import React from "react";
import { Grid } from "@mui/material";
import Video from "../../../assets/videos/about_video2.mp4";
import ReactPlayer from "react-player";
import { useRef } from "react";

function AboutVideoSection() {
  const videoContainerRef = useRef(null);
  console.log(videoContainerRef.current?.offsetWidth);
  const [videoHeight, setVideoHeight] = React.useState("100%");

  React.useEffect(() => {
    const height = document.querySelector(".html5-main-video")?.offsetHeight;
    if (height) setVideoHeight(document.querySelector(".html5-main-video")?.offsetHeight);
    console.log(height);
  }, [document.querySelector(".html5-main-video")?.offsetHeight]);
  setTimeout(() => {
    setVideoHeight(document.querySelector(".html5-main-video")?.offsetHeight);
    console.log("123", document.querySelector(".html5-main-video")?.offsetHeight);
  }, 2000);
  return (
    <section>
      <Grid container>
        <Grid item xs={12} md={6}>
          <div
            className="text-section-container"
            ref={videoContainerRef}
            style={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            {/* <video
              preload="auto"
              webkit-playsinline="true"
              playsInline="playsinline"
              type="application/x-mpegURL"
              muted="muted"
              loop=""
              tabIndex="-1"
              autoPlay="autoplay"
              id="about-video"
            >
              <source src={Video} type="video/mp4" />
            </video> */}
            {/* <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/KTicL5nvKmg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe> */}
            <ReactPlayer controls playing url="https://youtu.be/VKicb72mE7k" width="100%" height={videoHeight} muted />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="text-section-container">
            {/* <h2>{title}</h2> */}
            <p>
              Astechnic has always been committed to its unique features in gas safety combustion, low-nitrogen
              combustion, fuel-saving combustion, and industrial kiln combustion system automation integration. Based on
              fully absorbing the world's most advanced combustion system control theory and digesting the technology of
              its supporting products, we continue to innovate and develop a series of combustion control products
              suitable for various countries.
            </p>
            <p>
              We are well aware that high-quality product quality and service quality are the foundation of our
              company's existence. We rely on the active support of our employees, closely follow the market, listen to
              customer needs, and develop products that are suitable for the market. Customer satisfaction is our
              unwavering pursuit. We can provide the most competitive solutions according to different customer needs,
              and provide safe, stable, and reliable pre-sales and after-sales services to meet customer requirements.
            </p>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default AboutVideoSection;
