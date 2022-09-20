import React, { useContext, useState, useEffect } from "react";
import { EditorContext, NotesContext } from "../../context";
import { Block, Container, Button, Heading, Form } from "react-bulma-components";
import { DeleteNoteButton } from "../inputs";

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
    }, [selected]);

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

export default function EditorToolbar() {
    
    const { selected } = useContext(NotesContext);

    const Toolbar = () => (
        <>
        <TitleInputToggle />
        <Block display="flex" justifyContent="space-between" alignItems="center" 
        style={{ width: "20%", height: "75%", marginLeft: "5%" }}>
           <DeleteNoteButton />
        </Block>
        </>
    );

    if(Object.keys(selected).length >= 1) {
        return (
            <Container className="is-flex" flexDirection="row" justifyContent="flex-end" style={{ width: "75%"}}>
                <Toolbar />
            </Container>
        )
    }

    return (
        <></>
    )
}