import React, { useRef } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import testimonials from "../../dataJson/testimonials.json";

const Testimonial = () => {
  const swiperRef = useRef(null);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`fa-star ${i <= rating ? "fas text-warning" : "far text-muted"}`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div>
      <div className="ak-height-125 ak-height-lg-80"></div>

      <div className="testimonal-heading" data-aos="fade-up">
        <SectionHeading title={"TESTIMONIALS"} />
      </div>

      <div className="ak-height-50 ak-height-lg-50"></div>

      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {testimonials.reviews.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          <div className="carousel-inner">
            {testimonials.reviews.map((review, index) => (
              <div
                key={index}
                className={`carousel-item p-2 ${index === 0 ? "active" : ""}`}
              >
                <div className="bg-sec m-1 rounded-3 p-3 d-flex justify-content-center flex-column align-items-center">
                  <div className="icon my-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="109" height="81" viewBox="0 0 109 81" fill="none">
                      <g opacity="0.7" clipPath="url(#clip0_219_726)">
                        <path
                          d="M24.8606 80.2504C27.2135 76.6896 47.9194 44.6582 51.3233 31.1053C53.5194 22.3053 51.8096 15.5445 45.739 9.14449C36.0449 -1.09865 19.8567 -1.11431 11.0096 6.43079C1.59785 14.4622 -1.14726 29.8504 5.45666 39.2622C10.539 46.4935 15.2292 48.219 25.1586 51.4503C25.4253 56.5797 24.9861 77.0975 24.8606 80.2504Z"
                          fill="#FFFF"
                        />
                        <path
                          d="M81.2214 80.2504C83.5743 76.6896 104.28 44.6582 107.668 31.1053C109.88 22.3053 108.155 15.5445 102.084 9.14449C92.4057 -1.09865 76.2175 -1.11431 67.3704 6.43079C57.9586 14.4622 55.1978 29.8504 61.8174 39.2622C66.8841 46.4935 71.5743 48.219 81.5194 51.4503C81.7861 56.5797 81.3312 77.0975 81.2214 80.2504Z"
                          fill="#FFFF"
                        />
                      </g>
                    </svg>
                  </div>

                  <div className="card card-review col-10 text-center">
                    <h5 className="text-dark">{review.author}</h5>
                    <div className="mb-2">{renderStars(review.rating)}</div>
                    <p className="text-secondary fst-italic py-3">{review.text}</p>
                  </div>

                  <div className="icon my-5" style={{ transform: "rotate(180deg)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="109" height="81" viewBox="0 0 109 81" fill="none">
                      <g opacity="0.7" clipPath="url(#clip0_219_726)">
                        <path
                          d="M24.8606 80.2504C27.2135 76.6896 47.9194 44.6582 51.3233 31.1053C53.5194 22.3053 51.8096 15.5445 45.739 9.14449C36.0449 -1.09865 19.8567 -1.11431 11.0096 6.43079C1.59785 14.4622 -1.14726 29.8504 5.45666 39.2622C10.539 46.4935 15.2292 48.219 25.1586 51.4503C25.4253 56.5797 24.9861 77.0975 24.8606 80.2504Z"
                          fill="#FFFF"
                        />
                        <path
                          d="M81.2214 80.2504C83.5743 76.6896 104.28 44.6582 107.668 31.1053C109.88 22.3053 108.155 15.5445 102.084 9.14449C92.4057 -1.09865 76.2175 -1.11431 67.3704 6.43079C57.9586 14.4622 55.1978 29.8504 61.8174 39.2622C66.8841 46.4935 71.5743 48.219 81.5194 51.4503C81.7861 56.5797 81.3312 77.0975 81.2214 80.2504Z"
                          fill="#FFFF"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="ak-height-50 ak-height-lg"></div>
    </div>
  );
};

export default Testimonial;
