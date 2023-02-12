import React from "react";
import Link from "next/link";
import Footer from "../components/Common/Footer";
import Sidebar from "../components/Blog/Sidebar";

const DetailsOne = () => {
  return (
    <>
      <section 
        className="top-banner-area"
        style={{ backgroundImage: `url("/images/top-banner-area-bg.jpg")` }}
      >
        <div className="container">
          <div className="header">
            <div className="row align-items-center">
              <div className="col-6">
                <Link href="/">
                  <a className="logo">Jibo</a>
                </Link>
              </div>

              <div className="col-6 text-end">
                <Link href="/details-one/">
                  <a className="nav-text">Blog</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h2 className="banner-title">Blog Details With Left Sidebar</h2>
            </div>
            <div className="col-lg-6">
              <ol className="breadcrumb">
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="active">Blog Details Left Sidebar</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="blog-details-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4">
              {/* Sidebar */}
              <Sidebar />
            </div>

            <div className="col-md-8 col-lg-8">
              <div className="single-blog-details">
                <div className="single-blog-img">
                  <img src="/images/blog/post-details.jpg" alt="blog" />
                  <div className="single-blog-date">10 Feb, 2023</div>
                </div>

                <h3 className="single-blog-title">Awesome app landing page</h3>

                <div className="single-post-admin">
                  By <a href="#">admin</a> / <a href="#">3</a> Comments
                </div>

                <div className="details-text-area">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                  </p>
                  <p>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                  </p>
                  <p>
                    Nulla dapibus dui placerat nisl non dis rhoncus cum. Dui
                    pharetra faucibus sed sed sapien eget vestibulum ante.
                    Hendrerit magna dis sagittis risus. Penatibus cubilia
                    vivamus accumsan aenean Montes aliquet neque parturient.
                    Feugiat vehicula. Risus, curae; nunc inceptos integer
                    penatibus sollicitudin est. Dictumst dui enim proin
                    ridiculus venenatis. Praesent pulvinar Nisl habitant nisl
                    sed gravida venenatis Ac metus id nullam dignissim nam nisl.
                    Aenean platea auctor fringilla. Porttitor elit curabitur vel
                    praesent et orci purus rhoncus eros inceptos et ad torquent,
                    conubia suscipit amet felis bibendum vulputate. Sapien
                    proin, primis.
                  </p>
                </div>

                <div className="post-tag-media">
                  <div className="row">
                    <div className="col-md-8">
                      <ul className="tag">
                        <li>
                          <span>Tags:</span>
                        </li>
                        <li>
                          <Link href="#">
                            <a>Android</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <a>Mobile App</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <a href="#">Ios</a>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-4">
                      <div className="post-social-media">
                        <a href="#" target="_blank">
                          <i className="icofont-facebook"></i>
                        </a>
                        <a href="#" target="_blank">
                          <i className="icofont-twitter"></i>
                        </a>
                        <a href="#" target="_blank">
                          <i className="icofont-google-plus"></i>
                        </a>
                        <a href="#" target="_blank">
                          <i className="icofont-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="all-comments-content">
                <h4 className="comment-title">Comments (03)</h4>
                <div className="comment mb-50">
                  <img src="/images/blog/comment-person1.jpg" alt="blog" />
                  <div className="comment-details">
                    <h5>
                      Jonson Smith <span>20 Mar 2019 at 11.00 AM</span>
                    </h5>
                    <p>
                      ed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam.
                    </p>
                    <Link href="#">
                      <a className="replay">
                        <i className="icofont-reply"></i> Replay
                      </a>
                    </Link>
                  </div>
                </div>
                
                <div className="comment mb-50 reply-comment">
                  <img src="/images/blog/comment-person2.jpg" alt="blog" />
                  <div className="comment-details reply-comment-details">
                    <h5>
                      Jonson Smith <span>20 Mar 2023 at 11.00 AM</span>
                    </h5>
                    <p>
                      ed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam.
                    </p>
                    <Link href="#">
                      <a className="replay">
                        <i className="icofont-reply"></i> Replay
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="comment">
                  <img src="/images/blog/comment-person3.jpg" alt="blog" />
                  <div className="comment-details">
                    <h5>
                      Jonson Smith <span>20 Mar 2023 at 11.00 AM</span>
                    </h5>
                    <p>
                      ed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam.
                    </p>
                    <Link href="#">
                      <a className="replay">
                        <i className="icofont-reply"></i> Replay
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="comment-form">
                <h4 className="comment-title">Post Your Comment</h4>
                <form method="post" action="#">
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                        type="text"
                        required={true}
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        required={true}
                      />
                    </div>
                    <div className="col-lg-12">
                      <input
                        className="form-control"
                        id="website_url"
                        name="website_url"
                        placeholder="Website URL"
                        type="text"
                        required={true}
                      />
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        className="form-control"
                        rows="5"
                        id="message"
                        name="message"
                        placeholder="Type Comments..."
                        required={true}
                      />
                    </div>
                    <div className="col-lg-12">
                      <div className="text-center">
                        <button type="submit" className="default-button">
                          Post Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DetailsOne;
