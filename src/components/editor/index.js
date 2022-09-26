import React, { useContext, useEffect } from "react";
import { NotesContext, EditorContext } from "../../context";
import { NoNotesDetected } from "../notes";
import { Box } from "react-bulma-components";
import MarkdownInput from "./MarkdownInput";
import HtmlOutput from "./HtmlOutput";
import MarkdownOutput from "./MarkdownOutput";
import DeleteNoteButton from "../buttons/DeleteNoteButton";
import EditNoteButton from "../buttons/EditNoteButton";
import EditorToolbar from "./EditorToolbar";

function Editor() {
    
    const { notes } = useContext(NotesContext);
    const { isEditing, toggleEditing } = useContext(EditorContext);


    if(notes.length === 0 || notes === undefined) {
        return <NoNotesDetected />;
    }

    return (
        <div className="m-0 p-4 has-background-light" 
        backgroundColor="light"
        style={{ height: '100%', width: '100%' }}>
            <Box backgroundColor="white" mx="auto" my="3"
            style={{ width: '50%', height: '95%' }}>
                <EditorToolbar />
                {isEditing ? <MarkdownInput /> : <MarkdownOutput />}
            </Box>  
        </div>
    )
};

export default Editor;