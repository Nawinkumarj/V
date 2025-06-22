import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";

const faqData = [
  {
    question: "Can you help us rank higher on Google?",
    answer: "Yes, we can! Our team focuses on ethical, results-driven SEO strategies — including keyword research, on-page optimization, quality content, and link building — all tailored to your business goals. We don’t just chase rankings; we aim to bring you the right audience and measurable growth over time.",
  },
  {
    question: "Can you optimize my e-commerce store for SEO and conversions?",
    answer: "Yes, absolutely. We optimize your e-commerce store to not only rank higher on search engines but also to convert visitors into customers. From product page SEO and keyword-rich descriptions to faster load times and intuitive user journeys — we ensure your store performs well on every front.",
  },
  {
    question: "Will I be able to manage the product inventory myself?",
    answer: "Definitely. We build e-commerce platforms with user-friendly dashboards that let you easily add, update, or remove products — no technical skills required. We also provide training and support so you feel confident managing your store independently.",
  },
  {
    question: "What’s included in your digital marketing packages?",
    answer: "Our digital marketing packages are designed to be flexible and goal-focused. They typically include SEO, social media management, paid advertising (like Google Ads), email marketing, and content strategy. We work closely with you to create a custom plan that fits your brand and drives real results.",
  },
  {
    question: "Do you sign NDAs for confidential projects?",
    answer: "Yes, we do. We understand the importance of confidentiality and are happy to sign a Non-Disclosure Agreement (NDA) to protect your ideas, data, and business information. Your trust and privacy are a top priority for us.",
  },
  {
    question: "Can you redesign an existing app or website?",
    answer: "Absolutely! Whether you want a fresh new look or improved functionality, our team can revamp your existing app or website. We focus on enhancing user experience, updating the design to modern standards, and ensuring it aligns perfectly with your brand and goals.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, we do! Beyond development, we provide ongoing maintenance and support to ensure your website or app runs smoothly, stays secure, and stays updated with the latest technologies. Our team is always ready to assist you whenever you need help or enhancements."
  },
  {
    question: "What happens if any payment is missed?",
    answer: "We provide a grace period of 30 days from the invoice date to complete the payment. If payment isn’t received by the deadline, we may temporarily pause your server or services until the payment is settled. We always strive to communicate clearly and work with you to avoid any disruption."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-heading">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button
              type="button"
              className="faq-qn"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faq-icon">
                {activeIndex === index ? <GoChevronDown /> : <GoPlus />}
              </span>
            </button>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
