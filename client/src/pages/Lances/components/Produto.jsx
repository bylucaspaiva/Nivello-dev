import React, {useState} from "react";

import './../styles/Produto.css'

export default function Produto(props) {
  const { nome, valor, foto } = props;

  const [newLance, setLance] = useState('');



  return (
    <div className="test">
      <h1>{nome}</h1>
      <h2>{valor}</h2>
      <div className="img-products">
        <img alt={foto}
          src={foto}
          height={500}
          width={500}
        />
      </div>
      <h2>Faça seu lançe</h2>;
      <input
        type="text"
        placeholder="Faça seu lançe"
        onChange={(e) => setLance(e.target.value)}
        // value={newLance}
      />
    </div>
  );
}
