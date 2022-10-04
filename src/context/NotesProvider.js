import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as bulmaToast from 'bulma-toast';
import { dateFormatForNote } from '../utils';
import { db, transferLocalStorageToIndexedDB } from '../db';
import { useLiveQuery } from 'dexie-react-hooks';

const NotesContext = React.createContext();

function NotesProvider({ children }) {
    const [ notes, setNotes ] = useState([]);
    const [ selected, setSelected ] = useState({});

    useEffect(() => {
        if(localStorage.getItem('notes') != null) {
            transferLocalStorageToIndexedDB();

            const all = db.notes.toArray();

            setNotes(all);

            console.log("notes" + all);
        }
    });

    //create
    async function createNote() {
        try {
            var newNote = {
                id: uuidv4(), 
                title: "Untitled",
                content: "",
                created_at: dateFormatForNote,
                updated_at: dateFormatForNote
            }

            await db.notes.add(newNote);
            // setNotes(prev => [...prev, newNote ]);
            // setSelected(newNote);
        } catch(err) {
            console.error({ message: err });
            bulmaToast.toast({ message: err, type: 'is-danger'});
        }
    }

    async function getAllNotes() {

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

    //update
    function handleContentChange(e) {
        var c = e.target.value;

        setSelected(prevState => ({ ...prevState, content: c, updated_at: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }));
        setNotes(notes.map((note) => {
            if(note.id === selected.id) return {...note, content: c};

            return note;
        }));    
    } 

    function handleTitleChange(e) {
        var t = e.target.value;

        setSelected(prevState => ({ ...prevState, title: t, updated_at: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }));
        setNotes(notes.map((note) => {
            if(note.id === selected.id) return {...note, title: t};
            return note;
        }));    

    } 
    
    //delete
    function deleteNote(id) {

        var newNotes = notes.filter((note) => note.id !== id);
    
        try {
            setSelected({});
            setNotes(newNotes);
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