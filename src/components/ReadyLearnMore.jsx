import React from "react";
import { Link } from "react-router-dom";
import BottomBorderButton from "./BottomBorderButton";

export default function ReadyLearnMore() {
  return (
    <div className="intro-contact">
      <div className="contact-left">
        <h5>Ready to learn more?</h5>
        <p>
          Astechnic is a portfolio of digital solutions that deliver enhanced system performance through optimization
          technologies developed by proven experts in your domain.
        </p>
        <div style={{ padding: "20px" }}>
          <Link to={"/contactus"}>
            <BottomBorderButton label="contact us." />
          </Link>
        </div>
      </div>
      <div className="contact-right">
        <div className="triangle-brick-light-grey"></div>
        <div className="triangle-brick-dark-grey"></div>
      </div>
    </div>
  );
}
