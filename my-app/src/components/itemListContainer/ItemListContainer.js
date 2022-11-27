import './itemList.css';

import ItemList from '../itemList/ItemList';
const items = [
    {
        id: 1,
        name: 'Jabulani',
        detail: 'Pelota mundial Sudáfrica 2010',
        price: 12500,
        stock: 20,
        type: 'pelota'
    },
    {
        id: 2,
        name: 'Etrusco Único',
        detail: 'Pelota mundial Italia 1990',
        price: 15750,
        stock: 5,
        type: 'pelota'
    },
    {
        id: 3,
        name: 'Brazuca',
        detail: 'Pelota mundial Brasil 2014',
        price: 15000,
        stock: 10,
        type: 'pelota'
    },
    {
        id: 4,
        name: "Camiseta Argentina '86",
        detail: "Camiseta original usada por Maradona en el mundial '86",
        price: 150000,
        stock: 1,
        type: 'camiseta'
    },
    {
        id: 5,
        name: 'Telstar 18',
        detail: 'Pelota mundial Rusia 2018',
        price: 15000,
        stock: 10,
        type: 'pelota'
    },
    {
        id: 6,
        name: "Camiseta River '18",
        detail: 'Camiseta original usada por Juanfer Quintero en la final libertadores 2018',
        price: 125000,
        stock: 1,
        type: 'camiseta'
    },
    {
        id: 7,
        name: "Camiseta Benfica '22",
        detail: 'Camiseta original usada por Enzo Fernández en su debút',
        price: 100000,
        stock: 1,
        type: 'camiseta'
    },
]

const ItemListContainer = () =>{
    return(
        <div className='borderItem'>
            <ItemList items={items}/>
        </div>
        )
}

export default ItemListContainer;