import React, { useContext,  useState } from 'react';
import { NotesContext } from '../../context';
import { NoNotesDetected } from './Notes';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { Block, Content, Button, Columns } from 'react-bulma-components';

const rawMarkup = (data) => {
    let raw = DOMPurify.sanitize(marked.parse(data));
    return raw;
}

const MarkDownEditor = () => {
    const { selected, editNote } = useContext(NotesContext);
    
    return (
        <textarea onInput={() => editNote(selected.id)}>{selected.content}</textarea>
    )
}

const HtmlAndTextView = () => {
    
    const { selected } = useContext(NotesContext);
    const [ toggle, setToggle ] = useState(false);

    const HtmlView = () => (
        <Content>
            <div dangerouslySetInnerHTML={{ __html: rawMarkup(selected.content) }}></div>
        </Content> 
    );

    const TextView = () => (
        <Block>
            {rawMarkup(selected.content)}
        </Block>
    );

    return (
        <>
        <Button onClick={() => setToggle(prev => !prev)}>{toggle ? "Text" : "HTML"}</Button>
        {toggle ?  <TextView /> : <HtmlView />}
        </>
    )
}


export default function Editor() {
    const { notes } = useContext(NotesContext);

    if(notes.length === 0) {
        return <NoNotesDetected />
    }

    return (
        <Columns tablet>
            <Columns.Column>
                <MarkDownEditor />            
            </Columns.Column>
            <Columns.Column>
                <HtmlAndTextView />
            </Columns.Column>
        </Columns>
    )
};

