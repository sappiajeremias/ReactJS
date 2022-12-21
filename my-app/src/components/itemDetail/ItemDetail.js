import ItemCount from "../itemCount/ItemCount";
import './itemDetail.css';
import { useState } from "react";
import { Link} from 'react-router-dom';
import Button from "../button/Button";
import { useCartContext } from "../../context/cartProvider/CartProvider";

const ItemDetail = ({item}) => {
    const [irCarrito, setIrCarrito] = useState(false);
    const {agregarProducto} = useCartContext();
    const onAdd=(cant)=>{
        setIrCarrito(true);
        agregarProducto(item, cant);
    }

    return (
        <div className=''>
            <div className="contenedorItemDetail">
                <img className="imagenDetail"src={`${item.image}`} alt="Imagen producto"></img>
                <h2>{item.name}</h2>
                <p>{item.detail}</p>
                <p>$ {item.price}</p>
                {
                    irCarrito
                    ? <Link to={'/cart'}>
                        <Button link='Ir al carrito.' className='itemDetailCart'/>
                    </Link>
                    : <ItemCount inicio={0} itemStock={item.stock} onAdd={onAdd}/>
                }
                
            </div>
        </div>
        )
}

export default ItemDetail;