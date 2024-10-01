import React from "react";
import { GoSearch } from "react-icons/go";
import { PiTrademarkLight } from "react-icons/pi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import Hero_Section from "../../components/hero_section/Hero_Section";

function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg  position-fixed top-0 w-100 "
        style={{ backgroundColor: "black" }}
      >
        <div className="container-fluid">
          <div
            className="navbar-brand d-flex align-items-center ms-4"
            style={{
              height: "70px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link to="/">
              <img
                src="AmbiSpine_logo.png"
                width="150"
                className="h-100"
                alt="AmbiSpine Logo"
              />
            </Link>
            <PiTrademarkLight className="trade-mark fs-5 ms-1" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-center"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarNav"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <ul className="navbar-nav mb-2 fs-8 text-white mb-lg-0 text-center">
              <li className="nav-item mx-2">
                <Link to="/" className="nav-link text-white fw-medium">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/greenlake" className="nav-link text-white fw-medium">
                  HPE GreenLake
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/solutions" className="nav-link text-white fw-medium">
                  Solutions
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/products" className="nav-link text-white fw-medium">
                  Products
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/services" className="nav-link text-white fw-medium">
                  Services
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/learn" className="nav-link text-white fw-medium">
                  Learn
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/support" className="nav-link text-white fw-medium">
                  Support
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/contact" className="nav-link text-white fw-medium">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 fs-8 text-white mb-lg-0 text-center">
              <li className="nav-item mx-2">
                <IoIosSearch
                  className="text-white fw-medium"
                  style={{ marginTop: "12px", fontSize: "22px" }}
                />
              </li>
              <li className="nav-item mx-2">
                <Link to="/signin" className="nav-link text-white fw-medium">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Hero_Section /> */}
    </>
  );
}

export default Header;
