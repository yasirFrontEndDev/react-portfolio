import React , { useRef, useState , useEffect  }  from "react";
import Images from "../assets/images/Images";

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
      <nav
        className={`navbar navbar-expand-lg fixed-top navbar-dark main-navigation ${isNavOpen ? "active" : ""} ${isScrolled ? "bgLightGrey" : ""}`} ref={navRef}
        id="navbar"
      >
        <div className="container-fluid container-xl">
          <a className="navbar-brand siteLogo" href="#">
          <img src={Images.logoT} className="img-fluid rounded-2" alt=""/>
          </a>
          <button className="navbar-toggler" onClick={openSideNav} type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`overlay d-flex d-lg-none ${isNavOpen ? "visible" : ""}`} onClick={closeSideNav} ref={overlayRef}></div>
          <div className="order-lg-2 d-lg-flex w-100 sidebar pb-3 pb-lg-0 align-items-center">
            <ul className="navbar-nav navMenu ms-lg-auto  mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Clients
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Contact
                </a>
              </li>
            </ul>

            <div className="ms-lg-5 px-3 px-lg-2">
                <a className="px-4 btnGet_started btnLogin">Login</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
