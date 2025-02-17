import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import "./Background.css";
import { useEffect, useState } from "react";

const images = [image1,image2,image3];

function Background() {

  const [backgroundState, setBackgroundState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundState((prevState) => (prevState + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-img" id="bg-div">
        <img className="img-fluid" id="bg-img" src={images[backgroundState]} />;
      </div>
    </>
  );
}

export default Background;
