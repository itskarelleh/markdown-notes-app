import React, { useContext } from 'react';
import { Button } from 'react-bulma-components';
import { NotesContext } from '../../context/NotesProvider';
import TitleField from './TitleField';
import { ThemeContext, light, dark } from "../../context/ThemeProvider";

function MarkdownInput() {
    
    const { selected, handleContentChange } = useContext(NotesContext);
    const { toggle } = useContext(ThemeContext);
    
    return (
        <div className="markdown-input">
        <TitleField />
        <div contentEditable
        role="textbox" 
        className={`${!toggle ? light.text.className : dark.text.className } textarea-expandable textarea-spacing`}
        onChange={handleContentChange}>
            {selected.content === "" ? "Start typing..." : selected.content}
        </div>
        </div>
    )
}

export default MarkdownInput;