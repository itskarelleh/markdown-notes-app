import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as bulmaToast from 'bulma-toast';
import { dateFormatForNote, starterContent } from '../utils';

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
    }, [selected]);

    function handleChange(e) {
        var c = e.target.value;

        setSelected(prevState => ({ ...prevState, content: c, updated_at: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }));
        setNotes(notes.map((note) => {
            if(note.id === selected.id) return {...note, content: c};

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

    //update
    function updateNoteTitle(title) {
       
       let updatedNotesArr;
       
        try {
        updatedNotesArr = notes.map(note => {
            if(note.id === selected.id) {
                return {...note, title: title}
            }

            return note;
        })

       } catch(err) {
            bulmaToast.toast({ message: err, type: 'is-danger'})
       } finally {
            setNotes(updatedNotesArr)
            setSelected(prev => ({...prev, title: title}));
            bulmaToast.toast({ message: "Successfully updated title", type: 'is-success'})
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

        } catch(err) {
            bulmaToast.toast({ message: err, type: 'is-danger'})
        } finally {
            if(notes.length === 0) {
                setSelected(() => {
                    return {};
                });
            }
            else {
                setSelected(notes[notes.length-1]);
            }
            bulmaToast.toast({ message: "Note deleted", type: 'is-success'})
        }
    }

    

    return ( 
        <NotesContext.Provider value={{ notes, selected,  handleChange, getNote, 
        createNote, updateNoteTitle, deleteNote }}>
            {children}
        </NotesContext.Provider>
    )
}

function EditorProvider({ children }) {

    const [ isTextView, setIsTextView ] = useState(false);
    const [ isMobile, setIsMobile ] = useState(false);
    const [ toggleColumns, setToggleColums ] = useState(false);


    
    function toggleColumnsForMobile() {
        setToggleColums(prev => !prev);
        console.log(toggleColumns);
    }

    function toggleMobile() {
        setIsMobile(prev => !prev);
    }

    function toggleTextView() {
        setIsTextView(prev => !prev);
    }

    // useEffect(() => {
    //     if(window.innerWidth < 768) toggleMobile();
    // }, []);

    return (
        <EditorContext.Provider value={{ isTextView,  isMobile, toggleColumns, 
        toggleTextView, toggleMobile, toggleColumnsForMobile }}>
            {children}
        </EditorContext.Provider>
    )
}


export { NotesContext, EditorContext, NotesProvider, EditorProvider }