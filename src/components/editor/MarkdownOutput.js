import React, { useState, useContext, useEffect } from "react";
import { Content, Block, Heading } from 'react-bulma-components';
import { NotesContext } from "../../context/NotesProvider";
import { ThemeContext } from "../../context/ThemeProvider";
import { rawMarkup } from "../../utils";

export default function MarkdownOutput() {

    const { selected } = useContext(NotesContext);
    const { theme } = useContext(ThemeContext);
    const [ markup, setMarkup ] = useState("");

    useEffect(() => {
        setMarkup(rawMarkup(selected.content));
    }, [selected.content]);

    return (
        <>
        <Content className="content-spacing">
            <Heading className={theme.text.className }>
                {selected.title}
            </Heading>
            {selected.updated_at  && <Block className={theme.text.className }>
                {selected.updated_at}
            </Block>}
            <Content className={`${theme.text.className} content-body`}
            dangerouslySetInnerHTML={{ __html: markup }}></Content>
        </Content> 
        </>
        
    )
}