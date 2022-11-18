import logo from '../../logo.png';
import './navBar.css';
import Button from '../button/Button';
import CartWidget from '../cartWidget/CartWidget';

const NavBar = () => {
    return(
        <div className="container">
            <nav className='navBar' id='top'>
                <div className='divLogo'>
                    <a href="#top">
                        <img src={logo} alt="Logo" className='logo'></img>
                    </a>
                </div>
                <div className='navOptions'>
                    <ul class='optionList'>
                        <li>
                            <Button link='Balones'className='buttonFilter'></Button>
                        </li>
                        <li>
                            <Button link='Camisetas'className='buttonFilter'></Button>
                        </li>
                    </ul>
                </div>
                <div class='cart'>
                    <CartWidget />
                </div>
            </nav>
        </div>
        );
}

export default NavBar;