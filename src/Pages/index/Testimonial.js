import React from 'react';

function Testimonial() {
  return (
    <section className="testimonial-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <span>Testimonials</span>
            <h2>What Customers Say?</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="testimonial-slider owl-carousel">
            <div className="ts-item">
              <p>After a construction project took longer than expected, my husband, my daughter, and I
                needed a place to stay for a few nights. As a Chicago resident, we know a lot about our
                city, neighborhood, and the types of housing options available and absolutely love our
                vacation at Sona Hotel.</p>
              <figure>
                <blockquote>
                  <div className="rating">
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star-half_alt"></i>
                  </div>
                  <figcaption>- Alexander Vasquez</figcaption>
                </blockquote>
                <img src={`${process.env.PUBLIC_URL}/asset/img/testimonial-logo.png`} alt="Sona Hotel Logo" />
              </figure>
            </div>
            <div className="ts-item">
              <p>After a construction project took longer than expected, my husband, my daughter, and I
                needed a place to stay for a few nights. As a Chicago resident, we know a lot about our
                city, neighborhood, and the types of housing options available and absolutely love our
                vacation at Sona Hotel.</p>
              <figure>
                <blockquote>
                  <div className="rating">
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star-half_alt"></i>
                  </div>
                  <figcaption>- Alexander Vasquez</figcaption>
                </blockquote>
                <img src={`${process.env.PUBLIC_URL}/asset/img/testimonial-logo.png`} alt="Sona Hotel Logo" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
}


export default Testimonial;
