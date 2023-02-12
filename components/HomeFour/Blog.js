import React from "react";

const Blog = () => {
  return (
    <>
      <section id="blog" className="blog-section">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <h2>Latest Blog Post</h2>
            <p>
              Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit
              amet, consectetur adipisicing incididunt.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-blog-post-two"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="200"
              >
                <div className="blog-img wave-member-img">
                  <a href="/details-two">
                    <img src="/images/blog/post1.jpg" alt="Blog Post Image" />
                  </a>
                  <div className="post_date">
                    20 <br /> Sep
                  </div>
                </div>

                <div className="blog-info">
                  <h6 className="blog-title">
                    <a href="/details-two">
                      Branding involves developing strategy to create a point
                    </a>
                  </h6>

                  <p>
                    Aliquet id lacinia ultricies odio, neque ipsum facilisis
                    parturient. Erat tristique nonummy etiam, fusce est
                    porttitor...
                  </p>

                  <a href="/details-two" className="default-button">
                    Read More
                    <i className="icofont-swoosh-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-blog-post-two"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="300"
              >
                <div className="blog-img wave-member-img">
                  <a href="/details-two">
                    <img src="/images/blog/post2.jpg" alt="Blog Post Image" />
                  </a>
                  <div className="post_date">
                    20 <br /> Sep
                  </div>
                </div>

                <div className="blog-info">
                  <h6 className="blog-title">
                    <a href="/details-two">
                      Design is a plan or specification for the construction of
                      an object
                    </a>
                  </h6>

                  <p>
                    Aliquet id lacinia ultricies odio, neque ipsum facilisis
                    parturient. Erat tristique nonummy etiam, fusce est
                    porttitor...
                  </p>

                  <a href="/details-two" className="default-button">
                    Read More
                    <i className="icofont-swoosh-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-blog-post-two"
                data-aos="fade-up"
                data-aos-duration="4000"
                data-aos-delay="400"
              >
                <div className="blog-img wave-member-img">
                  <a href="/details-two">
                    <img src="/images/blog/post3.jpg" alt="Blog Post Image" />
                  </a>
                  <div className="post_date">
                    20 <br /> Sep
                  </div>
                </div>

                <div className="blog-info">
                  <h6 className="blog-title">
                    <a href="/details-two">
                      Branding involves developing strategy to create a point of
                    </a>
                  </h6>

                  <p>
                    Aliquet id lacinia ultricies odio, neque ipsum facilisis
                    parturient. Erat tristique nonummy etiam, fusce est
                    porttitor...
                  </p>

                  <a href="/details-two" className="default-button">
                    Read More
                    <i className="icofont-swoosh-right"></i>
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

export default Blog;
