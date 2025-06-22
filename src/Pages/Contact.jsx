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
        
    </div>
  );
};

export default Contact;
