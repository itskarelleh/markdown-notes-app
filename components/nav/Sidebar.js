import React from "react";
import { motion } from "framer-motion";
// This sidebar is toggleable.It is hidden on mobile by default
// and visible on desktop by default
// The user will be able to access their notes/markdown documents as well as their
//
export default function Sidebar({ ...props }) {
  return (
    <motion.aside {...props}>
      <div>
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
    </motion.aside>
  );
}
