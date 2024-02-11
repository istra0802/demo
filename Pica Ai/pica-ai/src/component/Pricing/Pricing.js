import React, { useState } from "react";
import "./Pricing.scss";

export default function Pricing() {
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle answer visibility
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="price-wrapper">
      <h1 className="price-title">Pricing Plans</h1>
      <div className="price-list">
        {/* Monthly Plan */}
        <div className="price-list-item">
          <div className="price-item-title">Monthly Plan</div>
          <div className="price-item-info">
            <div className="price-item-amount">$9.99</div>
            <div className="price-item-period">/month</div>
          </div>
          <div className="price-plan-info">10000 credits</div>
          <div className="price-plan-button">Subscribe Now</div>
        </div>

        {/* Annual Plan */}
        <div className="price-list-item">
          <div className="price-item-title">Annual Plan</div>
          <div className="price-item-info">
            <div className="price-item-amount">$ 3.33</div>
            <div className="price-item-period">/ month</div>
          </div>
          <div className="price-plan-info">US$39.99 billed yearly</div>
          <div className="price-plan-info">10000 credits</div>
          <div className="price-plan-button price-plan-button-active">Subscribe Now</div>
        </div>
      </div>

      {/* Features */}
      <div className="price-Feature">
        <div className="priceFeatureTitle" style={{ fontSize: "20px", paddingBottom: "14px" }}>Everything in Pica:</div>
        <div className="price-feature-item">Commercial license (solo).</div>
        <div className="price-feature-item">Text to Images are public.</div>
        <div className="price-feature-item">No slow generations.</div>
        <div className="price-feature-item">Other scenes are private.</div>
        <div className="price-feature-item">No watermark</div>
        <div className="price-feature-item">HD to 3K+ photos</div>
      </div>

      {/* FAQ Section */}
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="price-faq-wrapper">
        {faqData.map((faq, index) => (
          <div className="price-faq-container" key={index}>
            <div className="price-faq-header" onClick={() => toggleAnswer(index)}>
              <div className="question">{faq.question}</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={`bi bi-chevron-down ${openIndex === index ? "open" : ""}`}
                viewBox="0 0 16 16"
              >
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
              </svg>
            </div>
            {openIndex === index && (
              <div className="answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Sample FAQ data
// Sample FAQ data
const faqData = [
  {
    question: "Can I use Pica to create AI images for free?",
    answer: "Yes, you can use Pica for free with limited features.",
  },
  {
    question: "What payment methods do you support?",
    answer: "At the moment, we accept credit card payments and plan to introduce additional payment options soon.",
  },
  {
    question: "Is the checkout secure?",
    answer: "Yes, our checkout process is secure and your payment information is encrypted.",
  },
  {
    question: "Which currencies are accepted by Pica?",
    answer: "We accept payments in multiple currencies, including USD, EUR, GBP, and more. Please check our website for the full list.",
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of the current billing period.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Your new plan will take effect immediately, and any changes to billing will be prorated.",
  },
  {
    question: "Will I receive an invoice?",
    answer: "Yes, you will receive an invoice for your subscription payments. Invoices are sent to the email address associated with your account.",
  },
  {
    question: "Does this pricing plan also work for Pica AI App?",
    answer: "Yes, the pricing plans apply to all versions of Pica, including the AI App. Your subscription grants you access to all features across platforms.",
  },
  {
    question: "Why do I need to pay for the AI image generator?",
    answer: "Developing and maintaining an AI image generator requires significant resources, including server costs, algorithm development, and ongoing improvements. Your subscription helps us cover these expenses and ensures continued support and updates.",
  },
  {
    question: "Can I use the AI images I create for commercial use?",
    answer: "Yes, you can use the AI images created with Pica for commercial purposes. However, please note that certain restrictions may apply depending on the license agreement. We recommend reviewing the terms of use for more information.",
  },
];
