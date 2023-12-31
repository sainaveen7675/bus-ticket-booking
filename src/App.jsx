import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/navbar";
import BookingContent from "./components/BookingContent";
import CustomerDetails from "./components/CustomerDetails";
import "./App.css";

function App() {
  return (
    <>
      <div>
        
          <Navbar/>
          <div className="container">
            <CustomerDetails/>
            
          </div>
        
      </div>
    </>
  );
}

export default App;
