import { Link } from "react-router-dom";
import Button from "../button/Button";
import './carrito.css';
import { useCartContext } from "../../context/cartProvider/CartProvider";
import ItemCart from "../itemCart/ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";



const Carrito = () => {
    const navigate = useNavigate();
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const { cart, precioTotal, limpiarCarrito } = useCartContext();
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        adress: ''
    });



    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(data));
        setIsSubmit(true);
        
    };
    useEffect(() => {
        
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            enviarOrden();
        }
        // eslint-disable-next-line
      }, [formErrors]);
    
    const validate = (values) => {
        const errors = {};
        const regexNums = /^([0-9])*$/;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            errors.name = "Nombre requerido!";
        }
        if (!values.email) {
            errors.email = "Email requerido!";
        } else if (!regex.test(values.email)) {
            errors.email = "No es un email válido.";
        }
        if (!values.phone) {
            errors.phone = "Teléfono requerido!";
        } else if (values.phone.length < 4) {
            errors.phone = "El teléfono no puede ser menor a 4 caracteres.";
        } else if (values.phone.length > 10) {
            errors.phone = "El teléfono no puede ser mayor a 10 caracteres.";
        }else if (!regexNums.test(values.phone)) {
            errors.phone = "No es un teléfono válido.";
        }
        if (!values.adress) {
            errors.adress = "Dirección requerida!";
        }
        return errors;
    };

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

    const enviarOrden = () => {

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



    return (


        <div className="containerItems">

            {cart.map((prod) =>
                <ItemCart key={prod.id} producto={prod} />
            )}
            <div className="containerTotal">
                <p><b>Total: </b>$ {precioTotal()}</p>
            </div>
            <div className="containerInput">

                <input type='text' name='name' placeholder="Nombre" required value={data.name} onChange={inputChangeHandler}></input> <p>{formErrors.name}</p>
                <input type='text' name='email' placeholder="Email" required value={data.email} onChange={inputChangeHandler}></input>  <p>{formErrors.email}</p>
                <input type='text' name='phone' placeholder="Telefono" required value={data.phone} onChange={inputChangeHandler}></input>  <p>{formErrors.phone}</p>
                <input type='text' name='adress' placeholder="Dirección" required value={data.adress} onChange={inputChangeHandler}></input>  <p>{formErrors.adress}</p>
                <button onClick={handleSubmit}>Realizar Compra</button>

            </div>
        </div>
    )

}


export default Carrito;