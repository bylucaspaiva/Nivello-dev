import React from "react";


import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import './../styles/NavBar.css'

function NavBar() {
  return (
    <nav>
      <div className="nav">
        <div className="logo-box">
          <RiMoneyDollarBoxLine className="dolar-icon" color="#1B1D36" />
          <h1>Leiloa</h1>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;