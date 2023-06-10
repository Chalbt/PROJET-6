import KLogoWhite from "../assets/k-logo-white.png"
import MaisonLogoWhite from "../assets/maison-logo-white.png"
import SLogoWhite from "../assets/s-logo-white.png"
import ALogoWhite from "../assets/a-logo-white.png"

function LogoFooter() {
    return (
        <div className="logo-footer">
            <img alt="k-logo-white" src={KLogoWhite} />
            <img alt="maison-logo-white" src={MaisonLogoWhite} />
            <img alt="s-logo-white" src={SLogoWhite} />
            <img alt="a-logo-white" src={ALogoWhite} />
        </div>
    )
}

export default LogoFooter