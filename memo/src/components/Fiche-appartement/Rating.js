

function Rating({ rating }) {
    const filledStars = Math.floor(rating);
    const remainingStars = 5 - filledStars;
    
    const filledStarIcon = '★';
    const emptyStarIcon = '☆';
  
    return (
      <div className="rating">
        {/* Affichage des étoiles pleines */}
        {Array(filledStars).fill().map((_, index) => (
          <span key={index} className="star filled">{filledStarIcon}</span>
        ))}
        
        {/* Affichage des étoiles vides */}
        {Array(remainingStars).fill().map((_, index) => (
          <span key={index} className="star empty">{emptyStarIcon}</span>
        ))}
      </div>
    );
  }


export default Rating;