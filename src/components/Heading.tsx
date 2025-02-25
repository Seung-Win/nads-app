import { useState, useEffect } from "react";
import "./css/Heading.css";
import wordmark from "../assets/wordmark.png";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Heading() {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <nav id="heading">
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
            <Link className="Link" to="/events">
              Events
            </Link>
          </li>
          <li className="headLink">
            <Link className="Link" to="/merch">
              Merch
            </Link>
          </li>
          <li className="headLink">
            <Link className="Link" to="/about">
              About
            </Link>
          </li>
          <li
            className="dropdown headLink"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseEnter}
          >
            <span className="Link">Contact Us ▼</span>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul
                  className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.li
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link className="Link" to="/contact">
                      Contact Us
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link className="Link" to="/partner">
                      Partner With Us
                    </Link>
                  </motion.li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Heading;
