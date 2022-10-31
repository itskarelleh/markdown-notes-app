import React, { useState, useContext } from "react";
import { Button, Menu } from "react-bulma-components";
import { NoteSummary } from "../notes";
import { NotesContext } from "../../context/NotesProvider";
import Modal from "../custom-bulma/Modal";
import CreateNoteButton from "../buttons/CreateNoteButton";
import { ThemeContext } from "@/context/ThemeProvider";
import { UserContext } from "@/context/UserProvider";

export default function ToggleMenu() {
  const { theme } = useContext(ThemeContext);
  const { notes, getNote } = useContext(NotesContext);
  const [isOpen, setIsOpen] = useState(false);
  const { userProfile } = useContext(UserContext);

  return (
    <>
      <Button
        className={`side-menu-btn is-size-5 
        ${theme.text.classStyle}`}
        style={{ border: "none", background: "none" }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {!isOpen ? (
          <ion-icon name="menu-outline"></ion-icon>
        ) : (
          <ion-icon name="close-outline"></ion-icon>
        )}
      </Button>
      <Modal open={isOpen}>
        <div className={`modal-menu ${theme.panel.classStyle}`}>
          <div>
            <p>Welcome {userProfile.displayName}</p>
          </div>
          <Menu style={{ marginTop: "5rem", padding: "0 1rem" }}>
            <CreateNoteButton label="Create new note" />
            <p className="menu-label">Notes</p>
            <ul className="mt-5 note-summaries">
              {notes &&
                notes.map((note) => (
                  <Menu.List.Item
                    className="mb-3 note-summary"
                    key={note.id}
                    onClick={() => {
                      getNote(note.id);
                      setIsOpen((prev) => !prev);
                    }}
                  >
                    <NoteSummary data={note} />
                  </Menu.List.Item>
                ))}
            </ul>
          </Menu>
        </div>
      </Modal>
    </>
  );
}
