import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading';

export default function Regularpackages() {
  const pricingData = [
  'Exterior Ultra Foam Wash',
  'Interior Vacuuming',
  'Dashboard Wipe Down',
  'Console Wipe Down',
  'Interior Shampoo',
  'Interior Trim Polish',
  'Steam Cleaning (Seats/Carpets)',
  'Engine Bay Wipe-Down (extra charges for pet hair)',
  'Interior Deodorizer',
  'Headliner Spot Cleaning',
  'Basic Paint Correction',
];

;
const vehicleNames=['Cars','SUVs','Trucks']
const basicPrices=['$150','$170','$200']
const essentialPrices=['$190','$210','$240']
const premiumPrices=['$230','$260','$280']
  return (
    <div>
        <div className="container">
            
                <div className="my-5">
                    <SectionHeading
                title={"Regular Packages (Maintenance Level)"}
                />
                </div>
              <div className="price-table-container">
                    <div className="row t-package">
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
      </div>
          
          
          
         </div>
              </div>
    
        </div>
    </div>
  )
}
