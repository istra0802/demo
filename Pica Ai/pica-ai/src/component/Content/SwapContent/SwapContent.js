import React, { useState } from "react";
import "./SwapContent.scss";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export default function SwapContent() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [customImage, setCustomImage] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [additionalImages, setAdditionalImages] = useState([]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        setAdditionalImages([...additionalImages, e.target.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCustomImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCustomImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateClick = () => {
    setButtonClicked(true);
    // Additional functionality to generate content
  };

  return (
    <div className="cover">
    <div>{' '}</div>
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
                <a className="nav-link active-tab" href="/">
                  Face Swap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Multiple face
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link gradient" href="/">
                  Video Fave Swap
                </a>
              </li>
            </ul>
          </div>
          <div style={{ display: "block" }}>
            <div className="swap-action">
              <div className="swap-transform">
                <div className="swap-custom">
                  <div
                    className="img"
                    style={{
                      background:
                        "url(https://static.pica-ai.com/_next/static/media/icon-upload.368442cb.png) center center / cover no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundImage: customImage
                        ? `url(${customImage})`
                        : "url(https://static.pica-ai.com/_next/static/media/icon-upload.368442cb.png) center center / cover no-repeat",
                      zIndex: 10,
                    }}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      className="img-input"
                      onChange={handleCustomImageChange}
                    />
                  </div>
                  <span style={{ marginTop: "13px" }}>Add face</span>
                </div>
                <span
                  className="swap-arrow"
                  style={{
                    width: "16px",
                    height: "16px",
                    margin: " -24px 16px 0px",
                    background:
                      "url(https://static.pica-ai.com/_next/static/media/ic_right.aa511bd8.png) no-repeat center / cover",
                  }}
                ></span>

                <div className="swap-original">
                  <div
                    className="swap-original-img img "
                    style={{
                      background: selectedImage
                        ? `url(${selectedImage}) center center / cover no-repeat`
                        : undefined,
                    }}
                  ></div>
                  <span style={{ marginTop: "13px" }}>Original</span>
                </div>
              </div>
              <span style={{color:"white",marginTop:"10px",borderRadius:"5px",height:"34px",padding:"4px",background:"grey", marginRight:"-70px", zIndex:"3"}}>Original</span>
              <div className="swap-img-display">
                <div
                  className="swap-img-container img"
                  style={{
                    background: selectedImage
                      ? `url(${selectedImage}) center center / cover no-repeat`
                      : undefined,
                  }}
                >
                </div>
                
              </div>
            </div>

            <div className="swap-btn" disabled=""
            onClick={handleGenerateClick}
            style={{
              background: buttonClicked
                ? "linear-gradient(106.28deg, rgb(133, 96, 250) 0%, rgb(68, 211, 239) 90.81%)"
                : undefined,
                animation: buttonClicked
                ? "fillColor 1s forwards"
                : undefined,
            }}
            >
            <span
           
          >Generate</span>
            </div>
          </div>
        </div>
      </div>

    

      <div className="swap-options options">
        <div className="swap-option-title">
          Select from templates or upload a photo to reface
        </div>
        <div className="swap-selections">
          <div className="additional-images">
          
          <div className="additional-image-container">
          <div
            className="swap-border"
            style={{
              background: `url(https://static.pica-ai.com/_next/static/media/icon-upload_light.3ac43ea2.png) center center / cover no-repeat`,
              zIndex: 10,
            }}
          >
            <input
              type="file"
              accept="image/*"
              className="swap-options-input-img"
              onChange={handleImageChange}
            />
          </div>
              {additionalImages
                .slice(0)
                .reverse()
                .map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    alt={`Image ${index + 1}`}
                    style={{
                      width: "90px",
                      height: "90px",
                      marginRight:"10px",
                      marginTop:"10px",
                    }}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
