import { Suspense } from "react";
import mainVideo from "/src/assets/videos/about_video.mp4";
import "./AboutMainBoard.css";
export default function AboutMainBoard() {
  return (
    <div id="about-video-container">
      <div className="green-brick-containerr">
        <div className="green-brick-triangle" />
      </div>
      <Suspense fallback={<>loading...</>}>
        <div className="video-container">
          <video
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
            <source src={mainVideo} type="video/mp4" />
          </video>
        </div>
      </Suspense>
      <div className="about-main-content">
        <h1 className="about-video-title animate__animated animate__fadeInDown blue">
          COMBUSTION
          <br />
          SOLUTIONS,
        </h1>
        <h1 className="about-video-title animate__animated animate__fadeInDown">
          REAL-WORLD
          <br />
          RESULTS.
        </h1>
      </div>
      <div className="green-brick-container animate__animated animate__fadeInRight">
        <div className="green-brick"></div>
        <div className="green-brick-triangle" />
      </div>
    </div>
  );
}
