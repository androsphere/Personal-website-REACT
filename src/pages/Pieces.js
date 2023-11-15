import React from "react";
import NavBar from "../components/NavBar";
import PieceCard from "../components/PieceCard";
import Form from "../components/Form"
import { useState, useEffect } from "react";


function Pieces() {
  const [piecesList, setPiecesList] = useState([]);
  const [newPiece, setNewPiece] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/pieces")
    .then (r => r.json())
    .then (data => setPiecesList(data))

  }, []);

  const piecesToRender = piecesList.map(piece => {
    return <PieceCard key = {piece.id} piece = {piece}/>
  }
  );
  

  return (
    <div>
      <NavBar/>
      <h1>These are some pieces I know!</h1>
      {piecesToRender}
      <br/>
      <Form newPiece = {newPiece} setNewPiece = {setNewPiece}/>
    </div>
  );
}

export default Pieces;
