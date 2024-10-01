import React from "react";
import { PiTrademarkLight } from "react-icons/pi";
import "./card.css";

export default function Spread() {
  return (
    <React.Fragment>
      <div
        className="bg-white text-secondary Spread-Card text-center py-4 "
        style={{ height: "90vh" }}
      >
        <h1
          className="ps-4 ms-3 mt-5 pt-4  fw-semibold"
          style={{ fontSize: "90px" }}
        >
          Spreads
          <PiTrademarkLight className="fs-5 trade-mark" />
        </h1>
        <h3
          className="fs-3 ps-5 pt-5  ms-2 medium"
          style={{ color: "#0866ff" }}
        >
          Try Our Platform To Explore your Journey
        </h3>
        <div className="fs-5 spread-link mt-5 fw-medium">
          <a className="link-1">Integrated Jobs Portal</a>
          <a className="link-2">Integrated Learning Program</a>
          <a className="link-3">Automated Application Tracking System</a>
          <div className="text-center top-text mt-4">
            <button
              className=" ms-5 mt-5 fs-5 fw-medium border-2 border-secondary px-3 pb-1 rounded-2 "
              style={{ backgroundColor: "#01A982", color: "#fff" }}
            >
              GET START
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
