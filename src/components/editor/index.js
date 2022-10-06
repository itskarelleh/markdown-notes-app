import React, { useContext } from "react";
import { NotesContext } from "../../context/NotesProvider";
import { EditorContext } from "../../context/EditorProvider";
import { NoNotesDetected, NotesList } from "../notes";
import MarkdownInput from "./MarkdownInput";
import MarkdownOutput from "./MarkdownOutput";
import EditorToolbar from "./EditorToolbar";
import { ThemeContext, dark, light } from "../../context/ThemeProvider";

function Editor() {
    
    const { theme } = useContext(ThemeContext);
    const { notes, selected } = useContext(NotesContext);
    const { isEditing } = useContext(EditorContext);

    if(!selected || Object.keys(selected).length === 0) {
        return (
            <>
                {notes.length >= 1 || notes.length != undefined ? <NotesList /> :
                <NoNotesDetected />}
            </>
        )
    }

    return (
        <div className={`m-0 p-4 ${theme.background.className}`} 
        style={{ width: '100%', minHeight: "100%" }}>
            <div className={`box ${theme.panel.className} mx-auto my-6`}
            style={{ width: '90%', height: '95%' }}>
                <EditorToolbar />
                {!isEditing ? <MarkdownInput /> : <MarkdownOutput />}
            </div>  
        </div>
    )
};

export default Editor;