import React, { useContext } from 'react';
import ToggleMenu from './ToggleMenu';
import { Heading, Navbar, Block } from 'react-bulma-components';
import { NotesContext } from '../context';
import { rawMarkup } from '../utils';
import { EditorToolbar } from './editor';

export default function Navigation() {
    
    const { selected } = useContext(NotesContext);

    const selectedNote = `${selected.title} - ${selected.created_at}`;
    
    const SelectedNoteDisplay = () => (
        <Block>
            {!selected || selected === undefined ? null : <Heading style={{ height: '100%' }} 
                marginless alignItems="center" className="is-flex" size="6" renderAs="h6"  
                dangerouslySetInnerHTML={{ __html: rawMarkup(selectedNote) }}></Heading> }
        </Block>
    );

    return (
        <Navbar fixed='top'>
            <Navbar.Container flexDirection='row' flexWrap='wrap' justifyContent='space-between' 
            className="is-flex mx-5" style={{ width: '100%'}}>
            <Block display="flex" alignItems="center" style={{ height: '100%'}}>
                <ToggleMenu />
                <Navbar.Brand mx={5} flexDirection="column" className="is-flex" alignItems='start'>
                    <Heading className="my-0" renderAs='h1'>Notes</Heading>
                    <Heading className="my-0" renderAs='h6' size="6">Markdown Editor</Heading>
                </Navbar.Brand>
            </Block>
            <SelectedNoteDisplay />
            <EditorToolbar />
            </Navbar.Container>
        </Navbar>
    )
}