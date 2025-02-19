import "./Contact.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="container-fluid" id="holder">
      <div className="container-fluid" id="contactDiv">
        <h1 className="heading-1">CONTACT US</h1>
        <div className="container-fluid" id="separator">
          <form className="container-fluid" id="contactForm">
            <label>Full Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Full Name"
            />
            <label>Email Address</label>
            <input
              className="form-control"
              type="text"
              placeholder="Email Address"
            />
            <label>Message</label>
            <textarea className="form-control" placeholder="Message" />
            <button type='submit' id='submitBtn' className="btn btn-dark">Submit</button>
          </form>
          <div className="container-fluid" id="socials">
            <a href="https://www.facebook.com/officialNADS" target="_blank">Facebook</a>
            <a href="https://www.instagram.com/officialnads/" target="_blank">Instagram</a>
            <a href="https://www.linkedin.com/company/nadsofficial/" target="_blank">LinkedIn</a>
            <a href="mailto:rc.nads.sei@gmail.com">rc.nads.sei@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
