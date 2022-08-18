import React, { useState, useContext } from 'react';
import { NotesContext } from '../context';

export const CreateNoteButton = () => {
    const { addNewNote } = useContext(NotesContext);

    return( <button 
        className="button is-success"
        onClick={() => {
        addNewNote();
        console.log('Created new button');
        }}>+</button> )

}

const EditNoteButton = ({ isEditing, setIsEditing }) => (
    <button className="button is-warning"
    onClick={() => setIsEditing(prev => !prev)}>
        {isEditing ?  <ion-icon name="create-outline"></ion-icon> : <ion-icon name="checkmark-outline"></ion-icon> } 
    </button>
)

const DeleteNoteButton = ({ id }) => { 

    //useContext to bind the delete function to this button
    const { deleteNote }  = useContext(NotesContext);

    return (
        <button onClick={() => deleteNote(id)}className="button is-danger">
            <ion-icon name="create-outline"></ion-icon>
        </button>
    )   
}

const NoteView = ({ data }) => {

    const [ isEditing, setIsEditing ] = useState(false);

    const EditView = () => {
        return(
            <div>
                <input type="name" value={data.title} />
                <div className="" 
                contentEditable>{data.content}</div>
            </div>
        )
    }
    
    const ReadView = () => {
        return(
            <>
                <h2>{data.title}</h2>
                <p>{data.content}</p>
            </>
        )
    }

    const NoteButtons = () => (
        <div className="buttons">
            <EditNoteButton isEditing={isEditing} setIsEditing={setIsEditing} />
            <DeleteNoteButton id={data.id} />
        </div>
    )
    
    return (
        <div key={`note-`}>
            <div>
                <NoteButtons />
            </div>
            { isEditing ? <EditView /> : <ReadView /> }
        </div>
    )
};

const NoNotesDetected = () => (
    <div>
        <h2>No Notes Yet.</h2>
        <CreateNoteButton />
    </div>
);

const NotesList = ({ data }) => (

    <>
    {data && data.map((note) => (
        <NoteView data={note} />
    ))}
    </>
);

export default function Notes() {

    const { notes } = useContext(NotesContext);

    return (
        <>
        {notes.length === 0 ? <NoNotesDetected /> :
         <NotesList data={notes} /> }
        </>
    )
}