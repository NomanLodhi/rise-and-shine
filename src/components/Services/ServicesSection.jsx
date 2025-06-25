import React from "react";
import { MoreBtn } from "../Button/Button";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

import servicesData from "../../dataJson/servicesData.json";

const ServicesSection = ({ styleTypeTwo }) => {
  const data = styleTypeTwo ? servicesData.slice(0, 3) : servicesData;

  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="d-flex justify-content-center">
        <div className="sticky-content container">
          <div className="content style_2">
            <div className="service">
              <div className="row">
              {data.map((item) => (
                <div className="col-lg-4 py-2">
                  <div
                  className="card card-service bg-black text-light rounded-0"
                  // data-aos="fade-left"
                  key={item.id}
                  
                >
                  
                    <img src={`${item.img}`} className="ak-bg card-img rounded-0" alt="..." />
                  <div className="card-info p-3"
                  // style={{
                  //   height:'550px',
                  //   overflowY:'scroll',
                  // }}
                   >
                    <h1 className="card-title fs-2 py-3">
                      {item.title}
                    </h1>
                    <p className="card-desp" style={{fontSize:'15px'}}>{item.desp}</p>
                    <h5 className="fs-6 py-3">
                      BENEFITS:
                      </h5>
                    <p className="card-desp" style={{fontSize:'15px'}}>{item.benefits}</p>
                   
                  </div>
                </div>
                </div>
              ))}
              

              </div>
            </div>
          </div>
          <div className="sidebar width-none">
            <div className="services-content">
              <SectionHeading
                bgText={"Services"}
                title={"Dedicated is Services"}
                desp={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr sstan. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum."
                }
              />
              <div className="ak-height-50 ak-height-lg-10"></div>
              <MoreBtn to="/service">VIEW All SERVICES</MoreBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
