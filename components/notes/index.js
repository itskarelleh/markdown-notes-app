import React, { useContext } from "react";
import CreatePostButton from "../inputs/buttons/CreatePostButton";
import { PostsContext } from "@/context/PostsProvider";

const NoteSummary = ({ data }) => {
  return (
    <>
      <div key={`note-${data.id}`}>
        <div>
          <h2
            style={{ display: "inline" }}
            className={`note-summary-title text-sm`}
          >
            {data.title}
          </h2>
        </div>

        <small style={{ marginBottom: "1rem" }} className={`date-timestamp`}>
          {data.created_at}
        </small>
      </div>
    </>
  );
};

const NotesList = () => {
  const { notes, getNote } = useContext(PostsContext);

  return (
    <div
      id="notes-init"
      className={`m-0 mt-4 p-4 flex-col is-justify-content-center is-align-content-center`}
    >
      <div
        className={`flex is-align-self-center flex-col p-4
            is-justify-content-center is-align-items-center`}
      >
        <div
          id="create-btn-init"
          style={{ width: "100%" }}
          className="flex-row is-justify-content-flex-end mr-5"
        >
          <CreatePostButton justifyContent={"flex-end"} />
        </div>
        <h1>Welcome</h1>
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
  return (
    <div
      id="notes-init"
      className={`m-0 p-4 flex-col is-justify-content-center is-align-content-center`}
      style={{ height: "100%" }}
    >
      <div className="flex is-align-self-center flex-col is-justify-content-center is-align-items-center">
        <h2 weight="semibold">No Notes Yet.</h2>
        <CreatePostButton />
      </div>
    </div>
  );
};

export { NoNotesDetected, NoteSummary, NotesList };
