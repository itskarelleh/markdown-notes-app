import React, { useState, useContext } from 'react';
import { Button, Menu } from 'react-bulma-components';
import { NoteSummary } from '../notes';
import { NotesContext } from '../../context';
import Modal from '../bulma-components/Modal';
import CreateNoteButton from '../buttons/CreateNoteButton';

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
            <Menu style={{ marginTop: '5rem',padding: '0 1rem' }}>
                <CreateNoteButton />
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