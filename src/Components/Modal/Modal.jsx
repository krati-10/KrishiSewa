import React from "react";
import "./Modal.css";

function Modal({ Close }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1>Join Community</h1>
          <br />
          <a href="https://t.me/+XUdOs5MW_Z8wZTM9">
            https://t.me/+XUdOs5MW_Z8wZTM9
          </a>
        </div>
        <div className="body">
          <p>The community looks amazing. Hope you want to join it!</p>
        </div>
        <div className="footer">
          <button
            className="button i-button"
            onClick={() => {
              Close();
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
