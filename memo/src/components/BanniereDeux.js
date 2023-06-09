import Banniere2 from "../assets/banniere-2.png"
import "../styles/Banniere.css"


  function BanniereDeux() {
    return (
      <div className="banniere-container">
        <div
          className="banniere-img"
          style={{ backgroundImage: `url(${Banniere2})` }}
        ></div>
      </div>
    );
  }

  
  export default BanniereDeux;