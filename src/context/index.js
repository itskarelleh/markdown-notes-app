import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
const NotesContext = React.createContext();

function NotesProvider({ children }) {

    const [ notes, setNotes ] = useState(JSON.parse(localStorage.getItem('notes')));

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    function addNewNote() {
        setNotes(prev => [...prev, { 
            id: uuidv4(), 
            title: '# Untitled', 
            content: 'empty.'}
        ]);
    }
    
    function deleteNote(id) {
        setNotes(prev => prev.filter(note => note.id !== id));
    }

    return( 
    <NotesContext.Provider value={{notes, addNewNote, deleteNote }}>
        {children}
    </NotesContext.Provider>)
}


export { NotesContext, NotesProvider }