import { useState, useEffect } from "react";
import Images from "./Images";

function Carousel() {
  const [imageData, setImageData] = useState("");

  const [imgIndex, setImgIndex] = useState("");

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

  function nextImg() {
    console.log(imageData);
    if (imgIndex < imageData.length < 1) {
      setImgIndex((prevImgIndex) => prevImgIndex + 1);
    } else if (imgIndex === imageData.length < 1) {
      setImgIndex(0);
    }
    console.log(imageData[imgIndex]);
  }

  function previousImg() {
    if (imgIndex > 0) {
      setImgIndex((prevImgIndex) => prevImgIndex - 1);
    }
  }

  return (
    <div>
      <Images
        imageData={imageData}
        nextImg={nextImg}
        previousImg={previousImg}
      />
    </div>
  );
}

export default Carousel;
