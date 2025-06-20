import React, { useEffect, useRef } from "react";

const Contact = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const content = marquee.querySelector(".marquee-content");
    const clone = content.cloneNode(true);
    clone.classList.add("marquee-clone");
    marquee.appendChild(clone);
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-heading">
      <h1>Connect with us</h1>
      </div>
      <div className="marquee-wrapper" ref={marqueeRef}>
        <div className="marquee-content">
          <a href="mailto:hi@vcraftyucompany.com" className="contact-mail1">
            hi@vcraftyucompany.com
          </a>
          <a href="mailto:hi@vcraftyucompany.com" className="contact-mail2">
            hi@vcraftyucompany.com
          </a>
        </div>
      </div>
        <div className="contact-ph">
          <a href="tel:+91 9840488033">
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Contact me</span>
          </a>
        </div>
    </div>
  );
};

export default Contact;
