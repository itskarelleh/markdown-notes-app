import React, { useState, useContext } from "react";
import { NotesContext } from "../../context";
import { Button } from 'react-bulma-components';

const EditNoteButton = ({ id }) => {
    const [ isEdit, setIsEdit ] = useState(false);

    return (
    <Button className="button is-warning" onClick={() => setIsEdit(prev => !prev)}>
        { !isEdit ? <ion-icon name="create-outline"></ion-icon> : <ion-icon name="checkmark-outline"></ion-icon> }
    </Button>
)}

const DeleteNoteButton = ({ id }) => { 
    const { deleteNote } = useContext(NotesContext);
    //useContext to bind the delete function to this button
    return (
        <Button onClick={() => deleteNote(id)} className="is-danger">
            <ion-icon name="create-outline"></ion-icon>
        </Button>
    )   
}


const CreateNoteButton = () => {
    const { createNote } = useContext(NotesContext);

    return( <Button 
        className="button is-success"
        onClick={() => {
        createNote();
        console.log('Created new button');
        }}>+</Button> )

}

export { CreateNoteButton, DeleteNoteButton, EditNoteButton }
