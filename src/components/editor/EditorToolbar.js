import React, { useContext, useState } from "react";
import { EditorContext, NotesContext } from "../../context";
import { Block, Container } from "react-bulma-components";
import { DeleteNoteButton, EditNoteButton, TitleInputToggle } from "../inputs";

export default function EditorToolbar() {
    
    const { selected } = useContext(NotesContext);

    const DesktopToolbar = () => (
        <>
        <TitleInputToggle />
        <Block display="flex" justifyContent="space-between" alignItems="center" 
        style={{ width: "20%", height: "100%" }}>
            <EditNoteButton /> <DeleteNoteButton />
        </Block>
        </>
    )

    if(Object.keys(selected).length >= 1) {
        return (
            <Container className="is-flex" flexDirection="row" justifyContent="flex-end" style={{ width: "75%"}}>
                <DesktopToolbar />
            </Container>
        )
    }

    return (
        <></>
    )
}