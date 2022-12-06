import "./itemCount.css";

import { useState, useEffect } from "react";
import { GrSubtract, GrAdd } from "react-icons/gr";

const ItemCount = ({ inicio, itemStock, onAdd }) => {
  const [stock, setStock] = useState(itemStock);
  const [add, setAdd] = useState(inicio);

  const buttonSumar = () => {
    setAdd(add + 1);
    setStock(stock - 1);
  };
  const buttonRestar = () => {
    setAdd(add - 1);
    setStock(stock + 1);
  };

 
  useEffect(() => {
    console.log("Se modificó el ítem");
  }, [add]);

  return (
    <div className="contenedorContador">
      <p>
        <b>Stock: </b> {stock}
      </p>
      <div className="containerCantidad">
        <button
          disabled={add <= 0}
          className="botonRestar"
          onClick={buttonRestar}
        >
          <GrSubtract className="icono" />
        </button>
        <span>{add}</span>
        <button
          disabled={add >= itemStock}
          className="botonSumar"
          onClick={buttonSumar}
        >
          <GrAdd className="icono" />
        </button>
        <button disabled={add===0} onClick={()=>onAdd(add)} className="botonCarrito">
          <span>Agregar al carrito!</span>
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
