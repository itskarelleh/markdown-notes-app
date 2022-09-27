import React, { useContext, useEffect } from 'react';
import { NotesContext } from '../../context/NotesProvider';
import { ThemeContext, light, dark } from "../../context/ThemeProvider";

export default function TitleField() {

    const { selected, handleTitleChange } = useContext(NotesContext);
    const { toggle } = useContext(ThemeContext);
    
    return( 
        <div className={`${!toggle ? light.text.className : dark.text.className } expandable-textarea title`}
        contentEditable 
        role="textbox"
        onInput={handleTitleChange}
        dangerouslySetInnerHTML={{ __html: selected.title }}>
        </div>
    );

}