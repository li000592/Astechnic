import React from 'react'

export default function ReadyLearnMore() {
  return (
    <div className="intro-contact" style={{ padding: "20px" }}>
    <div className="contact-left">
      <h5>Ready to learn more?</h5>
      <p>
        OnPoint is a portfolio of digital solutions that deliver enhanced system performance through optimization
        technologies developed by proven experts in your domain.
      </p>
      {/* <button>CONTACT US</button> */}
      <a
        id="contact-btn"
        className="component page-object hotspot"
        href="https://www.onpointsolutions.com/contact-us/"
        data-container-id="5f88abe989090"
      ></a>
    </div>
    <div className="contact-right">
      <div className="triangle-brick-light-grey"></div>
      <div className="triangle-brick-dark-grey"></div>
    </div>
  </div>
  )
}
