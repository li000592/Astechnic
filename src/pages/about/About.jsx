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
import img4 from "../../assets/images/about/4.jpeg";

import TextSectionWithAutoPlayImages from "../../components/TextSectionWithAutoPlayImages";

const imageList = [img1, img2, img3, img4];
export default function About() {
  return (
    <div style={{}}>
      <AboutMainBoard />
      {/* <AboutIntro /> */}
      <AboutVideoSection
        title="About Us"
        body="We are proud to introduce ourselves as the premier combustion equipment company in China. As one of the companies with the most complete production and supporting of combustion control products in China, our product line covers a wide range of categories including burners, controllers, gas valves, actuators, etc.  and therefore we maintain long-term cooperative relationships with internationally renowned combustion laboratories and hire international experts as company consultants to provide intellectual support for innovation. In addition, we have established our own independent pipeline natural gas and various types of experimental furnaces, and have our own combustion system experimental and testing platform, making us one of the few companies in China that can independently design and develop burners.
              "
      />
      <TextSectionWithAutoPlayImages
        imageList={imageList}
        body=" Astechnic has always been committed to its unique features in gas safety combustion, low-nitrogen
        combustion, fuel-saving combustion, and industrial kiln combustion system automation integration. Based on
        fully absorbing the world's most advanced combustion system control theory and digesting the technology of
        its supporting products, we continue to innovate and develop a series of combustion control products
        suitable for various countries."
        body2=" We are well aware that high-quality product quality and service quality are the foundation of our
        company's existence. We rely on the active support of our employees, closely follow the market, listen to
        customer needs, and develop products that are suitable for the market. Customer satisfaction is our
        unwavering pursuit. We can provide the most competitive solutions according to different customer needs,
        and provide safe, stable, and reliable pre-sales and after-sales services to meet customer requirements."
        isImageListLeft
      />

      {/* <LearnMoreSection /> */}
      <ReadyLearnMore />
    </div>
  );
}
