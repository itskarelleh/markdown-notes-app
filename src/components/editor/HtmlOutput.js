import React, { useContext, useEffect, useState } from 'react';
import { NotesContext } from '../../context';
import { EditorContext } from '../../context';
import { rawMarkup } from "../../utils";
import { Block } from 'react-bulma-components'

export default function HtmlOutput() {
    
    const { selected } = useContext(NotesContext);
    const { isTextView } = useContext(EditorContext);
    const [ markup, setMarkup ] = useState(null);

    useEffect(() => {
        setMarkup(rawMarkup(selected.content));
    });
    
    if(!markup) {
        return null;
    }        
    
    return (
         <Block className="editor-content-height content-border">
            {markup}
        </Block>
    )
}