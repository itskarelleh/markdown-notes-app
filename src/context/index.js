import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NotesContext = React.createContext();
const EditorContext = React.createContext();
// const ThemeContext = React.createContext();
// const UserContext = React.createContext();

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
        try {
            var content = "# Untitled \n empty.";
        
            var newNote = {
                id: uuidv4(), 
                title: content.split('\n')[0], 
                content: content,
                created_at: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
            }
    
            setNotes(prev => [...prev, newNote ]);
            setSelected(newNote);
        } catch(err) {
            console.log({message: err});
        }
    }

    function getNote(id) {
        try {
            console.log("getting note: " + id)
            var found = notes.find((note) => {
                return note.id === id;
            });
            console.log("found note: ");    
            setSelected(found);
        } catch(err) {
            console.log(err);
        }
        
    }
 
    function updateNote(content) {
        
            const updatedNote = selected;
            updateNote.content = content;
            //update selected object
            setSelected(updatedNote);
            //update notes array
            setNotes(notes.map(note => {
                if(note.id === selected.id) {
                    return {...note, updatedNote};
                }
                return note;
            }),
        );
    }
    // function updateNote(e) {
    //     setSelected(e.target.value);

    //     setNotes(notes.map(note => {
    //         if(note.id === selected.id) {
    //             return {...note, content: selected.content, title: selected.title.split('\n')[0]};
    //         }
    //         return note;
    //     }),
    //     );
    // }
    
    function deleteNote(id) {
        setNotes(prev => prev.filter(note => note.id !== id));
        
        if(notes.length >= 1 ) {
            setSelected(notes[notes.length-1]);
        }
        else {
            setSelected({}); 
        }
    }

    return( 
    <NotesContext.Provider value={{ notes, selected, getNote, createNote, updateNote, deleteNote }}>
        {children}
    </NotesContext.Provider>)
}

function EditorProvider({ children }) {

    const { selected } = useContext(NotesContext);
    
    const [ isAutosave, setIsAutosave ] = useState(false);
    const [ isTextView, setIsTextView ] = useState(false);
    const [ currentContent, setCurrentContent ] = useState("");

    useEffect(() => {
        setCurrentContent(selected.content);
    }, [selected])


    function resetEditorSettings() {
        setIsAutosave(false);
        setIsTextView(false);
    }

    function changeCurrentContent(e) {
        setCurrentContent(e.target.value);
    }

    function toggleAutosave() {
        setIsAutosave(!isAutosave);
    }

    function toggleTextView() {
        setIsTextView(prev => !prev);
    }

    return (
        <EditorContext.Provider value={{ isAutosave, isTextView, currentContent, 
        resetEditorSettings, toggleAutosave, toggleTextView, changeCurrentContent, setCurrentContent }}>
            {children}
        </EditorContext.Provider>
    )
}


// function ThemeProvider({ children }) {}
// function UserProvider({ children }) {}

export { NotesContext, EditorContext, NotesProvider, EditorProvider }