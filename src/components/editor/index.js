import React, { useContext } from "react";
import { NotesContext } from "../../context/NotesProvider";
import { EditorContext } from "../../context/EditorProvider";
import { NoNotesDetected, NotesList } from "../notes";
import MarkdownInput from "./MarkdownInput";
import MarkdownOutput from "./MarkdownOutput";
import EditorToolbar from "./EditorToolbar";
import { ThemeContext } from "../../context/ThemeProvider";

function Editor() {
    
    const { theme } = useContext(ThemeContext);
    const { notes, selected } = useContext(NotesContext);
    const { isEditing } = useContext(EditorContext);

    if(!selected || Object.keys(selected).length === 0) {
        return (
            <>
                {notes.length >= 1 || notes.length !== undefined ? <NotesList /> :
                <NoNotesDetected />}
            </>
        )
    }

    return (
        <div className={`m-0 p-4 ${theme.background.className}`} 
        style={{ width: '100%', minHeight: "100%" }}>
            <div id="editor-wrapper">
            <EditorToolbar />
            <div className={`box ${theme.panel.className} mx-auto mt-3`}
            style={{ width: '100%', height: '95%' }}>
                {!isEditing ? <MarkdownInput /> : <MarkdownOutput />}
            </div>  
            </div>
        </div>
    )
};

export default Editor;