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

<<<<<<< HEAD
export { CreateNoteButton, DeleteNoteButton, HtmlAndTextButton }
=======
const TitleDisplay = ({ setIsEditing }) => {

    const { selected } = useContext(NotesContext);

    const titleAndDate = `${selected.title} - ${selected.created_at}`;

    return (
        <Block onClick={() => setIsEditing(true)}>
            {Object.keys(selected).length >= 1 && 
            <Heading style={{ height: "100%" }} marginless 
            alignItems="center" className="is-flex" size="6" renderAs="h6">
                {titleAndDate}
            </Heading> 
            }
        </Block>
    )
}

const TitleInput = ({ setIsEditing }) => {

    const { selected, updateNoteTitle } = useContext(NotesContext);
    const [ value, setValue ] = useState("");
    
    useEffect(() => {
        setValue(selected.title);

        if(Object.keys(selected).length === 0) setValue("");
    }, [selected])

    return (
        <Block>
            <Form.Field>
                <Form.Control>
                    <Form.Input type="text" value={value}
                    onClick={setIsEditing(prev => !prev)}
                    onChange={e => setValue(e.target.value)}></Form.Input>
                    <Button size="small" onClick={() => {
                        updateNoteTitle(value)
                    }}>Save</Button>
                </Form.Control>
            </Form.Field>
        </Block>
    )
}

const TitleInputToggle = () => {
    
    const [ isEditing, setIsEditing ] = useState(false);
    const { selected } = useContext(NotesContext);
    
    
    if(Object.keys(selected).length >= 1){
        return (
        <>
            {isEditing ? <TitleInput setIsEditing={setIsEditing} /> : <TitleDisplay setIsEditing={setIsEditing} />}
        </>
        )
    }

    if(Object.keys(selected).length === 0) {
        return null;
    }

}

const MarkdownInput = () => {
    const { selected, currentContent, handleChangeAutosave } = useContext(NotesContext);
    const { isAutosave } = useContext(EditorContext);
    
    return (
        <>
        <textarea style={{ height: "100vh" }} 
        className="textarea has-fixed-size is-fullheight"
        value={isAutosave ? selected.content : currentContent} 
        onChange={e => handleChangeAutosave(e, isAutosave)}>
        </textarea>
        </>
    )
}

export { CreateNoteButton, DeleteNoteButton, EditNoteButton, TitleInputToggle, MarkdownInput, HtmlAndTextButton }
>>>>>>> 4b2f35f27740661133f4374b61b35a7dbbeee252
