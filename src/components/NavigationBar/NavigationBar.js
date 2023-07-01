import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      {/* Google Fonts */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');`}
      </style>

      <style>
        {`@import
        url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap');`}
      </style>

      {/* NavBar from bootstrap with dark theme */}
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark"
        data-bs-theme="dark"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <div className="container-fluid custom-container">
          <Link className="navbar-brand" to="/">
            Dhruv
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
              <Link className="nav-link" to="/about">
                About Me
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
