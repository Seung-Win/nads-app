import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import "./Background.css";

function Background() {
  return (
    <>
      <div className="bg-img" id="bg-div">
        <img className="img-fluid" id="bg-img" src={image1} />;
      </div>
    </>
  );
}

export default Background;
