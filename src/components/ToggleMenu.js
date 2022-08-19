import React, { useState, useRef, useContext } from 'react';
import { CreateNoteButton } from './notes/inputs';
import { Button } from 'react-bulma-components';
import { NoNotesDetected, NotesList } from './notes/Notes';
import { NotesContext } from '../context';

export default function Menu() {

    const { notes } = useContext(NotesContext);

    const open = useRef(null);
    const onOpen = () => {
        const div = open.current;
        div.classList.add("is-active");
    }

    const onClose = () => {
        const div = open.current;
        div.classList.remove("is-active");
    }

    return (
        <>
            <Button onClick={onOpen}>
                <ion-icon name="menu-outline"></ion-icon>
            </Button>
            <div className="modal" ref={open} 
            onClick={onClose}>
                <div class="modal-background"></div>
                <div className="modal-content">
                    <div className="box has-background-white">
                        {notes.length === 0 ? <NoNotesDetected /> : 
                        (<CreateNoteButton />, <NotesList />) }
                    </div>
                </div>
            </div>
        </>
    )
}
