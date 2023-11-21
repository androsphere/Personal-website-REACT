import { Link } from "react-router-dom";

function PieceCard({piece}) {
  return (
    <div>
        <h2>Composer: {piece.composer}</h2>
        <h2>Piece name: {piece.name}</h2> 
        {piece.audio ? <Link to = {piece.audio}> Listen here!</Link> : <p>Learn this one!</p> }
        <br/>
        <br/>
    </div>
  );
};

export default PieceCard;