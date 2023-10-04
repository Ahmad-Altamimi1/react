import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate,NavLink } from 'react-router-dom'; // Import Navigate
import Layout from "./layout/layout";
import Footer from "./layout/Footer";
import "./App.css";
// import "./test";
import About_us from "./Pages/about-us/About_us";
import Contact from "./Pages/contact/Contact";
import Room_details from "./Pages/room-details/Room_details";
import Rooms from "./Pages/rooms/Rooms";
import Index_component from "./Pages/index/index_component";


function App() {
  return (
    <Router basename="react">
      <div>
        <Layout /> {/* Layout outside Routes */}
        <Routes>
          <Route  index element={<Index_component />} />
          <Route path="about" element={<About_us />} />
          <Route path="contact" element={<Contact />} />
          <Route path="rooms/room-details/:hotelid/:id" element={<Room_details />} />
          <Route path="rooms" element={<Rooms />} />
          {/* Add a catch-all route for unmatched paths */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer /> {/* Footer outside Routes */}
      </div>
    </Router>
  );
}

export default App;
