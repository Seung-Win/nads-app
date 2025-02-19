import "./Contact.css";
import { useState } from 'react';

function Contact() {


  return (
    <div className="container-fluid" id="holder">
      <div className="container-fluid" id="contentAbout">
      <h1 className="heading-1">CONTACT US</h1>
        <form className="container-fluid" id="contactForm">
          <label>Name</label>
          <input type="text" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
