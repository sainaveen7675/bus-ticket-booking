import React, { useState } from "react";
import "./css/customer.css";
import "./css/booking.css";
import BookingContent from "./BookingContent";
const CustomerDetails = () => {

    
  const genders = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const [gen, setGender] = useState("");

  const handleGender = (event) => {
    setGender(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
        
      <div className="trip">
        <h1>Booking Details</h1>
      </div>
      <div className="inputContainer">
        <input
          type="text"
          className="form-control"
          placeholder="Full Name"
          aria-label="Full Name"
          aria-describedby="button-addon2"
        ></input>
        <input
          type="email"
          className="form-control"
          placeholder="Email ID"
          aria-label="Email ID"
          aria-describedby="button-addon2"
        ></input>
        <input
          type="tel"
          className="form-control"
          placeholder="Mobile"
          aria-label="Mobile"
          aria-describedby="button-addon2"
        ></input>
        <select
          className="form-control form-select"
          id="inputGroupSelect04"
          aria-label="Example select with button addon"
          value={gen}
          onChange={handleGender}
        >
          <option value="">Gender</option>
          {genders.map((gender, index) => (
            <option key={gender.value} value={gender.value}>
              {gender.label}
            </option>
          ))}
        </select>
        <input
          type="number"
          className="form-control"
          placeholder="Age"
          aria-label="Age"
          aria-describedby="button-addon2"
        ></input>
        <div className="button">
          <button
            type="button"
            class="btn btn-secondary btn-lg"
            
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
