import React from "react";
import CustomerDetails from "./CustomerDetails";

const navbar = () => {

  const style = {
    fontFamily: 'Brush Script MT',
    fontSize: '30px',
    marginLeft: '60px',
    color: '#FB130B'
  }
  return (
    <div>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark" >
        <div className="container-fluid">
          <h3 className="navbar-brand" style={style} onClick={<CustomerDetails/>}>
            Book My Ticket
          </h3>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
