import React from "react";
import "./Footer.scss";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
      
      
      <div className="footer-wrapper">
      <Container>
      <div className="footer-content">
        <div className="divider"></div>
        <div className="content">
          <div className="left  ">
            <div className="item lang" >
              <div>
                En
                <div className="dropdown">
                  <button
                    className=" btn "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      className="bi bi-chevron-down bold"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  </button>
                  <ul
                    className="dropdown-menu"
                    style={{ backgroundColor: "black" }}
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a className="item " href="/pica-ai" target="_blank">Blogs</a>
            <a className="item " href="/pica-ai" target="_blank">Terms of Service</a>
            <a className="last" href="/pica-ai" target="_blank">Privacy Policy</a>
          </div>
          <div className="right" >
          <div className="support">
          support@pica-ai.com
          </div>
          <div className="copyright"> © Copyright 2024, All Rights Reserved</div>
          </div>
        </div>
      </div>
      </Container>
    </div>
  );
}
