import "./item.css";

const Item = ({ item }) => {
  return (
    <div className="containerItem">
      <p className="textoItem"><b>Nombre: </b>{item.name}</p>
      <p className="textoItem"><b>Detalle: </b>{item.detail}</p>
      <p className="textoItem"><b>Precio: </b>{item.price}</p>
    </div>
  );
};

export default Item;
