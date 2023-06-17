
function AppartementCard({ appartement }) {
    return (
      <div className="appartements-card">
        <img src={appartement.cover} alt={appartement.title} />
        <h3>{appartement.title}</h3>
      </div>
    );
  }
  
  export default AppartementCard;