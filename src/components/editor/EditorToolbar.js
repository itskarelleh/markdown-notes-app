import React, { useContext, useState } from "react";
import { EditorContext } from "../../context";
import { Block, Container } from "react-bulma-components";
import { DeleteNoteButton, EditNoteButton, TitleInputToggle } from "../inputs";
import Collapsible from "../bulma-components/Collapsible";

export default function EditorToolbar() {
    
    // const { isMobile } = useContext(EditorContext);


    const DesktopToolbar = () => (
        <>
        <TitleInputToggle />
        <Block display="flex" justifyContent="space-between" alignItems="center" 
        style={{ width: "20%", height: "100%" }}>
            <EditNoteButton /> <DeleteNoteButton />
        </Block>
        </>
    )

    const CollapsibleToolbar = () => (
        <Collapsible>
            <DesktopToolbar />
        </Collapsible>
    );

    return (
        <Container className="is-flex" flexDirection="row" justifyContent="flex-end" style={{ width: "75%"}}>
            <DesktopToolbar />
        </Container>
    )
}