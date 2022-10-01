import React, { useContext, useEffect } from "react";
import { NotesContext } from "../../context/NotesProvider";
import { EditorContext } from "../../context/EditorProvider";
import { NoNotesDetected, NotesList } from "../notes";
import { Box } from "react-bulma-components";
import MarkdownInput from "./MarkdownInput";
import MarkdownOutput from "./MarkdownOutput";
import EditorToolbar from "./EditorToolbar";
import { ThemeContext, dark, light } from "../../context/ThemeProvider";

function Editor() {
    
    const { toggle } = useContext(ThemeContext);
    const { notes, selected } = useContext(NotesContext);
    const { isEditing } = useContext(EditorContext);

    if(notes.length === 0 || notes === undefined) {
        return <NoNotesDetected />;
    }else if(Object.keys(selected).length === 0 && notes.length >= 1) {
        return <NotesList />;
    }

    return (
        <div className={`m-0 p-4 ${!toggle ? light.background.className : dark.background.className }`} 
        style={{ width: '100%', minHeight: "100%" }}>
            <Box className={` ${!toggle ? light.panel.className : dark.panel.className} mx-auto my-6`}
            style={{ width: '50%', height: '95%' }}>
                <EditorToolbar />
                {!isEditing ? <MarkdownInput /> : <MarkdownOutput />}
            </Box>  
        </div>
    )
};

export default Editor;