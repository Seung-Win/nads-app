import "./css/Heading.css";
import wordmark from "../assets/wordmark.png";
import { Link } from "react-router-dom";

function Heading() {
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
          <li>
            <Link className="Link" to="/merch">Merch</Link>
          </li>
          <li>
            <Link className="Link" to="/events">Events</Link>
          </li>
          <li>
            <Link className="Link" to="/about">About</Link>
          </li>
          <li>
            <Link className="Link" to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Heading;
