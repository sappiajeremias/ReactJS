import "./itemCount.css";

import { useState, useEffect } from "react";
import { GrSubtract, GrAdd } from "react-icons/gr";

const ItemCount = ({ itemStock }) => {
  const [stock, setStock] = useState(itemStock);
  const [add, setAdd] = useState(0);

  const buttonSumar = () => {
    setAdd(add + 1);
    setStock(stock - 1);
  };
  const buttonRestar = () => {
    setAdd(add - 1);
    setStock(stock + 1);
  };

  useEffect(() => {
    console.log("Se creó el ítem");
  }, []);

  useEffect(() => {
    console.log("Se modificó el ítem");
  }, [add]);

  return (
    <div className="contenedorContador">
      <p>
        <b>Stock: </b>
        {stock}
      </p>
      <div className="containerCantidad">
        <button
          disabled={add <= 0}
          className="botonRestar"
          onClick={buttonRestar}
        >
          <GrSubtract className="icono" />
        </button>
        <h1>{add}</h1>
        <button
          disabled={add >= itemStock}
          className="botonSumar"
          onClick={buttonSumar}
        >
          <GrAdd className="icono" />
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
