import React from "react";
import "./Pricing.scss";

export default function Pricing() {
  return (
    <div className="price-wrapper">
      <h1
        style={{
          margin: "0px",
          fontWeight: "700",
          fontSize: "48px",
          lineHeight: "60px",
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        Pricing Plans
      </h1>
      <div className="price-list">
        <div style={{ width: "auto" }}>
          <div className="price-list-item">
            <div className="price-item-title">Monthly Plan</div>
            <div className="price-item-info">
              <div className="price-item-amount">"$" "9.99"</div>
              <div className="price-item-period">"/" " month"</div>
            </div>
            <div className="price-plan-info">"10000" "credits"</div>
            <div className="price-plan-button">Subscribe Now</div>
          </div>
        </div>
        <div style={{ width: "auto" }}>
          <div className="price-list-item">
            <div className="price-item-title">Annual Plan</div>
            <div className="price-item-info">
              <div className="price-item-amount">"$" "3.33"</div>
              <div className="price-item-period">"/" " month"</div>
            </div>
            <div className="price-plan-info">"US$39.99 billed yearly"</div>
            <div className="price-plan-info">"10000" "credits"</div>
            <div className="price-plan-button price-plan-button-active">Subscribe Now</div>
          </div>
        </div>
      </div>
    </div>
  );
}
