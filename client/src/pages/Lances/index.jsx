import React from "react";
import axios from "axios";
import NavBar from '../../components/NavBar'
import Products from '../../components/Products'
import { useEffect, useState } from "react";

import './styles/index.css'

function Lances() {

  const [newInput, setNewInput] = useState([]);

  async function getProducts() {
    const database = await axios.get('/products/list');
    const input = database.data.map(item => item)
    setNewInput(input);

  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main idName="lances-main">
      <NavBar className="lances-nav" />
      <div className="products">
        {newInput.map((input) => {
            return <Products key={input.id} nome={input.nome} valor={input.valor} foto={input.foto} />
        }
        )}
      </div>
    </main>
  );
}

export default Lances;


