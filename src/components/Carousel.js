import { useState, useEffect } from "react";
import Images from "./Images";

function Carousel() {
  const [imageData, setImageData] = useState("");

  useEffect(() => {
    fetch("https://www.reddit.com/r/aww/top/.json?t=all")
      .then((res) => res.json())
      .then((data) => {
        const dataObject = data.data.children;
        for (let i = 0; i < dataObject.length; i++) {
          if (dataObject[i].data.url_overridden_by_dest.slice(-3) === "jpg") {
            setImageData((prevImage) => {
              return [...prevImage, dataObject[i].data.url_overridden_by_dest];
            });
          }
        }
      });
  }, []);

  return (
    <div className="carousel-container">
      <Images imageData={imageData} />
    </div>
  );
}

export default Carousel;
