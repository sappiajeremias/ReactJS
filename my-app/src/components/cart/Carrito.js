import { Link } from "react-router-dom";
import Button from "../button/Button";
import './carrito.css';
import { useCartContext } from "../../context/cartProvider/CartProvider";
import ItemCart from "../itemCart/ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Carrito = () => {
    const navigate = useNavigate();
    const { cart, precioTotal, limpiarCarrito} = useCartContext();
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        adress: ''
    });



    const handleClickComprar = () => {
     
        const orden = {
            buyer: data,
            items: cart.map(prod => ({ id: prod.id, name: prod.name, price: prod.price, cant: prod.cant })),
            total: precioTotal()
        }

        const base = getFirestore();
        const coleccion = collection(base, 'orders');
        addDoc(coleccion, orden).then((idOrden) => {
            limpiarCarrito();
            console.log(idOrden.id);
            navigate(`/saludo/${idOrden.id}`);
        })
    }

    const inputChangeHandler = (e) => {
        let inputName = e.target.name;
        let value = e.target.value;

        const nuevaData = { ...data };
        nuevaData[inputName] = value;
        setData(nuevaData);
    }

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
            <div className="containerInput">
                
                    <input type='text' name='name' placeholder="Nombre" required value={data.name} onChange={inputChangeHandler}></input>
                    <input type='text' name='email' placeholder="Email" required value={data.email} onChange={inputChangeHandler}></input>
                    <input type='text' name='phone' placeholder="Telefono" required value={data.phone} onChange={inputChangeHandler}></input>
                    <input type='text' name='adress' placeholder="Dirección" required value={data.adress} onChange={inputChangeHandler}></input>
                    <button onClick={handleClickComprar}>Realizar Compra</button>
              
            </div>
        </div>
    )

}


export default Carrito;