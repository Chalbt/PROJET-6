import Logo from "./Logo"
import "../styles/Header.css"
import {Link} from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <Link to="/"><Logo /></Link>
            <ul className='menu-header'>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/a-propos">A propos</Link></li>
            </ul>
        </div>
        
            
        
    )
}

export default Header;