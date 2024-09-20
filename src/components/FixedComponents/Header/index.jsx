import { Link } from 'react-router-dom'
import './header.scss'
import logo from '../../../assets/images/LOGO.png'

 
function Header() {
    return (
      <header>
        <div className='logo'>
          <Link to="/">
            <img src={logo} alt="Kasa" />
          </Link>
        </div>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/About">A propos</Link>
        </nav>
      </header>
    )
}

export default Header