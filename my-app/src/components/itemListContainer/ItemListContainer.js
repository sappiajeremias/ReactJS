import "./itemList.css";
import ItemList from "../itemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../spinner/Spiner";
import { getFirestore, collection, getDocs } from 'firebase/firestore';


const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const { type } = useParams();

 /*
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
  }, [type]);*/

  const [list, setList] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    setLoading(true);
    const itemsCollection = collection(db, 'items');

    if(type){
      getDocs(itemsCollection).then((snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // eslint-disable-next-line
        setList(items.filter((doc) => doc.idcat == type))
      }).finally(() => setLoading(false));
     
    } else {
      getDocs(itemsCollection).then((snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setList(items);
      }).finally(() => setLoading(false));
      
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
