import React, { useContext, useState } from "react";
import Modal from "../../modal/Modal";
import { MarkdownHelperModal } from "../../markdown-guide";

export default function HelpButtonAndModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={handleOpen}
        title={"Help"}
        className="is-rounded is-info is-small button"
      >
        <ion-icon name="help-outline"></ion-icon>
      </button>
      <Modal width={"75%"} open={isOpen} onClose={handleOpen}>
        <header
          className={`modal-card-head`}>
          <p
            className={`modal-card-title`}
          >
            Help
          </p>
          <button onClick={handleOpen} className="delete" aria-label="close" />
        </header>
        <div
          className={`content-wrapper`}>
          <MarkdownHelperModal />
        </div>
      </Modal>
    </>
  );
}
