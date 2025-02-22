import React, { useState } from "react";
import "../css/popup.css";
import { FaCheck, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function Successpopup() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible && (
        <div className="popup font-jakarta">
          <div className="popup-container">
            <div className="popup-header">
              <div className="popup-icon-container">
                <FaCheckCircle size={40} color="green"/>
              </div>
            </div>
            <div className="popup-content">
              <div className="popup-body">
                <h2>Update Success!!!!</h2>
                <p>
                  Your changes have been saved and are now up to date.
                </p>
              </div>
              <div className="popup-footer">
                <button
                  className="popup-button hover:bg-dark-blue"
                  onClick={() => setVisible(false)}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <button onClick={() => setVisible(true)}>Show Popup</button> */}
    </>
  );
}
