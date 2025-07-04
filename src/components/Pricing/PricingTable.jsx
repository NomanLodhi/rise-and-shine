import React from "react";
import PricingCard from "./PricingCard";
import SectionHeading from "../SectionHeading/SectionHeading";
import Regularpackages from "./Regularpackages";
import packages from '../../dataJson/packages.json'






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

 <div className="container py-5  ">
<SectionHeading
                title={"Popular Packages (For Full Detailing)"}
                />
 </div>
        
          
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
<div className="price-table-container">
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active py-5" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
     <table className="table table-striped table-hover ">
  <thead>
    <tr className="row-head">
      <th scope="col"> </th>
      <th scope="col"> <h4><p class="rounded-top-3 text-center p-3 text-bg-heading">Basic</p></h4></th>
      <th scope="col"> <h4><p class="rounded-top-3 text-center p-3 text-bg-heading">Essentials</p></h4></th>
      <th scope="col"> <h4><p class="rounded-top-3 text-center p-3 text-bg-heading">Premium</p></h4></th>
    </tr>
      
  </thead>
  <tbody>
    <tr>
      <td scope="col"></td>
      <td scope="col" className="text-center">$150</td>
      <td scope="col" className="text-center">$190</td>
      <td scope="col" className="text-center">$230</td>
    </tr>
    {
      packages.map((data)=>(
        <>
        <tr>
      <th scope="row" >{data.name}</th>
      <td className="text-center border">{
        data.includes.find(basic=> basic=='basic')?(<i class="fa-solid fa-check text-success"></i>):(<i class="fa-solid fa-xmark text-danger"></i>)
        }
      </td>
      <td className="text-center border">{
        data.includes.find(essential=> essential=='essential')?(<i class="fa-solid fa-check text-success"></i>):(<i class="fa-solid fa-xmark text-danger"></i>)
        }
      </td>
      <td className="text-center border">{
        data.includes.find(premium=> premium=='premium')?(<i class="fa-solid fa-check text-success"></i>):(<i class="fa-solid fa-xmark text-danger"></i>)
        }
      </td>
     
    </tr>
        </>
      ))
    }
  </tbody>
</table>
    
   

    </div>
    <div class="tab-pane fade py-5" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
    <table className="table table-striped table-hover table-dark ">
  <thead>
    <tr className="row-head">
      <th scope="col"> </th>
      <th scope="col"> <h4><p class="rounded-top-3 text-center p-3 text-bg-heading">Basic</p></h4></th>
      <th scope="col"> <h4><p class="rounded-top-3 text-center p-3 text-bg-heading">Essentials</p></h4></th>
      <th scope="col"> <h4><p class="rounded-top-3 text-center p-3 text-bg-heading">Premium</p></h4></th>
    </tr>
      
  </thead>
  <tbody>
    <tr>
      <td scope="col"></td>
      <td scope="col" className="text-center">$170</td>
      <td scope="col" className="text-center">$210</td>
      <td scope="col" className="text-center">$260</td>
    </tr>
    {
      packages.map((data)=>(
        <>
        <tr>
      <th scope="row" >{data.name}</th>
      <td className="text-center border">{
        data.includes.find(basic=> basic=='basic')?(<i class="fa-solid fa-check text-success"></i>):(<i class="fa-solid fa-xmark text-danger"></i>)
        }
      </td>
      <td className="text-center border">{
        data.includes.find(essential=> essential=='essential')?(<i class="fa-solid fa-check text-success"></i>):(<i class="fa-solid fa-xmark text-danger"></i>)
        }
      </td>
      <td className="text-center border">{
        data.includes.find(premium=> premium=='premium')?(<i class="fa-solid fa-check text-success"></i>):(<i class="fa-solid fa-xmark text-danger"></i>)
        }
      </td>
     
    </tr>
        </>
      ))
    }
  </tbody>
</table>
  </div>
  <div class="tab-pane fade py-5" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
    <table className="table table-striped table-hover ">
  <thead>
    <tr className="row-head">
      <th scope="col"> </th>
      <th scope="col"> <h4><p class="rounded-top-3 text-center p-3 text-bg-heading">Basic</p></h4></th>
      <th scope="col"> <h4><p class="rounded-top-3 text-center p-3 text-bg-heading">Essentials</p></h4></th>
      <th scope="col"> <h4><p class="rounded-top-3 text-center p-3 text-bg-heading">Premium</p></h4></th>
    </tr>
      
  </thead>
  <tbody>
    <tr>
      <td scope="col"></td>
      <td scope="col" className="text-center">$200</td>
      <td scope="col" className="text-center">$240</td>
      <td scope="col" className="text-center">$280</td>
    </tr>
    {
      packages.map((data)=>(
        <>
        <tr>
      <th scope="row" >{data.name}</th>
      <td className="text-center border">{
        data.includes.find(basic=> basic=='basic')?(<i class="fa-solid fa-check text-success"></i>):(<i class="fa-solid fa-xmark text-danger"></i>)
        }
      </td>
      <td className="text-center border">{
        data.includes.find(essential=> essential=='essential')?(<i class="fa-solid fa-check text-success"></i>):(<i class="fa-solid fa-xmark text-danger"></i>)
        }
      </td>
      <td className="text-center border">{
        data.includes.find(premium=> premium=='premium')?(<i class="fa-solid fa-check text-success"></i>):(<i class="fa-solid fa-xmark text-danger"></i>)
        }
      </td>
     
    </tr>
        </>
      ))
    }
  </tbody>
</table>
  </div>
  </div>
  
        </div>
</div>

 
        </div>
        <div className="container-fluid bg-dark py-5">
          <div className="container">
            <div className="row">
            <div className="col-lg-7 p-3">
              <h1 className="text-light display-3 fw-bold" >Got a project?</h1>
            </div>
            <div className="col-lg-4 p-4 d-flex align-items-center">
          <a className="btn  btn-light rounded-pill px-4" href="https://form.jotform.com/251835755283263" target="_main">Book an appointment</a>

            </div>
          </div>
          </div>
        </div>
        <Regularpackages/>
        <div className="ak-height-100 ak-height-lg-80"></div>
     
    </>
  );
};

export default PricingTable;
