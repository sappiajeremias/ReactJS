import "./item.css";

const Item = ({ cItem }) => {
  return (
    <div className="containerItem">
      <p className="textoItem"><b>Nombre: </b>{cItem.name}</p>
      <p className="textoItem"><b>Detalle: </b>{cItem.detail}</p>
      <p className="textoItem"><b>Precio: </b>{cItem.price}</p>
    </div>
  );
};

export default Item;
