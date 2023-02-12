import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="blog-sidebar">
        <form className="search-box">
          <input
            type="text"
            className="form-control"
            id="search"
            name="search"
            placeholder="Search Post Here..."
          />
          <button type="submit" className="btn search-btn">
            <i className="icofont-search"></i>
          </button>
        </form>

        <div className="recent-post">
          <h4 className="blog-sidebar-title">Recent post</h4>

          <div className="single-recent-post">
            <a href="/details-one">
              <img src="/images/blog/recent-post-1.jpg" alt="blog" />
            </a>
            <h5>
              <a href="/details-one">How to customize HeroApp</a>
            </h5>
            <p>Feb 10, 2023</p>
          </div>

          <div className="single-recent-post">
            <a href="/details-one">
              <img src="/images/blog/recent-post-2.jpg" alt="blog" />
            </a>
            <h5>
              <a href="/details-one">Awesome app landing page</a>
            </h5>
            <p>Feb 11, 2023</p>
          </div>

          <div className="single-recent-post">
            <a href="/details-one">
              <img src="/images/blog/recent-post-3.jpg" alt="blog" />
            </a>
            <h5>
              <a href="/details-one">
                Eu bibendum dictum ipsum vivamus nostra lectus
              </a>
            </h5>
            <p>Feb 12, 2023</p>
          </div>
        </div>

        <div className="post-category">
          <h4 className="blog-sidebar-title">Category</h4>

          <a href="#" className="single-category">
            Android <span>(05)</span>
          </a>

          <a href="#" className="single-category">
            Mobile App <span>(05)</span>
          </a>

          <a href="#" className="single-category">
            Photography <span>(01)</span>
          </a>

          <a href="#" className="single-category">
            IOS <span>(08)</span>
          </a>

          <a href="#" className="single-category">
            Latest App <span>(08)</span>
          </a>

          <a href="#" className="single-category">
            Technology <span>(02)</span>
          </a>

          <a href="#" className="single-category">
            Lifestyle <span>(04)</span>
          </a>

          <a href="#" className="single-category">
            Trending Post <span>(07)</span>
          </a>

          <a href="#" className="single-category">
            Videos <span>(03)</span>
          </a>
        </div>

        <div className="popular-tags">
          <h4 className="blog-sidebar-title">Popular Tags</h4>

          <a href="#">Android</a>

          <a href="#">Mobile App</a>

          <a href="#">Photography</a>

          <a href="#">IOS</a>

          <a href="#">Latest App</a>

          <a href="#">Technology</a>

          <a href="#">Lifestyle</a>

          <a href="#">Trending Post</a>

          <a href="#">Videos</a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
