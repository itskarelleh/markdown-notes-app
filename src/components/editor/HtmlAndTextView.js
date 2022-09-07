import React, { useContext, useEffect, useState } from 'react';
import { NotesContext } from '../../context';
import { EditorContext } from '../../context';
import { rawMarkup } from "../../utils";
import { Block, Content } from 'react-bulma-components'

export default function HtmlAndTextView() {

    const { selected, currentContent } = useContext(NotesContext);
    const { isTextView, isAutosave } = useContext(EditorContext)
    const [ markup, setMarkup] = useState(null);

    useEffect(() => {
        if(isAutosave) {
            setMarkup(rawMarkup(selected.content));
        } else {
            setMarkup(rawMarkup(currentContent));
        }
    },[markup, selected, isAutosave])

    const HtmlView = () => (
        <Content>
            <div dangerouslySetInnerHTML={{ __html: markup }}></div>
        </Content> 
    );

    const TextView = () => (
        <Block>
            {markup}
        </Block>
    );
    
    if(!markup) {
        return null;
    }        
    
    return (
        <>
        { isTextView ?  <TextView /> : <HtmlView />}
        </>
    )
}