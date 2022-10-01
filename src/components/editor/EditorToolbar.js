import React, { useContext, useState } from 'react';
import { NotesContext } from '../../context/NotesProvider';
import DeleteNoteButton from '../buttons/DeleteNoteButton';
import EditNoteButton from '../buttons/EditNoteButton';
import HelpButtonAndModal from '../buttons/HelpButtonAndModal';

export default function EditorToolbar() {

    const { selected } = useContext(NotesContext);

    return (
        <div className="is-flex is-flex-row is-justify-content-space-between mb-6 ">
            <div className="is-justify-content-flex-start">
                <HelpButtonAndModal />
            </div>
            <div className="field is-grouped is-justify-content-flex-end">
                <p className="control">
                    <EditNoteButton />
                </p>
                <p className="control">
                    <DeleteNoteButton id={selected.id} />
                </p>
            </div>
        </div>
       
    )
}