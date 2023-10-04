import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Login from "./Pages/rooms/Rooms"

const MySweetAlertComponent = () => {
    const navigate = useNavigate();
  const handleDeleteClick = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Please Login First ",
        text: "You won't be able to revert this!",
        icon: "warning 🧙‍♀️",
        showCancelButton: true,
        confirmButtonText: "Login",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          // window.location=("/")
          navigate("/");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
        }
      });
  };

  return (
    <div>
      <button onClick={handleDeleteClick}>Book Now</button>
    </div>
  );
};

export default MySweetAlertComponent;
