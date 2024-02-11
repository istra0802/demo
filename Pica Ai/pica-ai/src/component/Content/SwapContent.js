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
                <a className="nav-link active-tab" href='/'>Face Swap</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/'>Multiple face</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link gradient" href='/'>Video Fave Swap</a>
              </li>
            </ul>
          </div>
          <div style={{ display: "block" }}>
            <div className="swap-action">
              <div className="swap-transform">
                <div className="swap-custom">
                  <div className="input-img  img">
                    <input type="file" accept="image/*" className="img-input" />
                  </div>
                  <span style={{marginTop:"13px"}}>Add face</span>
                </div>
                <span className="swap-arrow" style={{width:"16px", height:"16px", margin:" -24px 16px 0px",background:"url(https://static.pica-ai.com/_next/static/media/ic_right.aa511bd8.png) no-repeat center / cover"}}></span>

                <div className="swap-original">
                  <div className="swap-original-img img">
                  </div>
                  <span>Original</span>
                </div>
              </div>
              <div className="swap-img-display">
                <div className="swap-img-container">
                </div>
                <span>Original</span>
              </div>
            </div>

            <div className="swap-btn" disabled="">
              <span className="swap">Generate</span>
            </div>
          </div>
        </div>
      </div>
      <div className="swap-options options">
        <div className="swap-option-title">Select from templates or upload a photo to reface</div>
        <div className="swap-selections">
          <div style={{backgroundImage:"url(https://static.pica-ai.com/_next/static/media/icon-upload_light.3ac43ea2.png)"}} className="swap-border">
            <input type="file" accept="image/*" className="swap-option-input-img" />
          </div>
          <div className=" first-img active">
          </div>
          <div className="second-img">
          </div>
          
        </div>
      </div>
    </div>
  );
}
