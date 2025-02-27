import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import "./css/Background.css";
import { useRef, useEffect, useState } from "react";

const images = [image1, image2, image3];

function Background() {
  const backgroundState = useRef(0);
  const [, forceRender] = useState(0); // This triggers a re-render without resetting state

  useEffect(() => {
    const interval = setInterval(() => {
      backgroundState.current = (backgroundState.current + 1) % images.length;
      forceRender((prev) => prev + 1); // Force a re-render
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-img" id="bg-div">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={backgroundState.current === index ? "active" : ""}
          alt="background"
        />
      ))}
    </div>
  );
}

export default Background;
