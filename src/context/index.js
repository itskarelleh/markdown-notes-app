import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NotesContext = React.createContext();

function NotesProvider({ children }) {

    const [ notes, setNotes ] = useState(JSON.parse(localStorage.getItem('notes')));
    const [ selected, setSelected ] = useState(JSON.parse(localStorage.getItem('selected')));

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
        localStorage.setItem('selected', JSON.stringify(selected));

    }, [notes, selected]);

    function getNote(id) {
        var found = notes.find((note) => {
            return note.id === id;
        });

        setSelected(found);

        // console.log(found);
        console.log(selected);
    }

    function createNote() {
        setNotes(prev => [...prev, { 
            id: uuidv4(), 
            title: '# Untitled', 
            content: 'empty.',
            created_at: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
            }
        ]);
    }

    function editNote(id) {
        setNotes(prev => prev.filter(note => note.id === id));
    }
    
    function deleteNote(id) {
        setNotes(prev => prev.filter(note => note.id !== id));
    }

    return( 
    <NotesContext.Provider value={{ notes, selected, getNote, createNote, editNote, deleteNote }}>
        {children}
    </NotesContext.Provider>)
}


export { NotesContext, NotesProvider }