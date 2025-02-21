import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/about");
  };

  return (
    <>
    <div className="container-fluid" id="holder">
      <div className="container-fluid" id="content">
        <h1 className="title">NCR Alliance of DOST Scholars</h1>
        <p id="description">
          As a youth organization, the NCR Alliance of DOST Scholars - NADS is
          dedicated to the overall welfare improvement and development of
          DOST-SEI scholars throughout the National Capital Region - NCR. Our
          goal is to nurture scholars' leadership, interpersonal, and academic
          skills by offering them support and guidance. NADS is committed to
          supporting DOST-SEI scholars' civic engagement and patriotism while
          elevating STEM excellence. Through this, we empower our scholars to
          become catalysts for change in their communities and beyond by
          instilling in them a sense of pride and purpose. Together, let us
          shape the future of STEM and stimulate positive change in our society.
        </p>
        
        <button type="button" className="btn btn-light" id="lrnBtn"  onClick={handleLearnMoreClick}>
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
        </button>
      </div>
    </div>
    </>
  );
}

export default Home;
