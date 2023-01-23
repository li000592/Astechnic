import BreifIntro from "./brief_intro/BreifIntro";
import CarouselSection from "./carousel/CarouselSection";
import IndustriesIntro from "./industries_intro/IndustriesIntro";
import IntroTwo from "./intro_2/IntroTwo";
import IntroContact from "./intro_contact/IntroContact";
import MainBoard from "./mainboard/MainBoard";

export default function Landing() {
  return (
    <div className="landing-container">
      <MainBoard />
      <section style={{ marginTop: "50px" }}>
        <BreifIntro />
      </section>
      <IndustriesIntro />
      <section style={{ marginTop: "50px" }}>
        <CarouselSection />
      </section>
      <IntroTwo />
      <IntroContact />
    </div>
  );
}
