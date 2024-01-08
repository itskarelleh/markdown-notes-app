import React, { useContext } from 'react';
import { NotesContext } from '../../context/NotesProvider';
import { ThemeContext } from "../../context/ThemeProvider";
import TextareaAutosize from 'react-textarea-autosize';

function MarkdownInput() {
    
    const { selected, updateNote } = useContext(NotesContext);
    const { theme } = useContext(ThemeContext);
    
    const textareaStyle = {
        background: "none",
        border: "none",
        height: "auto",
        resize: "none",
    }

    return (
        <div className="content-spacing">
            <form>
                <TextareaAutosize id="title"
                minRows={1} style={textareaStyle}
                className={`${theme.text.className} textarea-input textarea-size is-size-3 title`} 
                value={selected.title} onInput={e => updateNote(e)}/>
                <TextareaAutosize id="content"
                style={textareaStyle} minRows={1}
                value={selected.content} onInput={e => updateNote(e)}
                className={`${theme.text.className} textarea-input textarea-size`}  />
            </form>
        </div>
    )
}

export default MarkdownInput;