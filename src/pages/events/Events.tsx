import "./Events.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import { Link } from "react-router-dom";

const events = [
  {
    image: image1,
    title: "SULONG",
    subtitle: "Blahblah",
    text: "description dito"
  },
  {
    image: image2,
    title: "SULONG",
    subtitle: "Blahblah",
    text: "description dito"
  },
  {
    image: image3,
    title: "SULONG",
    subtitle: "Blahblah",
    text: "description dito"
  },
  {
    image: image1,
    title: "SULONG",
    subtitle: "Blahblah",
    text: "description dito"
  }
]

function Events() {
  return (
    <div className="container-fluid" id="holder">
      <div className="container-fluid" id="contentEvents">
        <h1 className="heading-1">EVENTS</h1>
        <p>
          Stay ahead in technology, collaboration, and research with NCR Alliance of DOST Scholars! Our
          events are designed to inspire, educate, and connect scholars within NCR.
        </p>
        <div className="gallery">
        {events.map((item, index) => (
            <div className="card-event" key={index}>
              <img className="card-img-top" src={item.image} alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-subtitle mb-2">{item.subtitle}</h6>
                <p className="card-text">{item.text}</p>
                <div id="merchBtnContainer">
                <Link to="/event" className="card-link">
                  <button id="merchBtn">More</button>
                </Link>
                </div>
              </div>
            </div>
          ))}
          </div>
      </div>
    </div>
  );
}

export default Events;
