import { useEffect, useState } from "react";
import styles from "/src/styles/ImageCarousel.module.css";

export function ImageCarousel({ imagesArr }) {
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (nextIndex > imagesArr.length - 1) {
          return 0;
        }

        return nextIndex;
      });
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function moveBack() {
    if (currIndex === 0) {
      setCurrIndex(imagesArr.length - 1);
      return;
    } else if (currIndex <= imagesArr.length - 1) {
      setCurrIndex(currIndex - 1);
    }
  }

  function moveForward() {
    if (currIndex >= imagesArr.length - 1) {
      setCurrIndex(0);

      return;
    } else if (currIndex < imagesArr.length - 1) {
      setCurrIndex(currIndex + 1);

      return;
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.display}>
          <div
            className={styles.triangleLeft}
            onClick={moveBack}
            role="back-button"
          ></div>
          <div className={styles.pictureFrame} role="picture-frame">
            {imagesArr.map((image, index) => (
              <img
                key={index}
                className={
                  index === currIndex ? styles.fadeIn : styles.inactive
                }
                src={index == currIndex ? image.src : "#"}
                alt={image.alt}
              />
            ))}
          </div>
          <div
            className={styles.triangleRight}
            onClick={moveForward}
            role="forward-button"
          ></div>
        </div>
        <div className={styles.imageNav}>
          {imagesArr.map((element, index) => {
            return (
              <input
                data-testid={index}
                key={index}
                type="radio"
                id={index}
                name={index}
                checked={index == currIndex}
                onChange={() => setCurrIndex(index)}
              />
            );
          })}
        </div>{" "}
      </div>
    </div>
  );
}
