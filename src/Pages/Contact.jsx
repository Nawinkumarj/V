import React, { useEffect, useState } from "react";
import DecryptedText from "../Components/DecryptedText";

const words = ["greatest", "boldest", "smartest", "coolest", "strongest"];

const Contact = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // changes every 1 second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-main">
        <div className="contact-head">
          <h1>
            Lets build{" "}
            <span key={currentWordIndex} className="word-fade">
              {words[currentWordIndex]}
            </span>
            <br />
            apps together.
          </h1>
        </div>
        <div className="contact-content">
          <div className="contact-details">
            <a href="mailto:hi@vcraftyucompany.com" title="Mail Us">
              <DecryptedText text="hi@vcraftyucompany.com" speed={10} />
            </a>
            <a href="tel:+919840488033" title="Call Us">
              <DecryptedText text="+91 9840488033" speed={10} />
            </a>
          </div>
          <div className="contact-form">
            <h1>
              We're here to bring your concepy to life, manage your ongoing
              projects, or expand your existing development team.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
