import {useParams} from "react-router-dom";
import React, { useState, useEffect } from 'react';

function Appartement() {
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
}

export default Appartement;