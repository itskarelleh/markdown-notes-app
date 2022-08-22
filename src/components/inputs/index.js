import React, { useState, useContext } from "react";
import { EditorContext, NotesContext } from "../../context";
import { Block, Button, Heading } from 'react-bulma-components';
import 'bulma-switch';
import Modal from "../Modal";


//The Edit Note Button will have two views: one where it shows only the autosave
//switch when enabled, and one where the update button is visible along side the autosave switch
// when the switch is disabled
const EditNoteButton = () => {

    const { editNote, selected } = useContext(NotesContext);
    const { currentContent } = useContext(EditorContext);
    const [ isAutosave, setIsAutosave ] = useState(false)
    //used to enable 
    const isEdited = currentContent != selected.content ? false : true;
    
    const ManualSave = () => (
        <Button size="small" onClick={editNote} className="button is-success" disabled={isEdited}>
            <ion-icon name="checkmark-outline"></ion-icon>
        </Button>
    )

    const handleChange = () =>{
         setIsAutosave(!isAutosave);
            console.log(isAutosave);
        }

    const ToggleSave = () => (
        <div className="field">
            <input onChange={handleChange} id="autosave" type="checkbox" 
            name="switchSmall" className="switch is-small" defaultChecked={isAutosave} checked={isAutosave} />
            <label for="switchSmall">Autosave</label>
        </div>
    )

    return (
        <>
            <ToggleSave />
            {!isAutosave && <ManualSave />}
        </>
    )
}

const DeleteNoteButton = () => { 
    const { deleteNote } = useContext(NotesContext);
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
