import React from "react";
import LeaveMessage from "../../components/LeaveMessage";
import PageBanner from "../../components/PageBanner";
import ReadyLearnMore from "../../components/ReadyLearnMore";
import TextSection from "../../components/TextSection";
import CarouselSection from "../landing/carousel/CarouselSection";
import CaseStudy from "./CaseStudy";
import TextSectionWithAutoPlayImages from "../../components/TextSectionWithAutoPlayImages";
import Image1 from "../../assets/images/solutions/1.jpg";
import Image2 from "../../assets/images/solutions/2.jpg";
import Image3 from "../../assets/images/solutions/3.jpg";
import Image4 from "../../assets/images/solutions/4.jpg";
import Image5 from "../../assets/images/solutions/5.jpg";
import Image6 from "../../assets/images/solutions/6.jpg";

export default function Solutions() {
  return (
    <div>
      <PageBanner title="Solutions" />
      <TextSectionWithAutoPlayImages
        title="The right technology to perform and transform."
        body="Building each of our Astechnic solutions quickly and in a highly scalable and long-term cost-effective environment requires harnessing the right tools and resources.  we analyze burner data using domain expertise to provide insights and recommendations that offer increased reliability and reduced maintenance for our customer."
        body2="We invite you to join us in our mission to create a more sustainable future. Whether you're looking for low-emission products or innovative energy solutions, we are here to help. 
              Contact us today to learn more about how we can work together to build a better tomorrow.
              "
        imageList={[Image1, Image2, Image3, Image4, Image5, Image6]}
      />
      <CarouselSection />
      <CaseStudy />

      <ReadyLearnMore />
    </div>
  );
}
