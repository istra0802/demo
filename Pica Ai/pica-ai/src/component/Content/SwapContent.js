import React from "react";
import "./SwapContent.scss";

export default function SwapContent() {
  return (
    <div className="cover">
      <div className="face-swap">
        <div className="face-swap-header">
          <h1 className="face-swap-title">Face Swap Online</h1>
          <div className="face-swap-subheader">
            Experience funny or realistic face swapping effects. Begin by
            uploading your photo!
          </div>
        </div>
        <div className="face-swap-body">
          <div className="face-swap-tab">
          <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href='/'>Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='/'>Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='/'>Link</a>
          </li>
          
        </ul>
        
          </div>
        </div>
      </div>
    </div>
  );
}
