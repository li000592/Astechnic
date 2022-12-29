import { Link } from "react-router-dom";
import HamburglerMenu from "./HamburglerMenu";

export default function Header() {
  return (
    <div className="animate__animated animate__fadeInDown">
      <nav id="navigation">
        <section className="clearfix aos-init aos-animate" data-aos="fade-in">
          <div className="logo">
            <Link to="/">
              <img src="https://www.onpointsolutions.com/wp-content/themes/onpoint/img/logo2.jpg" />
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
                  <Link to="/contact-us" style={{backgroundColor: "var(--theme-color-1)"}}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>{" "}
          </div>
        </section>
        <div id="products-container">
          <section className="clearfix">
            <div className="company-logo-container">
              <ul className="main_menu_2020">
                <li>
                  Smart Combustion
                  <div className="brackets middle"></div>
                  <div className="clearfix">
                    <div className="logo-item">
                      <a href="https://www.onpointsolutions.com/products/ember/">
                        <img src="/wp-content/uploads/2020/12/ember-final.jpg" />
                      </a>
                    </div>
                    <div className="logo-item">
                      <a href="https://www.onpointsolutions.com/products/zolo/">
                        <img src="/wp-content/uploads/2020/04/zolo-updated.jpg" />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </nav>
      <HamburglerMenu />
    </div>
  );
}
