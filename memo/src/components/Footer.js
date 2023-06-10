import LogoFooter from "./LogoFooter"
import "../styles/Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div>
            <LogoFooter />
            </div>
            <span className="text-footer">
                &copy; 2020 Kasa. All rights reserved
            </span>
        </div>
    )
}

export default Footer;