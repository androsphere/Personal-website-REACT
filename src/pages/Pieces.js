import React from "react";
import NavBar from "../components/NavBar";
import PieceCard from "../components/PieceCard";
import Form from "../components/Form";
import { useState, useEffect } from "react";


function Pieces() {
  const [piecesList, setPiecesList] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/pieces")
    .then (r => r.json())
    .then (data => setPiecesList(data))

  }, []);

function addPiece(piece){

  const newPiece = {
    "composer":piece.composer,
    "name":piece.pieceName,
    "audio":null
  }

  fetch("http://localhost:3000/pieces", {
   

    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPiece),
  }) 
  .then (r => r.json())
  .then (data => setPiecesList([...piecesList,data]))
   
}
  
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
      <Form addPiece = {addPiece}/>
    </div>
  );
  }

export default Pieces;
