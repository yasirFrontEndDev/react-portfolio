import React, { useRef, useState, useEffect } from "react";
import Images from "../assets/images/Images";
import { Link, NavLink } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faNewspaper, faTableCellsLarge } from '@fortawesome/free-solid-svg-icons'
import TopBar from "./TopBar";
const Header = () => {
  const navRef = useRef(null);
  const overlayRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const openSideNav = () => {
    setIsNavOpen(true);
  };

  const closeSideNav = () => {
    setIsNavOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true); // Add bgLightGrey class when scrolled down
      } else {
        setIsScrolled(false); // Remove bgLightGrey class when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <TopBar />
      <nav
        className={`navbar navbar-expand-lg fixed-top navbar-dark main-navigation ${isNavOpen ? "active" : ""} ${isScrolled ? "bgLightGrey" : ""}`} ref={navRef}
        id="navbar"
      >
        <div className="container-fluid container-xl">
          <Link className="navbar-brand siteLogo d-none d-md-block" to="/">
            <img src={Images.logoT} className="img-fluid rounded-2" alt="logo" />
          </Link>
          <div className="d-inline-flex align-items-center mx-auto">
            <ul className="navbar-nav navMenu flex-row mx-lg-auto  mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  to="/"
                >
                  <FontAwesomeIcon className="text-white" icon={faHouse} />  Home
                </NavLink>
              </li>
              <li className="nav-item d-none">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/About">
                  <FontAwesomeIcon className="text-white" icon={faHouse} />About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/Services">
                  <FontAwesomeIcon className="text-white" icon={faTableCellsLarge} />Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/contact">
                  <FontAwesomeIcon className="text-white" icon={faNewspaper} />Contact Us
                </NavLink>
              </li>
            </ul>

            <div className="px-3 px-lg-2 d-none">
              <Link to="/contact" className="px-4 btnGet_started btnLogin">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>

      <HeroSection />
    </div>
  );
}

export default Header;
