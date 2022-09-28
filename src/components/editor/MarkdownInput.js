import React, { useContext, useEffect, useRef } from 'react';
import { Button, Content } from 'react-bulma-components';
import { NotesContext } from '../../context/NotesProvider';
import { ThemeContext, light, dark } from "../../context/ThemeProvider";
import TextareaAutosize from 'react-textarea-autosize';

function MarkdownInput() {
    
    const { selected, handleTitleChange, handleContentChange } = useContext(NotesContext);
    const { toggle } = useContext(ThemeContext);

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
                className={`${!toggle ? light.text.className : dark.text.className } textarea-input textarea-size title`} 
                value={selected.title} 
                onChange={handleTitleChange}/>
                <TextareaAutosize 
                style={textareaStyle}
                minRows={1}
                value={selected.content} onChange={handleContentChange}
                className={`${!toggle ? light.text.className : dark.text.className} textarea-input textarea-size`}  />
        </div>
    )
}

export default MarkdownInput;