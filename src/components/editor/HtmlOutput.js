import React, { useContext, useEffect, useState } from 'react';
import { NotesContext } from '../../context/NotesProvider';
import { EditorContext } from '../../context/EditorProvider';
import { rawMarkup } from "../../utils";
import { Block } from 'react-bulma-components'

export default function HtmlOutput() {
    
    const { selected } = useContext(NotesContext);
    const [ markup, setMarkup ] = useState(null);

    useEffect(() => {
        setMarkup(rawMarkup(selected.content));
    }, [ selected.content ]);
    
    if(!markup) {
        return null;
    }        
    
    return (
         <Block className="editor-content-height content-border">
            {markup}
        </Block>
    )
}