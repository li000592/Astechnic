import React from "react";
import LeaveMessage from "../../components/LeaveMessage";
import PageBanner from "../../components/PageBanner";
import ReadyLearnMore from "../../components/ReadyLearnMore";
import TextSection from "../../components/TextSection";
import CarouselSection from "../landing/carousel/CarouselSection";
import CaseStudy from "./CaseStudy";

export default function Solutions() {
  return (
    <div>
      <PageBanner title="Solutions" />
      <TextSection
        title="The right technology to perform and transform."
        body="Building each of our OnPoint solutions quickly and in a highly scalable and long-term cost-effective environment requires harnessing the right tools and resources. To that end, we are leveraging AWS’s world class infrastructure. Being multi-tenant, in the cloud, in a rapidly maturing environment requires us to use these kinds of cutting-edge technologies. With EMBER, we analyze burner data using domain expertise to provide insights and recommendations that offer increased reliability and reduced maintenance for our customers."
      />
      <CarouselSection />
      <CaseStudy />

      <ReadyLearnMore />
    </div>
  );
}
