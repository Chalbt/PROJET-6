import {Link} from "react-router-dom"
import "../styles/Error.css"

function Error() {
    return <div className="page-error">
        <div className="error">404</div>
        <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
        <p><Link to="/" className="back-accueil">Retourner sur la page d'accueil</Link></p>

    </div>
}

export default Error 