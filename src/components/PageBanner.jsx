import React from "react";
import "./PageBanner.css";

export default function PageBanner({ title = "Resources" }) {
  return (
    <>
      <div className="background-div">
        <div className="page-banner-contianer">
          <section className="triangle-div">
            <h1>Astechnic</h1>
            <h1>{title}</h1>
          </section>
        </div>
      </div>
      <div className="banner-blue-brick-container animate__animated animate__fadeInRight">
        <div className="banner-blue-brick"></div>
        <div className="banner-blue-brick-triangle"></div>
      </div>
    </>
  );
}
