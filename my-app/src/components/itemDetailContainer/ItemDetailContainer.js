import ItemDetail from "../itemDetail/ItemDetail";
import './itemDetailContainer.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {items} from '../../data';

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState([]);
  const {idItem} = useParams();
 

  useEffect(() => {
    const getDetalles = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ items });
      });
    });
    getDetalles.then((res) =>
      // eslint-disable-next-line
        (setDetalle(res.items.find((item) => item.id == idItem))))
      }, []);

  return (
    <div className="borderItem">
      <ItemDetail item={detalle} />
    </div>
  );
};

export default ItemDetailContainer;
