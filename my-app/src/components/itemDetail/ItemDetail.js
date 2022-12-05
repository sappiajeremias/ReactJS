import ItemCount from "../itemCount/ItemCount";
import './itemDetail.css';
const ItemDetail = ({item}) => {
  
    const onAdd=(cant)=>{
        console.log(`Compraste ${cant} items!`)
    }

    return (
        <div className=''>
            <div className="contenedorItemDetail">
                <img className="imagenDetail"src={`${item.image}`} alt="Imagen producto"></img>
                <h2>{item.name}</h2>
                <p>{item.detail}</p>
                <p>{item.price}</p>
                
                <ItemCount inicio={0} itemStock={item.stock} onAdd={onAdd}/>
            </div>
        </div>
        )
}

export default ItemDetail;