import { useState } from "react";


function Form({addPiece}){

    const [composer, setComposer] = useState("")
    const [pieceName, setPieceName] = useState("")

    function handleSubmit(e)
    {
        e.preventDefault();
        addPiece({composer, pieceName});
        setComposer('');
        setPieceName('');
        
    };


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label> Suggest a Piece:
                    <input
                    type = "text"
                    value = {composer}
                    name = "composer"
                    placeholder="Composer"
                    onChange={(e) => setComposer(e.target.value)}
                    />
                    <input
                    type = "text"
                    value = {pieceName}
                    name = "piece"
                    placeholder="Piece Title"
                    onChange={(e) => setPieceName(e.target.value)}
                    />
                    </label>
                    <button type="submit">Submit</button>
            </form>
        </div>
    )

}


export default Form