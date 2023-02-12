import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const screenshotsData = [
  {
    image: "/images/screenshot/screenshots1.png",
  },
  {
    image: "/images/screenshot/screenshots2.png",
  },
  {
    image: "/images/screenshot/screenshots3.png",
  },
  {
    image: "/images/screenshot/screenshots4.png",
  },
  {
    image: "/images/screenshot/screenshots5.png",
  },
];

const Screenshots = () => {
  return (
    <>
      <section id="screenshots" className="app-screenshots-section">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <h2>App Screenshots</h2>
            <p>
              Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit
              amet, consectetur adipisicing incididunt.
            </p>
          </div>

          <Swiper
            navigation={true}
            pagination={{
              clickable: true,
            }}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation, Pagination]}
            className="screenshot-slider"
          >
            {screenshotsData &&
            screenshotsData.map((value, i) => (
              <SwiperSlide key={i}>
                <div className="screenshot-item">
                  <img src={value.image} alt="Screenshot Image" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Screenshots;
