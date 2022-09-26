import React, { useState, useContext, useEffect } from "react";
import { Content, Block, Button, Heading } from 'react-bulma-components';
import { NotesContext } from "../../context";

import { rawMarkup } from "../../utils";
export default function MarkdownOutput() {

    const { selected } = useContext(NotesContext);
    const [ markup, setMarkup ] = useState("");

    useEffect(() => {
        setMarkup(rawMarkup(selected.content));
    }, [markup]);
    
    return (
        <>
        <Content id="content">
            <Heading>
                {selected.title}
            </Heading>
            <Block>
                {selected.updated_at && selected.updated_at}
            </Block>
            <Block
            dangerouslySetInnerHTML={{ __html: markup }}></Block>
        </Content> 
        </>
        
    )
}