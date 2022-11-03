import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import * as bulmaToast from "bulma-toast";
import { dateFormatForNote } from "../utils";
import { db, transferLocalStorageToIndexedDB } from "@/db/indexedDB";
import { useLiveQuery } from "dexie-react-hooks";

const NotesContext = React.createContext();

/*
11/2/22 - The notes provider is also used for getting documents.
Documents - the main post type in this app. They were originally called notes in version 1
Now in v2 development, notes a simply used as reminders while documents are the main post type for
users to write documents and share them with other users for collaboration as well as for publishing
The name for the NotesContext and the NotesProvider may change in the future but for now, these
are left unchanged
*/

function NotesProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    if (localStorage.getItem("notes2") != null) {
      transferLocalStorageToIndexedDB();

      const all = db.notes2.toArray();

      setNotes(all);
    }
  }, [notes]);

  useEffect(() => {
    db.notes2.put(selected);
  }, [selected]);

  useLiveQuery(async () => {
    const notesList = await db.notes2.toArray();

    setNotes(() => {
      return notesList;
    });
  }, []);

  //read
  function getNote(id) {
    // try {
    setSelected(
      notes.find((note) => {
        return note.id === id;
      })
    );
    // } catch (err) {
    //   bulmaToast({ message: err, type: "is-danger" });
    // }
  }

  //create
  async function createNote() {
    try {
      const newNote = {
        id: uuidv4(),
        title: "Untitled",
        content: "",
        created_at: dateFormatForNote,
        updated_at: dateFormatForNote,
      };

      await db.notes.add(newNote);
      setSelected(newNote);
    } catch (err) {
      console.error({ message: err });
      bulmaToast.toast({ message: err, type: "is-danger" });
    }
  }

  function updateNote(e) {
    // try {
    setSelected((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
      updated_at: dateFormatForNote,
    }));

    setNotes(
      notes2.map((note) => {
        if (note.id === selected.id)
          return {
            ...note,
            [e.target.id]: e.target.value,
            updated_at: dateFormatForNote,
          };
        return note;
      })
    );
    // } catch(err) {
    // console.error(err);
    // } finally {
    // bulmaToast.toast({ type: "is-success", message: "Updated!" })
    // }
  }
  //delete
  async function deleteNote(id) {
    const newNotes = notes2.filter((note) => note.id !== id);

    try {
      setSelected({});
      setNotes(newNotes);
      await db.notes2.delete(id);
    } catch (err) {
      bulmaToast.toast({ message: err, type: "is-danger" });
    } finally {
      bulmaToast.toast({ message: "Note deleted", type: "is-success" });
    }
  }

  //used for the back button when editing a note and the user wants to return to the main menu
  const clearSelected = async () => setSelected({});

  // async function deleteMultiple(ids) {
  //     db.notes.bulkDelete(ids);
  //     setNotes()
  // }

  return (
    <NotesContext.Provider
      value={{
        notes,
        selected,
        updateNote,
        getNote,
        createNote,
        deleteNote,
        clearSelected,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export { NotesContext, NotesProvider };
