import React from "react";
import { Link } from "react-router-dom";

const PricingCard = ({
  title,
  discountPrice,
  options,
  isActive,
  aosDelay,
}) => {
  return (
    <div
      className={`pricing-card ${isActive ? "active" : ""}`}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <div className="pricing-heading">
        <p className="title">{title}</p>
        <h2 className="discount-price">{discountPrice}</h2>
      </div>
      <div className="option-all">
        {options.map((option, index) => (
          <div className="option" key={index}>
            <div className="icon">
              <img src="/assets/img/icon/price-table-icon.svg" alt="..." />
            </div>
            <p className="title">{option}</p>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default PricingCard;
