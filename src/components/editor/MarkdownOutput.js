import React, { useState, useContext, useEffect } from "react";
import { Content, Block, Heading } from 'react-bulma-components';
import { NotesContext } from "../../context/NotesProvider";
import { ThemeContext, light, dark } from "../../context/ThemeProvider";
import { rawMarkup } from "../../utils";

export default function MarkdownOutput() {

    const { selected } = useContext(NotesContext);
    const { toggle } = useContext(ThemeContext);
    const [ markup, setMarkup ] = useState("");

    useEffect(() => {
        setMarkup(rawMarkup(selected.content));
    }, [selected.content]);
    
    return (
        <>
        <Content id="content" className="content-spacing">
            <Heading className={!toggle ? light.text.className : dark.text.className }>
                {selected.title}
            </Heading>
            {selected.updated_at  && <Block className={!toggle ? light.text.className : dark.text.className }>
                {selected.updated_at}
            </Block>}
            <Content className={`${!toggle ? light.text.className : dark.text.className} content-body `}
            dangerouslySetInnerHTML={{ __html: markup }}></Content>
        </Content> 
        </>
        
    )
}