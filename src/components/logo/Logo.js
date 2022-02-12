import React from "react";
import Tilt from "react-parallax-tilt";
import "../logo/Logo.css";
import fc1 from "../logo/fc1.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt>
        <div
          className="Tilt"
          style={{
            height: "150px",
            width: "150px",
            backgroundColor: "darkgreen",
            boxShadow: "0 2px 10px rgba(255,255,255,0.8)",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ borderRadius: "10px", cursor: "pointer" }}
            className="logo-img"
            src={fc1}
            alt="logo"
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
