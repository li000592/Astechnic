import { Suspense, useEffect, useState } from "react";
import "./MainBoard.css";
import mainVideo from "/src/assets/videos/2040.mp4";

export default function MainBoard() {
  const [isDisplay, setIsDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDisplay(true);
    }, 1000);
  }, []);

  return (
    <section id="video-container">
      <div className="video-filter"></div>
      <Suspense fallback={<>loading...</>}>
        <video
          preload="auto"
          webkit-playsinline="true"
          playsinline="playsinline"
          type="application/x-mpegURL"
          muted="muted"
          loop=""
          tabindex="-1"
          autoplay="autoplay"
        >
          <source src={mainVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </Suspense>

      <div className="content">
        {isDisplay && (
          <h1 className="video-title animate__animated animate__fadeInDown">INDUSTRIAL STRENGTH DIGITAL SOLUTIONS</h1>
        )}

        <div className="line-container animate__animated animate__rotateInDownLeft">
          <div className="video-line "></div>
        </div>
        {isDisplay && (
          <p className="video-text animate__animated animate__fadeInUp">
            The subject matter expertise to boost performance fast.
          </p>
        )}
      </div>

      {isDisplay && (
        <div className="green-brick-container animate__animated animate__fadeInRight">
          <div className="green-brick"></div>
          <div className="green-brick-triangle" />
        </div>
      )}

      {isDisplay && (
        <div className="more-button-container ">
          <a href="#breif-intro">
            <div className="more-button"></div>
          </a>
        </div>
      )}
    </section>
  );
}
