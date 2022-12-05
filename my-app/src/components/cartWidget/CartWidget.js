import "./cartWidget.css";
import { RiShoppingCartLine } from "react-icons/ri";
import Button from "../button/Button";
import {Link} from "react-router-dom";

const CartWidget = () => {
  


  return (
    <div className="align">
      <Link to={'/cart'} className="iconCart">
        <RiShoppingCartLine className="iconCart" />
      </Link>
      <Button link='3' className='buttonCart'/>
    </div>
  );
};

export default CartWidget;
