import Banniere1 from "../assets/banniere-1.png"
import "../styles/Banniere.css"


  function Banniere() {
    return (
      <div className="banniere-container">
        <div
          className="banniere-img"
          style={{ backgroundImage: `url(${Banniere1})` }}
        ></div>
        <div className="banniere-content">
            <h1 className="banniere-title">Chez vous, partout et ailleurs</h1>  
        </div>
      </div>
    );
  }

  
  export default Banniere;