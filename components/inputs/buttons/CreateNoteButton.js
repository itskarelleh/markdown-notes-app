import React, { useContext } from "react";
import { NotesContext } from "@/context/NotesProvider";

const CreateNoteButton = ({ label, justifyContent, postType }) => {
  const { createNote } = useContext(NotesContext);

  const justify = justifyContent ? justifyContent : "flex-start";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: justify,
      }}
    >
      <button
        color="success"
        className="is-rounded"
        onClick={() => {
          createNote();
        }}
      >
        +
      </button>
      {label && <p className="menu-label ml-3">{label}</p>}
    </div>
  );
};

export default CreateNoteButton;
