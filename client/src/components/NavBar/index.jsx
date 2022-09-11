import React from "react";


import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import './NavBar.css'

function NavBar() {
  return (
    <nav>
      <div className="nav-home">
          <div className="logo-box">
            <RiMoneyDollarBoxLine className="dolar-icon" color="#1B1D36" />
            <h1 className="h1-nav">Leiloa</h1>
          </div>
      </div>
    </nav>
  );
}

export default NavBar;