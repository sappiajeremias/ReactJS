import { Link } from "react-router-dom";
import Button from "../button/Button";
import './carrito.css';
import { useCartContext } from "../../context/cartProvider/CartProvider";
import ItemCart from "../itemCart/ItemCart";


const Carrito = () => {

    const { cart, precioTotal } = useCartContext();

    if (cart.length === 0) {
        return (
            <div className="container-cart">
                <div className="container-info">
                    <h1>Tu carrito se encuentra vacio!</h1>
                    <Link to={'/'}>
                        <Button link='Volver' className="buttonDetalles" />
                    </Link>
                </div></div>
        )
    }

    return (

        <div className="containerItems">
            {cart.map((prod) =>
                <ItemCart key={prod.id} producto={prod} />
            )}
            <div className="containerTotal">
                <p><b>Total: </b>$ {precioTotal()}</p>
            </div>
        </div>
    )

}


export default Carrito;