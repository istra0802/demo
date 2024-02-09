import React from "react";
import "./LastSection.scss";

export default function LastSection() {
  return (
    <div className="wrapper">
      <div className="content">
        <h2
          style={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "60px",
          }}
        >
          Begin Your Face Swapping Journey
        </h2>
        <div className="section-text" >
        Explore endless creative possibilities with Pica AI's online face swapper.
        </div>
        <a href="/" className="section-button">
        Swap Face Now
        </a>
      </div>
    </div>
  );
}
