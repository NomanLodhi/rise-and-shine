import React from "react";

import PricingTable from "../components/Pricing/PricingTable";
import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import AppointmentForm from "../components/AppointmentForm/AppointmentForm";

export default function Pricing() {
  return (
    <>
      <CommonPageHero title={"Packages"} />
      <PricingTable type={true} />
      {/* <AppointmentForm /> */}
    </>
  );
}
