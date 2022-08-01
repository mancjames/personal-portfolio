import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import BurgerMenu from './BurgerMenu'

const Sidebar = () => {

  return (
    <div className="nav-bar">
        <Link className="logo" to='/'>
            <img src={LogoS} alt="logo" />
            <img className='sub_logo' src={LogoSubtitle} alt="logo name" />
        </Link>
        <nav className="desktop-navigation">
            <NavLink exact="true" activeclassname="active" to="/"> 
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about"> 
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact"> 
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul className="desktop-navigation">
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/james-ed-hay/">
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/mancjames">
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
        </ul>
        <div className="mobile-navigation">
            <BurgerMenu />
        </div>
    </div>
  )
}

export default Sidebar