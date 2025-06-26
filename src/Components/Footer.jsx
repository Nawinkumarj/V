import React, { forwardRef } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";




const Footer = forwardRef((props, ref) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-container">
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
            <h1>Quick Links</h1>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>VC Portal</p>
          </div>
          <div className="developers-1">
            <h1>Policies</h1>
            <Link to="/privacy-policy">
              <p>Privacy Policy</p>
            </Link>
            <Link to="/terms&conditions">
              <p>Terms & Conditions</p>
            </Link>
            <p>terms of service</p>
          </div>
          {/* <div className="developers-terms"></div> */}
        </div>
        <div className="footer-connect grid-5">
          <div className="developers-2">
            <h1>Contact Us</h1>
            <p>
              <IoMailOpenOutline color="#8750f7" size={22} />
              <a href="mailto:hi@vcraftyucompany.com">hi@vcraftyucompany.com</a>
            </p>
            <p>
              <LuPhoneCall color="#8750f7" size={22} />
              <a href="tel:+91 9840488033">+91 9840488033</a>
            </p>
          </div>
        </div>
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
            <div className="footer-dot-logo">
              <img src={assets.logo} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div ref={ref} className="footer-copyrits">
        <p>
          Copyright © {currentYear} All rights reserved |{" "}
          <a href="mailto:hi@vcraftyucompany.com">hi@vcraftyucompany.com</a>
        </p>
      </div>
    </footer>
  );
});

export default Footer;
