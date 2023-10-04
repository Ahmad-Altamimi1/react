import React, { useEffect } from 'react';
import {link} from 'react-router-dom';

function Footer() {


  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-text">
          <div className="row">
            <div className="col-lg-4">
              <div className="ft-about">
                <div className="logo">
                  <link to="#">
                    <img src="img/footer-logo.png" alt="" />
                  </link>
                </div>
                <p>We inspire and reach millions of travelers across 90 local websites</p>
                <div className="fa-social">
                  <link to="#"><i className="fa fa-facebook"></i></link>
                  <link to="#"><i className="fa fa-twitter"></i></link>
                  <link to="#"><i className="fa fa-tripadvisor"></i></link>
                  <link to="#"><i className="fa fa-instagram"></i></link>
                  <link to="#"><i className="fa fa-youtube-play"></i></link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="ft-contact">
                <h6>Contact Us</h6>
                <ul>
                  <li>(12) 345 67890</li>
                  <li>info.colorlib@gmail.com</li>
                  <li>856 Cordia Extension Apt. 356, Lake, United State</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="ft-newslatter">
                <h6>New latest</h6>
                <p>Get the latest updates and offers.</p>
                <form action="#" className="fn-form">
                  <input type="text" placeholder="Email" />
                  <button type="submit"><i className="fa fa-send"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <ul>
                <li><link to="#">Contact</link></li>
                <li><link to="#">Terms of use</link></li>
                <li><link to="#">Privacy</link></li>
                <li><link to="#">Environmental Policy</link></li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="co-text">
                <p>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
