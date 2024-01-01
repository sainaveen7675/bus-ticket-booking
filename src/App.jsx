import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/navbar";
import BookingContent from "./components/BookingContent";
import CustomerDetails from "./components/CustomerDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<CustomerDetails />} />
            <Route path="/booking" element={<BookingContent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
