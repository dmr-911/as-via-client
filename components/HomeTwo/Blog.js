import React from "react"; 

const Blog = () => {
  return (
    <>
      <section id="blog" className="blog-section angle-sp">
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
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="single-blog-post rounded-4">
                <div className="blog-img">
                  <a href="/details-two">
                    <img
                      src="/images/blog/post1.jpg"
                      alt="Blog Post Image"
                      className="rounded-4"
                    />
                  </a>
                  <div className="blog-date">10 Feb, 2023</div>
                </div>

                <div className="blog-info">
                  <h6 className="blog-title">
                    <a href="/details-two">
                      Branding involves developing strategy to create a point of
                      differentiation
                    </a>
                  </h6>

                  <ul className="post-admin">
                    <li>
                      By <a href="#">Admin</a>
                    </li>
                    <li>3 Comments</li>
                  </ul>

                  <p>
                    Aliquet id lacinia ultricies odio, neque ipsum facilisis
                    parturient. Erat tristique nonummy etiam, fusce est
                    porttitor...
                  </p>

                  <a href="/details-two" className="read-more-btn">
                    Read More
                    <i className="icofont-swoosh-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-in"
              data-aos-duration="2000"
              data-aos-delay="200"
            >
              <div className="single-blog-post rounded-4">
                <div className="blog-img">
                  <a href="/details-two">
                    <img
                      src="/images/blog/post2.jpg"
                      alt="Blog Post Image"
                      className="rounded-4"
                    />
                  </a>
                  <div className="blog-date">11 Feb, 2023</div>
                </div>

                <div className="blog-info">
                  <h6 className="blog-title">
                    <a href="/details-two">
                      Design is a plan or specification for the construction of
                      an object
                    </a>
                  </h6>

                  <ul className="post-admin">
                    <li>
                      By <a href="#">Admin</a>
                    </li>
                    <li>3 Comments</li>
                  </ul>

                  <p>
                    Aliquet id lacinia ultricies odio, neque ipsum facilisis
                    parturient. Erat tristique nonummy etiam, fusce est
                    porttitor...
                  </p>

                  <a href="/details-two" className="read-more-btn">
                    Read More
                    <i className="icofont-swoosh-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-in"
              data-aos-duration="3000"
              data-aos-delay="300"
            >
              <div className="single-blog-post rounded-4">
                <div className="blog-img">
                  <a href="/details-two">
                    <img
                      src="/images/blog/post3.jpg"
                      alt="Blog Post Image"
                      className="rounded-4"
                    />
                  </a>
                  <div className="blog-date">12 Feb, 2023</div>
                </div>

                <div className="blog-info">
                  <h6 className="blog-title">
                    <a href="/details-two">
                      The new minimum is a digital magazine with a header
                      featuring a thin
                    </a>
                  </h6>

                  <ul className="post-admin">
                    <li>
                      By <a href="#">Admin</a>
                    </li>
                    <li>3 Comments</li>
                  </ul>

                  <p>
                    Aliquet id lacinia ultricies odio, neque ipsum facilisis
                    parturient. Erat tristique nonummy etiam, fusce est
                    porttitor...
                  </p>

                  <a href="/details-two" className="read-more-btn">
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
