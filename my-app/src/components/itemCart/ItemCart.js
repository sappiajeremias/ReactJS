import './itemCart.css';
import { useCartContext } from '../../context/cartProvider/CartProvider';


const ItemCart = ({producto}) => {
const {sacarProducto} = useCartContext();
    return (
        <div className='itemCart'>
            <img src={producto.image} alt={producto.name}/>
            <div>
                <p><b>Nombre: </b>{producto.name}</p>
                <p><b>Cantidad: </b>{producto.cant}</p>
                <p><b>Precio: </b>$ {producto.price}</p>
                <p><b>Subtotal: </b>$ {producto.price * producto.cant}</p>
                <button onClick={() => sacarProducto(producto.id)} className='boton'>Eliminar producto</button>
            </div>
        </div>
    )

}


export default ItemCart;