import React from "react";
import PricingCard from "./PricingCard";
import SectionHeading from "../SectionHeading/SectionHeading";

const pricingData = [
  {
    title: "Basic",
    discountPrice: "$150",
    options: [
      "Exterior Ultra Foam Wash",
      "Wheel & Tire Cleaning",
      "Bug Splatter Removal",
      "Tire Shine Coating",
      "Glass Cleaning (Windows, Mirrors)",
      "Interior Vacuuming",
      "Dashboard & Trim Cleaning",
      "Pet Hair Removal",
      "Seat Belt Cleaning",
      "Basic Paint Correction (Single stage)",
    ],
    category:'Cars',
    isActive: false,
    aosDelay: 0,
  },
  {
    title: "Essential",
    discountPrice: "$190",
    options: [
      "Everything in Basic Package, plus",
      "Clay Bar Treatment",
      "Interior Shampoo",
      "Interior Trim Polish",
      "Door Panel & Cupholder Cleaning",
      "Paint Protection Spray (6-month durability)"
    ],
    category:'Cars',
    isActive: false,
    aosDelay: 50,
  },
  {
    title: "Premium",
    discountPrice: "$230",
    options: [
      "Everything in Essential Package, plus",
      "Steam Cleaning (Seats, Carpets, Mats)",
      "Headliner Spot Cleaning",
      "Engine Bay Wipe-Down",
      "Rain Repellent on Glass",
      "Undercarriage Rinse",
      "Interior Deodorizer Treatment",
      "Wheel Detailing",
      "Trim Restoration",
      "Advanced Paint Correction (Multi-stage)"
    ],
    category:'Cars',
    isActive: true,
    aosDelay: 100,
  },
  {
    title: "Basic",
    discountPrice: "$170",
    options: [
      "Exterior Ultra Foam Wash",
      "Wheel & Tire Cleaning",
      "Bug Splatter Removal",
      "Tire Shine Coating",
      "Glass Cleaning (Windows, Mirrors)",
      "Interior Vacuuming",
      "Dashboard & Trim Cleaning",
      "Pet Hair Removal",
      "Seat Belt Cleaning",
      "Basic Paint Correction (Single stage)",
    ],
    category:'SUVs',
    isActive: false,
    aosDelay: 0,
  },
  {
    title: "Essential",
    discountPrice: "$210",
    options: [
      "Everything in Basic Package, plus",
      "Clay Bar Treatment",
      "Interior Shampoo",
      "Interior Trim Polish",
      "Door Panel & Cupholder Cleaning",
      "Paint Protection Spray (6-month durability)"
    ],
    category:'SUVs',
    isActive: false,
    aosDelay: 50,
  },
  {
    title: "Premium",
    discountPrice: "$260",
    options: [
      "Everything in Essential Package, plus",
      "Steam Cleaning (Seats, Carpets, Mats)",
      "Headliner Spot Cleaning",
      "Engine Bay Wipe-Down",
      "Rain Repellent on Glass",
      "Undercarriage Rinse",
      "Interior Deodorizer Treatment",
      "Wheel Detailing",
      "Trim Restoration",
      "Advanced Paint Correction (Multi-stage)"
    ],
    category:'SUVs',
    isActive: true,
    aosDelay: 100,
  },
  {
    title: "Basic",
    discountPrice: "$200",
    options: [
      "Exterior Ultra Foam Wash",
      "Wheel & Tire Cleaning",
      "Bug Splatter Removal",
      "Tire Shine Coating",
      "Glass Cleaning (Windows, Mirrors)",
      "Interior Vacuuming",
      "Dashboard & Trim Cleaning",
      "Pet Hair Removal",
      "Seat Belt Cleaning",
      "Basic Paint Correction (Single stage)",
    ],
    category:'Trucks',
    isActive: false,
    aosDelay: 0,
  },
  {
    title: "Essential",
    discountPrice: "$240",
    options: [
      "Everything in Basic Package, plus",
      "Clay Bar Treatment",
      "Interior Shampoo",
      "Interior Trim Polish",
      "Door Panel & Cupholder Cleaning",
      "Paint Protection Spray (6-month durability)"
    ],
    category:'Trucks',
    isActive: false,
    aosDelay: 50,
  },
  {
    title: "Premium",
    discountPrice: "$280",
    options: [
      "Everything in Essential Package, plus",
      "Steam Cleaning (Seats, Carpets, Mats)",
      "Headliner Spot Cleaning",
      "Engine Bay Wipe-Down",
      "Rain Repellent on Glass",
      "Undercarriage Rinse",
      "Interior Deodorizer Treatment",
      "Wheel Detailing",
      "Trim Restoration",
      "Advanced Paint Correction (Multi-stage)"
    ],
    category:'Trucks',
    isActive: true,
    aosDelay: 100,
  },

];
const cars=pricingData.filter(data=>data.category=='Cars')
const SUVs=pricingData.filter(data=>data.category=='SUVs')
const Trucks=pricingData.filter(data=>data.category=='Trucks')
console.log(cars)
const PricingTable = ({ type }) => {
  return (
    <>
      {type ? (
        <div className="ak-height-75 ak-height-lg-75"></div>
      ) : (
        <div className="ak-height-160 ak-height-lg-80"></div>
      )}
      <div className="ak-bg pricing-section-bg-img">
        <div className="ak-height-100 ak-height-lg-50"></div>
        <div className="container">
          {type || (
            <>
              <SectionHeading
                type={true}
                bgText="Pricing"
                title="Pricing"
                desp="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
              />
              <div className="ak-height-50 ak-height-lg-50"></div>
            </>
          )}
<ul class="nav nav-tabs justify-content-center border-0 nav-style" id="myTab" role="tablist">
  <li class="nav-item " role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Cars</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">SUVs</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Trucks</button>
  </li>
  
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active py-5" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
    <div className="pricing">
            {
            
            cars.map((data,index)=> (
             
            <PricingCard
                key={index}
                title={data.title}
                discountPrice={data.discountPrice}
                options={data.options}
                isActive={data.isActive}
                aosDelay={data.aosDelay}
              />
            ))
            }
          </div>
  </div>
  <div class="tab-pane fade py-5" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
    <div className="pricing">
            {
            
            SUVs.map((data,index)=> (
             
            <PricingCard
                key={index}
                title={data.title}
                discountPrice={data.discountPrice}
                options={data.options}
                isActive={data.isActive}
                aosDelay={data.aosDelay}
              />
            ))
            }
          </div>
  </div>
  <div class="tab-pane fade py-5" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
     <div className="pricing">
            {
            
            Trucks.map((data,index)=> (
             
            <PricingCard
                key={index}
                title={data.title}
                discountPrice={data.discountPrice}
                options={data.options}
                isActive={data.isActive}
                aosDelay={data.aosDelay}
              />
            ))
            }
          </div>
  </div>
  <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
</div>
          
        </div>
        <div className="ak-height-100 ak-height-lg-80"></div>
      </div>
    </>
  );
};

export default PricingTable;
