import React from "react";

const featuresData = [
  {
    icon: "icofont-sun",
    title: "Awsome Features",
    text: "There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.",
    duration: "1000",
    delay: "100",
  },
  {
    icon: "icofont-light-bulb",
    title: "Unique Design",
    text: "There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.",
    duration: "2000",
    delay: "200",
  },
  {
    icon: "icofont-imac",
    title: "Full Responsive",
    text: "There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.",
    duration: "3000",
    delay: "300",
  },
  {
    icon: "icofont-code-alt",
    title: "CLEAN CODES",
    text: "There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.",
    duration: "4000",
    delay: "400",
  },
  {
    icon: "icofont-eye",
    title: "RETINA READY",
    text: "There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.",
    duration: "5000",
    delay: "500",
  },
  {
    icon: "icofont-space-shuttle",
    title: "UNLIMITED FEATURES",
    text: "There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.",
    duration: "6000",
    delay: "600",
  },
];

const Features = () => {
  return (
    <>
      <section id="features" className="awsome-features angle-sp">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <h2>Awsome Features</h2>
            <p>
              Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit
              amet, consectetur adipisicing incididunt.
            </p>
          </div>

          <div className="row justify-content-center">
            {featuresData &&
              featuresData.map((value, i) => (
                <div className="col-md-6 col-lg-6" key={i}>
                  <div
                    className="single-feature"
                    data-aos="fade-in"
                    data-aos-duration={value.duration}
                    data-aos-delay={value.delay}
                  >
                    <div className="feature-icon">
                      <i className={value.icon}></i>
                    </div>
                    <h4>{value.title}</h4>
                    <p>{value.text}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
