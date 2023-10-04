import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router


function Header() {
  return (
    <div className="header-section">
      <div className="top-nav">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ul className="tn-left">
                <li>
                  <i className="fa fa-phone"></i> (12) 345 67890
                </li>
                <li>
                  <i className="fa fa-envelope"></i> info.colorlib@gmail.com
                </li>
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
                <a href="#" className="bk-btn">
                  Booking Now
                </a>
                <div className="language-option">
                  <img src="asset/img/flag.jpg" alt={"Flag"} />
                  <span>
                    EN <i className="fa fa-angle-down"></i>
                  </span>
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
                <a href="./index.html">
                  <img src="asset/img/logo.png" alt={"Logo"} />
                </a>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="nav-menu">
                <nav className="mainmenu">
                  <ul>
                    <li className="active">
                    <Link to="/">Home</Link>                    </li>
                    <li>
                    <Link to="/rooms">Rooms</Link>
                    </li>
                    <li>
                    <Link to="/about">About Us</Link>
                    </li>
                    <li>
                       <Link to="/pages">Pages</Link>
                      <ul className="dropdown">
                        <li><Link to="/room-details">Room Details</Link></li>
                        <li><Link to="/blog-details">Blog Details</Link></li>
                        <li><Link to="/family-room">Family Room</Link></li>
                        <li><Link to="/premium-room">Premium Room</Link></li>
                      </ul>
                    </li>
                    <li>
                    {/* <Link to="/news">News</Link> */}
                    </li>
                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>
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
    </div>
  );
}

export default Header;
