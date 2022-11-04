import React, { useState, useContext } from "react";
import { NotesContext } from "@/context/NotesProvider";
import Modal from "../custom-bulma/Modal";
import CreateNoteButton from "../inputs/buttons/CreateNoteButton";
import { UserContext } from "@/context/UserProvider";
import ThemeToggleButton from "../inputs/buttons/ThemeToggleButton";

export default function ToggleMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { userProfile } = useContext(UserContext);

  const links = [
    { label: "Overview", url: "/overview" },
    { label: "Documents", url: "/documents" },
  ];
  return (
    <>
      <button
        className={`button side-menu-btn text-base}`}
        style={{ border: "none", background: "none" }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {!isOpen ? (
          <ion-icon name="menu-outline"></ion-icon>
        ) : (
          <ion-icon name="close-outline"></ion-icon>
        )}
      </button>
      <Modal open={isOpen}>
        <div className={`modal-menu`}>
          <div>
            <p>Welcome {userProfile.displayName}</p>
          </div>
          <aside
            className="menu"
            style={{ marginTop: "5rem", padding: "0 1rem" }}
          >
            <CreateNoteButton label="Create new note" />
            <ThemeToggleButton />
            <p className="menu-label">Notes</p>
            <ul className="menu-list mt-5 note-summaries">
              {links &&
                links.map((link) => (
                  <li
                    key={link.id}
                    onClick={() => {
                      setIsOpen((prev) => !prev);
                    }}
                  ></li>
                ))}
            </ul>
          </aside>
        </div>
      </Modal>
    </>
  );
}
