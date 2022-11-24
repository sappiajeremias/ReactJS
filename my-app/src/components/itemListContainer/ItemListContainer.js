import './itemList.css';
import ItemCount from '../itemCount/ItemCount';

const ItemListContainer = ({greeting, stock = 10}) =>{
    return(
        <div className='borderItem'>
            <h1>{greeting}</h1>
            <ItemCount stock={stock}/>
        </div>
        )
}

export default ItemListContainer;