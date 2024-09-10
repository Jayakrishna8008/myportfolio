import { Link } from 'react-router-dom';
import { FaRegMoon } from "react-icons/fa";
import './index.css'
const Header=()=>(
    <>
    <header>
    <Link to="/" className="logo">Portfolio.</Link>
    <nav>
    <ul className="nav-menu">
        <li className="nav-menu-item">
            <Link to="/" className= 'nav-link'>
                Home
            </Link>
        </li>
        <li className="nav-menu-item">
            <Link to="/about" className= 'nav-link'>
                About
            </Link>
        </li>
        <li className="nav-menu-item">
            <Link to="/services" className='nav-link'>
                Services
            </Link>
        </li>
        <li className="nav-menu-item">
            <Link to="/portfolio" className='nav-link'>
                Portfolio
            </Link>
        </li>
        <li className="nav-menu-item">
            <Link to="/contact" className='nav-link'>
                Contact
            </Link>
        </li>
    </ul>
</nav>
<FaRegMoon className="darkmode-icon" />
</header>
</>
)

export default Header