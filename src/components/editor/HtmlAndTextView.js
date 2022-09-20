import React, { useContext, useEffect, useState } from 'react';
import { NotesContext } from '../../context';
import { EditorContext } from '../../context';
import { rawMarkup } from "../../utils";
import { Block, Content } from 'react-bulma-components'

export default function HtmlAndTextView() {

    const { selected } = useContext(NotesContext);
    const { isTextView, currentDocument } = useContext(EditorContext);
    const [ markup, setMarkup ] = useState(null);

    useEffect(() => {
        setMarkup(rawMarkup(selected.content));
    });

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
        { isTextView ?  <TextView /> : <HtmlView /> }
        </>
    )
}