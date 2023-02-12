import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="subscribe-text">
                  <h3
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                  >
                    Subscribe for our Newsletter
                  </h3>
                  <p
                    data-aos="fade-in"
                    data-aos-duration="2000"
                    data-aos-delay="200"
                  >
                    Lorem ipsum madolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor coli incididunt ut labore Lorem ipsum
                    madolor sit amet, consectetur adipisicing incididunt.
                  </p>
                </div>

                <div
                  className="subscribe-form"
                  data-aos="fade-in"
                  data-aos-duration="3000"
                  data-aos-delay="300"
                >
                  <form className="newsletter-form">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email address"
                      name="EMAIL"
                      required
                    />

                    <button type="submit" className="btn subscribe-btn">
                      <i className="icofont-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <p className="copyright">
                  Copyright {currentYear} Jibo. all rights by{" "}
                  <a href="http://envytheme.com/" target="_blank">
                    EnvyTheme
                  </a>
                </p>
              </div>

              <div className="col-md-6 col-lg-6">
                <ul className="social-links">
                  <li>Follow us :</li>
                  <li>
                    <a href="https://facebook.com/" target="_blank">
                      <i className="icofont-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="icofont-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="icofont-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/" target="_blank">
                      <i className="icofont-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
