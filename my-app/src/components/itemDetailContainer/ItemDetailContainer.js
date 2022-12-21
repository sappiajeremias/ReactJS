import ItemDetail from "../itemDetail/ItemDetail";
import "./itemDetailContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import Spinner from "../spinner/Spiner";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const { idItem } = useParams();
  const [itemData, setItemData] = useState({});

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemRef = doc(db, 'items', idItem);
    
    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItemData({ id: snapshot.id, ...snapshot.data()});
      }
    }).finally(() => setLoading(false));
  }, [idItem]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="borderItem">
      <ItemDetail item={itemData} />
    </div>
  );
};

export default ItemDetailContainer;
