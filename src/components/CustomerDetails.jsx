import React, { useState } from "react";
import "./css/customer.css";
import "./css/booking.css";
import { useNavigate } from "react-router-dom";

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
  // Alerts
  const [alert, setAlert] = useState("");
  //const [mobileAlert, setMobileAlert] = useState("");
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
        navigate("/passangerDetails/seatAndTimeSelection");
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
          value={age}
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <div className="alert">{alert}</div>

        <div className="button">
          <button
            type="button"
            class="btn btn-secondary btn-lg"
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
