  import React, { useEffect ,useState} from 'react';
  import { Link, useParams } from "react-router-dom"; // Import Link for routing
  import axios from 'axios';
import { Button, Checkbox, Form } from "semantic-ui-react";
import Popup from "reactjs-popup";
import Preloader from "../rooms/Preloader";
import Swal from "sweetalert2";
// import StripeContainer  from "../../payment/StripeContainer"

import Sweetalert from '../../sweetalert'


// https://64c259d9eb7fd5d6ebcfae46.mockapi.io/user
  function RoomDetails() {
    const [userid, setUserid] = useState(1);
    const [islogin, setlogin] = useState(false);
const [isLoading, setIsLoading] = useState(true);

    const { id, hotelid } = useParams();
    const [roomid, setroomid] = useState(id);
    const [roomdetils, setRoomdetils] = useState([]);
    const [book, setBook] = useState([]);
    const [checkIn, setcheckIn] = useState(null);
    const [checkOut, setcheckOut] = useState(null);
    const [warning, setwarning] = useState(null);
    const [availability, setavailability] = useState(false);
    useEffect(() => {
      axios
        .get(
          `https://64bbac6a7b33a35a4446905c.mockapi.io/hotels/${hotelid}/rooms/${id}`
        )
        .then((response) => {
          setRoomdetils(response.data);
        setIsLoading(false);

        });
    }, []);
    const booking = () => {
      if (islogin == "false") {

      }else if (checkOut == null ) {
Swal.fire(
  "Don't Forget!",
  'You Must Fill  CheckOut Field',
  'warning'
)
      } else if (checkIn == null){
Swal.fire(
  "Don't Forget!",
  'You Must Fill  CheckIn Field',
  'warning'
)
      }
      
      else {
        axios.post(`https://651d606a44e393af2d59a7e0.mockapi.io/booking`, {
          userid,
          hotelid,
          checkIn,
          roomid,
          checkOut,
        });
        availabilityy();
      }
    };
    const availabilityy = () => {
      axios.put(
        `https://64bbac6a7b33a35a4446905c.mockapi.io/hotels/${hotelid}/rooms/${id}`,
        {
          availability,
        }
      );
    };

    const filledStars = Math.round(roomdetils.rating);
    const emptyStars = 5 - filledStars;
    const stars = Array.from({ length: filledStars }, (_, index) => (
      <span key={index} className="star-filled">
        &#9733;
      </span>
    ));
    const emptyStar = <span className="star-empty">&#9734;</span>;
    return (
      <div>
        {isLoading ? ( // Show the Preloader component while isLoading is true
          <Preloader />
        ) : (
          <div>
            {/* Breadcrumb Section Begin */}
            <div className="breadcrumb-section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="breadcrumb-text">
                      <h2>Our Rooms</h2>
                      <div className="bt-option">
                        <Link to="/">Home</Link> {/* Use Link for Home */}
                        <a>Rooms</a>
                        <span>{roomdetils.room_name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Breadcrumb Section End */}

            {/* Room Details Section Begin */}
            <section className="room-details-section spad">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="room-details-item" key={roomdetils.id}>
                      {/* Update image path */}
                      <img src={`${roomdetils.image}`} alt="" />
                      <div className="rd-text">
                        <div className="rd-title">
                          <h3>{roomdetils.room_name}</h3>
                          <div className="rdt-right">
                            <div className="rating">
                              {stars}
                              {Array.from(
                                { length: emptyStars },
                                (_, index) => (
                                  <span key={index} className="star-empty">
                                    {emptyStar}
                                  </span>
                                )
                              )}
                              {/* <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star-half_alt"></i> */}
                            </div>
                            {/* <a href="#">Booking Now</a> */}
                          </div>
                        </div>
                        <h2>
                          {roomdetils.price}$<span>/Pernight</span>
                        </h2>
                        <table>
                          <tbody>
                            {/* <tr>
                          <td className="r-o">Size:</td>
                          <td>30 ft</td>
                        </tr> */}
                            <tr>
                              <td className="r-o">Capacity:</td>
                              <td>Max person {roomdetils.capacity}</td>
                            </tr>
                            <tr>
                              <td className="r-o">Bed:</td>
                              <td>{roomdetils.type}</td>
                            </tr>
                            <tr>
                              <td className="r-o">Services:</td>
                              <td>Wifi, Television, Bathroom,...</td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="f-para">{/* Add your room details */}</p>
                        <p>{/* Add more room details */}</p>
                      </div>
                    </div>
                    <div className="rd-reviews">
                      <h4>Reviews</h4>
                      <div className="review-item">
                        <div className="ri-pic">
                          <img
                            src="/asset/img/room/avatar/avatar-1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="ri-text">
                          <span>27 Aug 2019</span>
                          <div className="rating">
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star-half_alt"></i>
                          </div>
                          <h5>Brandon Kelley</h5>
                          <p>{/* Add review text */}</p>
                        </div>
                      </div>
                      <div className="review-item">
                        <div className="ri-pic">
                          <img
                            src="/asset/img/room/avatar/avatar-2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="ri-text">
                          <span>27 Aug 2019</span>
                          <div className="rating">
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star-half_alt"></i>
                          </div>
                          <h5>Brandon Kelley</h5>
                          <p>{/* Add review text */}</p>
                        </div>
                      </div>
                    </div>
                    <div className="review-add">
                      <h4>Add Review</h4>
                      <form action="#" className="ra-form">
                        <div className="row">
                          <div className="col-lg-6">
                            <input type="text" placeholder="Name*" />
                          </div>
                          <div className="col-lg-6">
                            <input type="text" placeholder="Email*" />
                          </div>
                          <div className="col-lg-12">
                            <div>
                              <h5>Your Rating:</h5>
                              <div className="rating">
                                <i className="icon_star"></i>
                                <i className="icon_star"></i>
                                <i className="icon_star"></i>
                                <i className="icon_star"></i>
                                <i className="icon_star-half_alt"></i>
                              </div>
                            </div>
                            <textarea placeholder="Your Review"></textarea>
                            <button type="submit">Submit Now</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="room-booking">
                      <h3>Your Reservation</h3>
                      <Form className="create-form">
                        <Form.Field>
                          <div className="check-date">
                            <label htmlFor="date-in">Check In:</label>

                            <input
                              type="date"
                              className="date-input"
                              id="date-in"
                              onChange={(e) => {
                                setcheckIn(e.target.value);
                              }}
                            />
                            {/* <i className="icon_calendar"></i> */}
                          </div>
                        </Form.Field>
                        <Form.Field>
                          <div className="check-date">
                            <label htmlFor="date-out">Check Out:</label>
                            <input
                              type="date"
                              className="date-input"
                              id="date-out"
                              onChange={(e) => {
                                setcheckOut(e.target.value);
                              }}
                            />
                            {/* <StripeContainer /> */}
                            <i className="icon_calendar"></i>
                          </div>
                        </Form.Field>
                        <Form.Field>
                          <p>3</p>
                          <div className="select-option">
                            <label htmlFor="guest">Guests:</label>

                            <p value="">3 Adults</p>
                          </div>
                          <div className="select-option">
                            <label htmlFor="room">Room:</label>

                            <p value="">1 Room</p>
                          </div>
                        </Form.Field>
                        {islogin ? (
                          <Button type="submit" onClick={booking}>
                            {" "}
                            Booking Now
                          </Button>
                        ) : (
                          <Sweetalert />
                        )}
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Room Details Section End */}
          </div>
        )}
      </div>
    );
  }

export default RoomDetails;
