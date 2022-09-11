import React from "react";
import {useState} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom"

import { BsFillArrowUpSquareFill } from "react-icons/bs";
import './Login.css'



export default function Login() {

  let navigate = useNavigate();

  const [newName, setName] = useState('');
  const [newAge, setAge] = useState('');

  function HandleSendInput() {

    if (!newName) return;
    if (!newAge) return;

    if(newAge < 18) {
      alert("Você precisa ter mais de 18 anos para continuar!");
      return;
    }

    axios.post('/users/create', { 
      data: {
        nome: newName,
        idade: newAge
      }
    })
    .then((response) => {
      console.log(response);
      navigate("/lances", { replace: true });
    }, (err) => {
      console.log(err);
    })
  }
  
  return (
    <section>
      <div>
        <div>
          <h1 className="words">Cadastre-se para participar.</h1>
          <p className="words">  Apenas maiores de 18 anos podem participar.</p>
        </div>
        <header>
          <div className="input-group">
            <div className="box">
              <input
                type="text"
                placeholder="Nome"
                onChange={(i) => setName(i.target.value)}
                value={newName}
              />
            </div>
            <div className="box">
              <input
                type="texy"
                placeholder="Idade"
                onChange={(i) => setAge(i.target.value)}
                value={newAge}
              />
            </div>
          </div>
          <button type="submit" 
            data-testid="login" 
            onClick={HandleSendInput}
          >
            <BsFillArrowUpSquareFill className="logo-button" size={60}/>
          </button>
        </header>
      </div>
    </section>
  );
}

