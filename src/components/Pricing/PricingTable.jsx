import React from "react";
import PricingCard from "./PricingCard";
import SectionHeading from "../SectionHeading/SectionHeading";
import Regularpackages from "./Regularpackages";

const pricingData = [
  'Exterior Ultra Foam Wash',
  'Wheel & Tire Cleaning',
  'Bug Splatter Removal',
  'Tire Shine Coating',
  'Glass Cleaning (Windows, Mirrors)',
  'Interior Vacuuming',
  'Dashboard & Trim Cleaning',
  'Pet Hair Removal',
  'Seat Belt Cleaning',
  'Basic Paint Correction (Single stage)',
  'Clay Bar Treatment',
  'Interior Shampoo',
  'Interior Trim Polish',
  'Door Panel & Cupholder Cleaning',
  'Paint Protection Spray (6-month durability)',
  'Steam Cleaning (Seats, Carpets, Mats)',
  'Headliner Spot Cleaning',
  'Engine Bay Wipe-Down',
  'Rain Repellent on Glass',
  'Undercarriage Rinse',
  'Interior Deodorizer Treatment',
  'Wheel Detailing',
  'Trim Restoration',
  'Advanced Paint Correction (Multi-stage)',
];
;
const vehicleNames=['Cars','SUVs','Trucks']
const basicPrices=['$150','$170','$200']
const essentialPrices=['$190','$210','$240']
const premiumPrices=['$230','$260','$280']

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
{/* <ul class="nav nav-tabs justify-content-center border-0 nav-style" id="myTab" role="tablist">
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
</div> */}
 <div className="container py-5  ">
<SectionHeading
                title={"Popular Packages (For Full Detailing)"}
                />
 </div>
        <div className="price-table-container">
           <div className="row t-package ">
         <div className="col-3 p-0">
          <p className="p-2" style={{borderBottom:"1px solid red"}}>Packages</p>
          <p className="p-2" style={{borderBottom:"1px solid red"}}>Vehicles</p>
          <p className="p-2" >Prices</p>
         </div>
         <div className="col-3">
          <p className="text-center p-2">Basic</p>
          <div className="row">
           {
            vehicleNames.map(name=>(
               <div className="col-4 text-center p-2">{name}</div>
              ))
            }
          </div>
          <div className="row">
           {
            basicPrices.map(price=>(
               <div className="col-4 text-center p-2">{price}</div>
              ))
            }
          </div>
            
         </div>
         <div className="col-3">
          <p className="text-center p-2">Essentials</p>
         <div className="row">
           {
            vehicleNames.map(name=>(
               <div className="col-4 text-center p-2">{name}</div>
              ))
            }
          </div>
           <div className="row">
           {
            essentialPrices.map(price=>(
               <div className="col-4 text-center p-2">{price}</div>
              ))
            }
          </div>
         </div>
         <div className="col-3">
          <p className="text-center p-2">Premium</p>
          <div className="row">
           {
            vehicleNames.map(name=>(
               <div className="col-4 text-center p-2">{name}</div>
              ))
            }
          </div>
           <div className="row">
           {
            premiumPrices.map(price=>(
               <div className="col-4 text-center p-2">{price}</div>
              ))
            }
          </div>
         </div>
         </div>
         <h5 className="my-3">Includes:</h5>
         <div className="row t-package">
          <div className="col-3 p-0">
       {
        pricingData.map(name=>(
          <p className="p-2" style={{borderBottom:'1px solid red'}}>{name}</p>
        ))
       }
          </div>
          <div className="col-3 p-0">
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
          </div>
          <div className="col-3 p-0">
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
          </div>
          <div className="col-3 p-0">
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
            <p className="p-2 text-center" style={{borderBottom:'1px solid red'}}>
              <img src="/assets/img/icon/price-table-icon.svg"  alt="..." />
            </p>
          </div>
          
          
         </div>
        </div>
        <Regularpackages/>
        </div>
        <div className="ak-height-100 ak-height-lg-80"></div>
      </div>
    </>
  );
};

export default PricingTable;
