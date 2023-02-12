import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import VisibilitySensor from "react-visibility-sensor";
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const sliderData = [
  {
    heading: "Manage all of your Stuff Using a Jibo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/app-mockup-3.png",
  },
  {
    heading: "Awesome Jibo Mobile App",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/app-mockup-1.png",
  },
];

const Slider = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <div id="home" className="hompage-slides-wrapper particle-bg">
        {/* Particles */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            // background: {
            //   color: {
            //     value: "#0d47a1",
            //   },
            // },
            fpsLimit: 1200,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />

        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="homepage-slides"
        >
          {sliderData &&
            sliderData.map((value, i) => (
              <SwiperSlide key={i}>
                <div className="single-slider-item wave-bg-one">
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
                                      Download
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
                                      Learn More
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
      </div>
    </>
  );
};

export default Slider;
