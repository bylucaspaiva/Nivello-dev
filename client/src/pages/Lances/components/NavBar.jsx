import React from "react";
import { Link } from 'react-router-dom'

import { RiMoneyDollarBoxLine } from 'react-icons/ri';

import './../styles/NavBar.css'

function NavBar() {
  return (
    <nav>
      <div className="nav">
        <div className="logo-box">
            <RiMoneyDollarBoxLine className="dolar-icon" color="#1B1D36" />
          <h2>Leiloa</h2>
        </div>
      </div>
      <ul>
        <li>
          <Link to="/historico" className="link">Historico</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;