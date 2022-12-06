import './footer.css';
import logo from '../../logo.png';
import {BsGithub} from 'react-icons/bs';
import {GrMail} from 'react-icons/gr';

const Footer = () => {
    return(<div className='parent'>
        <div className='logo'>
          <a href='/'>
            <img src={logo} className='logoImg'alt='Imagen del logo'/>
            </a>
        </div>
        <div className='redes'>
            <ul className='listaRedes'>
                <li>
                    <a href='https://github.com/sappiajeremias' target='_blank' rel="noopener noreferrer"><BsGithub className='logoRedes'/></a>
                </li>
                <li>
                    <a href='mailto:jeremiassappia@gmail.com' target='_blank' rel="noopener noreferrer"><GrMail className='logoRedes'/></a>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default Footer;