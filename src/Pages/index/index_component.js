
import React from 'react';
import  Hero from'./Hero';
import  About from'./About';
import  Services from'./Services';
import  Hotel from'./Hotel';
import  Testimonial from'./Testimonial';
import  Blog from'./Blog';



function Index_component() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Hotel />
      <Testimonial />
      <Blog />
    </div>

  );
}

export default Index_component;