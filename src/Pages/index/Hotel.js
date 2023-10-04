import React from 'react';
import { Link } from 'react-router-dom'; // Import Link and Route
import { Route } from 'react-router-dom';

function Hotel() {
  return (
    <section className="hp-room-section">
      <div className="container-fluid">
        <div className="hp-room-items">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="hp-room-item set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/asset/img/room/room-b1.jpg)` }}>
                <div className="hr-text">
                  <h3>Double Room</h3>
                  <h2>199$<span>/Per night</span></h2>
                  <table>
                    <tbody>
                      <tr>
                        <td className="r-o">Size:</td>
                        <td>30 ft</td>
                      </tr>
                      <tr>
                        <td className="r-o">Capacity:</td>
                        <td>Max persons: 5</td>
                      </tr>
                      <tr>
                        <td className="r-o">Bed:</td>
                        <td>King Beds</td>
                      </tr>
                      <tr>
                        <td className="r-o">Services:</td>
                        <td>Wifi, Television, Bathroom,...</td>
                      </tr>
                    </tbody>
                  </table>
                  <Link to="/room-details" className="primary-btn">More Details</Link>
                </div>
              </div>
            </div>

            {/* Repeat similar code for other room types */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hotel;
