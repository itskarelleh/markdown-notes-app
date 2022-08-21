import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NotesContext = React.createContext();
const EditorContext = React.createContext();

function NotesProvider({ children }) {

    const [ notes, setNotes ] = useState(JSON.parse(localStorage.getItem('notes') || '[]'));
    const [ selected, setSelected ] = useState(JSON.parse(localStorage.getItem('selected') || '{}'));

    useEffect(() => {
        setNotes(JSON.parse(localStorage.getItem('notes')));
        setSelected(JSON.parse(localStorage.getItem('selected')));
    }, []);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    useEffect(() => {
        localStorage.setItem('selected', JSON.stringify(selected));
    }, [selected])
    
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
    }
 
    function editNote(e) {
        // setNotes(prev => prev.filter(note => note.id === id));
        setSelected(e.target.value);

        setNotes(notes.map(note => {
            if(note.id === selected.id) {
                return {...note, content: selected.content, title: selected.title.split('\n')[0] };
            }
            return note;
        }),
        );
    }
    
    function deleteNote(id) {
        setNotes(prev => prev.filter(note => note.id !== id));
    }

    return( 
    <NotesContext.Provider value={{ notes, selected, getNote, createNote, editNote, deleteNote }}>
        {children}
    </NotesContext.Provider>)
}

function EditorProvider({ children }) {
    
    // const [ selected, setSelected ] = useState(JSON.parse(localStorage.getItem('selected') || '{}'));
    const [ isAutosave, setIsAutosave ] = useState(false);
    const [ isTextView, setIsTextView ] = useState(false);
    const [ currentContent, setCurrentContent ] = useState("");

    // useEffect(() => {
    //     setSelected(JSON.parse(localStorage.getItem('selected')));
    // }, []);

    //  useEffect(() => {
    //     localStorage.setItem('selected', JSON.stringify(selected));
    // }, [selected]);
    

    function changeCurrentContent(e) {
        setCurrentContent(e.target.value);
    }
    function toggleAutosave() {
        setIsAutosave(prev => !prev);
    }

    function toggleTextView() {
        setIsTextView(prev => !prev);
    }

    return (
        <EditorContext.Provider value={{ isAutosave, isTextView, currentContent, toggleAutosave, toggleTextView, changeCurrentContent, setCurrentContent }}>
            {children}
        </EditorContext.Provider>
    )
}


export { NotesContext, EditorContext, NotesProvider, EditorProvider  }