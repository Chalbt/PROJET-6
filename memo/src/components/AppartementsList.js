import AppartementCard from "./AppartementsCard";
import appartements from "../datas/logements.json";
import {Link} from "react-router-dom"

function AppartementsList() {
  return (
    <div className="appartements-list">
      {appartements.map((appartement) => (
        <Link to={`/appartement/${appartement.id}`}><AppartementCard key={appartement.id} appartement={appartement} /></Link>
      ))}
    </div>
  );
}

export default AppartementsList;
