import React, { useContext,  useEffect,  useState } from 'react';
import { NotesContext, EditorContext } from '../../context';
import { NoNotesDetected } from '../notes';
import { rawMarkup } from '../../utils';
import { Box, Block, Button, Content, Container, Columns } from 'react-bulma-components';
import { DeleteNoteButton, EditNoteButton } from '../inputs';

const EditorToolbar = () => {

    return (
        <Block display='flex' justifyContent='space-between' alignItems='center' style={{ width: '20%', height: '100%' }}>
            <EditNoteButton /> <DeleteNoteButton />
        </Block>
    )
}

const MarkDownEditor = () => {
    
    const { currentContent,  changeCurrentContent } = useContext(EditorContext);

    return (
        <>
        <textarea style={{ height: '100vh' }} 
        className="textarea has-fixed-size is-fullheight"
        value={currentContent} 
        onInput={changeCurrentContent}>
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
    const { isTextView, toggleTextView, setCurrentContent } = useContext(EditorContext);

    const [ prev, setPrev ] = useState(selected);
    const [ isMobile, setIsMobile ] = useState(false);
    const [ editorIsShown, setEditorIsShown ] = useState(true);
    const [ textHtmlIsShown, setTextHtmlIsShown ] = useState(false);

    useEffect(() => {
        if(selected.id !== prev.id) {
            setPrev(selected);
            setCurrentContent(selected);
        }
    }, [selected])

    useEffect(() => {
        if(window.innerWidth < 1024) {
            setIsMobile(true);
        } else setIsMobile(false);
    }, []);

    //used for toggling the editor and the html/textview columns 
    //when the user is viewing the app on a mobile or smaller screen
    const ToggleEditorView = () => {

        if(window.innerWidth <= 1024) {
            setIsMobile(true);

            return (
                <>
                    Viewing { editorIsShown ? 'Text/HTML' : 'Markdown'}
                    <Button onClick={() => {
                        setEditorIsShown(!editorIsShown);
                        setTextHtmlIsShown(!textHtmlIsShown);
                    }}>
                        {editorIsShown ? <ion-icon name="text-outline"></ion-icon> : <ion-icon name="logo-markdown"></ion-icon> }
                    </Button>
                </>
            )
        } else {
            setIsMobile(false);
        }
        return null;
    }

    if(notes.length === 0) {
        return <NoNotesDetected />
    }

    return (
        <Container>
            <Block display="flex" justifyContent="end" style={{ width: "100%"}}>
                {isMobile ? <ToggleEditorView /> : null  }
            </Block>
            <Columns tablet>
                <Columns.Column className={isMobile &&  !editorIsShown ? 'is-hidden-mobile' : ''}>
                    <Box backgroundColor='white'>
                        <MarkDownEditor />            
                    </Box>
                </Columns.Column>
                <Columns.Column className={isMobile &&  !textHtmlIsShown ? 'is-hidden-mobile' : ''}>
                    <Box backgroundColor='white' display='flex' flexDirection='column'>
                        <Button className="is-align-self-flex-end"  
                        title={`Click to see in ${isTextView ? "Text" : "HTML"}`} 
                        size="small" onClick={toggleTextView}>{ isTextView ? "Text" : "HTML"}</Button>
                        <HtmlAndTextView /> 
                    </Box>
                </Columns.Column>
            </Columns>
        </Container>
    )
};

export { Editor, EditorToolbar }
 