// Routes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./layout/layoutayout";
import Footer from "./layout/Footer";
import About_us from "./Pages/about-us/About_us";
import Contact from "./Pages/contact/Contact";
import Room_details from "./Pages/room-details/Room_details";
import Rooms from "./Pages/rooms/Rooms";
import index_component from "./Pages/index/index_component";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<index_component />}>
          <Route path="about" element={<About_us />} />
          <Route path="contact" element={<Contact />} />
          <Route path="room-details" element={<Room_details />} />
          <Route path="rooms" element={<Rooms />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
