import React, { useState, useEffect } from "react";
import "./css/Booking.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { addDays } from 'date-fns';

const today = new Date();

const BookingContent = () => {
  const navigate = useNavigate();

  let cities = [
    { value: "Chennai", label: "Chennai", dis: 1 },
    { value: "Banglore", label: "Banglore", dis: 2 },
    { value: "Hyderabad", label: "Hyderabad", dis: 3 },
    { value: "Pune", label: "Pune", dis: 4 },
    { value: "Mumbai", label: "Mumbai", dis: 5 },
    { value: "Kolkata", label: "Kolkata", dis: 6 },
    { value: "Delhi", label: "Delhi", dis: 7 },
  ];

  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [cost, setCost] = useState("");

  const filteredCities = cities.filter(
    (city) => city.value !== selectedOption1
  );
  cities = cities.filter((city) => city.value !== selectedOption2);

  const [alert, setAlert] = useState("");
  const city1 = cities.find((city) => city.value === selectedOption1);
  const city2 = filteredCities.find((city) => city.value === selectedOption2);

  const distance = city1 && city2 ? Math.abs(city1.dis - city2.dis) * 955 : 0;

  useEffect(() => {
    setCost(distance);
  }, [distance]);

  const btnClick = () => {
    console.log("clicked");

    if (!selectedOption1 || !selectedOption2 || !selectedDate) {
      setAlert("Please enter all the fields");
    } else {
      console.log(cost);
      navigate(
        `/passangerDetails?from=${selectedOption1}&to=${selectedOption2}&date=${selectedDate}&cost=${cost}`
      );
    }
  };

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
              value={selectedOption1}
              onChange={(e) => setSelectedOption1(e.target.value)}
            >
              <option defaultValue>From</option>
              {cities.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.label}
                </option>
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
              fillRule="evenodd"
              d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
            />
          </svg>
          <div className="input-group">
            <select
              className="form-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
              value={selectedOption2}
              onChange={(e) => setSelectedOption2(e.target.value)}
            >
              <option defaultValue>To</option>
              {filteredCities.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="datepicker-container">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={today}
            dateFormat="dd/MM/yyyy" // You can customize the format
            isClearable // Adds a clear button to reset the date
            className="form-select fs"
            placeholderText="Select a date"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-calendar-event-fill"
            viewBox="0 0 16 16"
            values=""
          >
            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
          </svg>
        </div>
        <div className="alert">{alert}</div>
        <div className="button">
          <button
            type="button"
            className="btn btn-secondary btn-lg"
            onClick={() => {
              btnClick();
            }}
          >
            Book
          </button>
        </div>
      </div>
    </>
  );
};

export default BookingContent;
