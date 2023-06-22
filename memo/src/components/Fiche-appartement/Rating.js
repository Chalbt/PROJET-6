import FilledStar from "../../assets/filled-star.png"
import EmptyStar from "../../assets/empty-star.png"

function Rating({ rating }) {
    const filledStars = Math.floor(rating);
    const remainingStars = 5 - filledStars;
    
  
    return (
      <div className="rating">
        {/* Affichage des étoiles pleines */}
        {Array(filledStars).fill().map((_, index) => (
          <span key={index}><img alt="filled-star" className="filled-star" src={FilledStar} /></span>
        ))}
        
        {/* Affichage des étoiles vides */}
        {Array(remainingStars).fill().map((_, index) => (
          <span key={index}><img alt="empty-star" className="empty-star" src={EmptyStar} /></span>
        ))}
      </div>
    );
  }


export default Rating;