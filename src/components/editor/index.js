import React, { useContext,  useEffect,  useState } from "react";
import { NotesContext, EditorContext } from "../../context";
import { NoNotesDetected } from "../notes";
import { Box, Block, Button, Content, Container, Columns } from "react-bulma-components";
import { DeleteNoteButton, EditNoteButton, HtmlAndTextButton,
MarkdownInput, TitleInputToggle } from "../inputs";
import bulmaCollapsible from '@creativebulma/bulma-collapsible';
import HtmlAndTextView from "./HtmlAndTextView";


function Editor() {
    const { notes, selected } = useContext(NotesContext);
    const { toggleColumnsForMobile, toggleColumns, 
    toggleMobile, isMobile } = useContext(EditorContext);

    useEffect(() => {
        if(window.innerWidth < 640) {
            toggleMobile();
        }
    }, [notes, selected]);

    if(notes.length === 0 || notes === undefined) {
        return <NoNotesDetected />
    }

    return (
        <Container>
            <Block display="flex" justifyContent="end" style={{ width: "100%"}}>
                {isMobile ? ( <Button title={toggleColumnsForMobile ? "View Content" : "View Markdown"} 
                onClick={toggleColumnsForMobile}>
                    {toggleColumnsForMobile ? <ion-icon name="text-outline"></ion-icon> : <ion-icon name="logo-markdown"></ion-icon> }
                </Button> ) : null }
            </Block>
            <Columns tablet>
                <Columns.Column className={isMobile &&  !toggleColumns ? "is-hidden-mobile" : ""}>
                    <Box backgroundColor="white">
                        <MarkdownInput />          
                    </Box>
                </Columns.Column>
                <Columns.Column className={isMobile &&  toggleColumns ? "is-hidden-mobile" : ""}>
                    <Box backgroundColor="white" display="flex" flexDirection="column">
                        <HtmlAndTextButton />
                        <HtmlAndTextView /> 
                    </Box>
                </Columns.Column>
            </Columns>
        </Container>
    )
};


export default Editor;
 