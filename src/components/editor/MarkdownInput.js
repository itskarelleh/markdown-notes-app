import React, { useContext, useEffect, useState } from 'react';
import { NotesContext } from '../../context/NotesProvider';
import { ThemeContext } from "../../context/ThemeProvider";
import TextareaAutosize from 'react-textarea-autosize';

function MarkdownInput() {
    
    const { selected, updateNote } = useContext(NotesContext);
    const { theme } = useContext(ThemeContext);
    
    // const [ form, setForm ] = useState({ 
    //     title: selected.title, 
    //     content: selected.content 
    // });

    const textareaStyle = {
        background: "none",
        border: "none",
        height: "auto",
        resize: "none",
    }

    // const handleChange = async (e) => {
    //     try {
    //         setForm({ ...form, [e.target.id] : e.target.value });

    //     } catch(err) {
    //         console.error(err);
    //     } finally {
    //         updateNote(form);
    //     }
    // }

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