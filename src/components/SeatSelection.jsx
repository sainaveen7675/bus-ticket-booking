import React, { useState, useEffect } from "react";
import "./css/busSeats.css";
import "./css/popup.css";
import { useSearchParams } from "react-router-dom";

const SeatSelection = () => {
  const seats = [
    "R2",
    "R4",
    "R6",
    "R8",
    "R10",
    "R12",
    "R1",
    "R3",
    "R5",
    "R7",
    "R9",
    "R11",
    "L2",
    "L4",
    "L6",
    "L8",
    "L10",
    "L12",
    "L1",
    "L3",
    "L5",
    "L7",
    "L9",
    "L11",
  ];

  const times = [
    "09:00 AM",
    "11:30 AM",
    "01:30 PM",
    "04:25 PM",
    "08:45 PM",
    "10:00 PM",
  ];

  const [searchParams] = useSearchParams();
  const fromCity = searchParams.get("from");
  const toCity = searchParams.get("to");
  const selectedDate = searchParams.get("date");
  const fullName = searchParams.get("name");
  const paramsEmail = searchParams.get("email");
  const paramsMobile = searchParams.get("mobile");
  const paramsGender = searchParams.get("gender");
  const paramsAge = searchParams.get("age");
  const paramCost = searchParams.get("cost");

  // params data
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [cost, setCost] = useState("");

  useEffect(() => {
    // Set states using URL parameters when the component mounts
    setFrom(fromCity);
    setTo(toCity);
    setDate(selectedDate); // Assuming selectedDate is in a format that can be parsed to a Date object
    setName(fullName);
    setEmail(paramsEmail);
    setMobile(paramsMobile);
    setGender(paramsGender);
    setAge(paramsAge);
    setCost(paramCost);
  }, []);

  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState("");

  const [alert, setAlert] = useState("");
  const handleSeatBooking = () => {
    if (!selectedTime || !selectedSeats) {
      setAlert("Please select seat and departure time");
    } else {
      setAlert("");
      console.log(from);
      console.log(to);
      console.log(date);
      togglePopup();
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the popup
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const renderSeatRow = (start, end) => {
    return (
      <div className="seat-row">
        {seats.slice(start, end).map((seatNumber, index) => (
          <div
            key={index}
            className={selectedSeats === seatNumber ? "seat activate" : "seat"}
            onClick={() => setSelectedSeats(seatNumber)}
          >
            {seatNumber}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h4>Select Bus Seat and Depart Time</h4>
      <div className="seat-Selection-container">
        <div className="bus-container">
          <div className="right-column">
            {renderSeatRow(0, 6)}
            {renderSeatRow(6, 12)}
          </div>
          <div className="left-column">
            {renderSeatRow(18, 24)}
            {renderSeatRow(12, 18)}
          </div>
        </div>
        <div>
          <ul className="list-group">
            {times.map((time, index) => (
              <li
                className={
                  selectedTime === time
                    ? "list-group-item activate"
                    : "list-group-item"
                }
                key={time}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="alert">{alert}</div>
      <div className="button">
        <button
          type="button"
          class="btn btn-secondary btn-lg"
          onClick={handleSeatBooking}
        >
          Confirm
        </button>
        {isOpen && (
          <div className="popup">
            <div className="popup-content">
              <h2>Confirm Details</h2>
              <h5>
                <strong>From: </strong>
                {from}
              </h5>
              <h5>
                <strong>To: </strong>
                {to}
              </h5>
              <h5>
                <strong>Date: </strong>
                {date}
              </h5>
              <div>
                <h5>
                  <strong>Seat No: </strong>
                  {selectedSeats}
                </h5>
                <h5>
                  <strong>Depart time: </strong>
                  {selectedTime}
                </h5>
              </div>
              <br />
              {name}
              <br />
              {email}
              <br />
              {mobile}
              <br />
              {gender}
              <br />
              {age}
              <br />
              <h5>
                <strong>Amount to be paid: </strong>
                {cost}
              </h5>

              {/* Close button */}
              <div className="paymentBtn">
                <button
                  type="button"
                  className="btn btn-secondary btn-lg"
                  onClick={togglePopup}
                >
                  Make Payment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeatSelection;
