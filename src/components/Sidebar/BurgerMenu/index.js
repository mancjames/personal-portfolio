import { slide as Menu } from 'react-burger-menu'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'


const BurgerMenu = () => {
    
  return (
    <Menu right 
    width={ '60%' } 
    disableAutoFocus >
    <nav>
        <NavLink exact="true" activeclassname="active" to="/" onClick={() => {document.getElementById("react-burger-cross-btn").click()}}> 
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={() => {document.getElementById("react-burger-cross-btn").click()}}> 
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={() => {document.getElementById("react-burger-cross-btn").click()}}> 
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/james-ed-hay/" onClick={() => {document.getElementById("react-burger-cross-btn").click()}}>
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/mancjames" onClick={() => {document.getElementById("react-burger-cross-btn").click()}}>
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
            </a>
        </li>
    </ul>
  </Menu>
  )
}

export default BurgerMenu
