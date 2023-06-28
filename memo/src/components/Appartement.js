import {useParams, Navigate} from "react-router-dom";
import appartements from "../datas/logements.json";
import Tags from "./Fiche-appartement/Tags"
import Rating from "./Fiche-appartement/Rating";
import Carroussel from "./Fiche-appartement/Carroussel";
import Collapse from "./Fiche-appartement/Collapse";
import "../styles/Appartements.css";
import "../styles/Collapse.css";


function Appartements() {
    const { id } = useParams();
    
    // Méthode find pour trouver l'appartement correspondant à l'ID
    const appartement = appartements.find((appartement) => appartement.id === id);
    
  
    if (!appartement) {
      //Dans le cas où l'appartement n'est pas trouvé
      return <Navigate to="/404" />    
    }

    const { host } = appartement;
    const { pictures } = appartement;
  
    return (
     <div className="fiche-appartement">
        
          <Carroussel images={pictures} />
        
        <div className="infos">
          <div className="info-appartement">
            <h2>{appartement.title}</h2>
            <p>{appartement.location}</p>
            <Tags tags={appartement.tags} />
          </div>
          <div className="info-proprietaire">
            <div className="proprietaire">
              <p>{host.name}</p>
              <img src={host.picture} alt={host.name} />
            </div>
            <Rating rating={appartement.rating} />
          </div>
        </div>
        <div className="collapse-fiche-appartement">
          <Collapse title="Description" content={appartement.description}/>
          <Collapse title="Équipements" content={appartement.equipments}/>
        </div>
     </div>
    );
  }

  export default Appartements