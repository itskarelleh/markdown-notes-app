import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as bulmaToast from 'bulma-toast';
import { dateFormatForNote } from '../utils';

const NotesContext = React.createContext();

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
    }, [selected]);

    function handleContentChange(e) {
        var c = e.target.value;

        setSelected(prevState => ({ ...prevState, content: c, updated_at: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }));
        setNotes(notes.map((note) => {
            if(note.id === selected.id) return {...note, content: c};

            return note;
        }));    
    } 

    function handleTitleChange(e) {
        var t = e.target.innerHTML;

        window.getSelection();

        setSelected(prevState => ({ ...prevState, title: t, updated_at: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }));
        setNotes(notes.map((note) => {
            if(note.id === selected.id) return {...note, title: t};
            return note;
        }));    

    } 

    function createNote() {
        var newNote = {
            id: uuidv4(), 
            title: "Untitled",
            content: "# Untitled \n empty.",
            created_at: dateFormatForNote
        }

        try {
            setNotes(prev => [...prev, newNote ]);
            setSelected(newNote);
        } catch(err) {
            console.log({message: err});
            bulmaToast.toast({ message: err, type: 'is-danger'});
        }
    }

    //read
    function getNote(id) {
        try {
            setSelected(notes.find((note) => {
                return note.id === id;
            }));
        } catch(err) {
            bulmaToast({ message: err, type: 'is-danger'});
        }
    }
    
    //delete
    function deleteNote(id) {
        try {
            setNotes((curr) => {
                if(notes.length === 1) {return [];}
                else {
                    curr.filter(note => {return note.id !== id});
                }
            });

            if(notes.length === 0) {
                setSelected(() => {
                    return {};
                });
            }
            else {
                setSelected(notes[notes.length-1]);
            }
        } catch(err) {
            bulmaToast.toast({ message: err, type: 'is-danger'})
        } finally {
           
            bulmaToast.toast({ message: "Note deleted", type: 'is-success'})
        }
    }

    

    return ( 
        <NotesContext.Provider value={{ notes, selected, handleContentChange, handleTitleChange, getNote, 
        createNote, deleteNote }}>
            {children}
        </NotesContext.Provider>
    )
}


export { NotesContext, NotesProvider }