import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import usePrevious from '../hooks/usePrevious';
import * as bulmaToast from 'bulma-toast';

const NotesContext = React.createContext();
const EditorContext = React.createContext();

var dateFormatForNote = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});

function NotesProvider({ children }) {

    const [ notes, setNotes ] = useState(JSON.parse(localStorage.getItem('notes') || '[]'));
    const [ selected, setSelected ] = useState(JSON.parse(localStorage.getItem('selected') || '{}'));
    const [ currentContent, setCurrentContent ] = useState("");
    const prevSelected = usePrevious(selected);
    
    useEffect(() => {
        setNotes(JSON.parse(localStorage.getItem('notes')));
        setSelected(JSON.parse(localStorage.getItem('selected')));
        setCurrentContent(selected.content);
    }, []);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    useEffect(() => {
        localStorage.setItem('selected', JSON.stringify(selected));
    }, [selected])


    //used to handle change for the content key:value of the selected state
    //saves changes automatically
    function handleChangeAutosave(e, isAutosave) {
        var c = e.target.value;

        if(isAutosave) {
            setSelected(prevState => ({ ...prevState, content: c, updated_at: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }));
            setNotes(notes.map((note) => {
                if(note.id === selected.id) return {...note, content: c};

                return note;
            }));
            
        } else {
            setCurrentContent(c);
        }
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
            setCurrentContent(selected.content);
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
            setCurrentContent(selected.content);
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
 
    //used for the manual save button
    function updateNoteContent() {
        let updatedNotes = notes.map((note) => {
            if(note.id === selected.id) {
                return { ...note, content: currentContent };
            }
            return note;
        });

        try {
            setSelected(prevState => ({ ...prevState, content: currentContent, updated_at: dateFormatForNote }))
            setNotes(updatedNotes)
           } catch(err) {
                bulmaToast.toast({ message: err, type: 'is-danger'})
           } finally {
            bulmaToast.toast({ message: "Successfully updated Content", type: 'is-success'})
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
                setSelected({});
            }
            else {
                setSelected(notes[notes.length-1]);
            }
            bulmaToast.toast({ message: "Note deleted", type: 'is-success'})
        }
    }

    return( 
    <NotesContext.Provider value={{ notes, selected, prevSelected, currentContent, handleChangeAutosave, getNote, createNote, updateNoteContent, updateNoteTitle, deleteNote }}>
        {children}
    </NotesContext.Provider>)
}

function EditorProvider({ children }) {

    const [ isAutosave, setIsAutosave ] = useState(JSON.parse(localStorage.getItem('isAutosave') || 'false'));
    const [ isTextView, setIsTextView ] = useState(false);
    const [ isMobile, setIsMobile ] = useState(false);
    const [ toggleColumns, setToggleColums ] = useState(false);

    useEffect(() => {
        setIsAutosave(JSON.parse(localStorage.getItem('isAutosave')));
    }, [])

    useEffect(() => {
        localStorage.setItem('isAutosave', JSON.stringify(isAutosave));
    }, [isAutosave]);

    useEffect(() => setIsMobile(prev => !prev));

    function toggleColumnsForMobile() {
        setToggleColums(prev => !prev);
    }

    function toggleMobile() {
        setIsMobile(prev => !prev);
    }

    function toggleAutosave() {
        setIsAutosave(!isAutosave);
    }

    function toggleTextView() {
        setIsTextView(prev => !prev);
    }

    return (
        <EditorContext.Provider value={{ isAutosave, isTextView,  isMobile, toggleColumns,
        toggleAutosave, toggleTextView, toggleMobile, toggleColumnsForMobile }}>
            {children}
        </EditorContext.Provider>
    )
}


export { NotesContext, EditorContext, NotesProvider, EditorProvider }