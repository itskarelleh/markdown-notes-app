import React, { useState, useEffect } from 'react';

const NotesContext = React.createContext();

function NotesProvider({ children }) {

    const [ notes, setNotes ] = useState(JSON.parse(localStorage.getItem('notes')));

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const addNewNote = () => setNotes(prev => [...prev, { title: 'Untitled', content: 'empty.'}]);

    return( 
    <NotesContext.Provider value={{notes, addNewNote }}>
        {children}
    </NotesContext.Provider>)
}


export { NotesContext, NotesProvider }