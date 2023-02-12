import React from "react";

const Pricing = () => {
  return (
    <>
      <section id="pricing" className="pricing-section">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <h2>Pricing Table</h2>
            <p>
              Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit
              amet, consectetur adipisicing incididunt.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div
                className="single-price-package rounded-4"
                data-aos="fade-in"
                data-aos-duration="2000"
                data-aos-delay="200"
              >
                <div className="price-header">
                  <h3>Standard</h3>
                  <h4 className="price-value">
                    <sup className="text-bottom">$</sup>
                    <span className="text-large">33</span>
                    <span className="duration">/ Per Month</span>
                  </h4>
                </div>

                <ul className="price-list">
                  <li>UI / UX Design</li>
                  <li>Web Design</li>
                  <li>App Design</li>
                  <li className="disabled">Web Developement</li>
                  <li className="disabled">Wordpress Theme</li>
                  <li className="disabled">24 / 7 Support</li>
                </ul>

                <div className="price-footer">
                  <a href="#" className="purchase-btn">
                    Purchase
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="single-price-package rounded-4"
                data-aos="fade-in"
                data-aos-duration="3000"
                data-aos-delay="300"
              >
                <div className="price-header">
                  <h3>Personal</h3>
                  <h4 className="price-value">
                    <sup className="text-bottom">$</sup>
                    <span className="text-large">69</span>
                    <span className="duration">/Per Month</span>
                  </h4>
                </div>

                <ul className="price-list">
                  <li>UI / UX Design</li>
                  <li>Web Design</li>
                  <li>App Design</li>
                  <li>Web Developement</li>
                  <li className="disabled">Wordpress Theme</li>
                  <li className="disabled">24 / 7 Support</li>
                </ul>

                <div className="price-footer">
                  <a href="#" className="purchase-btn">
                    Purchase
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="single-price-package rounded-4"
                data-aos="fade-in"
                data-aos-duration="4000"
                data-aos-delay="400"
              >
                <div className="price-header">
                  <h3>Business</h3>
                  <h4 className="price-value">
                    <sup>$</sup>
                    <span className="text-large">99</span>
                    <span className="duration">/Per Month</span>
                  </h4>
                </div>

                <ul className="price-list">
                  <li>UI / UX Design</li>
                  <li>Web Design</li>
                  <li>App Design</li>
                  <li>Web Developement</li>
                  <li>Wordpress Theme</li>
                  <li>24 / 7 Support</li>
                </ul>

                <div className="price-footer">
                  <a href="#" className="purchase-btn">
                    Purchase
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
