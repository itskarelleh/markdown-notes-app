import React, { useContext } from 'react';
import { Button } from 'react-bulma-components';
import { NotesContext } from '../../context';
import TitleField from './TitleField';

function MarkdownInput() {
    
    const { selected, handleContentChange } = useContext(NotesContext);

    return (
        <div className="markdown-input">
            <TitleField />
        <textarea className="markdown-input textarea-spacing"
        placeholder={selected.content === "" && "Start typing..."}
        value={selected.content}
        onChange={handleContentChange}>
        </textarea>
        </div>
    )
}

export default MarkdownInput;