import React from 'react';
import DeleteNoteButton from '../buttons/DeleteNoteButton';
import EditNoteButton from '../buttons/EditNoteButton';

export default function EditorToolbar() {

    return (
        <div className="field is-grouped is-justify-content-flex-end">
            <p className="control">
                <EditNoteButton />
            </p>
            <p className="control">
                <DeleteNoteButton />
            </p>
        </div>
    )
}