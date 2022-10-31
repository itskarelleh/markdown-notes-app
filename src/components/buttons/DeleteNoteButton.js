import React, { useState, useContext } from "react";
import { Heading } from "react-bulma-components";
import { NotesContext } from "../../context/NotesProvider";
import { dark, light, ThemeContext } from "../../context/ThemeProvider";
import Modal from "../custom-bulma/Modal";

const DeleteNoteButton = ({ id }) => {
  const { deleteNote } = useContext(NotesContext);
  const [isOpen, setIsOpen] = useState(false);
  const { toggle } = useContext(ThemeContext);

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
          className={`box ${
            !toggle ? light.panel.className : dark.panel.className
          }`}
        >
          <button
            className="delete"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="close"
          ></button>
          <div className="block">
            <Heading
              textColor="danger"
              className={!toggle ? light.text.className : dark.text.className}
              renderAs="h3"
            >
              Deleting
            </Heading>
            <Heading
              className={!toggle ? light.text.className : dark.text.className}
              renderAs="h4"
            >
              Are you sure you want to delete this note?{" "}
            </Heading>
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
              <button className="button" onClick={() => setIsOpen((prev) => !prev)}>No</button>
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default DeleteNoteButton;
