import React, { useContext } from "react";
import { NotesContext, EditorContext } from "../../context";
import { NoNotesDetected } from "../notes";
import { Box, Block, Button, Container, Columns } from "react-bulma-components";
import { HtmlAndTextButton } from "../inputs";
import HtmlAndTextView from "./HtmlAndTextView";
import MarkdownInput from "./MarkdownInput";

const ToggleColumns = () => {

    const { toggleColumnsForMobile, toggleColumns } = useContext(EditorContext);

    return (
        <Block className="hidden-on-desktop buttons" display="flex" justifyContent="end" style={{ width: "100%" }}>
            <Button className={`${toggleColumns ? `is-dark` : `is-light`} d-sm-none d-block`} title="View Markdown"
            onClick={toggleColumnsForMobile}>
                <ion-icon name="logo-markdown"></ion-icon>
            </Button> 
            <Button className={`${!toggleColumns ? `is-dark` : `is-light`} d-sm-none d-block`}
            title="View Content" onClick={toggleColumnsForMobile}>
                <ion-icon name="text-outline"></ion-icon>
            </Button> 
        </Block>
    )
}

function Editor() {
    const { notes, selected, handleChange } = useContext(NotesContext);
    const {toggleColumns, isMobile, toggleMobile } = useContext(EditorContext);

    if(notes.length === 0 || notes === undefined) {
        return <NoNotesDetected />;
    }

    return (
        <Container>
            <ToggleColumns />
            <Columns tablet>
                <Columns.Column className={!toggleColumns ? "is-hidden-mobile" : ""}>
                    <Box backgroundColor="white">
                        <MarkdownInput value={selected.content} onChange={e => handleChange(e)} />          
                    </Box>
                </Columns.Column>
                <Columns.Column className={toggleColumns ? "is-hidden-mobile" : ""}>
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
 