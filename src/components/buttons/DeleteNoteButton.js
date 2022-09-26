import React, { useState, useContext } from 'react';
import { Button, Block, Heading } from 'react-bulma-components';
import { NotesContext } from '../../context';
import Modal from '../bulma-components/Modal';

const DeleteNoteButton = () => {
    
    const { deleteNote, selected } = useContext(NotesContext);
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <>
            <Button size="small" onClick={() => setIsOpen(prev => !prev)} 
            className="is-danger is-rounded">
                <ion-icon name="create-outline"></ion-icon>
            </Button>
            <Modal onClose={() => setIsOpen(prev => !prev)} 
            open={isOpen}>
                <Block>
                    <Heading renderAs="h3">Deleting</Heading>
                </Block>
                <div className="box has-background-white">
                    <Button onClick={() => {
                        deleteNote(selected.id);
                        setIsOpen(prev => !prev);
                    }} className="is-danger">Yes</Button>
                </div>
            </Modal>
        </>
    )   
}
export default DeleteNoteButton;