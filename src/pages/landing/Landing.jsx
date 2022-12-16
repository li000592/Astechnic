import BreifIntro from "./brief_intro/BreifIntro";
import CarouselSection from "./carousel/CarouselSection";
import IndustriesIntro from "./industries_intro/IndustriesIntro";
import IntroTwo from "./intro_2/IntroTwo";
import IntroContact from "./intro_contact/IntroContact";
import MainBoard from "./mainboard/mainBoard";

export default function Landing() {
  return (
    <div className="landing-container">
      <MainBoard />
      <BreifIntro />
      <IndustriesIntro />
      <CarouselSection />
      <IntroTwo />
      <IntroContact />
    </div>
  );
}
