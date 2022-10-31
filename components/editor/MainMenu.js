import React from 'react';
import { useContext } from 'react';
import { NotesContext } from '../../context/NotesProvider';
import { NoNotesDetected, NotesList } from '../notes';

export default function MainMenu() {

    const { notes } = useContext(NotesContext);

    if(notes.length < 1) {
        return (
            <>
                <NoNotesDetected />
            </>
        )
    }

    return (
        <>
            <NotesList />
        </>
    )
} 