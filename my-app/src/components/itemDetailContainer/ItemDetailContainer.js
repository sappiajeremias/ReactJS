import ItemDetail from "../itemDetail/ItemDetail";
import "./itemDetailContainer.css";
import { useParams } from "react-router-dom";
import { items } from "../../data";

const ItemDetailContainer = () => {
  var detalle = {};
  const { idItem } = useParams();

  // eslint-disable-next-line
  detalle = items.find((item) => item.id == idItem);
  return (
    <div className="borderItem">
      <ItemDetail item={detalle} />
    </div>
  );
};

export default ItemDetailContainer;
