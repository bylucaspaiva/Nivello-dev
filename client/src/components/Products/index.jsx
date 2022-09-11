import React from "react";
import {useState} from 'react'
import axios from "axios";


import { BsFillArrowUpSquareFill } from "react-icons/bs";
import './Products.css'

export default function Products() {

  const [newName, setName] = useState('');
  const [newValue, setValue] = useState('');
  const [newPhoto, setPhoto] = useState('');

  function HandleSendInput() {

    if (!newName) return;
    if (!newValue) return;
    if (!newPhoto) return;

    axios.post('/products/create', { 
      data: {
        nome: newName,
        valor: newValue,
        foto: newPhoto
      }
    })
    .then((response) => {
      console.log(response);
      alert("produto cadastrado com sucesso!")
    }, (err) => {
      console.log(err);
    })
  }
  
  return (
    <section>
      <div>
        <div>
          <h1 className="words">Cadastre produtos no leilão online 😍.</h1>
          <p className="words">Para entrar na vaga na Nivello 👍</p>
        </div>
        <header>
          <div className="input-group">
            <div className="box-input">
              <input
                type="text"
                placeholder="Nome"
                onChange={(i) => setName(i.target.value)}
                value={newName}
              />
            </div>
            <div className="box-input">
              <input
                type="text"
                placeholder="Valor"
                onChange={(i) => setValue(i.target.value)}
                value={newValue}
              />
            </div>
            <div className="box-input">
              <input
                type="text"
                placeholder="Photo (Link)"
                onChange={(i) => setPhoto(i.target.value)}
                value={newPhoto}
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

