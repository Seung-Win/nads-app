import "./Partner.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import DataPrivacy from "../modal/DataPrivacy";

function Partner() {
  const [showModal, setShowModal] = useState(false);
  const [enableButton, setEnable] = useState(false);

  const handleShowModal = () => setShowModal(true);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnable(event.target.checked);
  };

  const pageVariants = {
    hidden: { x: "100vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.25, ease: "easeOut" },
    },
    exit: {
      x: "-100vw",
      opacity: 0,
      transition: { duration: 0.25, ease: "easeIn" },
    },
  };

  return (
    <motion.div
      className="container-fluid"
      id="holder"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container-fluid" id="contactDiv">
        <h1 className="heading-1">PARTNER WITH US</h1>
        <p>
          Are you part of a scholars' association? Non-profit organization?
          Student-led initiatives? SMSE? Business who wants to pay it forward?
          Be our partner! Let us know of your collaboration inquires and proposals.
          Direct all communications to
          <a href="mailto:rc.nads.externals@gmail.com" className="email-highlight">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5vw"
                height="1.5vh"
                fill="currentColor"
                className="bi bi-envelope-at"
                viewBox="0 0 16 16"
              >
                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
              </svg>
              rc.nads.externals@gmail.com
            </a>
        </p>
        <div className="container-fluid" id="separator">
          <form className="container-fluid" id="contactForm">
            <label>Organization Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Full Organization Name (Abbreviation)"
            />
            <label>Point Person</label>
            <input
              className="form-control"
              type="text"
              placeholder="Full Name of Point Person"
            />
            <label>Position</label>
            <input
              className="form-control"
              type="text"
              placeholder="Position of the Point Person"
            />
            <label>Email Address</label>
            <input
              className="form-control"
              type="text"
              placeholder="Email Address"
            />
            <label>Subject</label>
            <input
              className="form-control"
              type="text"
              placeholder="[Event] Partnership Type"
            />
            <label>Message</label>
            <textarea className="form-control" placeholder="Message" />
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="dataPrivacyCheckbox"
                onChange={handleCheckboxChange}
              />
              <label
                className="form-check-label"
                htmlFor="dataPrivacyCheckbox"
                id="dataPrivacyLabel"
              >
                I agree to the collection, storage, and processing of my
                personal data in accordance with the NCR Alliance of DOST
                Scholars Data Privacy Policy. I understand that my information
                will only be used for the purpose of responding to my inquiry
                and will not be shared with third parties without my consent.
                <Button
                  variant="link"
                  onClick={handleShowModal}
                  className="form-check-label"
                  id="dataPrivacyBtn"
                >
                  Read full data privacy
                </Button>
              </label>
            </div>
            <button
              type="submit"
              id="submitBtn"
              className="btn btn-dark"
              disabled={!enableButton}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <DataPrivacy show={showModal} handleClose={() => setShowModal(false)} />
    </motion.div>
  );
}

export default Partner;
