import BottomBorderButton from "../../../components/BottomBorderButton";
import "./IntroContact.css";

export default function IntroContact() {
  return (
    <section className="intro-contact">
      <div className="contact-left">
        <h5>Ready to learn more?</h5>
        <p>
          OnPoint is a portfolio of digital solutions that deliver enhanced
          system performance through optimization technologies developed by
          proven experts in your domain.
        </p>
        {/* <button>CONTACT US</button> */}
        <div className="learn-more-button">
          <BottomBorderButton label="Contact us" />
        </div>
      </div>
      <div className="contact-right">
        <div className="triangle-brick-light-grey"></div>
        <div className="triangle-brick-dark-grey"></div>
      </div>
    </section>
  );
}
