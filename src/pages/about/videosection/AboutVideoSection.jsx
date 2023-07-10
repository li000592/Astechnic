import React from "react";
import { Grid } from "@mui/material";
import Video from "../../../assets/videos/about_video2.mp4";
import ReactPlayer from "react-player";
import { useRef } from "react";
import { OffcanvasBody } from "react-bootstrap";

function AboutVideoSection({ body, body2, title }) {
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
  }, 2000);
  return (
    <section>
      <Grid container>
        <Grid item xs={12} md={6}>
          <div className="text-section-container">
            <h2>{title}</h2>
            <p>{body}</p>
            <p>{body2} </p>
          </div>
        </Grid>
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
            <ReactPlayer controls playing url="https://youtu.be/eHxOfeyu3Pc" width="100%" height={videoHeight} muted />
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default AboutVideoSection;
