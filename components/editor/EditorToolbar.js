import React, { useState, useContext } from "react";
import { PostsContext } from "@/context/PostsProvider";
import BackButton from "../inputs/buttons/BackButton";
import DeleteNoteButton from "../inputs/buttons/DeleteNoteButton";
import EditNoteButton from "../inputs/buttons/EditNoteButton";
import HelpButtonAndModal from "../inputs/buttons/HelpButtonAndModal";
import Button from "../inputs/buttons/Button";
import Modal from "../modal/Modal";
import Collaborators from "../user/Collaborators";

const EditorMode = ({ isMarkdownMode }) => {
  const active = "bg-zinc-900 text-zinc-100";

  return (
    <div className="flex flex-row bg-white dark:bg-zinc-800">
          <p>Mode</p>
          <Button>
            <ion-icon name="logo-markdown"></ion-icon>
          </Button>
          <Button>
            <ion-icon name="logo-html5"></ion-icon>
          </Button>
        </div>
  )
};

const Publishing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="bg-transparent text-lg" onClick={handleOpen}>
        <ion-icon name="share"></ion-icon>
      </button>
      <Modal>
        <header className={`modal-card-head`}>
          <p className={`modal-card-title`}>Publishing</p>
          <button onClick={handleOpen} className="delete" aria-label="close" />
        </header>
        <div className={`content-wrapper`}></div>
      </Modal>
    </>
  );
};

const EditorOptions = ({ open, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);
  return (
    <>
      <button className="bg-transparent" onClick={handleOpen}>
        <ion-icon name="ellipsis-vertical-outline"></ion-icon>
      </button>
      <div className={`${isOpen ? `block` : `hidden`}`}>
        <p className="control ml-5">
          <HelpButtonAndModal />
        </p>
        <p className="control ml-5">
          <EditNoteButton />
        </p>
        <p className="control ml-5">
          <DeleteNoteButton />
        </p>
      </div>
    </>
  );
};

export default function EditorToolbar() {
  return (
    <div id="toolbar" className="bg-white dark:bg-zinc-900 w-full mx-auto flex flex-row justify-center">
      <div className="w-6/12 flex flex-row">
        <div id="back-btn" className="w-4/12 is-justify-content-flex-start">
          <BackButton />
        </div>
        <div id="document-title" className="w-8/12 text-center">
          <h1 className="text-2xl text-semibold">Hello World</h1>
        </div>
      </div>
      <div className="w-6/12 flex flex-row justify-end">
        <div className="4/12">
          <Collaborators />
        </div>
        <div className="4/12">
          <Publishing />
          <EditorOptions />
        </div>
        <div className="4/12">
          <EditorMode />
        </div>
      </div>
    </div>
  );
}
