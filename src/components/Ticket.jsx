import React from "react";
import { useSearchParams } from "react-router-dom";
import "./css/ticket.css";

const Ticket = () => {
  const [searchParams] = useSearchParams();
  const fromCity = searchParams.get("from");
  const toCity = searchParams.get("to");
  const selectedDate = searchParams.get("date");
  const cost = searchParams.get("cost");
  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const mobile = searchParams.get("mobile");
  const gender = searchParams.get("gender");
  const age = searchParams.get("age");
  const seat = searchParams.get("seat");
  const time = searchParams.get("time");

  return (
    <div className="ticketConfirmed">
      <div className="Ticket">
        <h1>
          <strong>Ticket Confirmed</strong>
        </h1>
      </div>
      <div>
        <div className="passengerDetails">
          <h5>
            <strong>
              <u>Passenger Details</u>
            </strong>
          </h5>
          <p>
            <strong>Name: </strong>
            {name}
          </p>
          <p>
            <strong>Email: </strong>
            {email}
          </p>
          <p>
            <strong>Mobile: </strong>
            {mobile}
          </p>
          <p>
            <strong>Gender: </strong>
            {gender}
          </p>
          <p>
            <strong>Age: </strong>
            {age}
          </p>
        </div>
        <div className="busDetails">
          <h5>
            <strong>
              <u>Bus Details</u>
            </strong>
          </h5>
          <p>
            <strong>Seat No: </strong>
            {seat}
          </p>
          <p>
            <strong>Departure Time: </strong>
            {time}
          </p>
        </div>
        <div>
          <h5>
            <strong>
              <u>Payment Details</u>
            </strong>
          </h5>
          <p>
            <strong>Amount Paid: </strong>
            {cost} /-
          </p>
        </div>
      </div>
      <button>Download PDF</button>
    </div>
  );
};

export default Ticket;
