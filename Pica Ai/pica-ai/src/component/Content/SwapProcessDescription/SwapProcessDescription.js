import React from "react";
import arrowImg from "../../../images/arrowImg.png";
import selectImg from '../../../images/selectImg.png';
import generateImg from '../../../images/generateImg.png';
import uploadImg from "../../../images/uploadImg.png";
import "./SwapProcessDescription.scss";

export default function SwapProcessDescription() {
  return (
    <div className="wrapper-process">
      <div className="process-content">
        <h2 className="process-heading" style={{ margin: "0px" }}>
          How to Swap Face Online
        </h2>
        <div className="process-container">
          <div className="process-container-item">
            <img
             className="process-image"
              src={uploadImg}
              alt=" "
              
            ></img>
            <div
              className="process-item-text"
             
            >
              <div className="process-item-title">
                <span className="process-ellipse"></span>
                01 Upload Face Photo
              </div>
              <div
                className="process-item-description"
                style={{
                  textAlign: "center",
                  color: "rgb(47,47,47), opacity:0.7",
                }}
              >
                Click "Add Face" and upload a clear, front-facing photo of the
                face you want to swap. A high-quality headshot works best.
              </div>
            </div>
          </div>
          <img
            src={arrowImg}
            alt=""
            className="process-arrow"
            style={{
              maxWidth: "100%",
            
              verticalAlign: "middle",
            }}
          ></img>

          <div className="process-container-item">
            <img
              src={selectImg}
              alt=" "
              className="process-image"
            ></img>
            <div
              className="process-item-text"
             
            >
              <div className="process-item-title">
                <span className="process-ellipse"></span>
                02 Select Body Photo
              </div>
              <div
                className="process-item-description"
                style={{
                  textAlign: "center",
                  color: "rgb(47,47,47), opacity:0.7",
                }}
              >
              Pick from preset options or upload your own. Match angles and lighting for optimal results.
              </div>
            </div>
          </div>

          <img
            src={arrowImg}
            alt=""
            className="process-arrow"
            style={{
              maxWidth: "100%",
          
              verticalAlign: "middle",
            }}
          ></img>

          <div className="process-container-item">
            <img
              src={generateImg}
              alt=" "
              className="process-image"
            ></img>
            <div
              className="process-item-text"
             
            >
              <div className="process-item-title">
                <span className="process-ellipse"></span>
                03 Generate and Save
              </div>
              <div
                className="process-item-description"
               
              >
              Click "Swap Face" to auto swap face into photo. Preview result. Click "Download" to save final swapped photo when satisfied.
              </div>
            </div>
          </div>
        </div>
        <div className="process-button">
        Swap Face Now
        </div>
      </div>
    </div>
  );
}
