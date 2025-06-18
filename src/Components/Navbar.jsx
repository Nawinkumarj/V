import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import DecryptedText from "../Components/DecryptedText";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const scrollWrapper = document.querySelector(".scroll-wrapper");

    const handleScroll = () => {
      setScrolled(scrollWrapper.scrollTop > 50);
    };

    scrollWrapper.addEventListener("scroll", handleScroll);
    return () => scrollWrapper.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar-container">
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* Logo */}
        <div className="navbar-left">
          <a href="/" className="navbar-logo">
            <img src={scrolled ? assets.logo1 : assets.logo} alt="Logo" />
          </a>
        </div>

        {/* Center Nav - visible only when NOT scrolled */}
        {!scrolled && (
          <div className="navbar-center">
            <NavLink to="/about-us" className="nav-link">
              <DecryptedText text="About" speed={50} />
            </NavLink>
            <NavLink to="/services" className="nav-link">
              <DecryptedText text="Service" speed={50} />
            </NavLink>
          </div>
        )}

        {/* Hamburger - visible only when scrolled */}
        {scrolled && (
          <div className="navbar-right">
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            {menuOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-logo">
                  <img src={assets.logo1} alt="" />
                </div>
                <div className="dropdown-nav">
                  <div className="dropdown-navBar">
                    <NavLink to="/about-us" onClick={() => setMenuOpen(false)}>
                      About
                    </NavLink>
                    <NavLink to="/services" onClick={() => setMenuOpen(false)}>
                      Service
                    </NavLink>
                    <div className="dropdown-Contact">
                      <div className="dropdown-ph">
                        <a href="">+91 9840488033</a>
                      </div>
                      <div className="dropdown-mail">
                        <a href="">hi@vcraftyucompany.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
