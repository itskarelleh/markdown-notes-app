import React, { useContext } from 'react';
import CreateNoteButton from '../buttons/CreateNoteButton';
import { Block, Container, Heading } from 'react-bulma-components';
import { ThemeContext, dark, light } from '../../context/ThemeProvider';

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

const NoNotesDetected = () => {
    
    const { toggle } = useContext(ThemeContext);

    return (
    <div id="no-notes" className={`m-0 p-4 ${!toggle ? light.background.className : dark.background.className } is-widescreen is-flex-direction-column is-justify-content-center is-align-content-center`} max>
        <Block className="is-flex is-align-self-center is-flex-direction-column is-justify-content-center is-align-items-center">
            <Heading renderAs="h2" weight="semibold">No Notes Yet.</Heading>
            <CreateNoteButton />
        </Block>
    </div>
    );
}

export { NoNotesDetected, NoteSummary }