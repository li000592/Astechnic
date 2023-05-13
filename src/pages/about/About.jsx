import LeaveMessage from "../../components/LeaveMessage";
import ReadyLearnMore from "../../components/ReadyLearnMore";
import TextSection from "../../components/TextSection";
import AboutIntro from "./aboutintro/AboutIntro";
import AboutMainBoard from "./aboutmainboard/AboutMainBoard";
import LearnMoreSection from "./introLearnMore/LearnMoreSection";
import AboutVideoSection from "./videosection/AboutVideoSection";
import img1 from "../../assets/images/about/1.jpg";
import img2 from "../../assets/images/about/2.jpg";
import img3 from "../../assets/images/about/3.jpg";
import TextSectionWithAutoPlayImages from "../../components/TextSectionWithAutoPlayImages";

const imageList = [img1, img2, img3];
export default function About() {
  return (
    <div style={{}}>
      <AboutMainBoard />
      {/* <AboutIntro /> */}

      <TextSectionWithAutoPlayImages
        title="About Us"
        body="We are proud to introduce ourselves as the premier combustion equipment company in China. As one of the companies with the most complete production and supporting of combustion control products in China, our product line covers a wide range of categories including burners, controllers, gas valves, actuators, etc.  and therefore we maintain long-term cooperative relationships with internationally renowned combustion laboratories and hire international experts as company consultants to provide intellectual support for innovation. In addition, we have established our own independent pipeline natural gas and various types of experimental furnaces, and have our own combustion system experimental and testing platform, making us one of the few companies in China that can independently design and develop burners.
              "
        imageList={imageList}
      />
      <AboutVideoSection />
      {/* <LearnMoreSection /> */}
      <ReadyLearnMore />
    </div>
  );
}
