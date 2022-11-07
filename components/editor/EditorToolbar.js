import React, { useContext } from "react";
import { PostsContext } from "@/context/PostsProvider";
import BackButton from "../inputs/buttons/BackButton";
import DeleteNoteButton from "../inputs/buttons/DeleteNoteButton";
import EditNoteButton from "../inputs/buttons/EditNoteButton";
import HelpButtonAndModal from "../inputs/buttons/HelpButtonAndModal";

export default function EditorToolbar() {
  const { selected } = useContext(PostsContext);

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
