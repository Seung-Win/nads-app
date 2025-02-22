import "./SingleEvent.css";
import { Link, useLocation } from "react-router-dom";
import EventForm from "./EventForm"

function SingleEvent() {
  const location = useLocation();
  const item = location.state?.item;

  if (!item) {
    return <h1 className="heading-1">NO EVENT FOUND</h1>;
  }

  return (
    <>
    <div className="container-fluid" id="holder">
      <div className="container-fluid" id="contentMerch">
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
        <img src={item.image} alt={item.title} id="productImg" />
        <h2>
          {" "}
          {item.title}: {item.subtitle}{" "}
        </h2>
        <p id="pMerch"> {item.text} </p>
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
    </div>
    </>
  );
}

export default SingleEvent;
