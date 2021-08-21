import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../images/logo.png";

const Navbar = () => {
  const [userBtn, setGoBackBtn] = useState(true);
  return (
    <div className="container bar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link
            to="/"
            className=" navbar-brand fw-bold text-decoration-none text-success"
          >
            <img
              src={logo}
              className="img-fluid"
              width="200"
              height="150"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                {userBtn ? (
                  <Link
                    className="btn btn-warning text-light fw-bold"
                    aria-current="page"
                    to="users"
                    onClick={() => setGoBackBtn(false)}
                  >
                    Get Users
                  </Link>
                ) : (
                  <Link
                    className="btn btn-outline-warning fw-bold"
                    aria-current="page"
                    to="/"
                    onClick={() => setGoBackBtn(true)}
                  >
                    Go Back to Home
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
