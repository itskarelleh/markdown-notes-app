import React, { useContext } from "react";
import { Button } from "react-bulma-components";
import { NotesContext } from "../../context";

const CreateNoteButton = () => {
    
    const { createNote } = useContext(NotesContext);

    return( <>
    
        <Button color="success"
        className="is-rounded"
        onClick={() => createNote()}>+</Button>
        <p></p>
        </> )

}

export default CreateNoteButton;