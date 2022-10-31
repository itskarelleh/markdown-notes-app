import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as bulmaToast from 'bulma-toast';
import { dateFormatForNote } from '../utils';
import { db, transferLocalStorageToIndexedDB } from '@/db/indexedDB';
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
        }
    }, [notes]);

    useEffect(() => {
        db.notes.put(selected);
    }, [selected]);

    useLiveQuery(async () => {
        const notesList = await db.notes.toArray();

        setNotes(() => { return notesList });
    }, []);

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
            setSelected(newNote);
        } catch(err) {
            console.error({ message: err });
            bulmaToast.toast({ message: err, type: 'is-danger'});
        }
    }

    function updateNote(e) {
        // try {
            setSelected(prevState => ({ ...prevState, [e.target.id]: e.target.value, updated_at: dateFormatForNote }));
        
            setNotes(notes.map((note) => {
                if(note.id === selected.id) return {...note, [e.target.id]: e.target.value, updated_at: dateFormatForNote};
                return note;
            }));
        // } catch(err) {
            // console.error(err);
        // } finally {
            // bulmaToast.toast({ type: "is-success", message: "Updated!" })
        // }
    }
    //delete
    async function deleteNote(id) {

        var newNotes = notes.filter((note) => note.id !== id);
    
        try {
            setSelected({});
            setNotes(newNotes);
            await db.notes.delete(id);
        } catch(err) {
            bulmaToast.toast({ message: err, type: 'is-danger'})
        } finally {
            bulmaToast.toast({ message: "Note deleted", type: 'is-success'})
        }
    }

    //used for the back button when editing a note and the user wants to return to the main menu
    const clearSelected = async () => setSelected({});

    // async function deleteMultiple(ids) {
    //     db.notes.bulkDelete(ids);
    //     setNotes()
    // }

    return ( 
        <NotesContext.Provider value={{ notes, selected, updateNote, getNote, 
        createNote, deleteNote, clearSelected }}>
            {children}
        </NotesContext.Provider>
    )
}

export { NotesContext, NotesProvider }