import React, { useContext } from 'react';
import { NotesContext } from '../../context';

export default function TitleField() {
    
    const { selected, handleTitleChange } = useContext(NotesContext);

    return( 
        <textarea type="text" 
        className="title markdown-input"
        value={selected.title != "" ? selected.title : "Write a Title"}
        onChange={e => handleTitleChange(e)} style={{ height: 'auto'}} 
        />);

}