import "./css/Heading.css";
import wordmark from "../assets/wordmark.png";

function Heading() {
  const handleWordmarkClick = () => {
    window.location.href = "/";
  };

  return (
    <>
      <nav className="" id="heading">
        <img
          src={wordmark}
          id="wordmark"
          onClick={handleWordmarkClick}
          style={{ cursor: "pointer" }}
          alt="Wordmark"
        />
        <ul className="">
          <li className="">
            <a href="#">Merch</a>
          </li>
          <li className="">
            <a href="#">Registration</a>
          </li>
          <li className="">
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Heading;
