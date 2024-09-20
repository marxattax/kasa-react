import './footer.scss'
import logo from '../../../assets/images/LOGO-footer.png'
 
function Footer() {
    return <footer>
        <img src={logo} alt="Kasa" />
        <span>© 2020 Kasa. All rights reserved</span>
      </footer>
}

export default Footer