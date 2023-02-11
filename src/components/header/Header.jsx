import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/Logo.jpg";
import HamburglerMenu from "./HamburglerMenu";

import "./Header.css";

export default function Header() {
  return (
    <div className="animate__animated animate__fadeInDown">
      <nav id="navigation">
        <section
          id="big-head"
          className="clearfix aos-init aos-animate"
          data-aos="fade-in"
        >
          <div className="logo">
            <Link to="/">
              <img src={Logo} />
            </Link>

            <div className="company-logo"></div>
          </div>
          <div className="menu-container">
            <div className="custom-buttons">
              <button className="products-dropdown about-link">
                <Link to="/about" style={{ color: "inherit" }}>
                  About
                </Link>
              </button>
              <button className="products-dropdown resources-link">
                <Link to="/resources" style={{ color: "inherit" }}>
                  Resources
                </Link>
              </button>
              <button className="products-dropdown resources-link">
                <Link to="/solutions" style={{ color: "inherit" }}>
                  Solutions
                </Link>
              </button>
            </div>
            <div className="main-menu">
              <ul id="menu-main-menu" className="menu">
                <li
                  id="menu-item-25"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25"
                >
                  <Link
                    to="/contactus"
                    style={{ backgroundColor: "var(--theme-color-1)" }}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>{" "}
          </div>
        </section>
        <section id="small-head">
          <div className="small-logo">
            <Link to="/">
              <img src={Logo} />
            </Link>
          </div>

          <HamburglerMenu />
        </section>
      </nav>
    </div>
  );
}
