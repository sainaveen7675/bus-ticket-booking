import React, { useState } from "react";
import "./css/busSeats.css";

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

  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState("");

  const [alert, setAlert] = useState("");
  const handleSeatBooking = () =>{
    if(!selectedTime || !selectedSeats){
        setAlert("Please select seat and departure time");
    }
  }

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
                  selectedTime === index
                    ? "list-group-item activate"
                    : "list-group-item"
                }
                key={time}
                onClick={() => setSelectedTime(index)}
              >
                {time}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="alert">{alert}</div>
      <div className="button">
        <button type="button" class="btn btn-secondary btn-lg" onClick={handleSeatBooking}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SeatSelection;
