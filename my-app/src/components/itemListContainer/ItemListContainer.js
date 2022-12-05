import "./itemList.css";
import ItemList from "../itemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../spinner/Spiner";
import {items} from '../../data';


const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const { type } = useParams();

  const [list, setList] = useState([]);
  useEffect(() => {
    setLoading(true);
    const getList = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ items });
      }, 2000);
    });
    if (type) {
      getList
        .then((res) =>
          // eslint-disable-next-line
          setList(res.items.filter((item) => item.idcat == type))
        )
        .finally(() => setLoading(false));
    } else {
      getList
        .then((res) => setList(res.items))
        .finally(() => setLoading(false));
    }
  }, [type]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="borderItem">
      <ItemList items={list} />
    </div>
  );
};

export default ItemListContainer;
