import React, { useContext } from 'react';
import { NotesContext } from '../../context';
import { CreateNoteButton } from './inputs';
import { Block, Container, Heading } from 'react-bulma-components';

const NoteSummary = ({ data }) => {
    const { getNote } = useContext(NotesContext);

    return (
        <>
            <div onClick={() => getNote(data.id)} key={`note-${data.id}`}>
                <h1>{data.title}</h1>
                <p>{data.created_at}</p>
            </div>
        </>
    )
}

const NoNotesDetected = () => (
    <Container id="no-notes" className="is-widescreen is-flex-direction-column is-justify-content-center is-align-content-center" max>
        <Block className="is-flex is-align-self-center is-flex-direction-column is-justify-content-center is-align-items-center">
            <Heading renderAs="h2" weight="semibold">No Notes Yet.</Heading>
            <CreateNoteButton />
        </Block>
    </Container>
);

const NotesList = () => {
    const { notes } = useContext(NotesContext);

    return (<>
    {notes && notes.map((note) => (
        <NoteSummary data={note} />
    ))}
    </>)
}

export { NotesList, NoNotesDetected }