import {useParams} from "react-router-dom";
import appartements from "../datas/logements.json";
import Tags from "./Fiche-appartement/Tags";
import Rating from "./Fiche-appartement/Rating";
import Carroussel from "./Fiche-appartement/Carroussel";
import "../styles/Appartements.css"


function Appartements() {
    const { id } = useParams();
    
    // Méthode find pour trouver l'appartement correspondant à l'ID
    const appartement = appartements.find((appartement) => appartement.id === id);
    const { host } = appartement;
    const { pictures } = appartement;
  
    if (!appartement) {
      //Dans le cas où l'appartement n'est pas trouvé
      return <div>Appartement non trouvé</div>;
    }
  
    return (
     <div className="fiche-appartement">
        <div className="carroussel">
          <Carroussel images={pictures} />
        </div>
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
        <div className="collapse">

        </div>
     </div>
    );
  }

  export default Appartements


{/*import React, { useState, useEffect } from 'react';*/}


{/*function Appartement() {
    const {id} = useParams()
    const [appartement, setAppartement] = useState(null);

    async function fetchAppartementData(id) {
        try {
            const response = await fetch("../datas/logements.json");
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error)
        
      }

    useEffect(() => {
        fetchAppartementData(id).then(data => {
            setAppartement(data);
            console.log(data)
          });}, [id]);
    
    
    return (
        <div>
            <h1>Appartement {id}</h1>
            {appartement && (
                <div>
                <h2>{appartement.title}</h2>
                <p>{appartement.description}</p>
                </div>
            )}
        </div>
    )
}}*/}