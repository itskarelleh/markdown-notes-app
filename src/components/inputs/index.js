import React, { useState, useEffect, useContext } from "react";
import { EditorContext, NotesContext } from "../../context";
import { Block, Button, Heading } from 'react-bulma-components';
import Modal from "../Modal";
import 'bulma-switch';

//The Edit Note Button will have two views: one where it shows only the autosave
//switch when enabled, and one where the update button is visible along side the autosave switch
// when the switch is disabled
const EditNoteButton = () => {

    const { updateNote, selected } = useContext(NotesContext);
    const { currentContent, isAutosave, toggleAutosave } = useContext(EditorContext);

    // const isEdited = currentContent != selected.content ? false : true;
    
    // useEffect(() => {
    //     updateNote(selected.id);
    //     // if(isAutosave === true) {
            
    //         // updateNote(selected.id);
    //     // }
    // }, [isAutosave == true])

    const ManualSave = () => (
        <Button size="small" onClick={() => updateNote(currentContent)} 
        className="button is-success" 
        disabled={currentContent != selected.content ? false : true}>
            <ion-icon name="checkmark-outline"></ion-icon>
        </Button>
    )

    const ToggleSave = () => (
        <div className="field mr-3" onClick={toggleAutosave}>
            <input id="autosave" type="checkbox" checked={!isAutosave ? false : true}
            name="switchSmall" className="switch is-small is-success" readOnly/>
            <label htmlFor="switchSmall">Autosave</label>
        </div>
    )

        return (
        <Block display="flex" className="my-0 mr-4">
            <ToggleSave />
            {!isAutosave && <ManualSave />}
        </Block>
    )
}

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
                    <Heading renderAs='h3'>Deleting</Heading>
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

export { CreateNoteButton, DeleteNoteButton, EditNoteButton }
