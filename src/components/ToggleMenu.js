import React, { useState, useContext } from 'react';
import { CreateNoteButton, onOpen } from './inputs';
import { Block, Button, Heading, Menu } from 'react-bulma-components';
import { NoNotesDetected, NotesList, NoteSummary } from './notes';
import { NotesContext } from '../context';
import Modal from './Modal';

export default function ToggleMenu() {

    const { notes, getNote } = useContext(NotesContext);
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <>
        <Button className="side-menu-btn" onClick={() => setIsOpen(prev => !prev)}>
            {!isOpen ? <ion-icon name="menu-outline"></ion-icon> : <ion-icon name="close-outline"></ion-icon>}
        </Button>
        <Modal open={isOpen}>
            <div className="modal-menu">
            <Menu mt={5}>
                <Menu.List title="Notes">
                    {notes && notes.map((note) => (
                        <Menu.List.Item  key={note.id} onClick={() => {
                            getNote(note.id);
                            setIsOpen(prev => !prev);    
                        }}>
                           <NoteSummary data={note} />
                       </Menu.List.Item>
                    ))}
                </Menu.List>
            </Menu>
            </div>
            
        </Modal>
        </>

    )
}


            {/* <Button onClick={() => setIsOpen(prev => !prev)}>
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
     */}