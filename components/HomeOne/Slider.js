import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import VisibilitySensor from "react-visibility-sensor";

const sliderData = [
  {
    heading:
      "Get AI Assistance 24/7 with Ask Via - The WhatsApp-Integrated, GPT-3 Powered Solution!",
    text: " Say hello to fast, accurate, and always-available AI assistance with Ask Via. With seamless integration into WhatsApp and the power of GPT-3 technology, you'll have your own virtual assistant ready to answer your questions and complete tasks anytime you need. Experience the future of hyperintelligent assistance with Ask Via - Available 24/7 in 180+ countries!",
    image: "/images/app-mockup-1.png",
  },
];

const Slider = () => {
  return (
    <>
      <Swiper
        id="home"
        navigation={true}
        modules={[Navigation]}
        className="homepage-slides"
      >
        {sliderData &&
          sliderData.map((value, i) => (
            <SwiperSlide key={i}>
              <div className="single-slider-item gradient-bg">
                <div className="slide-item-table">
                  <div className="slide-item-tablecell">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-md-12 col-lg-7">
                          <VisibilitySensor>
                            {({ isVisible }) => (
                              <div className="slider-text">
                                <h1
                                  className={
                                    isVisible
                                      ? "animated fadeInUp slow opacityOne"
                                      : ""
                                  }
                                >
                                  {value.heading}
                                </h1>

                                <p
                                  className={
                                    isVisible
                                      ? "animated fadeInUp slow opacityOne"
                                      : ""
                                  }
                                >
                                  {value.text}
                                </p>

                                <div className="slide-button">
                                  <a
                                    href="https://play.google.com/store/apps"
                                    target="_blank"
                                    className={`
                                        slide-btn-white mr-10 ${
                                          isVisible
                                            ? "animated fadeInDown slow opacityOne"
                                            : ""
                                        }
                                    `}
                                  >
                                    <i className="icofont-cloud-download"></i>
                                    Subscribe
                                  </a>
                                  <a
                                    href="#"
                                    className={`
                                      slide-btn-bordered ${
                                        isVisible
                                          ? "animated fadeInDown slow opacityOne"
                                          : ""
                                      }
                                    `}
                                  >
                                    Try for free in WhatsApp
                                  </a>
                                </div>
                              </div>
                            )}
                          </VisibilitySensor>
                        </div>

                        <div className="col-md-12 col-lg-5">
                          <div className="welcome-phone">
                            <img src={value.image} alt="App Mockup image" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Slider;
