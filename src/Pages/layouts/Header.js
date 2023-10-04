import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      {/* Page Preloder */}
      <div id="preloder">
        <div className="loader"></div>
      </div>

      {/* Offcanvas Menu Section Begin */}
      <div className="offcanvas-menu-overlay"></div>
      <div className="canvas-open">
        <i className="icon_menu"></i>
      </div>
      <div className="offcanvas-menu-wrapper">
        <div className="canvas-close">
          <i className="icon_close"></i>
        </div>
        <div className="search-icon search-switch">
          <i className="icon_search"></i>
        </div>
        <div className="header-configure-area">
          <div className="language-option">
            <img src="img/flag.jpg" alt="" />
            <span>EN <i className="fa fa-angle-down"></i></span>
            <div className="flag-dropdown">
              <ul>
                <li><a href="#">Zi</a></li>
                <li><a href="#">Fr</a></li>
              </ul>
            </div>
          </div>
          <a href="#" className="bk-btn">Booking Now</a>
        </div>
        <nav className="mainmenu mobile-menu">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/rooms">Rooms</NavLink></li>
            <li><NavLink to="/about-us">About Us</NavLink></li>
            <li>
              <NavLink to="/pages">Pages</NavLink>
              <ul className="dropdown">
                <li><NavLink to="/room-details">Room Details</NavLink></li>
                <li><NavLink to="#">Deluxe Room</NavLink></li>
                <li><NavLink to="#">Family Room</NavLink></li>
                <li><NavLink to="#">Premium Room</NavLink></li>
              </ul>
            </li>
            {/* <li><NavLink to="/blog">News</NavLink></li> */}
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div className="top-social">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-tripadvisor"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
        </div>
        <ul className="top-widget">
          <li><i className="fa fa-phone"></i> (12) 345 67890</li>
          <li><i className="fa fa-envelope"></i> info.colorlib@gmail.com</li>
        </ul>
      </div>
      {/* Offcanvas Menu Section End */}

      {/* Header Section Begin */}
      <header className="header-section">
        <div className="top-nav">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <ul className="tn-left">
                  <li><i className="fa fa-phone"></i> (12) 345 67890</li>
                  <li><i className="fa fa-envelope"></i> info.colorlib@gmail.com</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="tn-right">
                  <div className="top-social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-tripadvisor"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                  </div>
                  <a href="#" className="bk-btn">Booking Now</a>
                  <div className="language-option">
                    <img src="img/flag.jpg" alt="" />
                    <span>EN <i className="fa fa-angle-down"></i></span>
                    <div className="flag-dropdown">
                      <ul>
                        <li><a href="#">Zi</a></li>
                        <li><a href="#">Fr</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="logo">
                  <NavLink to="/">
                    <img src="img/logo.png" alt="" />
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="nav-menu">
                  <nav className="mainmenu">
                    <ul>
                      <li className="active"><NavLink to="/">Home</NavLink></li>
                      <li><NavLink to="/rooms">Rooms</NavLink></li>
                      <li><NavLink to="/about">About Us</NavLink></li>
                      <li>
                        <NavLink to="/pages">Pages</NavLink>
                        <ul className="dropdown">
                          <li><NavLink to="/room-details/:id">Room Details</NavLink></li>
                          {/* <li><NavLink to="/blog-details">Blog Details</NavLink></li> */}
                          <li><NavLink to="#">Family Room</NavLink></li>
                          <li><NavLink to="#">Premium Room</NavLink></li>
                        </ul>
                      </li>
                      {/* <li><NavLink to="/blog">News</NavLink></li> */}
                      <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                  </nav>
                  <div className="nav-right search-switch">
                    <i className="icon_search"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header End */}
    </div>
  );
}

export default Header;
