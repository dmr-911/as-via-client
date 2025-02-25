import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default class Navigation extends Component {
  _isMounted = false;

  state = {
    collapsed: true,
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("menu-shrink");
      } else {
        elementId.classList.remove("menu-shrink");
      }
    });

    let mainNavLinks = document.querySelectorAll("nav ul li a");
    window.addEventListener("scroll", () => {
      let fromTop = window.scrollY;
      mainNavLinks.forEach((link) => {
        let section = document.querySelector(link.hash);
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  renderMenus = () => {
    return (
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <AnchorLink
            onClick={this.toggleNavbar}
            offset={() => 100}
            className="nav-link active"
            href="#home"
          >
            Home
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink
            onClick={this.toggleNavbar}
            offset={() => -30}
            className="nav-link"
            href="#about"
          >
            About
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink
            onClick={this.toggleNavbar}
            offset={() => -30}
            className="nav-link"
            href="#features"
          >
            Features
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink
            onClick={this.toggleNavbar}
            offset={() => -30}
            className="nav-link"
            href="#screenshots"
          >
            Screenshots
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink
            onClick={this.toggleNavbar}
            offset={() => -30}
            className="nav-link"
            href="#pricing"
          >
            Pricing
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink
            onClick={this.toggleNavbar}
            offset={() => -30}
            className="nav-link"
            href="#faqs"
          >
            Faqs
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink
            onClick={this.toggleNavbar}
            offset={() => -30}
            className="nav-link"
            href="#blog"
          >
            Blog
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink
            onClick={this.toggleNavbar}
            offset={() => -30}
            className="nav-link"
            href="#contact"
          >
            Contact
          </AnchorLink>
        </li>
      </ul>
    );
  };

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <div>
        <nav
          id="navbar"
          className="navbar fixed-top navbar-expand-md navbar-light top-menu"
        >
          <div className="container">
            <a className="navbar-brand" href="/">
              As Via
            </a>

            <button
              onClick={this.toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              {this.renderMenus()}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
