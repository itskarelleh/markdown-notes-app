import React, { useState, useEffect, useContext } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { NotesContext } from '../context';
import PropTypes from 'prop-types';

//Note View Components
const NoteView = ({ data }) => {

    return (
    <div key={`note-`}>
        <h2>{data.title}</h2>
        <p>{data.content}</p>
    </div>
    )
}

export const CreateNoteButton = () => {
    const { addNewNote } = useContext(NotesContext);

    return( <button onClick={() => {
        addNewNote();
        console.log('Created new button');
        }}>+</button> )

}

const NoNotesDetected = () => (
    <div>
        <h2>No Notes Yet.</h2>
        <CreateNoteButton />
    </div>
)

const NotesList = ({ data }) => (

    <>
    {data && data.map((note) => (
        <NoteView data={note} />
    ))}
    </>
)


export default function Notes() {

    const { notes } = useContext(NotesContext);

    return (
        <>
        {/* { notes.length == 0 ? <NoNotesDetected /> : */}
         <NotesList data={notes} /> 
        </>
    )
}