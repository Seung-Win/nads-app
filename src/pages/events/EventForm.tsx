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
            className="form-control"
            id="universityInput" 
            list="universities"
            placeholder="e.g. Polytechnic University of the Philippines - Manila" 
            required 
          />
          <datalist id="universities">
            <option value="Adamson University"></option>
            <option value="Ateneo de Manila University"></option>
            <option value="Centro Escolar University - Manila"></option>
            <option value="Colegio de San Juan de Letran - Manila"></option>
            <option value="De La Salle University"></option>
            <option value="Eulogio 'Amang' Rodriguez Institute of Science and Technology - Manila"></option>
            <option value="Far Eastern University - Dr. Nicanor Reyes Medical Foundation"></option>
            <option value="Far Eastern University - Institute of Technology"></option>
            <option value="Far Eastern University - Manila"></option>
            <option value="Lyceum of the Philippines University - Manila"></option>
            <option value="Manila Central University"></option>
            <option value="Mapúa University - Intramuros"></option>
            <option value="Mapúa University - Makati"></option>
            <option value="Marikina Polytechnic College"></option>
            <option value="National University - Manila"></option>
            <option value="New Era University - Main"></option>
            <option value="Our Lady of Fatima University - QC"></option>
            <option value="Our Lady of Fatima University - Valenzuela"></option>
            <option value="Pamansatan ng Lungsod ng Maynila"></option>
            <option value="PATTS College of Aeronautics"></option>
            <option value="Philippine Normal University"></option>
            <option value="Philippine State College of Aeronautics - Villamor"></option>
            <option value="Polytechnic University of the Philippines - Manila"></option>
            <option value="Polytechnic University of the Philippines - San Juan"></option>
            <option value="Polytechnic University of the Philippines - Taguig"></option>
            <option value="Rizal Technological University - Boni"></option>
            <option value="Rizal Technological University - Pasig"></option>
            <option value="Southville International School and Colleges"></option>
            <option value="Technological Institute of the Philippines - Manila"></option>
            <option value="Technological Institute of the Philippines - QC"></option>
            <option value="Technological University of the Philippines - Manila"></option>
            <option value="Technological University of the Philippines - Taguig"></option>
            <option value="Trinity University of Asia"></option>
            <option value="University of Santo Tomas"></option>
            <option value="University of the East - Caloocan"></option>
            <option value="University of the East - Manila"></option>
            <option value="University of the Philippines - Diliman"></option>
            <option value="University of the Philippines - Manila"></option>
            <option value="World Citi Colleges Aeronautical & Technological College - North Manila"></option>
          </datalist>
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
              <label className="form-check-label radio">RA 7687</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="scholarshipType"
                value="merit"
              />
              <label className="form-check-label radio">Merit</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="scholarshipType"
                value="RA10612"
              />
              <label className="form-check-label radio">RA 10612</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="scholarshipType"
                value="JLSS7687"
              />
              <label className="form-check-label radio">JLSS RA 7687</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="scholarshipType"
                value="JLSSmerit"
              />
              <label className="form-check-label radio">JLSS Merit</label>
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
            id="eventsDataPrivacyLabel"
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
              id="eventsDataPrivacyBtn"
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
