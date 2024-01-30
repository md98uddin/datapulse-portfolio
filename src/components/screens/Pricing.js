import React from "react";
import { Navbar } from "../shared/Navbar";
import { Footer } from "../shared/Footer";

export const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="request-header title-text">Request for a quote</h1>
        <form className="align-items">
          <label>
            Name <span className="required">*</span>
          </label>
          <input type="text" />
          <label>
            Contact Number <span className="required">*</span>
          </label>
          <input type="tel" />
          <label>
            Email <span className="required">*</span>
          </label>
          <input type="email" />
          <label>Business Name</label>
          <input type="text" />
          <label>
            Describe your needs <span className="required">*</span>
          </label>
          <textarea tabIndex={5}></textarea>
        </form>
      </div>
      <Footer />
    </>
  );
};
