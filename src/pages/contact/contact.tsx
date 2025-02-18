import "./Contact.css";

function Home() {
  return (
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
        <button type="button" className="btn btn-light" id="lrnBtn">Learn Test</button>
      </div>
    </div>
  );
}

export default Home;
