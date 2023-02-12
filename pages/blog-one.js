import React from "react";
import Link from "next/link";
import Footer from "../components/Common/Footer";
import BlogThreeColumns from "../components/Blog/BlogThreeColumns";

const BlogOne = () => {
  return (
    <>
      <div 
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
                <Link href="/blog-one/">
                  <a className="nav-text">Blog</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h2 className="banner-title">Blog Three Columns</h2>
            </div>
            <div className="col-lg-6">
              <ol className="breadcrumb">
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="active">Blog Three Columns</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <BlogThreeColumns />

      <Footer />
    </>
  );
};

export default BlogOne;
