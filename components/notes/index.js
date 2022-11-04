import React, { useContext } from "react";
import CreateNoteButton from "../inputs/CreateNoteButton";
import { ThemeContext } from "../../context/ThemeProvider";
import { NotesContext } from "../../context/NotesProvider";

const NoteSummary = ({ data }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div key={`note-${data.id}`}>
        <div>
          <h2
            style={{ display: "inline" }}
            className={`note-summary-title text-sm ${theme.text.classStyle}`}
          >
            {data.title}
          </h2>
        </div>

        <small
          style={{ marginBottom: "1rem" }}
          className={`${theme.text.classStyle} date-timestamp`}
        >
          {data.created_at}
        </small>
      </div>
    </>
  );
};

const NotesList = () => {
  const { notes, getNote } = useContext(NotesContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      id="notes-init"
      className={`m-0 mt-4 p-4 ${theme.background.classStyle} 
        is-widescreen flex-col is-justify-content-center is-align-content-center`}
    >
      <div
        className={`${theme.panel.classStyle}  
            flex is-align-self-center flex-col p-4
            is-justify-content-center is-align-items-center`}
      >
        <div
          id="create-btn-init"
          style={{ width: "100%" }}
          className="flex-row is-justify-content-flex-end mr-5"
        >
          <CreateNoteButton justifyContent={"flex-end"} />
        </div>
        <h1 className={`${theme.text.classStyle} `}>Welcome</h1>
        <div
          style={{ width: "100%", padding: "0rem 2rem", overflowY: "scroll" }}
        >
          <ul className="note-summaries">
            {notes &&
              notes.map((note, index) => (
                <li
                  key={index}
                  className="menu-item"
                  onClick={() => getNote(note.id)}
                >
                  <NoteSummary data={note} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const NoNotesDetected = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      id="notes-init"
      className={`m-0 p-4 ${theme.background.classStyle} } 
    is-widescreen flex-col is-justify-content-center is-align-content-center`}
      style={{ height: "100%" }}
    >
      <div className="flex is-align-self-center flex-col is-justify-content-center is-align-items-center">
        <h2 className={`${theme.text.classStyle}`} weight="semibold">
          No Notes Yet.
        </h2>
        <CreateNoteButton />
      </div>
    </div>
  );
};

export { NoNotesDetected, NoteSummary, NotesList };
