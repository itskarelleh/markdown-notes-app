import React from 'react';
import { CreateNoteButton } from './Notes';

export default function Navigation() {
    return(
        <nav>
            <div>
                <h1>Notes</h1>
            </div>
            <div>
                <CreateNoteButton />
            </div>
        </nav>
        )
}