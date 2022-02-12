import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p style={{ color: "#f1e3e3" }} className="f2">
        {"This Magic App will detect faces in your pictures.Give it a try."}
      </p>
      <div className="center">
        <div className=" center form pa4 br3 shadow-5">
          <input
            onChange={onInputChange}
            className="f4 pa2 w-70 center"
            type="text"
          />
          <button
            onClick={onButtonSubmit}
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            style={{ cursor: "pointer" }}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
