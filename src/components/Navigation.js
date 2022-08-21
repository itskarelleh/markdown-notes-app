import React, { useContext } from 'react';
import ToggleMenu from './ToggleMenu';
import { Heading, Navbar } from 'react-bulma-components';
import { NotesContext } from '../context';
import { rawMarkup } from '../utils';
export default function Navigation() {
    
    const { selected } = useContext(NotesContext);

    const selectedNote = `${selected.title} - ${selected.created_at}`
    
    return (
        <Navbar fixed='top'>
            <Navbar.Container flexDirection='row' flexWrap='wrap' justifyContent='center' className="is-flex is-fullwidth is-fluid">
            <Navbar.Brand>
                <ToggleMenu />
                <Heading mx={5} renderAs='h1'>Notes</Heading>
            </Navbar.Brand>
                {!selected || selected === undefined ? null : <Heading alignItems="center" className="is-flex" size="6" renderAs="h6"  dangerouslySetInnerHTML={{ __html: rawMarkup(selectedNote) }}></Heading> }
            </Navbar.Container>
        </Navbar>
    )
}