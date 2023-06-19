import "../styles/AppartementsCard.css"

function AppartementCard({ appartement }) {
    return (
      <div className="appartements-card">
        <img className="appartements-image" src={appartement.cover} alt={appartement.title} />
        <h3 className="appartements-titre">{appartement.title}</h3>
      </div>
    );
  }
  
  export default AppartementCard;