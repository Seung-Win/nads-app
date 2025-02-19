import "./Merch.css";
import { Link } from "react-router-dom";
import hoodie1 from "../../assets/hoodie1.png";
import hoodie2 from "../../assets/hoodie2.png";

const merch = [
  {
    image: hoodie1,
    title: "Nucks Hoodie",
    price: "Php 900",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    image: hoodie2,
    title: "Ning Hoodie",
    price: "Php 900",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

function Merch() {
  return (
    <div className="container-fluid" id="holder">
      <div className="container-fluid" id="contentMerch">
        <h1 className="heading-1">OUR DRIPS</h1>
        <p>
          Show your support and represent NCR Alliance of DOST Scholars with our
          exclusive merchandise! Our collection features high-quality and
          stylish items designed for scholars like you.
        </p>
        <div className="gallery">
          {merch.map((item, index) => (
            <div className="card-temp" key={index}>
              <img className="card-img-top" src={item.image} alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-subtitle mb-2">{item.price}</h6>
                <p className="card-text">{item.text}</p>
                <div id="merchBtnContainer">
                <Link to="/product" className="card-link">
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

export default Merch;
