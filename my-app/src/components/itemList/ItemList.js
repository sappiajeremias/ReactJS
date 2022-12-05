import Item from "../item/Item";
import {Link} from 'react-router-dom';
import Button from "../button/Button";
import './itemList.css';



const ItemList = ({items}) => {
   
    return (
        <div  className='contenedor'>
            
            {items.map((item)=>{
            return(
            <div className="contenedorItem">
                <Item cItem={item} key={item.id}/>
                <Link to={`/detail/${item.id}`} >
                    <Button link='Detalles' className='buttonDetalles'>
                </Button>
                </Link>
            </div>);})}
        </div>
        )
}

export default ItemList;