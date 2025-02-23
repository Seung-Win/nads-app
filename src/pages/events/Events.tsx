import "./Events.css";
import { events } from "../../data/EventData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Events() {
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
      <div className="container-fluid" id="contentEvents">
        <h1 className="heading-1">EVENTS</h1>
        <p id="pEvents">
          Stay ahead in technology, collaboration, and research with NCR
          Alliance of DOST Scholars! Our events are designed to inspire,
          educate, and connect scholars within NCR.
        </p>
        <div className="gallery">
          {events.map((item, index) => (
            <div className="card-event" key={index}>
              <img className="card-img-top" src={item.image} alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-subtitle mb-2">{item.subtitle}</h6>
                <p className="card-text">{item.text}</p>
                <div id="eventBtnContainer">
                  <Link to="/event" state={{ item }} className="card-link">
                    <button id="eventBtn">More</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div id="partnerBtnContainer">
          <Link to="/partner">
            <button id="partnerBtn">Be our Partner!</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Events;
