import { useState } from "react";
import "./css/HeadingMobile.css";
import wordmark from "../assets/wordmark.png";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; 

function HeadingMobile() {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleNavbar = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <>
      {!navbarOpen && (
        <motion.img
          src={wordmark}
          id="wordmark2"
          style={{ cursor: "pointer" }}
          alt="Wordmark"
          onClick={toggleNavbar}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}

      <AnimatePresence>
        {navbarOpen && (
          <motion.nav
            id="headingMobile"
            className="show"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Link to="/" onClick={toggleNavbar}>
              <img
                src={wordmark}
                id="wordmarkMobile"
                style={{ cursor: "pointer" }}
                alt="Wordmark"
              />
            </Link>
            <ul className="">
              <li className="headLinkMobile">
                <Link className="Link" to="/events" onClick={toggleNavbar}>
                  Events
                </Link>
              </li>
              <li className="headLinkMobile">
                <Link className="Link" to="/merch" onClick={toggleNavbar}>
                  Merch
                </Link>
              </li>
              <li className="headLinkMobile">
                <Link className="Link" to="/about" onClick={toggleNavbar}>
                  About
                </Link>
              </li>
              <li
                className="dropdown2 headLinkMobile"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseEnter}
              >
                <span className="Link">Contact Us ▼</span>
              </li>

              <AnimatePresence>
                {dropdownOpen && (
                  <>
                    <motion.li
                      className="headLinkMobile dropdownMobile show"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link className="Link" to="/contact" onClick={toggleNavbar}>
                        Contact Us
                      </Link>
                    </motion.li>
                    <motion.li
                      className="headLinkMobile dropdownMobile show"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <Link className="Link" to="/partner" onClick={toggleNavbar}>
                        Partner With Us
                      </Link>
                    </motion.li>
                  </>
                )}
              </AnimatePresence>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={toggleNavbar}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default HeadingMobile;
