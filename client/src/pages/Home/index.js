import React from "react";

import NavBar from './components/NavBar'
import Login from './components/Login'
import Produtos from './components/Produtos'
import './styles/index.css';

function Home() {
  return(
    <div>
      <NavBar className="navbar"/>
      <div className="home-main">
        <Produtos className="produtos"/>
        <Login className="login"/>
      </div> 
    </div>
    
  );
}

export default Home;