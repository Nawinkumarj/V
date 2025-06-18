import React, { forwardRef } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = forwardRef((props, ref) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-container">
      {/* Top Semicircle Section */}
      <div className="footer-top">
        <div className="footer-top-content">
          <h4>Craft with Vcraftyu.</h4>
          {/* <p>
            Make digital ownership effortless, intuitive, and secure. Start
            building with Reown and create unparalleled user experiences today.
          </p> */}
          <div className="footer-buttons">
            <button className="build-btn">Build for free</button>
            {/* <button className="docs-btn">Docs</button> */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        {/* Newsletter */}

        {/* <div className="newsletter grid-1">
          <p>Subscribe to our newsletter.</p>
          <span className="privacy">
            You can unsubscribe at any time. <br />
            Our Privacy Policy is available <a href="#">here</a>.
          </span>
          <div className="input-box">
            <input type="text" placeholder="Mail" />
            <button>→</button>
          </div>
        </div> */}

        <div className="footer-icons grid-2">
          <div className="footer-icon-red ">
            <img src="https://via.placeholder.com/50x50.webp/a59090/000000?Text=50x50" />
          </div>
          <div className="footer-icon-yellow ">
            <img src="https://via.placeholder.com/50x50.webp/a59090/000000?Text=50x50" />
          </div>
          <div className="footer-icon-yellow ">
            <img src="https://via.placeholder.com/50x50.webp/a59090/000000?Text=50x50" />
          </div>
        </div>
        <div className="footer-developers grid-4">
          <div className="developers-1">
            <h1>developers</h1>
            <p>sample1</p>
            <p>sample2</p>
            <p>sample3</p>
          </div>
          <div className="developers-1">
            <h1>Solution</h1>
            <p>sample1</p>
          </div>
          <div className="developers-terms">
            <p>terms of service</p>
            <p>terms of service</p>
            <p>terms of service</p>
          </div>
        </div>
        <div className="footer-connect grid-5"></div>
        <div className="footer-company grid-6">
          <div className="footer-social-card">
            <ul>
              <li className="footer-social-iso-pro">
                <span></span>
                <span></span>
                <span></span>
                <a href="#" aria-label="Facebook" className="fb-icon">
                  <FaFacebookF className="footer-social-svg" />
                </a>
                {/* <div className="footer-social-text">Facebook</div> */}
              </li>
              <li className="footer-social-iso-pro">
                <span></span>
                <span></span>
                <span></span>
                <a href="#" aria-label="Twitter" className="twitter-icon">
                  <FaXTwitter className="footer-social-svg" />
                </a>
                {/* <div className="footer-social-text">Twitter</div> */}
              </li>
              <li className="footer-social-iso-pro">
                <span></span>
                <span></span>
                <span></span>
                <a href="#" aria-label="Instagram" className="insta-icon">
                  <FaInstagram className="footer-social-svg" />
                </a>
                {/* <div className="footer-social-text">Instagram</div> */}
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-length grid-7">
          <div className="footer-dot">
            <div className="ball"></div>
          </div>
        </div>
      </div>
      <div ref={ref} className="footer-copyrits">
        <p>
          Copyright © {currentYear} All rights reserved |{" "}
          <a href="mailto:hi@vcraftyucompany.com"></a> hi@vcraftyucompany.com{" "}
        </p>
      </div>
    </footer>
  );
});

export default Footer;
