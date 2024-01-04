import React, { useState, useEffect } from "react";
import "./css/busSeats.css";
import "./css/popup.css";
import { useNavigate, useSearchParams } from "react-router-dom";

const SeatSelection = () => {
  const navigate = useNavigate();
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
  const [boardingPoint, setFrom] = useState("");
  const [droppingPoint, setTo] = useState("");
  const [departureDate, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [amountPaid, setCost] = useState(null);
  const [transactionID, setTransactionID] = useState("");

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

  const [departureTime, setSelectedTime] = useState("");
  const [seatNo, setSelectedSeats] = useState("");

  const [alert, setAlert] = useState("");
  const handleSeatBooking = () => {
    if (!departureTime || !seatNo) {
      setAlert("Please select seat and departure time");
    } else {
      setAlert("");
      togglePopup();
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the popup
  const togglePopup = () => {
    setIsOpen(!isOpen);
    const ticketDetails = {name, email, mobile, gender, age, boardingPoint, droppingPoint, departureDate, amountPaid, seatNo, departureTime, transactionID}
    console.log(ticketDetails);
    generateRandomCode();
    if (isOpen === true) {
      fetch("http://localhost:8080/api/travelbookings/save",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(ticketDetails)
      }).then(()=>{
        console.log("Ticket Details Added To Database");
      })
      navigate(`/passangerDetails/seatAndTimeSelection/ticket?name=${name}&email=${email}&mobile=${mobile}&gender=${gender}&age=${age}&from=${boardingPoint}&to=${droppingPoint}&date=${departureDate}&cost=${amountPaid}&seat=${seatNo}&time=${departureTime}&transactionID=${transactionID}`);
    }
  };

  const generateRandomCode = () => {
    let result = '';
    const length = 12;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
  
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    
    setTransactionID(result);
  }

  
 
  




  const renderSeatRow = (start, end) => {
    return (
      <div className="seat-row">
        {seats.slice(start, end).map((seatNumber, index) => (
          <div
            key={index}
            className={seatNo === seatNumber ? "seat activate" : "seat"}
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
                  departureTime === time
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
          className="btn btn-secondary btn-lg"
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
                {boardingPoint}
              </h5>
              <h5>
                <strong>To: </strong>
                {droppingPoint}
              </h5>
              <h5>
                <strong>Date: </strong>
                {departureDate}
              </h5>
              <div>
                <h5>
                  <strong>Seat No: </strong>
                  {seatNo}
                </h5>
                <h5>
                  <strong>Depart time: </strong>
                  {departureTime}
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
                {amountPaid}
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
