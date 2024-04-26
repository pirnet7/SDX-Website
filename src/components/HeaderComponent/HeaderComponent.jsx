import React, { useState, useEffect } from "react";
import "./HeaderComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [text, setText] = useState("");
  const [forward, setForward] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const targetTexts = [" Bruno", " a software developer"];

    const typeText = () => {
      const currentTarget = targetTexts[currentIndex];
      if (forward) {
        if (text !== currentTarget) {
          setText(currentTarget.substring(0, text.length + 1));
        } else {
          setTimeout(() => {
            setForward(false);
          }, 1000); // Pause at end of typing
        }
      } else {
        if (text !== "") {
          setText(currentTarget.substring(0, text.length - 1));
        } else {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % targetTexts.length);
          setForward(true);
        }
      }
    };

    const intervalId = setInterval(typeText, 100); // Adjust typing speed here (milliseconds)

    return () => clearInterval(intervalId);
  }, [text, forward, currentIndex]);

  return (
    <div className="container header-container">
      <div className="header d-flex flex-column align-items-center justify-content-around">
        <div className="text-center">
          <h2 className="header-title text-light">Hi there!</h2>
          <h4 className="header-subtitle text-light">I'm{text}</h4>
        </div>
        <div className="mt-4">
          <sdx-button-group>
            <sdx-button label="Visit" icon-name="icon-arrow-down"></sdx-button>
          </sdx-button-group>
        </div>
        <div className="sideInformationContainer"></div>
      </div>
    </div>
  );
};

export default Header;
