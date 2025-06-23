import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import DecryptedText from "../Components/DecryptedText";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isMobile = window.innerWidth <= 768;

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
        {!scrolled && !isMobile && (
          <div className="navbar-center">
            <NavLink to="/about-us" className="nav-link">
              <DecryptedText text="About" speed={50} />
            </NavLink>
            <NavLink to="/services" className="nav-link">
              <DecryptedText text="Service" speed={50} />
            </NavLink>
          </div>
        )}

        {/* Hamburger - visible when scrolled */}
        {(scrolled || isMobile) && (
          <div className="navbar-right">
            <div
              tabindex="0"
              className={`hamburger ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                class="plusIcon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <g mask="url(#mask0_21_345)">
                  <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
                </g>
              </svg>
            </div>
            {menuOpen && (
              <div className={`dropdown-menu ${menuOpen ? "open" : ""}`}>
                <div className="dropdown-nav">
                  <div className="dropdown-navBar">
                    <NavLink to="/" onClick={() => setMenuOpen(false)}>
                      Home
                    </NavLink>
                    <NavLink to="/about-us" onClick={() => setMenuOpen(false)}>
                      About
                    </NavLink>
                    <NavLink to="/services" onClick={() => setMenuOpen(false)}>
                      Service
                    </NavLink>
                  </div>
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
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
