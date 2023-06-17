import {useParams} from "react-router-dom"

function Appartement() {
    const {id} = useParams()
    return (
        <h2>Mon appartement : {id}</h2>
    )
}

export default Appartement;