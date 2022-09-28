import React, { useState, useContext, createRef } from 'react';
import { Button, Menu } from 'react-bulma-components';
import { NoteSummary } from '../notes';
import { NotesContext } from '../../context/NotesProvider';
import Modal from '../bulma-components/Modal';
import CreateNoteButton from '../buttons/CreateNoteButton';
import { ThemeContext, light, dark } from '../../context/ThemeProvider';

export default function ToggleMenu() {

    const { toggle } = useContext(ThemeContext);
    const { notes, getNote } = useContext(NotesContext);
    const [ isOpen, setIsOpen ] = useState(false);
    const currentMenuListItem = createRef(null);
    
    const handleOnHover = () => {
        currentMenuListItem.current.classList.remove('menu-list');
    }

    return (
        <>
        <Button className="side-menu-btn" textSize="4"
        color={!toggle ? light.panel.style : dark.panel.style}
        style={{ border: 'none' }}
        onClick={() => setIsOpen(prev => !prev)}>
            {!isOpen ? <ion-icon name="menu-outline"></ion-icon> : <ion-icon name="close-outline"></ion-icon>}
        </Button>
        <Modal open={isOpen}>
            <div className={`modal-menu ${!toggle ? light.panel.className : dark.panel.className }`}>
            <Menu style={{ marginTop: '5rem',padding: '0 1rem' }}>
                <CreateNoteButton />
                <p className="menu-label">Notes</p>
                <ul className="mt-5 note-summaries">
                    {notes && notes.map((note) => (
                        <Menu.List.Item className="mb-3 note-summary"
                        key={note.id} onClick={() => {
                            getNote(note.id);
                            setIsOpen(prev => !prev);    
                        }}>
                           <NoteSummary data={note} />
                       </Menu.List.Item>
                    ))}
                </ul>
            </Menu>
            </div>
        </Modal>
        </>

    )
}