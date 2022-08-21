import React, { useState, useContext, useRef } from "react";
import { EditorContext, NotesContext } from "../../context";
import { Block, Button, Heading } from 'react-bulma-components';
import 'bulma-switch';
import Modal from "../Modal";

const EditNoteButton = ({ id }) => {
    const [ isAutosave, setIsAutosave ] = useState(false);
    const { editNote, selected } = useContext(NotesContext);
    const { currentContent } = useContext(EditorContext);

    const isDisabled = currentContent != selected.content ? false: true;
    const ManualSave = () => (
        <Button onClick={editNote} className="button is-success" disabled={isDisabled}>
            <ion-icon name="checkmark-outline"></ion-icon>
        </Button>
    )

    const ToggleSave = () => (
        <div className="field">
            <input id="autosave" type="checkbox" name="switchSmall" className="switch is-small" checked={isAutosave ? true : false} />
            <label for="switchSmall">Autosave</label>
        </div>
    )

    return (
        <Block className="is-flex is-flex-direction-row">
            <ToggleSave />
            {!isAutosave && <ManualSave />}
        </Block>
    )
}

const DeleteNoteButton = () => { 
    const { deleteNote } = useContext(NotesContext);
    const [ isOpen, setIsOpen ] = useState(false);
    //useContext to bind the delete function to this button

    return (
        <>
            <Button onClick={() => setIsOpen(prev => !prev)} 
            className="is-danger">
                <ion-icon name="create-outline"></ion-icon>
            </Button>
            <Modal onClose={() => setIsOpen(prev => !prev)} 
            open={isOpen}>
                <Block>
                    <Heading renderAs='h3'>Deleting</Heading>
                </Block>
                <div className="box has-background-white">
                    <Button className="is-danger">Yes</Button>
                </div>
            </Modal>
        </>
    )   
}

const CreateNoteButton = () => {
    
    const { createNote } = useContext(NotesContext);

    return( <Button 
        className="button is-success"
        onClick={() => {
        createNote();
        console.log('Created new button');
        }}>+</Button> )

}

export { CreateNoteButton, DeleteNoteButton, EditNoteButton }
