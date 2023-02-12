import React from "react";
import Sidebar from "./Sidebar";

const BlogWithLeftSidebar = () => {
  return (
    <>
      <section id="blog" className="blog-details-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4">
              {/* Sidebar */}
              <Sidebar />
            </div>

            <div className="col-md-8 col-lg-8">
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-6">
                  <div className="single-blog-post">
                    <div className="blog-img">
                      <a href="/details-one">
                        <img
                          src="/images/blog/post1.jpg"
                          alt="Blog Post Image"
                        />
                      </a>
                      <div className="blog-date">10 Feb, 2023</div>
                    </div>

                    <div className="blog-info">
                      <h6 className="blog-title">
                        <a href="/details-one">
                          Branding involves developing strategy to create a
                          point of differentiation
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
                        porttitor.
                      </p>
                      <a href="/details-one" className="read-more-btn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-6">
                  <div className="single-blog-post">
                    <div className="blog-img">
                      <a href="/details-one">
                        <img
                          src="/images/blog/post2.jpg"
                          alt="Blog Post Image"
                        />
                      </a>
                      <div className="blog-date">11 Feb, 2023</div>
                    </div>

                    <div className="blog-info">
                      <h6 className="blog-title">
                        <a href="/details-one">
                          Design is a plan or specification for the construction
                          of an object
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
                        porttitor.
                      </p>
                      <a href="/details-one" className="read-more-btn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-6">
                  <div className="single-blog-post">
                    <div className="blog-img">
                      <a href="/details-one">
                        <img
                          src="/images/blog/post3.jpg"
                          alt="Blog Post Image"
                        />
                      </a>
                      <div className="blog-date">13 Feb, 2023</div>
                    </div>

                    <div className="blog-info">
                      <h6 className="blog-title">
                        <a href="/details-one">
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
                        porttitor.
                      </p>
                      <a href="/details-one" className="read-more-btn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-6">
                  <div className="single-blog-post">
                    <div className="blog-img">
                      <a href="/details-one">
                        <img
                          src="/images/blog/post4.jpg"
                          alt="Blog Post Image"
                        />
                      </a>
                      <div className="blog-date">14 Feb, 2023</div>
                    </div>

                    <div className="blog-info">
                      <h6 className="blog-title">
                        <a href="/details-one">
                          WordPress is open source software you can use to
                          create a beautiful
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
                        porttitor.
                      </p>
                      <a href="/details-one" className="read-more-btn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-6">
                  <div className="single-blog-post">
                    <div className="blog-img">
                      <a href="/details-one">
                        <img
                          src="/images/blog/post5.jpg"
                          alt="Blog Post Image"
                        />
                      </a>
                      <div className="blog-date">15 Feb, 2023</div>
                    </div>

                    <div className="blog-info">
                      <h6 className="blog-title">
                        <a href="/details-one">
                          <a>
                            Bootstrap 5 is open source software you can use to
                            create a beautiful
                          </a>
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
                        porttitor.
                      </p>
                      <a href="/details-one" className="read-more-btn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-6">
                  <div className="single-blog-post">
                    <div className="blog-img">
                      <a href="/details-one">
                        <img
                          src="/images/blog/post6.jpg"
                          alt="Blog Post Image"
                        />
                      </a>
                      <div className="blog-date">16 Feb, 2023</div>
                    </div>

                    <div className="blog-info">
                      <h6 className="blog-title">
                        <a href="/details-one">
                          Beautiful designs, powerful features, and the freedom
                          to build anything you
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
                        porttitor.
                      </p>
                      <a href="/details-one" className="read-more-btn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <ul className="pagination-nav">
                    <li>
                      <a href="#">
                        <i className="icofont-long-arrow-left"></i>
                      </a>
                    </li>
                    <li className="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-long-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogWithLeftSidebar;
