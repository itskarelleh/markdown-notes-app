import React, { useContext } from 'react';
import CreateNoteButton from '../buttons/CreateNoteButton';
import { Block, Heading } from 'react-bulma-components';
import { ThemeContext, dark, light } from '../../context/ThemeProvider';
import { NotesContext } from '../../context/NotesProvider';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../db';

const NoteSummary = ({ data }) => {

    const { toggle } = useContext(ThemeContext);

    return (
        <>
            <Block key={`note-${data.id}`}>
                <Block>
                    <Heading renderAs='h2' style={{ display: 'inline'}}
                    className={`note-summary-title is-size-6 ${!toggle ? light.text.className : dark.text.className }`}>
                        {data.title}
                    </Heading>
                </Block>
               
                <small style={{ marginBottom: '1rem' }} className={`${!toggle ? light.text.className : dark.text.className } date-timestamp`}>
                    {data.created_at}
                </small>
            </Block>
        </>
    )
}

const NotesList = () => {

    const { notes, getNote } = useContext(NotesContext);
    const { toggle } = useContext(ThemeContext);

    return (
        <div id="notes-init" className={`m-0 p-4 ${!toggle ? light.background.className : dark.background.className } 
        is-widescreen is-flex-direction-column is-justify-content-center is-align-content-center`}>
            <Block className={`${!toggle ? light.panel.className : dark.panel.className} 
            is-flex is-align-self-center is-flex-direction-column p-4
            is-justify-content-center is-align-items-center`}>
                <div id="create-btn-init" 
                style={{ width: '100%' }}
                className="is-flex-direction-row is-justify-content-flex-end mr-5">
                    <CreateNoteButton justifyContent={"flex-end"} />
                </div>
                <Heading renderAs="h1" 
                className={`${!toggle ? light.text.className : dark.text.className}`}>
                    Welcome
                </Heading>
                <Block style={{ width: "100%", padding: "0rem 2rem", overflowY: "scroll"}}>
                    <ul className="note-summaries">
                    {notes && notes.map((note) => (
                        <li className="menu-item" onClick={() => getNote(note.id)}>
                            <NoteSummary data={note}  />
                        </li>
                    ))}
                    </ul>
                </Block>
            </Block>
        </div>
    )
}

const NoNotesDetected = () => {
    
    const { toggle } = useContext(ThemeContext);

    return (
    <div id="notes-init" className={`m-0 p-4 ${!toggle ? light.background.className : dark.background.className } 
    is-widescreen is-flex-direction-column is-justify-content-center is-align-content-center`}
    style={{ height: '100%' }}>
        <Block className="is-flex is-align-self-center is-flex-direction-column is-justify-content-center is-align-items-center">
            <Heading renderAs="h2" 
            className={`${!toggle ? light.text.className : dark.text.className}`}
            weight="semibold">No Notes Yet.</Heading>
            <CreateNoteButton />
        </Block>
    </div>
    );
}

export { NoNotesDetected, NoteSummary, NotesList }