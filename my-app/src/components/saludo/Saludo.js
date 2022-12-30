import { useParams } from "react-router-dom";
import './saludo.css'


function Saludo() {

    const { idOrden } = useParams();

    return (
        <div className="textoSaludo">
            <h2>Gracias por comprar con nosotros! Tu número de compra es: <span className="textoOrden">{idOrden}</span></h2>
        </div>
    )
}

export default Saludo