import React from 'react';
import { Link } from 'react-router-dom'; // Import Link and Route
import { Route } from 'react-router-dom';

function AboutUs() {
  return (
    <div>
      {/* Breadcrumb Section Begin */}
      <div className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>About Us</h2>
                <div className="bt-option">
                  <Link to="/" className="primary-btn">Home</Link>

                  <span>About Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Section End */}

      {/* About Us Page Section Begin */}
      <section className="aboutus-page-section spad">
        <div className="container">
          <div className="about-page-text">
            <div className="row">
              <div className="col-lg-6">
                <div className="ap-title">
                  <h2>Welcome To Sona.</h2>
                  <p>
                    Built in 1910 during the Belle Epoque period, this hotel is located in the center of Paris, with
                    easy access to the city’s tourist attractions. It offers tastefully decorated rooms.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <ul className="ap-services">
                  <li>
                    <i className="icon_check"></i> 20% Off On Accommodation.
                  </li>
                  <li>
                    <i className="icon_check"></i> Complimentary Daily Breakfast
                  </li>
                  <li>
                    <i className="icon_check"></i> 3 Pcs Laundry Per Day
                  </li>
                  <li>
                    <i className="icon_check"></i> Free Wifi.
                  </li>
                  <li>
                    <i className="icon_check"></i> Discount 20% On F&B
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="about-page-services">
            <div className="row">
              <div className="col-md-4">
                <div className="ap-service-item set-bg" style={{ backgroundImage: 'url(asset/img/about/about-p1.jpg)' }}>
                  <div className="api-text">
                    <h3>Restaurants Services</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="ap-service-item set-bg" style={{ backgroundImage: 'url(asset/img/about/about-p2.jpg)' }}>
                  <div className="api-text">
                    <h3>Travel & Camping</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="ap-service-item set-bg" style={{ backgroundImage: 'url(asset/img/about/about-p3.jpg)' }}>
                  <div className="api-text">
                    <h3>Event & Party</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Page Section End */}

      {/* Gallery Section Begin */}
      <section className="gallery-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Our Gallery</span>
                <h2>Discover Our Work</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="gallery-item set-bg" style={{ backgroundImage: 'url(asset/img/gallery/gallery-1.jpg)' }}>
                <div className="gi-text">
                  <h3>Room Luxury</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="gallery-item set-bg" style={{ backgroundImage: 'url(asset/img/gallery/gallery-3.jpg)' }}>
                    <div className="gi-text">
                      <h3>Room Luxury</h3>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="gallery-item set-bg" style={{ backgroundImage: 'url(asset/img/gallery/gallery-4.jpg)' }}>
                    <div className="gi-text">
                      <h3>Room Luxury</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="gallery-item large-item set-bg" style={{ backgroundImage: 'url(asset/img/gallery/gallery-2.jpg)' }}>
                <div className="gi-text">
                  <h3>Room Luxury</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Section End */}
    </div>
  );
}

export default AboutUs;
