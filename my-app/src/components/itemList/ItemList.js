import Item from "../item/Item";
import ItemCount from "../itemCount/ItemCount";
import './itemList.css';

const ItemList = ({items}) => {
    return (
        <div  className='contenedor'>
            {items.map((item)=>
            <div className="contenedorItem">
                    <Item item={item} key={item.id}/>
                    <ItemCount itemStock={item.stock}/>
                
            </div>)}
        </div>
        )
}

export default ItemList;