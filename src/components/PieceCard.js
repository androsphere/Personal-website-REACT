import { Link } from "react-router-dom";

function PieceCard({piece}) {
  return (
    <div>
        <h2>Composer: {piece.composer}</h2>
        <h2>Piece name: {piece.name}</h2> 
        <Link to = {piece.audio}> Listen here!</Link>
        <br/>
    </div>
  );
};

export default PieceCard;