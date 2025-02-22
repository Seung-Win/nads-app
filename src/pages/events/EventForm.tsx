import "./SingleEvent.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import DataPrivacy from "../modal/DataPrivacy";

function EventForm() {
  const [showModal, setShowModal] = useState(false);
  const [enableButton, setEnableButton] = useState(false);

  const handleShowModal = () => setShowModal(true);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => setEnableButton(event.target.checked)

  return (
    <div className="container-fluid" id="eventRegis">
      <h3>REGISTRATION FORM</h3>
      <form>
        <div className="row">
          <div className="col">
            <label>Given Name</label>
            <input
              type="text"
              className="form-control"
              id="fNameInput"
              placeholder="e.g. Juan"
              required
            />
          </div>
          <div className="col">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lNameInput"
              placeholder="e.g. Dela Cruz"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Middle Name</label>
            <input
              type="text"
              className="form-control"
              id="mNameInput"
              placeholder="e.g. Santos"
            />
          </div>
          <div className="col">
            <label>Suffix</label>
            <input
              type="text"
              className="form-control"
              id="suffixInput"
              placeholder="e.g. Sr., Jr., III, etc."
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Nickname</label>
            <input
              type="text"
              className="form-control"
              id="nnInput"
              placeholder="e.g. Uno"
            />
          </div>
          <div className="col">
            <label>Birth Date</label>
            <input type="date" className="form-control" id="bdateInput" />
          </div>
        </div>
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          aria-describedby="emailHelp"
          placeholder="e.g. juandcruz@gmail.com"
          required
        />
        <label>University (do not abbreviate)</label>
        <input
          type="text"
          className="form-control"
          id="emailInput"
          aria-describedby="emailHelp"
          placeholder="e.g. Polytechnic University of the Philippines - Mabini Campus"
          required
        />
        <div className="row">
          <div className="col">
            <label>Program (do not abbreviate)</label>
            <input
              type="text"
              className="form-control"
              id="emailInput"
              aria-describedby="emailHelp"
              placeholder="e.g. Bachelor of Science in Information Technology"
              required
            />
          </div>
          <div className="col">
            <label>Year level</label>
            <select defaultValue="1" className="form-select" required>
              <option value="0" disabled>
                Select a year
              </option>
              <option value="1">1st year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
              <option value="5">5th Year</option>
              <option value="6">6th Year</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div>
              <label>Scholarship Type</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="scholarshipType"
                value="RA7687"
                required
              />
              <label className="form-check-label">RA 7687</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="scholarshipType"
                value="merit"
              />
              <label className="form-check-label">Merit</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="scholarshipType"
                value="RA10612"
              />
              <label className="form-check-label">RA 10612</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="scholarshipType"
                value="JLSS7687"
              />
              <label className="form-check-label">JLSS RA 7687</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="scholarshipType"
                value="JLSSmerit"
              />
              <label className="form-check-label">JLSS Merit</label>
            </div>
          </div>
          <div className="col">
            <label>Year of Award</label>
            <select defaultValue="-1" className="form-select" required>
              <option value = "-1" disabled>
                Select a year
              </option>
              <option value="0">2020</option>
              <option value="1">2021</option>
              <option value="2">2022</option>
              <option value="3">2023</option>
              <option value="4">2024</option>
              <option value="5">2025</option>
            </select>
          </div>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="dataPrivacyCheckbox"
            onChange = {handleCheckboxChange}
          />
          <label
            className="form-check-label"
            htmlFor="dataPrivacyCheckbox"
            id="dataPrivacyLabel"
          >
            I agree to the collection, storage, and processing of my personal
            data in accordance with the NCR Alliance of DOST Scholars Data
            Privacy Policy. I understand that my information will only be used
            for the purpose of responding to my inquiry and will not be shared
            with third parties without my consent.
            <Button
              variant="link"
              onClick={handleShowModal}
              className="form-check-label"
              id="dataPrivacy"
            >
              Read full data privacy
            </Button>
          </label>
        </div>
      </form>
      <DataPrivacy show={showModal} handleClose={() => setShowModal(false)} />
      <button
        type="submit"
        id="eventSubmitBtn"
        className="btn btn-dark"
        disabled={!enableButton}
      >
        Submit
      </button>
    </div>
  );
}

export default EventForm;
