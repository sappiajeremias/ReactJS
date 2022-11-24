import './cartWidget.css';
import {RiShoppingCartLine} from 'react-icons/ri';
import Button from '../button/Button';

const CartWidget = () =>{
    return(
        <div className='align'>
            <RiShoppingCartLine className='iconCart'/>
            <Button link='3' className='buttonCart'/>
        </div>);
}

export default CartWidget;
