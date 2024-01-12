import React, { useState, useEffect } from "react";
import "./css/customer.css";
import "./css/booking.css";
import { useNavigate, useSearchParams } from "react-router-dom";

const CustomerDetails = () => {
  const navigate = useNavigate(); // Use useNavigate hook
  
  const genders = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  // params data
  const [paramFrom, setFrom] = useState("");
  const [paramTo, setTo] = useState("");
  const [paramDate, setDate] = useState("");
  const [paramCost, setCost] = useState("");
  // Alerts
  const [alert, setAlert] = useState("");

  const [searchParams] = useSearchParams();
  const fromCity = searchParams.get("from");
  const toCity = searchParams.get("to");
  const selectedDate = searchParams.get("date");
  const cost = searchParams.get("cost");

  useEffect(() => {
    // Set states using URL parameters when the component mounts
    setFrom(fromCity);
    setTo(toCity);
    setDate(selectedDate);
    setCost(cost);
  }, []);

  const handleAgeValidation = (e) => {
    const enteredAge = parseInt(e.target.value, 10); // Parse the entered value to an integer
    if (enteredAge < 1) { 
      setAlert("Please enter a valid age number"); // Show an alert message
    }
  };

  const handleContinue = () => {
    if (!fullName || !email || !mobile || !gender || !age) {
      setAlert("Please enter all the fields");
    } else {
      const mobileRegex = /^[0-9]{10}$/; // Regex to match 10-digit numbers
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Basic regex for email validation
      if (!emailRegex.test(email)) {
        setAlert("Please enter a valid email address.");
        return; // Stop execution if email is invalid
      } else if (!mobileRegex.test(mobile)) {
        setAlert("Please enter a valid 10-digit mobile number.");
        return; // Stop execution if mobile number is invalid
      } else {
        console.log(paramFrom);
        console.log(paramTo);
        console.log(paramDate);
        navigate(
          `/passangerDetails/seatAndTimeSelection?name=${fullName}&email=${email}&mobile=${mobile}&gender=${gender}&age=${age}&from=${paramFrom}&to=${paramTo}&date=${paramDate}&cost=${paramCost}`
        );
      }
    }
  };

  

  return (
    <div>
      <div className="trip">
        <h1>Passanger Details</h1>
      </div>
      <div className="inputContainer">
        <input
          type="text"
          className="form-control"
          placeholder="Full Name"
          aria-label="Full Name"
          aria-describedby="button-addon2"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        ></input>
        <input
          type="email"
          className="form-control"
          placeholder="Email ID"
          aria-label="Email ID"
          aria-describedby="button-addon2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="tel"
          className="form-control"
          placeholder="Mobile"
          aria-label="Mobile"
          aria-describedby="button-addon2"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        ></input>
        <select
          className="form-control form-select"
          id="inputGroupSelect04"
          aria-label="Example select with button addon"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Gender</option>
          {genders.map((gender) => (
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
          value={age}
          onChange={(e) => setAge(e.target.value)}
          onBlur={handleAgeValidation}
        ></input>
        <div className="alert">{alert}</div>

        <div className="button">
          <button
            type="button"
            className="btn btn-secondary btn-lg"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
