import React from "react";
import PricingCard from "./PricingCard";
import SectionHeading from "../SectionHeading/SectionHeading";
import Regularpackages from "./Regularpackages";
import packages from '../../dataJson/packages.json'
import Imgbasic from '../../../public/assets/img/Package/Basic Image.png'
import Imgessential from '../../../public/assets/img/Package/Essential Package.png'
import Imgpremium from '../../../public/assets/img/Package/Premium Package.png'





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
   
    <div className="row justify-content-center" >
      <div className="col-lg-4 col-md-6 container-cards">
        <div className="pricing-card-container" data-aos="fade-up">
  <div className="pricing-card">
    
    <div className="pricing-card-front">
      <div className="pricing-heading text-center">
        <p className="title">Basic</p>
        <h2 className="discount-price">$150</h2>
      </div>
      <div className="option-all">
        {packages.basic.map((data, i) => (
          <div className="option" key={i}>
            <div className="icon mx-2">
              <img src="/assets/img/icon/price-table-icon.svg" alt="..." />
            </div>
            <p className="title">{data}</p>
         
          </div>
        ))}
      </div>
          
    </div>

    
    <div className="pricing-card-back">
      <img src={Imgbasic} alt="cover" className="cover" />
      <a
        href="https://form.jotform.com/251835755283263"
        target="_blank"
        className="btn-package-normal btn-back"
      >
        Book now
      </a>
    </div>
  </div>
</div>


      </div>
      <div className="col-lg-4 col-md-6 container-cards">
          <div className="pricing-card-container" data-aos="fade-up">
  <div className="pricing-card">
    
    <div className="pricing-card-front">
      <div className="pricing-heading text-center">
        <p className="title">Essential</p>
        <h2 className="discount-price">$190</h2>
      </div>
      <div className="option-all">
        {packages.essential.map((data, i) => (
          <div className="option" key={i}>
            <div className="icon mx-2">
              <img src="/assets/img/icon/price-table-icon.svg" alt="..." />
            </div>
            <p className="title">{data}</p>
         
          </div>
        ))}
      </div>
          
    </div>

    
    <div className="pricing-card-back">
      <img src={Imgessential} alt="cover" className="cover" />
      <a
        href="https://form.jotform.com/251835755283263"
        target="_blank"
        className="btn-package-normal btn-back"
      >
        Book now
      </a>
    </div>
  </div>
</div>
      </div>
      <div className="col-lg-4 col-md-6 container-cards">
          <div className="pricing-card-container" data-aos="fade-up">
  <div className="pricing-card">
    
    <div className="pricing-card-front active">
      <div className="pricing-heading text-center">
        <p className="title">Premium</p>
        <h2 className="discount-price">$230</h2>
      </div>
      <div className="option-all">
        {packages.premium.map((data, i) => (
          <div className="option" key={i}>
            <div className="icon mx-2">
              <img src="/assets/img/icon/price-table-icon.svg" alt="..." />
            </div>
            <p className="title">{data}</p>
         
          </div>
        ))}
      </div>
          
    </div>

    
    <div className="pricing-card-back">
      <img src={Imgpremium} alt="cover" className="cover" />
      <a
        href="https://form.jotform.com/251835755283263"
        target="_blank"
        className="btn-package-normal btn-back"
      >
        Book now
      </a>
    </div>
  </div>
</div>
      </div>
    </div>
   

    </div>
    <div class="tab-pane fade py-5" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
     <div className="row justify-content-center">
      <div className="col-lg-4 col-md-6 container-cards">
          <div className="pricing-card-container" data-aos="fade-up">
  <div className="pricing-card">
    
    <div className="pricing-card-front">
      <div className="pricing-heading text-center">
        <p className="title">Basic</p>
        <h2 className="discount-price">$170</h2>
      </div>
      <div className="option-all">
        {packages.basic.map((data, i) => (
          <div className="option" key={i}>
            <div className="icon mx-2">
              <img src="/assets/img/icon/price-table-icon.svg" alt="..." />
            </div>
            <p className="title">{data}</p>
         
          </div>
        ))}
      </div>
          
    </div>

    
    <div className="pricing-card-back">
      <img src={Imgbasic} alt="cover" className="cover" />
      <a
        href="https://form.jotform.com/251835755283263"
        target="_blank"
        className="btn-package-normal btn-back"
      >
        Book now
      </a>
    </div>
  </div>
</div>
      </div>
      <div className="col-lg-4 col-md-6 container-cards">
          <div className="pricing-card-container" data-aos="fade-up">
  <div className="pricing-card">
    
    <div className="pricing-card-front">
      <div className="pricing-heading text-center">
        <p className="title">Essential</p>
        <h2 className="discount-price">$210</h2>
      </div>
      <div className="option-all">
        {packages.basic.map((data, i) => (
          <div className="option" key={i}>
            <div className="icon mx-2">
              <img src="/assets/img/icon/price-table-icon.svg" alt="..." />
            </div>
            <p className="title">{data}</p>
         
          </div>
        ))}
      </div>
          
    </div>

    
    <div className="pricing-card-back">
      <img src={Imgessential} alt="cover" className="cover" />
      <a
        href="https://form.jotform.com/251835755283263"
        target="_blank"
        className="btn-package-normal btn-back"
      >
        Book now
      </a>
    </div>
  </div>
</div>
      </div>
      <div className="col-lg-4 col-md-6 container-cards">
          <div className="pricing-card-container" data-aos="fade-up">
  <div className="pricing-card">
    
    <div className="pricing-card-front active">
      <div className="pricing-heading text-center">
        <p className="title">Premium</p>
        <h2 className="discount-price">$260</h2>
      </div>
      <div className="option-all">
        {packages.basic.map((data, i) => (
          <div className="option" key={i}>
            <div className="icon mx-2">
              <img src="/assets/img/icon/price-table-icon.svg" alt="..." />
            </div>
            <p className="title">{data}</p>
         
          </div>
        ))}
      </div>
          
    </div>

    
    <div className="pricing-card-back">
      <img src={Imgpremium} alt="cover" className="cover" />
      <a
        href="https://form.jotform.com/251835755283263"
        target="_blank"
        className="btn-package-normal btn-back"
      >
        Book now
      </a>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
  <div class="tab-pane fade py-5" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
     <div className="row justify-content-center">
      <div className="col-lg-4 col-md-6 container-cards">
          <div className="pricing-card-container" data-aos="fade-up">
  <div className="pricing-card">
    
    <div className="pricing-card-front">
      <div className="pricing-heading text-center">
        <p className="title">Basic</p>
        <h2 className="discount-price">$200</h2>
      </div>
      <div className="option-all">
        {packages.basic.map((data, i) => (
          <div className="option" key={i}>
            <div className="icon mx-2">
              <img src="/assets/img/icon/price-table-icon.svg" alt="..." />
            </div>
            <p className="title">{data}</p>
         
          </div>
        ))}
      </div>
          
    </div>

    
    <div className="pricing-card-back">
      <img src={Imgbasic} alt="cover" className="cover" />
      <a
        href="https://form.jotform.com/251835755283263"
        target="_blank"
        className="btn-package-normal btn-back"
      >
        Book now
      </a>
    </div>
  </div>
</div>
      </div>
      <div className="col-lg-4 col-md-6 container-cards">
         <div className="pricing-card-container" data-aos="fade-up">
  <div className="pricing-card">
    
    <div className="pricing-card-front">
      <div className="pricing-heading text-center">
        <p className="title">Essential</p>
        <h2 className="discount-price">$240</h2>
      </div>
      <div className="option-all">
        {packages.basic.map((data, i) => (
          <div className="option" key={i}>
            <div className="icon mx-2">
              <img src="/assets/img/icon/price-table-icon.svg" alt="..." />
            </div>
            <p className="title">{data}</p>
         
          </div>
        ))}
      </div>
          
    </div>

    
    <div className="pricing-card-back">
      <img src={Imgessential} alt="cover" className="cover" />
      <a
        href="https://form.jotform.com/251835755283263"
        target="_blank"
        className="btn-package-normal btn-back"
      >
        Book now
      </a>
    </div>
  </div>
</div>
      </div>
      <div className="col-lg-4 col-md-6 container-cards">
          <div className="pricing-card-container" data-aos="fade-up">
  <div className="pricing-card">
    
    <div className="pricing-card-front active">
      <div className="pricing-heading text-center">
        <p className="title">Premium</p>
        <h2 className="discount-price">$280</h2>
      </div>
      <div className="option-all">
        {packages.basic.map((data, i) => (
          <div className="option" key={i}>
            <div className="icon mx-2">
              <img src="/assets/img/icon/price-table-icon.svg" alt="..." />
            </div>
            <p className="title">{data}</p>
         
          </div>
        ))}
      </div>
          
    </div>

    
    <div className="pricing-card-back">
      <img src={Imgpremium} alt="cover" className="cover" />
      <a
        href="https://form.jotform.com/251835755283263"
        target="_blank"
        className="btn-package-normal btn-back"
      >
        Book now
      </a>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
  </div>
  
        </div>
</div>

 
        </div>
        <div className="container-fluid bg-sec py-5">
          <div className="container">
            <div className="row">
            <div className="col-lg-7 p-3">
              <h1 className="text-light display-3 fw-bold" >Got a project?</h1>
            </div>
            <div className="col-lg-4 p-4 d-flex align-items-center">
          <a className=" common-btn" href="https://form.jotform.com/251835755283263" target="_main">Book an appointment</a>

            </div>
          </div>
          </div>
        </div>
        {/* <Regularpackages/> */}
     
    </>
  );
};

export default PricingTable;
