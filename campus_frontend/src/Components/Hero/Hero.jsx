import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero__text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          While it’s safe to say that no one knows what will happen tomorrow,
          having an education under your belt will open the door to more
          opportunities.
        </p>
        <button className="btn">
          Expore more<img src={dark_arrow} alt="arrow"></img>
        </button>
      </div>
    </div>
  );
};

export default Hero;
