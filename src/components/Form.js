import { useState } from "react";


function Form(){

    const [composer, setComposer] = useState("")
    const [pieceName, setPieceName] = useState("")

    function handleSubmit(e)
    {
        e.preventDefault();
        console.log(composer, pieceName);
        
    };


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label> Add a piece:
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

            </form>
        </div>
    )

}


export default Form