import "./About.css";
import wordmark2 from "../../assets/wordmark2.png";
import image1 from "../../assets/image1.png";

function About() {
  return (
    <div className="container-fluid" id="holder">
      <div className="container-fluid" id="contentAbout">
        <h1 className="heading-1">ABOUT US</h1>
        <img className="imgWordmark" src={wordmark2} />
        <p>
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
        <img className="photo1" src={image1} />
      </div>
    </div>
  );
}

export default About;
