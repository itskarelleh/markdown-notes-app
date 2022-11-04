import React, { useContext } from "react";
import { NotesContext } from "@/context/NotesProvider";
import BackButton from "../inputs/buttonsbuttons/buttons/buttons/buttons/BackButton";
import DeleteNoteButton from "../inputs/buttonsbuttons/DeleteNoteButton";
import EditNoteButton from "../inputs/buttonsbuttons/EditNoteButton";
import HelpButtonAndModal from "../inputs/buttonsbuttons/HelpButtonAndModal";

export default function EditorToolbar() {
  const { selected } = useContext(NotesContext);

  return (
    <div
      id="options"
      className="flex flex-row is-justify-content-space-between"
    >
      <div className="is-justify-content-flex-start">
        <BackButton />
      </div>
      <div className="field is-grouped is-justify-content-flex-end">
        <p className="control">
          <HelpButtonAndModal />
        </p>
        <p className="control">
          <EditNoteButton />
        </p>
        <p className="control">
          <DeleteNoteButton id={selected.id} />
        </p>
      </div>
    </div>
  );
}
