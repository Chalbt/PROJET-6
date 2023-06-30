import KLogo from "../assets/k-logo.png"
import MaisonLogo from "../assets/maison-logo.png"
import SLogo from "../assets/s-logo.png"
import ALogo from "../assets/a-logo.png"

function Logo() {
    return (
        <div className="logo">
            <img className='k-logo' alt="k-logo" src={KLogo} />
            <img alt="maison-logo" src={MaisonLogo} />
            <img alt="s-logo" src={SLogo} />
            <img alt="a-logo" src={ALogo} />
        </div>
    )
}

export default Logo;