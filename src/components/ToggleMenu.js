import React, { useState, useRef } from 'react';
import { CreateNoteButton } from './notes/inputs';
import { Button } from 'react-bulma-components';
import { NotesList } from './notes/Notes';

export default function Menu() {

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
                        <CreateNoteButton />
                        <NotesList />
                    </div>
                </div>
            </div>
        </>
    )
}
