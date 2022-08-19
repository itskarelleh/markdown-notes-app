import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NotesContext = React.createContext();

function NotesProvider({ children }) {

    // const [ notes, setNotes ] = useState([]);
    // const [ selected, setSelected ] = useState({});

    const [ notes, setNotes ] = useState(JSON.parse(localStorage.getItem('notes') || '[]'));
    const [ selected, setSelected ] = useState(JSON.parse(localStorage.getItem('selected') || '{}'));

    useEffect(() => {
        setNotes(JSON.parse(localStorage.getItem('notes')));
        setSelected(JSON.parse(localStorage.getItem('selected')));
    }, []);


    // useEffect(() => {
    //     localStorage.setItem('notes', JSON.stringify(notes));
    //     localStorage.setItem('selected', JSON.stringify(selected));
    // }, [notes, selected])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
        localStorage.setItem('selected', JSON.stringify(selected));
    }, [notes, selected]);

    
    function createNote() {
        var content = "# Untitled \n empty.";
        var newNote = {
            id: uuidv4(), 
            title: content.split('\n')[0], 
            content: content,
            created_at: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
        }
        setNotes(prev => [...prev, newNote ]);
        setSelected(newNote);
    }

    function getNote(id) {
        var found = notes.find((note) => {
            return note.id === id;
        });

        setSelected(found);

        console.log(selected);
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