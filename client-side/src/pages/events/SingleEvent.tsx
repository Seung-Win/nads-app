import "./SingleEvent.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import EventForm from "./EventForm";

function SingleEvent() {
  const location = useLocation();
  const item = location.state?.item;

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

  if (!item) {
    return (
      <>
        <motion.div
          className="container-fluid"
          id="holder"
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="container-fluid" id="contentSingleEvent">
          <h1 className="heading-1">NO EVENT FOUND</h1>;
          </div>
        </motion.div>
      </>
    );
  }

  return (
    <>
      <motion.div
        className="container-fluid"
        id="holder"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="container-fluid" id="contentSingleEvent">
          <h1 className="heading-1">
            <Link to="/events">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>
            </Link>
            {item.title}
          </h1>
          <img src={item.image} alt={item.title} id="eventImg" />
          <h2> {item.subtitle} </h2>
          <p> {item.text} </p>
          <ul className="list-group">
            <li className="list-group-item">
              <b>Participants:</b> {item.participants}
            </li>
            <li className="list-group-item">
              <b>Event Date:</b> {item.date}
            </li>
            <li className="list-group-item">
              <b>Registration:</b> {item.registration}
            </li>
          </ul>
          {item.registration === "Open" && <EventForm />}
        </div>
      </motion.div>
    </>
  );
}

export default SingleEvent;
