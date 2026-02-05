import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-0 ">
      <div className="container-fluid bg-dark text-white py-3">
        <Link className="navbar-brand text-info fw-bolder" to="/">
          Complaint Management System
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent ">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Show Complaint
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/add-complaint">
                Add Complaint
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
