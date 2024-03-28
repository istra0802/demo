import React from "react";
import benefit from "../../../images/benefit.png";
import "./SwapBenefit.scss";
export default function SwapBenefit() {
  return (
    
    <div className="wrapper-describe" style={{paddingRight:"40px", paddingLeft:"40px"}}>
      <div className="describe-innertab">
        <div className="describe-right">
          <img
            className=" desrcibe-image"
            style={{
              maxWidth: "100%",
              display: "block",
              verticalAlign: "middle",
            }}
            src={benefit}
            alt=" "
          ></img>
        </div>
        <div className="describe-left">
          <h2 className="describe-title" style={{ textAlign: "left" }}>
          Limitless Creativity with Face Swapping
          </h2>
          <div className="describe-content">
            <p>
            With Pica face swapping tool, you're in control to remix anything imaginable. Access a huge library of popular templates or upload any photo to let your imagination run wild. Become a historical figure, take a selfie with a celebrity, swap your face onto '90s yearbook photos, mashup anything you can think of. Face swapping is not just fun - it lets you explore different realities and bring your wildest ideas to life.
            </p>
          </div>
          <div className="button" style={{ marginTop: "20px" }}>
            Swap Face Now
          </div>
        </div>
      </div>
    </div>
  );
}
