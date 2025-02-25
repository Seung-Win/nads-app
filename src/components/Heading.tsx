import { useState } from "react";
import "./css/Heading.css";
import wordmark from "../assets/wordmark.png";
import { Link } from "react-router-dom";

function Heading() {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  let timeoutId: NodeJS.Timeout | null = null;

  const handleMouseEnter = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setDropdownOpen(false), 200); // Small delay to prevent flickering
  };

  const handleNavbar = () => {
    setNavbarOpen(true);
  }

  return (
    <>
      <nav className="" id="heading">
        <Link to="/">
          <img
            src={wordmark}
            id="wordmark"
            style={{ cursor: "pointer" }}
            alt="Wordmark"
          />
        </Link>
        <ul className="">
          <li className="headLink">
            <Link className="Link" to="/events">Events</Link>
          </li>
          <li className="headLink">
            <Link className="Link" to="/merch">Merch</Link>
          </li>
          <li className="headLink">
            <Link className="Link" to="/about">About</Link>
          </li>
          <li 
            className="dropdown headLink" 
            onMouseEnter = {handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="Link">Contact Us ▼</span>
              <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                <li><Link className="Link" to="/contact">Contact Us</Link></li>
                <li><Link className="Link" to="/partner">Partner With Us</Link></li>
              </ul>
          </li>
        </ul>
      </nav>
      <div className="overlay"></div>
    </>
  );
}

export default Heading;
