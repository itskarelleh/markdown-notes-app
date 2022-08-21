import React, { useContext,  useEffect,  useState } from 'react';
import { NotesContext, EditorContext } from '../../context';
import { NoNotesDetected } from './Notes';
import { rawMarkup } from '../../utils';
import { Box, Block, Button, Content, Container, Columns } from 'react-bulma-components';
import { DeleteNoteButton, EditNoteButton } from './inputs';

// const { isAutosave, toggleAutosave
const EditorToolbar = () => {
    const { isTextView, toggleTextView } = useContext(EditorContext);

    return (
        <Container className="is-flex is-flex-direction-row is-justify-content-center">
            <Block className="is-inherit">
                <EditNoteButton /> <DeleteNoteButton />
            </Block>
            <Block>
                <Button onClick={toggleTextView}>{ isTextView ? "Text" : "HTML"}</Button>
            </Block>
        </Container>
    )
    
}

const MarkDownEditor = () => {
    
    const { currentContent,  changeCurrentContent } = useContext(EditorContext);

    return (
        <>
            <textarea style={{ height: '100vh' }} 
            className="textarea has-fixed-size is-fullheight"
            defaultValue={currentContent} onInput={changeCurrentContent}>
            </textarea>
        </>
    )
}

const HtmlAndTextView = () => {

    const { isTextView, currentContent } = useContext(EditorContext);
    const HtmlView = () => (
        <Content>
            <div dangerouslySetInnerHTML={{ __html: rawMarkup(currentContent) }}></div>
        </Content> 
    );

    const TextView = () => (
        <Block>
            {rawMarkup(currentContent)}
        </Block>
    );

    return (
        <>
        { isTextView ?  <TextView /> : <HtmlView />}
        </>
    )
}

export default function Editor() {

    const { notes, selected } = useContext(NotesContext);
    const { currentContent, setCurrentContent, changeCurrentContent } = useContext(EditorContext);
    const [prev, setPrev] = useState(null);

    useEffect(() => {
        setPrev(selected.id);
        setCurrentContent(selected.content);
        
    },[])

    if(notes.length === 0) {
        return <NoNotesDetected />
    }

    return (
        <>
        <Box>
            <EditorToolbar />
        </Box>
        <Columns tablet>
            <Columns.Column>
                <MarkDownEditor />            
            </Columns.Column>
            <Columns.Column>
                <HtmlAndTextView />
            </Columns.Column>
        </Columns>
        </>
    )
};

