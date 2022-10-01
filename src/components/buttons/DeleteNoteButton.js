import React, { useState, useContext } from 'react';
import { Button, Block, Heading } from 'react-bulma-components';
import { NotesContext } from '../../context/NotesProvider';
import { dark, light, ThemeContext } from '../../context/ThemeProvider';
import Modal from '../bulma-components/Modal';

const DeleteNoteButton = ({ id }) => {
    
    const { deleteNote } = useContext(NotesContext);
    const [ isOpen, setIsOpen ] = useState(false);
    const { toggle } = useContext(ThemeContext);
    
    return (
        <>
            <Button size="small" title={"Delete this note"} 
            onClick={() => setIsOpen(prev => !prev)} 
            className="is-danger is-rounded">
                <ion-icon name="trash-bin-outline"></ion-icon>
            </Button>
            <Modal onClose={() => setIsOpen(prev => !prev)} 
            open={isOpen}>
                <div className={`box ${!toggle ? light.panel.className : dark.panel.className }`}>
                <Button className="delete" 
                    onClick={() => setIsOpen(prev => !prev)}
                    aria-label="close"></Button>
                    <Block>
                        <Heading textColor='danger' className={!toggle ? light.text.className : dark.text.className }
                        renderAs="h3">Deleting</Heading>
                        <Heading className={!toggle ? light.text.className : dark.text.className } renderAs="h4">Are you sure you want to delete this note? </Heading>
                    </Block>
                    <div className={`field is-grouped is-justify-content-flex-end`}>
                        <p className="control">
                            <Button onClick={() => { 
                                deleteNote(id);
                                setIsOpen(prev => !prev);
                            }} 
                            className="is-success">
                                Yes
                            </Button>
                        </p>
                    
                        <p className="control">
                            <Button onClick={() => setIsOpen(prev => !prev)}>
                                No
                            </Button>
                        </p>
                    </div>
                </div>
            </Modal>
        </>
    )   
}
export default DeleteNoteButton;