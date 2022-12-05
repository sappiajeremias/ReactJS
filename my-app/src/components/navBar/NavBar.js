import logo from '../../logo.png';
import './navBar.css';
import Button from '../button/Button';
import CartWidget from '../cartWidget/CartWidget';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <div className="container">
            <nav className='navBar' id='top'>
                <div className='divLogo'>
                    <Link to={'/'}>
                        <img src={logo} alt="Logo" className='logo'></img>
                    </Link>
                </div>
                <div className='navOptions'>
                    <ul className='optionList'>
                        <li>
                        <Link to={'/category/1'}>
                            <Button link='Camisetas'className='buttonFilter'></Button>
                            </Link>
                        </li>
                        <li>
                        <Link to={'/category/2'}>
                            <Button link='Balones'className='buttonFilter'></Button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>          
                    <CartWidget />
                </div>
            </nav>
        </div>
        );
}

export default NavBar;