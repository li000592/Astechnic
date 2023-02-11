import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.jpg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <section className="clearfix">
        <div className="left">
          <a href="https://www.acombustion.com">
            {/* <img
              src={Logo}
              style={{ width: "230px" }}
            /> */}
          </a>
        </div>
        <div className="right">
          <div className="footer-menu">
            <ul id="menu-footer-menu" className="menu">
              {/* <li
                id="menu-item-114"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-114"
              >
                <a href="https://www.acombustion.com/products/ember/">
                  Ember
                </a>
              </li>
              <li
                id="menu-item-113"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-113"
              >
                <a href="https://www.acombustion.com/products/zolo/">
                  ZoloSCAN2
                </a>
              </li> */}
              <li id="menu-item-115" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-115">
                <Link to="/contactus" style={{ backgroundColor: "var(--theme-color-1)" }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="copyright-menu">
            <ul id="menu-copyright-menu" className="menu">
              {/* <li id="menu-item-608" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-608">
                <a
                  title="Linkedin"
                  target="_blank"
                  rel="noopener"
                  href="https://www.linkedin.com/"
                >
                  Linkedin
                </a>
              </li>
              <li id="menu-item-609" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-609">
                <a title="Twitter" target="_blank" rel="noopener" href="https://twitter.com/">
                  Twitter
                </a>
              </li> */}
              <li id="menu-item-225" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-225">
                <a href="#">Copyright 2023.</a>
              </li>
              <li id="menu-item-123" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-123">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.kochind.com/terms-of-use"
                  aria-label="Terms of Use (opens in a new tab)"
                >
                  Terms of Use
                </a>
              </li>
              <li id="menu-item-122" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-122">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://privacypolicy.kochind.com/"
                  aria-label="Privacy Policy (opens in a new tab)"
                >
                  Privacy Policy
                </a>
              </li>
              <li id="menu-item-824" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-824">
                <a href="https://acombustion.com/patents/">Patents</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}
