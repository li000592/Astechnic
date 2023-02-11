import LeaveMessage from "../../components/LeaveMessage";
import ReadyLearnMore from "../../components/ReadyLearnMore";
import TextSection from "../../components/TextSection";
import AboutIntro from "./aboutintro/AboutIntro";
import AboutMainBoard from "./aboutmainboard/AboutMainBoard";
import LearnMoreSection from "./introLearnMore/LearnMoreSection";

export default function About() {
  return (
    <div style={{}}>
      <AboutMainBoard />
      {/* <AboutIntro /> */}
      <TextSection
        title="About Us"
        body=" Astechnic is a high-tech enterprise in China. Astechnic has always been committed to becoming one of the professional combustion system integrators with comprehensive competitiveness in China. We can provide comprehensive combustion system solutions based on safety, energy saving and environmental protection, and supply complete combustion control product. With its professional R&D team and professional R&D test equipment, Astechnic at the forefront of the 
        industry in terms of low-nitrogen combustion.
        "
      />
      {/* <LearnMoreSection /> */}
      <ReadyLearnMore />
    </div>
  );
}
