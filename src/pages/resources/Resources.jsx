import React from "react";
import PageBanner from "../../components/PageBanner";
import ReadyLearnMore from "../../components/ReadyLearnMore";
import CardList from "./CardList";
import FeaturedContent from "./FeaturedContent";

export default function Resources() {
  return (
    <>
      <PageBanner title="Resources" />
      <FeaturedContent />
      <CardList />
      <ReadyLearnMore />
    </>
  );
}
