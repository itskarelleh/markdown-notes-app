import React from 'react';
import CreateNoteButton from '../buttons/CreateNoteButton';
import { Block, Container, Heading } from 'react-bulma-components';

const NoteSummary = ({ data }) => {
    
    return (
        <>
            <Block key={`note-${data.id}`}>
                <Heading renderAs='h2' className="note-summary-title is-size-6">
                    {data.title}
                </Heading>
                <small className="text-is-black">{data.created_at}</small>
            </Block>
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

export { NoNotesDetected, NoteSummary }