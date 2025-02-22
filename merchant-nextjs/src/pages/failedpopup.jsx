import React, { useState } from "react";
import "../app/css/popup.css";
import { FaTimesCircle } from "react-icons/fa";

export default function Failedpopup() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible && (
        <div className="popup font-jakarta">
          <div className="popup-container">
            <div className="popup-header">
              <div className="popup-icon-container">
                <FaTimesCircle size={40} color="red"/>
              </div>
            </div>
            <div className="popup-content">
              <div className="popup-body">
                <h2>Update Failed!!!!</h2>
                <p>
                  An error occurred while saving your changes. Please try again.
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
