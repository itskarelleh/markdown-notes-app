import React, { useState, useContext } from 'react';
import { CreateNoteButton, onOpen } from './notes/inputs';
import { Block, Button, Heading } from 'react-bulma-components';
import { NoNotesDetected, NotesList } from './notes/Notes';
import { NotesContext } from '../context';
import Modal from './Modal';

export default function ToggleMenu() {

    const { notes } = useContext(NotesContext);
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(prev => !prev)}>
                <ion-icon name="menu-outline"></ion-icon>
            </Button>
            <Modal onClose={() => setIsOpen(prev => !prev)} open={isOpen}>
                <Block>
                    <Heading renderAs='h3'>Notes</Heading>
                    <CreateNoteButton />
                </Block>
                <div className="box has-background-white">
                    {notes.length === 0 ? <NoNotesDetected /> : 
                    (<CreateNoteButton />, <NotesList />) }
                </div>
            </Modal>
        </>
    )
}
