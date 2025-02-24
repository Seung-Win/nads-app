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
      <div className="container-fluid" id="partnerDiv">
        <h1 className="heading-1">PARTNER WITH US</h1>
        <p>
          Are you part of a scholars' association? Non-profit organization?
          Student-led initiatives? SMSE? Business who wants to pay it forward?
          Be our partner! Let us know of your collaboration inquires and proposals.
          Direct all communications to
          <a href="mailto:rc.nads.externals@gmail.com" className="email-highlight">
              rc.nads.externals@gmail.com
            </a>
        </p>
        <div className="container-fluid" id="separator">
          <form className="container-fluid" id="partnerForm">
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
