import React, { useContext } from "react";
import { EditorContext } from "@/context/EditorProvider";

const EditNoteButton = () => {
  const { isEditing, toggleEditing } = useContext(EditorContext);

  return (
    <button
      size="small"
      className="is-success is-small button is-rounded"
      color={isEditing ? "warning" : "success"}
      title={isEditing ? "Edit this note" : "Finish editing"}
      onClick={toggleEditing}
    >
      {isEditing ? (
        <ion-icon name="create-outline"></ion-icon>
      ) : (
        <ion-icon name="checkmark-outline"></ion-icon>
      )}
    </button>
  );
};

export default EditNoteButton;
