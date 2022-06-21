import { useState, useEffect, useCallback } from "react";

function Images(props) {
  const [imgIndex, setImgIndex] = useState(0);

  const nextImg = useCallback(() => {
    if (imgIndex < props.imageData.length - 1) {
      setImgIndex((prevImgIndex) => prevImgIndex + 1);
    } else if (imgIndex === props.imageData.length - 1) {
      setImgIndex(0);
    }
  });

  useEffect(() => {
    const timer = setInterval(() => {
      nextImg();
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [nextImg]);

  function previousImg() {
    if (imgIndex > 0) {
      setImgIndex((prevImgIndex) => prevImgIndex - 1);
    } else if (imgIndex === 0) {
      setImgIndex(props.imageData.length - 1);
    }
  }
  return (
    <div>
      <button onClick={previousImg}>Previous Image</button>
      <div className="image-container">
        <img className="image" src={props.imageData[imgIndex]} alt="test" />
      </div>

      <button onClick={nextImg}>Next Image</button>
    </div>
  );
}
export default Images;
