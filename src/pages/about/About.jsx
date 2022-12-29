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
        title="How we deliver."
        body="OnPoint delivers results in a variety of industrial domains around the globe. The key to our proven performance is our unique combination of data-driven digital expertise and real-world, in-the-field industry experience. As part of Koch Engineered Solutions (KES), we bring a long history in refining and petrochemical markets, emission management, water treatment and other industrial applications to every project. We understand your industry, your challenges, and opportunities."
      />
      <LearnMoreSection />
      <ReadyLearnMore />
    </div>
  );
}
