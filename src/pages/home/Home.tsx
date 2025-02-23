import "./Home.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/about");
  };

  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Controls the delay between children
      },
    },
    exit: {
      x: "-100vw",
      opacity: 0,
      transition: { duration: 0.25, ease: "easeIn" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0},
    show: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <>
      <div className="container-fluid" id="holder">
        <motion.div
          className="container-fluid"
          id="content"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <motion.h1 variants={itemVariants} className="title">
            NCR Alliance of DOST Scholars
          </motion.h1>
          <motion.p variants={itemVariants} id="description">
            As a youth organization, the NCR Alliance of DOST Scholars (NADS) is
            dedicated to the overall welfare improvement and development of
            DOST-SEI scholars throughout the National Capital Region. Our goal is
            to nurture scholars' leadership, interpersonal, and academic skills by
            offering them support and guidance. NADS is committed to supporting
            DOST-SEI scholars' civic engagement and patriotism while elevating
            STEM excellence. Through this, we empower our scholars to become
            catalysts for change in their communities and beyond by instilling in
            them a sense of pride and purpose. Together, let us shape the future
            of STEM and stimulate positive change in our society.
          </motion.p>

          <motion.button
            type="button"
            className="btn btn-light"
            id="lrnBtn"
            onClick={handleLearnMoreClick}
            variants={buttonVariants}
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
