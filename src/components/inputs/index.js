import React, { useState, useContext } from "react";
import { EditorContext, NotesContext } from "../../context";
import { Block, Button, Heading } from "react-bulma-components";
import Modal from "../bulma-components/Modal";
import "bulma-switch";

const DeleteNoteButton = () => { 
    
    const { deleteNote, selected } = useContext(NotesContext);
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <>
            <Button size="small" onClick={() => setIsOpen(prev => !prev)} 
            className="is-danger">
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

const CreateNoteButton = () => {
    
    const { createNote } = useContext(NotesContext);

    return( <Button 
        className="button is-success"
        onClick={() => createNote()}>+</Button> )

}

const HtmlAndTextButton = () => {

    const { isTextView, toggleTextView } = useContext(EditorContext);

    return (
        <div className="buttons">
            <Button className={`is-align-self-flex-end ${!isTextView ? `is-dark` : `is-light`}`}
            title={`Click to see in Text`} size="small"
            onClick={toggleTextView}>Text</Button>
            <Button className={`is-align-self-flex-end ${isTextView === false ? `is-light` : `is-dark`}`}
            title={`Click to see in HTML`} 
            size="small" onClick={toggleTextView}>HTML</Button>
        </div>
        
    )
}

export { CreateNoteButton, DeleteNoteButton, HtmlAndTextButton }
