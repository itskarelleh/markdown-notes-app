import React, { useContext } from 'react';
import { NotesContext } from '../../context/NotesProvider';
import { ThemeContext } from "../../context/ThemeProvider";
import TextareaAutosize from 'react-textarea-autosize';

function MarkdownInput() {
    
    const { selected, handleTitleChange, handleContentChange } = useContext(NotesContext);
    const { theme } = useContext(ThemeContext);

    const textareaStyle = {
        background: "none",
        border: "none",
        height: "auto",
        resize: "none",
    }
    
    return (
        <div className="content-spacing">
                <TextareaAutosize 
                minRows={1}
                style={textareaStyle}
                className={`${theme.text.className} 
                textarea-input textarea-size is-size-3 title`} 
                value={selected.title} 
                onChange={handleTitleChange}/>
                <TextareaAutosize 
                style={textareaStyle}
                minRows={1}
                value={selected.content} onChange={handleContentChange}
                className={`${theme.text.className} textarea-input textarea-size`}  />
        </div>
    )
}

export default MarkdownInput;