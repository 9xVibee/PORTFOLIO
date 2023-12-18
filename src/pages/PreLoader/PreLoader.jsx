import { useEffect } from "react";
import "./PreLoader.css";
import gsap from "gsap";

const PreLoader = () => {
  useEffect(() => {
    gsap.to(".first-h1", {
      y: 0,
      delay: 1,
      duration: 0.5,
    });
    gsap.to(".sec-h1", {
      y: 0,
      delay: 1.2,
      duration: 0.5,
    });
    gsap.to(".third-h1", {
      y: 0,
      delay: 1.4,
      duration: 0.5,
    });
    gsap.to(".first-h1", {
      y: 100,
      delay: 2,
      duration: 0.5,
    });
    gsap.to(".sec-h1", {
      y: 100,
      delay: 2.2,
      duration: 0.5,
    });
    gsap.to(".third-h1", {
      y: 100,
      delay: 2.4,
      duration: 0.5,
    });

    gsap.to(".preloader", {
      y: "100%",
      delay: 3,
    });
  });
  return (
    <div className="preloader">
      <div className="preloader-container">
        <h1 className="first-h1">Patience,</h1>
        <h1 className="sec-h1">Consistency,</h1>
        <h1 className="third-h1">Believe.</h1>
      </div>
    </div>
  );
};

export default PreLoader;
