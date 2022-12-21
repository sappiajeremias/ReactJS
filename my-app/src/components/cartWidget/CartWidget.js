import "./cartWidget.css";
import { RiShoppingCartLine } from "react-icons/ri";

import { useCartContext } from "../../context/cartProvider/CartProvider";
import { Link } from "react-router-dom";

const CartWidget = () => {

  const { productosTotal } = useCartContext();
  return (
    <div className="align">
      <Link to={'/cart'} className="iconCart">
        <RiShoppingCartLine className="iconCart" />
        
      </Link>
      <span className='cantidad'>{productosTotal() || ''}</span>
    </div>
  );
};

export default CartWidget;
//{productosTotal() || ''}