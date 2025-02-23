import "./Merch.css";
import { Link } from "react-router-dom";
import { MerchData } from "../../data/MerchData";
import { motion } from "framer-motion";

function Merch() {
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
      <div className="container-fluid" id="contentMerch">
        <h1 className="heading-1">OUR DRIPS</h1>
        <p id="pMerch">
          Show your support and represent NCR Alliance of DOST Scholars with our
          exclusive merchandise! Our collection features high-quality and
          stylish items designed for scholars like you.
        </p>
        <div className="gallery">
          {MerchData.map((item, index) => (
            <div className="card-temp" key={index}>
              <img
                className="card-img-top"
                src={item.image}
                alt={item.title}
                id="merchImg"
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-subtitle mb-2">{item.price}</h6>
                <p className="card-text">{item.text}</p>
                <div id="merchBtnContainer">
                  <Link to="/product" state={{ item }} className="card-link">
                    <button id="merchBtn">More</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Merch;
