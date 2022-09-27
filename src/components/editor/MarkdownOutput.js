import React, { useState, useContext, useEffect } from "react";
import { Content, Block, Button, Heading } from 'react-bulma-components';
import { NotesContext } from "../../context/NotesProvider";
import { ThemeContext, light, dark } from "../../context/ThemeProvider";
import { rawMarkup } from "../../utils";

export default function MarkdownOutput() {

    const { selected } = useContext(NotesContext);
    const { toggle } = useContext(ThemeContext);
    const [ markup, setMarkup ] = useState("");

    useEffect(() => {
        setMarkup(rawMarkup(selected.content));
    }, [markup]);
    
    return (
        <>
        <Content id="content">
            <Heading className={!toggle ? light.text.className : dark.text.className }>
                {selected.title}
            </Heading>
            <Block className={!toggle ? light.text.className : dark.text.className }>
                {selected.updated_at && selected.updated_at}
            </Block>
            <Block className={!toggle ? light.text.className : dark.text.className }
            dangerouslySetInnerHTML={{ __html: markup }}></Block>
        </Content> 
        </>
        
    )
}