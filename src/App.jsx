import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/navbar";
import BookingContent from "./components/BookingContent";
import CustomerDetails from "./components/CustomerDetails";
import SeatSelection from "./components/SeatSelection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<BookingContent />} />
            <Route path="/passangerDetails" element={<CustomerDetails />} />
            <Route path="/passangerDetails/seatAndTimeSelection" element={<SeatSelection />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
