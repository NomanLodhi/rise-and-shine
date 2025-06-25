import React from "react";

import HeroSlider from "../components/Sliders/HeroSlider";
import ServiceProgres from "../components/ServiceProgres/ServiceProgres";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Services from "../components/Services/ServicesSection";
import Videos from "../components/VideoPopUp/Videos";
import TrustedClient from "../components/TrustedClient/TrustedClient";
import Testimonial from "../components/Testimonial/Testimonial";
import PricingTable from "../components/Pricing/PricingTable";
import Blogs from "../components/Blog/Blogs";
import Teams from "../components/Team/Teams";
import AutoCounter from "../components/AutoCounter/AutoCounter";

export default function Home() {
  return (
    <>
      <HeroSlider />
      {/* <ChooseUs /> */}
      <ServiceProgres />
      <Services styleTypeTwo={true} />
      {/* <AutoCounter />
      <TrustedClient />
      <Testimonial /> */}
      {/* <Teams /> */}
      {/* <PricingTable /> */}
      {/* <Blogs styleTypeTwo={true} /> */}
    </>
  );
}
