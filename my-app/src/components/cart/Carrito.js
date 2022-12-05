import { Link } from "react-router-dom";
import Button from "../button/Button";
import './carrito.css';
const Carrito = () => {
return (
    <div className="container-cart">
        <div className="container-info">
        <h1>Tu carrito se encuentra vacio!</h1>
        <Link to={'/'}>
            <Button link='Volver' className="buttonDetalles"/>
        </Link>
    </div></div>
)

}


export default Carrito;