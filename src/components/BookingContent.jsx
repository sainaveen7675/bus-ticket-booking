import React, { useState } from "react";
import "./css/Booking.css";
import "react-datepicker/dist/react-datepicker.css";
import Datepicker from "./Datepicker";

const BookingContent = () => {
  let cities = [
    { value: 'Hyderabad', label: 'Hyderabad' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Chennai', label: 'Chennai' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Banglore', label: 'Banglore' },
    { value: 'Kolkata', label: 'Kolkata' },
    { value: 'Pune', label: 'Pune' }
  ];
  const [selectedOption1, setSelectedOption1] = useState("");
  const handleDropdownChange1 = (event) => {
    setSelectedOption1(event.target.value);
    // Do other things based on the selected value if needed
    console.log("Selected option:", event.target.value);
  };

  const [selectedOption2, setSelectedOption2] = useState("");
  const handleDropdownChange2 = (event) => {
    setSelectedOption2(event.target.value);
    // Do other things based on the selected value if needed
    console.log("Selected option:", event.target.value);
  };
  
  const [x1, setX1] = useState("");
  const [x2, setX2] = useState("");
  const btnClick = () => {
    console.log("clicked");
    
    setX1(selectedOption1);
    setX2(selectedOption2);
  }

  return (
    <>
      <div className="booking">
        <div className="trip">
          <h1>Plan Your Trip</h1>
        </div>
        <div className="selectionContainer">
          <div className="input-group">
            <select
              className="form-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
              value={selectedOption1} onChange={handleDropdownChange1}
            >
              <option value="">From</option>
              {cities.map((city, index) => (
                <option key={city.value} value={city.value}>{city.label}</option>
              ))}
            </select>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
            />
          </svg>
          <div className="input-group">
            <select
              className="form-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
              value={selectedOption2} onChange={handleDropdownChange2}
            >
              <option selected>To</option>
              {cities.map((city, index) => (
                <option key={city.value} value={city.value}>{city.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="datepicker-container">
          <Datepicker />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-calendar-event-fill"
            viewBox="0 0 16 16"
          >
            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
          </svg>
        </div>

        <div className="button">
          <button type="button" class="btn btn-secondary btn-lg" onClick={()=>{btnClick()}}>
            Book
          </button>
        </div>
        <h1>{x1}</h1>
        <h1>{x2}</h1>
      </div>
    </>
  );
};

export default BookingContent;
