import React, { useContext } from 'react';
import { NotesContext } from '../../context';
import { CreateNoteButton } from './inputs';

const NoteSummary = ({ data }) => {
    const { getNote } = useContext(NotesContext);

    return (
        <>
            <div onClick={() => getNote(data.id)} key={`note-${data.id}`}>
                <h1>{data.title}</h1>
                <p>{data.created_at}</p>
            </div>
        </>
    )
}

const NoNotesDetected = () => (
    <div>
        <h2>No Notes Yet.</h2>
        <CreateNoteButton />
    </div>
);

const NotesList = () => {
    const { notes } = useContext(NotesContext);

    return (<>
    {notes && notes.map((note) => (
        <NoteSummary data={note} />
    ))}
    </>)
}

export { NotesList, NoNotesDetected }