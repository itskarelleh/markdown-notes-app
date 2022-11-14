import React, { useState, useContext } from "react";
import { PostsContext } from "@/context/PostsProvider";
import Modal from "../../modal/Modal";

const DeleteNoteButton = ({ id, title }) => {
  const { deleteNote } = useContext(PostsContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        title={"Delete this note"}
        onClick={() => setIsOpen((prev) => !prev)}
        className="button is-danger is-small is-rounded"
      >
        <ion-icon name="trash-bin-outline"></ion-icon>
      </button>
      <Modal onClose={() => setIsOpen((prev) => !prev)} open={isOpen}>
        <div
          className={`box`}
        >
          <button
            className="delete"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="close"
          ></button>
          <div className="block">
            <h1
            >
              Deleting
            </h1>
            <h2>
              Are you sure you want to delete this note?{" "}
            </h2>
          </div>
          <div className={`field is-grouped is-justify-content-flex-end`}>
            <p className="control">
              <button
                onClick={() => {
                  deleteNote(id);
                  setIsOpen((prev) => !prev);
                }}
                className="is-success button"
              >
                Yes
              </button>
            </p>

            <p className="control">
              <button onClick={() => setIsOpen((prev) => !prev)}>No</button>
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default DeleteNoteButton;
