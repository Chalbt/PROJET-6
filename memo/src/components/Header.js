import Logo from "./Logo"
import "../styles/Header.css"

function Header() {
    return (
        <div className="header">
            <Logo />
            <ul className='menu-header'>
                <li><a href="">Accueil</a></li>
                <li><a href="">A propos</a></li>
            </ul>
        </div>
        
            
        
    )
}

export default Header;