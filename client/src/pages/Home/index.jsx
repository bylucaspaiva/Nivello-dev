import React from "react";

import NavBar from './../../components/NavBar'
import Login from './../../components/Login'
import Products from './../../components/Products'

import './styles.css'

function Home() {
  return(
    <div>
      <NavBar/>
      <div id="idBox">
        <Products/>
        <Login/>
      </div> 
    </div>
  );
}

export default Home;